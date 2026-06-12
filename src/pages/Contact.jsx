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

      <section className="pb-24 pt-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    <div className="text-center mb-16">
      <span className="bg-gradient-to-r from-[#FF9933] to-[#D4AF37] text-white px-6 py-2 rounded-full text-sm font-semibold">
        गौशाला नेतृत्व
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mt-5">
        प्रबंधन समिति
      </h2>

      <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
        गौशाला के संचालन, संरक्षण एवं विकास में महत्वपूर्ण योगदान देने वाले
        सम्माननीय सदस्यों का परिचय।
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* President */}

      <div className="bg-white rounded-[32px] p-8 shadow-xl border border-green-100 hover:-translate-y-3 transition duration-300">

        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] flex items-center justify-center text-white text-3xl mb-6">
          👤
        </div>

        <div className="text-center">

          <span className="bg-[#1B5E20] text-white px-4 py-2 rounded-full text-sm">
            अध्यक्ष
          </span>

          <h3 className="text-2xl font-bold mt-5 text-[#1B5E20]">
            श्री संजय जैन
          </h3>

          <p className="text-gray-500 mt-1">
            (पारसमणि)
          </p>

          <div className="mt-5 bg-green-50 rounded-2xl p-3">
            <p className="font-medium">
              📞 मो.: 9589807047
            </p>
          </div>

        </div>

      </div>

      {/* Patron */}

      <div className="bg-white rounded-[32px] p-8 shadow-xl border border-orange-100 hover:-translate-y-3 transition duration-300">

        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-[#FF9933] to-[#D4AF37] flex items-center justify-center text-white text-3xl mb-6">
          🌹
        </div>

        <div className="text-center">

          <span className="bg-[#FF9933] text-white px-4 py-2 rounded-full text-sm">
            संरक्षक
          </span>

          <h3 className="text-2xl font-bold mt-5 text-[#6D4C41]">
            श्री अरविंद मोदी
          </h3>

          <p className="text-gray-500 mt-3">
            गौशाला के मार्गदर्शक एवं सहयोगी
          </p>

        </div>

      </div>

      {/* Special Patrons */}

      <div className="bg-white rounded-[32px] p-8 shadow-xl border border-yellow-100 hover:-translate-y-3 transition duration-300">

        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFD54F] flex items-center justify-center text-white text-3xl mb-6">
          ⭐
        </div>

        <div className="text-center">

          <span className="bg-[#D4AF37] text-white px-4 py-2 rounded-full text-sm">
            विशेष संरक्षक
          </span>

          <div className="mt-5 space-y-4">

            <div className="bg-yellow-50 p-4 rounded-2xl">
              <p className="font-semibold">
                श्री नरेश भाई संगवी
              </p> 
              <p className="text-sm text-gray-500">
                मुंबई
              </p> 
              <div className="mt-5 bg-green-50 rounded-2xl p-3">
            <p className="font-medium">
              📞 मो.: 9589807047
            </p>
          </div>
            </div> 
            

            <div className="bg-yellow-50 p-4 rounded-2xl">
              <p className="font-semibold">
                श्री नीरज जैन
              </p>

              <p className="text-sm text-gray-500">
                चेयरमैन एवं एम.डी., जिनवाणी चैनल
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  </div>

