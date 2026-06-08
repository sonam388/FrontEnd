import { useState } from "react";
import API from "../../services/api";
import toast from "react-hot-toast";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactSection = () => {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);

      const { data } = await API.post(
        "/contact",
        formData
      );
      toast.success(data.message || "Message Sent Successfully");

      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });

    } catch (error) {

      console.log(error);

      toast.error(
        error?.response?.data?.message ||
        "Something went wrong"
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <section className="py-24 bg-gradient-to-b from-(--surface-soft) to-(--surface)">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-(--primary)">
            संपर्क करें
          </h2>

          <p className="mt-5 text-lg text-(--muted) max-w-2xl mx-auto leading-8">
            यदि आप गौ सेवा, दान या किसी अन्य जानकारी हेतु
            हमसे जुड़ना चाहते हैं, तो नीचे दिए गए माध्यमों से
            संपर्क करें।
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left Side */}
          <div className="space-y-8">

            {/* Address */}
            <div className="surface-card p-7 rounded-3xl flex items-start gap-5 hover:-translate-y-2 transition duration-300">

              <div className="bg-[#1B5E20] text-white p-4 rounded-2xl text-2xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-(--primary)">
                  हमारा पता
                </h3>

                <p className="mt-2 text-(--muted) leading-7">
                  आचार्य श्री विद्यासागर दयोदय गौशाला,
                  तेंदूखेड़ा, मध्यप्रदेश, भारत
                </p>
              </div>

            </div>

            {/* Phone */}
            <div className="surface-card p-7 rounded-3xl flex items-start gap-5 hover:-translate-y-2 transition duration-300">

              <div className="bg-[#FF9933] text-white p-4 rounded-2xl text-2xl">
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-(--primary)">
                  मोबाइल नंबर
                </h3>

                <p className="mt-2 text-(--muted)">
                  +91-9589807047
                </p>
              </div>

            </div>

            {/* Email */}
            <div className="surface-card p-7 rounded-3xl flex items-start gap-5 hover:-translate-y-2 transition duration-300">

              <div className="bg-[#6D4C41] text-white p-4 rounded-2xl text-2xl">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-(--primary)">
                  ईमेल पता
                </h3>

                <p className="mt-2 text-(--muted)">
                  gaushalatendukheda@gmail.com
                </p>
              </div>

            </div>

          </div>

          {/* Right Side Form */}
          <div className="surface-card bg-(--surface)/80 backdrop-blur-md p-7 md:p-8 rounded-3xl max-w-lg mx-auto w-full">

            <h3 className="text-3xl font-bold text-(--primary) mb-8">
              संदेश भेजें
            </h3>

            <form
              className="space-y-6"
              onSubmit={handleSubmit}
            >

              {/* Name */}
              <div>

                <label className="block mb-2 text-(--muted) font-medium">
                  आपका नाम
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="नाम दर्ज करें"
                  required
                  className="w-full p-4 rounded-2xl border border-(--border) bg-(--surface) outline-none focus:border-(--primary)"
                />
              </div>
              {/* Mobile */}
              <div>
                <label className="block mb-2 text-(--muted) font-medium">
                  मोबाइल नंबर
                </label>

                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="मोबाइल नंबर"
                  required
                  className="w-full p-4 rounded-2xl border border-(--border) bg-(--surface) outline-none focus:border-(--primary)"
                />

              </div>

              {/* Email */}
              <div>

                <label className="block mb-2 text-(--muted) font-medium">
                  ईमेल पता
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ईमेल दर्ज करें"
                  required
                  className="w-full p-4 rounded-2xl border border-(--border) bg-(--surface) outline-none focus:border-(--primary)"
                />

              </div>

              {/* Message */}
              <div>

                <label className="block mb-2 text-(--muted) font-medium">
                  संदेश
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="अपना संदेश लिखें"
                  required
                  className="w-full p-4 rounded-2xl border border-(--border) bg-(--surface) outline-none focus:border-(--primary)"
                />

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-2xl text-lg font-semibold transition duration-300 shadow-lg text-white ${loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-(--accent) hover:opacity-90"
                  }`}
              >
                {
                  loading
                    ? "Sending..."
                    : "संदेश भेजें"
                }
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};
export default ContactSection;