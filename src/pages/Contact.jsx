import { useState } from "react";
import toast from "react-hot-toast";
import API from "../services/api";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await API.post(
        "/contact",
        formData
      );

      if (data.success) {
        toast.success("Message Sent Successfully");

        setFormData({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Failed to Send Message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-(--surface-soft) min-h-screen">

      {/* Hero Section */}

      <section className="bg-(--primary) text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            संपर्क करें
          </h1>

          <p className="text-lg max-w-3xl mx-auto">
            गौ सेवा, दान, स्वयंसेवा या किसी भी जानकारी के लिए
            हमसे संपर्क करें।
          </p>

        </div>
      </section>

      {/* Contact Cards */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="surface-card p-8 rounded-3xl text-center">
              <FaPhoneAlt className="mx-auto text-4xl text-(--primary) mb-4" />

              <h3 className="text-xl font-bold mb-3">
                फोन नंबर
              </h3>

              <p className="text-(--muted)">
                +91 9589807047
              </p>
            </div>

            <div className="surface-card p-8 rounded-3xl text-center">
              <FaEnvelope className="mx-auto text-4xl text-(--primary) mb-4" />

              <h3 className="text-xl font-bold mb-3">
                ईमेल
              </h3>

              <p className="text-(--muted) break-all">
                gaushalatendukheda@gmail.com
              </p>
            </div>

            <div className="surface-card p-8 rounded-3xl text-center">
              <FaMapMarkerAlt className="mx-auto text-4xl text-(--primary) mb-4" />

              <h3 className="text-xl font-bold mb-3">
                पता
              </h3>

              <p className="text-(--muted)">
                आचार्य श्री विद्यासागर दयोदय गौशाला,
                तेंदूखेड़ा, मध्यप्रदेश
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Chairman Section */}

      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">

          <div className="surface-card rounded-3xl p-10 text-center">

            <h2 className="text-3xl font-bold text-(--primary) mb-4">
              अध्यक्ष से संपर्क करें
            </h2>

            <h3 className="text-2xl font-semibold mb-2">
              संजय कुमार जैन पारस्मणी
            </h3>

            <p className="text-(--muted) mb-8">
              अध्यक्ष, आचार्य श्री विद्यासागर दयोदय गौशाला
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <a
                href="tel:9589807047"
                className="bg-[#1B5E20] text-white px-6 py-3 rounded-xl flex items-center gap-2"
              >
                <FaPhoneAlt />
                Call Now
              </a>

              <a
                href="https://wa.me/919589807047"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-xl flex items-center gap-2"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* Contact Form */}

      <div className="surface-card rounded-[30px] p-8 md:p-12">

        <h2 className="text-4xl font-bold text-center text-(--primary) mb-3">
          हमें संदेश भेजें
        </h2>

        <p className="text-center text-(--muted) mb-10">
          आपके सुझाव, प्रश्न एवं सहयोग हमारे लिए महत्वपूर्ण हैं।
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block mb-2 font-semibold text-(--muted)">
                आपका नाम
              </label>

              <input
                type="text"
                name="name"
                placeholder="पूरा नाम दर्ज करें"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-(--surface) border-2 border-(--border) rounded-2xl focus:border-(--primary) focus:outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-(--muted)">
                ईमेल
              </label>

              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-(--surface) border-2 border-(--border) rounded-2xl focus:border-(--primary) focus:outline-none transition-all"
                required
              />
            </div>

          </div>

          <div>
            <label className="block mb-2 font-semibold text-(--muted)">
              मोबाइल नंबर
            </label>

            <input
              type="tel"
              name="mobile"
              placeholder="मोबाइल नंबर दर्ज करें"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-(--surface) border-2 border-(--border) rounded-2xl focus:border-(--primary) focus:outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-(--muted)">
              आपका संदेश
            </label>

            <textarea
              rows="6"
              name="message"
              placeholder="अपना संदेश यहाँ लिखें..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-(--surface) border-2 border-(--border) rounded-2xl resize-none focus:border-(--primary) focus:outline-none transition-all"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#1B5E20] hover:bg-[#14481a] text-white font-semibold px-12 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {loading
                ? "संदेश भेजा जा रहा है..."
                : "संदेश भेजें"}
            </button>
          </div>

        </form>

      </div>

    </div>
  );
};

export default Contact;