<section className="py-16">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-[#1B5E20]">
        समिति एवं संपर्क जानकारी
      </h2>

      <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
        गौशाला का संचालन समर्पित गौभक्तों एवं समाजसेवियों के सहयोग से किया जाता है।
        वर्तमान में गौशाला परिवार में 92 सक्रिय सदस्य जुड़े हुए हैं।
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8">

      {/* Management Committee */}

      <div className="bg-white rounded-[28px] p-8 shadow-lg border border-green-100">

        <h3 className="text-2xl font-bold text-[#1B5E20] mb-6">
          प्रबंधन समिति
        </h3>

        <div className="space-y-5">

          <div className="flex justify-between border-b pb-3">
            <span className="font-semibold">अध्यक्ष</span>
            <span>श्री संजय कुमार जैन</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span className="font-semibold">उपाध्यक्ष</span>
            <span>श्री संदीप मोदी</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span className="font-semibold">कोषाध्यक्ष</span>
            <span>श्री कुलदीप मोदी</span>
          </div>

          <div className="pt-2">
            <p className="font-semibold text-[#FF9933] mb-2">
              विशेष संरक्षक
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>• श्री अरविंद मोदी</li>
              <li>• श्री नरेश भाई संगवी, मुंबई</li>
            </ul>
          </div>

        </div>

      </div>

      {/* Construction Committee */}

      <div className="bg-white rounded-[28px] p-8 shadow-lg border border-orange-100">

        <h3 className="text-2xl font-bold text-[#FF9933] mb-6">
          निर्माण समिति
        </h3>

        <p className="text-gray-700 leading-relaxed">
          गौशाला के विकास एवं निर्माण कार्यों के संचालन हेतु
          5 सदस्यीय निर्माण समिति का गठन किया गया है।
        </p>

        <div className="mt-5 bg-orange-50 rounded-2xl p-4">
          समिति के अन्य सदस्यों की जानकारी
          शीघ्र ही यहां उपलब्ध कराई जाएगी।
        </div>

      </div>

    </div>

    {/* Gaushala Committee */}

    <div className="mt-8 bg-white rounded-[28px] p-8 shadow-lg border border-green-100">

      <h3 className="text-2xl font-bold text-[#1B5E20] mb-5">
        गौशाला समिति
      </h3>

      <p className="text-gray-700 leading-relaxed">
        गौशाला के नियमित संचालन, गौमाताओं की देखभाल,
        प्रशासनिक कार्यों एवं सेवा गतिविधियों के सुचारु संचालन हेतु
        एक समर्पित समिति कार्यरत है।
      </p>

      <div className="mt-5 bg-green-50 rounded-2xl p-4">
        समिति के अन्य सदस्यों की जानकारी
        शीघ्र ही यहां उपलब्ध कराई जाएगी।
      </div>

    </div>

    {/* Cooperation */}

    <div className="mt-8 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] rounded-[28px] p-8 text-center text-white">

      <h3 className="text-2xl font-bold mb-4">
        सहयोग एवं संपर्क
      </h3>

      <p className="max-w-4xl mx-auto leading-relaxed">
        गौसेवा, दान, सदस्यता, उत्पाद क्रय अथवा अन्य किसी जानकारी
        के लिए गौशाला प्रबंधन समिति से संपर्क किया जा सकता है।
      </p>

      <p className="text-xl font-semibold mt-6">
        "गौसेवा ही परम सेवा है" 🙏🐄
      </p>

    </div>

  </div>
</section>

</section>
      {/* Contact Form */}

  <div className="surface-card max-w-4xl mx-auto rounded-[28px] border border-green-100 shadow-xl p-6 md:p-8">

  <div className="text-center mb-6">
    <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20]">
      हमें संदेश भेजें
    </h2>

    <p className="text-gray-500 mt-2 text-sm md:text-base">
      सुझाव, प्रश्न या सहयोग हेतु हमसे संपर्क करें
    </p>
  </div>

  <form
    onSubmit={handleSubmit}
    className="space-y-5"
  >

    <div className="grid md:grid-cols-2 gap-4">

      <input
        type="text"
        name="name"
        placeholder="आपका नाम"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-gray-50 focus:border-[#1B5E20] focus:ring-2 focus:ring-green-100 outline-none transition"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="ईमेल पता"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-gray-50 focus:border-[#1B5E20] focus:ring-2 focus:ring-green-100 outline-none transition"
        required
      />

    </div>

    <input
      type="tel"
      name="mobile"
      placeholder="मोबाइल नंबर"
      value={formData.mobile}
      onChange={handleChange}
      className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-gray-50 focus:border-[#1B5E20] focus:ring-2 focus:ring-green-100 outline-none transition"
      required
    />

    <textarea
      rows="4"
      name="message"
      placeholder="अपना संदेश लिखें..."
      value={formData.message}
      onChange={handleChange}
      className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-gray-50 resize-none focus:border-[#1B5E20] focus:ring-2 focus:ring-green-100 outline-none transition"
      required
    />

    <div className="flex justify-center pt-2">

      <button
        type="submit"
        disabled={loading}
        className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white px-10 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all"
      >
        {loading
          ? "भेजा जा रहा है..."
          : "📩 संदेश भेजें"}
      </button>

    </div>

  </form>

</div>

    </div>
  );
};

export default Contact;