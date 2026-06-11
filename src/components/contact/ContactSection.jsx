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
  <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-(--surface-soft) via-white to-(--surface)">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Heading */}
      <div className="text-center mb-14 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-(--primary)">
          संपर्क करें
        </h2>

        <p className="mt-5 text-base sm:text-lg text-(--muted) max-w-2xl mx-auto leading-8">
          यदि आप गौ सेवा, दान या किसी अन्य जानकारी हेतु
          हमसे जुड़ना चाहते हैं, तो नीचे दिए गए माध्यमों से
          संपर्क करें।
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        
        {/* Left Side */}
        <div className="space-y-6">

          {/* Address */}
          <div className="bg-white shadow-lg border border-gray-100 p-6 sm:p-7 rounded-3xl flex items-start gap-5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="bg-[#1B5E20] text-white p-4 rounded-2xl text-2xl shrink-0">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-(--primary)">
                हमारा पता
              </h3>

              <p className="mt-2 text-(--muted) leading-7">
                आचार्य श्री विद्यासागर दयोदय गौशाला,
                तेंदूखेड़ा, मध्यप्रदेश, भारत
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white shadow-lg border border-gray-100 p-6 sm:p-7 rounded-3xl flex items-start gap-5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="bg-[#FF9933] text-white p-4 rounded-2xl text-2xl shrink-0">
              <FaPhoneAlt />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-(--primary)">
                मोबाइल नंबर
              </h3>

              <a
                href="tel:+919589807047"
                className="mt-2 block text-(--muted) hover:text-green-700 transition"
              >
                +91 9589807047
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white shadow-lg border border-gray-100 p-6 sm:p-7 rounded-3xl flex items-start gap-5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="bg-[#6D4C41] text-white p-4 rounded-2xl text-2xl shrink-0">
              <FaEnvelope />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-(--primary)">
                ईमेल पता
              </h3>

              <a
                href="mailto:gaushalatendukheda@gmail.com"
                className="mt-2 block text-(--muted) hover:text-green-700 transition break-all"
              >
                gaushalatendukheda@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full">
          <div className="bg-white/90 backdrop-blur-xl shadow-2xl border border-gray-100 rounded-[32px] p-6 sm:p-8 md:p-10">

            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-(--primary)">
                संदेश भेजें
              </h3>

              <p className="mt-2 text-sm sm:text-base text-(--muted)">
                आपके सुझाव, प्रश्न अथवा गौ सेवा संबंधी जानकारी हेतु हमें संदेश भेजें।
              </p>
            </div>

            <form
              className="space-y-5"
              onSubmit={handleSubmit}
            >
              {/* Name */}
              <div>
                <label className="block mb-2 font-medium text-(--muted)">
                  आपका नाम
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="अपना पूरा नाम दर्ज करें"
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white outline-none transition-all duration-300 focus:border-green-600 focus:ring-4 focus:ring-green-100"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block mb-2 font-medium text-(--muted)">
                  मोबाइल नंबर
                </label>

                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white outline-none transition-all duration-300 focus:border-green-600 focus:ring-4 focus:ring-green-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium text-(--muted)">
                  ईमेल पता
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white outline-none transition-all duration-300 focus:border-green-600 focus:ring-4 focus:ring-green-100"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-medium text-(--muted)">
                  संदेश
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="अपना संदेश यहाँ लिखें..."
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white resize-none outline-none transition-all duration-300 focus:border-green-600 focus:ring-4 focus:ring-green-100"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-2xl text-lg font-semibold text-white shadow-lg transition-all duration-300 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-700 via-green-600 to-green-500 hover:scale-[1.02] hover:shadow-2xl"
                }`}
              >
                {loading ? "Sending..." : "संदेश भेजें"}
              </button>
            </form>

          </div>
        </div>

      </div>
    </div>
  </section>
);
};
export default ContactSection;