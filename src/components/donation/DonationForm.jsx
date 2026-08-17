import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import {
  FaDonate,
  FaLock,
  FaShieldAlt,
  FaHandHoldingHeart,
  FaHeart,
} from "react-icons/fa";

import DonationQR from "./DonationQR";
import API from "../../services/api";

const DonationForm = ({ amount }) => {
  const [loading, setLoading] = useState(false);

  const [qrData, setQrData] = useState(null);

  const [formData, setFormData] = useState({
    donorName: "",
    email: "",
    mobile: "",
    message: "", 
    Amount: amount || 0,
  });

  /* ---------------------------
     Change Handler
  ---------------------------- */

  const changeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /* ---------------------------
     Validation
  ---------------------------- */

  const validateForm = () => {
    if (!formData.donorName.trim()) {
      toast.error("Please enter your full name.");
      return false;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email.");
      return false;
    }

    const mobileRegex = /^[6-9]\d{9}$/;

    if (!mobileRegex.test(formData.mobile)) {
      toast.error("Please enter a valid mobile number.");
      return false;
    }

    if (!formData.Amount || Number(formData.Amount) <= 0) {
      toast.error("Please select donation amount.");
      return false;
    }

    return true;
  };

  /* ---------------------------
     Generate QR
  ---------------------------- */

  const submitHandler = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  try {
    setLoading(true);

    const { data } = await API.post(
      "/payment/generate-qr",
      {
        donorName: formData.donorName,
        email: formData.email,
        mobile: formData.mobile,
        amount,
        message: formData.message,
      }
    );

    console.log("Backend Response:", data);

    if (data.success) {
      setQrData({
        upiQR: data.upiQR,
        expiry: data.expiry,
        merchantRefNo: data.merchantRefNo,
      });

      toast.success("Secure QR Generated Successfully");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    } else {

      toast.error(
        data.message || "Unable to generate QR."
      );

    }

  } catch (error) {

    console.error(error);

    toast.error(
      error.response?.data?.message ||
      "Something went wrong."
    );

  } finally {

    setLoading(false);

  }
};
  /* ---------------------------
     QR Screen
  ---------------------------- */

  if (qrData) {
    return (
      <DonationQR
        upiQR={qrData.upiQR}
        amount={amount}
        expiry={qrData.expiry}
        merchantRefNo={qrData.merchantRefNo}
      />
    );
  }

  return (

<section className="py-20 bg-gradient-to-b from-[#FFFDF7] via-white to-[#FFF8E7]">

  <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">

    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
      className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg"
    >

      {/* ================= HEADER ================= */}

      <div className="border-b border-green-100 bg-green-50 px-6 py-8 text-center sm:px-10">

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <FaDonate className="text-2xl text-[#1B5E20]" />
        </div>

        <h2 className="mt-5 text-2xl font-bold text-gray-900 sm:text-3xl">
          Support Gau Seva
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
          Your contribution helps provide food, shelter, medical care,
          and compassionate care to rescued cows.
        </p>

      </div>


      {/* ================= TRUST INDICATORS ================= */}

      <div className="grid grid-cols-3 border-b border-gray-200">

        {/* Secure */}
        <div className="flex items-center justify-center gap-2 px-3 py-4">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50">
            <FaShieldAlt className="text-sm text-[#1B5E20]" />
          </div>

          <span className="text-xs font-medium text-gray-700 sm:text-sm">
            Secure
          </span>

        </div>


        {/* Trusted */}
        <div className="flex items-center justify-center gap-2 border-x border-gray-200 px-3 py-4">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50">
            <FaHeart className="text-sm text-red-500" />
          </div>

          <span className="text-xs font-medium text-gray-700 sm:text-sm">
            Trusted
          </span>

        </div>


        {/* NGO */}
        <div className="flex items-center justify-center gap-2 px-3 py-4">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50">
            <FaHandHoldingHeart className="text-sm text-orange-500" />
          </div>

          <span className="text-xs font-medium text-gray-700 sm:text-sm">
            NGO
          </span>

        </div>

      </div>


      {/* ================= FORM ================= */}

      <form
        onSubmit={submitHandler}
        className="grid grid-cols-1 gap-5 px-6 py-8 sm:px-8 md:grid-cols-2"
      >

        {/* ================= FULL NAME ================= */}

        <div className="space-y-2">

          <label
            htmlFor="donorName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name <span className="text-red-500">*</span>
          </label>

          <input
            id="donorName"
            type="text"
            name="donorName"
            value={formData.donorName}
            onChange={changeHandler}
            placeholder="Enter your full name"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-[#1B5E20] focus:ring-2 focus:ring-green-100"
          />

        </div>


        {/* ================= EMAIL ================= */}

        <div className="space-y-2">

          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address <span className="text-red-500">*</span>
          </label>

          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="example@gmail.com"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-[#1B5E20] focus:ring-2 focus:ring-green-100"
          />

        </div>


        {/* ================= AMOUNT ================= */}

        <div className="space-y-2">

          <label
            htmlFor="Amount"
            className="block text-sm font-medium text-gray-700"
          >
            Donation Amount <span className="text-red-500">*</span>
          </label>

          <div className="relative">

            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-500">
              ₹
            </span>

            <input
              id="Amount"
              type="number"
              name="Amount"
              value={formData.Amount}
              onChange={changeHandler}
              placeholder="Enter donation amount"
              min="1"
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-[#1B5E20] focus:ring-2 focus:ring-green-100"
            />

          </div>

        </div>


        {/* ================= MOBILE ================= */}

        <div className="space-y-2">

          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile Number <span className="text-red-500">*</span>
          </label>

          <input
            id="mobile"
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={changeHandler}
            placeholder="Enter 10-digit mobile number"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-[#1B5E20] focus:ring-2 focus:ring-green-100"
          />

        </div>


        {/* ================= MESSAGE ================= */}

        <div className="space-y-2 md:col-span-2">

          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Blessing / Message

            <span className="ml-2 text-xs font-normal text-gray-400">
              (Optional)
            </span>
          </label>

          <textarea
            id="message"
            rows={3}
            name="message"
            value={formData.message}
            onChange={changeHandler}
            placeholder="Write a blessing or message..."
            className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-[#1B5E20] focus:ring-2 focus:ring-green-100"
          />

        </div>


        {/* ================= DONATION SUMMARY ================= */}

        <div className="rounded-xl border border-green-200 bg-green-50 p-5 md:col-span-2">

          <div className="flex items-center justify-between gap-4">

            <div>

              <h3 className="text-sm font-semibold text-[#1B5E20]">
                Donation Summary
              </h3>

              <p className="mt-1 text-xs text-gray-600">
                Thank you for supporting Gau Seva.
              </p>

            </div>

            <div className="text-right">

              <p className="text-xs text-gray-500">
                Amount
              </p>

              <p className="mt-1 text-2xl font-bold text-[#1B5E20]">
                ₹{formData.Amount || "0"}
              </p>

            </div>

          </div>

        </div>


        {/* ================= SECURITY ================= */}

        <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 md:col-span-2">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-100">

            <FaLock className="text-sm text-green-700" />

          </div>

          <div>

            <h4 className="text-sm font-semibold text-gray-800">
              Secure Donation
            </h4>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              Your payment is securely processed through the ICICI Bank
              Payment Gateway. Your payment information is not stored
              on our servers.
            </p>

          </div>

        </div>


        {/* ================= SUBMIT BUTTON ================= */}

        <motion.button
          whileHover={{
            scale: 1.01,
          }}
          whileTap={{
            scale: 0.98,
          }}
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-[#1B5E20] py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#154A19] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2"
        >

          {loading ? (

            <div className="flex items-center justify-center gap-3">

              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />

              <span>
                Generating Secure QR...
              </span>

            </div>

          ) : (

            <span>
              Generate Secure QR for ₹{formData.Amount || "0"}
            </span>

          )}

        </motion.button>


        {/* ================= FOOTER ================= */}

        <div className="border-t border-gray-100 pt-4 text-center md:col-span-2">

          <p className="text-xs leading-5 text-gray-500">

            Your donation directly supports the rescue, care,
            and welfare of cows at{" "}

            <span className="font-medium text-[#1B5E20]">
              Dayoday Gaushala.
            </span>

          </p>

        </div>

      </form>

    </motion.div>

  </div>

</section>


  );
};

export default DonationForm;