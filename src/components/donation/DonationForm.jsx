import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import API from "../../services/api";

const loadRazorpayScript = () =>
  new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

const initialForm = {
  donorName: "",
  email: "",
  mobile: "",
  amount: "1100",
  message: "",
};

const DonationForm = ({ selectedAmount }) => {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormData((current) => ({
      ...current,
      amount: String(selectedAmount || current.amount),
    }));
  }, [selectedAmount]);

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handlePayment = async (event) => {
    event.preventDefault();

    const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;

    if (!razorpayKey) {
      toast.error("Razorpay key is not configured");
      return;
    }

    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded) {
      toast.error("Razorpay checkout failed to load");
      return;
    }

    try {
      setLoading(true);

      const amountValue = Number(formData.amount);

      const { data: orderData } = await API.post("/payment/create-order", {
        amount: amountValue,
      });

      const options = {
        key: razorpayKey,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Gaushala Donation",
        description: "Donation for Gaushala",
        order_id: orderData.id,
        prefill: {
          name: formData.donorName,
          email: formData.email,
          contact: formData.mobile,
        },
        theme: {
          color: "#1B5E20",
        },
        handler: async (response) => {
          try {
            const { data } = await API.post("/payment/verify", {
              donorName: formData.donorName,
              email: formData.email,
              mobile: formData.mobile,
              amount: amountValue,
              message: formData.message,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            toast.success(data.message || "Donation completed successfully");
            setFormData(initialForm);
          } catch (error) {
            toast.error(
              error.response?.data?.message ||
                "Payment was captured but donation verification failed"
            );
          }
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to start payment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="surface-card rounded-4xl p-6 sm:p-10">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-(--muted)">
            Secure donation
          </p>
          <h2 className="mt-3 text-3xl font-bold text-(--primary) sm:text-4xl">
            दान करें और तुरंत रसीद पाएँ
          </h2>
          <p className="mt-3 text-(--muted)">
            Payment completion के बाद donor email पर confirmation भेजा जाएगा।
          </p>
        </div>

        <form onSubmit={handlePayment} className="grid gap-5 md:grid-cols-2">
          <input
            type="text"
            name="donorName"
            placeholder="Donor Name"
            value={formData.donorName}
            onChange={handleChange}
            className="rounded-2xl border border-(--border) bg-(--surface) px-4 py-3 outline-none transition focus:border-(--primary)"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="rounded-2xl border border-(--border) bg-(--surface) px-4 py-3 outline-none transition focus:border-(--primary)"
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="rounded-2xl border border-(--border) bg-(--surface) px-4 py-3 outline-none transition focus:border-(--primary)"
          />
          <input
            type="number"
            min="1"
            name="amount"
            placeholder="Donation Amount"
            value={formData.amount}
            onChange={handleChange}
            className="rounded-2xl border border-(--border) bg-(--surface) px-4 py-3 outline-none transition focus:border-(--primary)"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="md:col-span-2 rounded-2xl border border-(--border) bg-(--surface) px-4 py-3 outline-none transition focus:border-(--primary)"
          />

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 rounded-2xl bg-(--accent) px-6 py-4 text-lg font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Starting Payment..." : `Donate ₹${formData.amount}`}
          </button>
        </form>
      </div>
    </section>
  );
};

export default DonationForm;