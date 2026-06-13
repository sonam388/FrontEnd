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


  const managementCommittee = [
  {
    name: "श्री संजय कुमार जैन पारसमणी",
    post: "अध्यक्ष",
  },
  {
    name: "श्री विवेक कुमार चौधरी",
    post: "उपाध्यक्ष",
  },
  {
    name: "श्री संदीप मोदी",
    post: "उपाध्यक्ष",
  },
  {
    name: "श्री अमरचंद जैन",
    post: "महामंत्री",
  },
  {
    name: "श्री कुलदीप मोदी",
    post: "कोषाध्यक्ष",
  },
  {
    name: "श्री सतेंद्र जैन (शिक्षक)",
    post: "सचिव",
  },
  {
    name: "श्री विनोद जैन (रियाना)",
    post: "मंत्री",
  },
  {
    name: "श्री विकास पांडे",
    post: "प्रचार मंत्री",
  },
  {
    name: "श्री प्रकाश जैन (दगोह)",
    post: "विधि सलाहकार",
  },
  {
    name: "श्रीमती ज्योति जैन (ल्ली)",
    post: "सह मंत्री",
  },
  {
    name: "श्री रविन्द्र सिंधई",
    post: "सह सचिव",
  },
  {
    name: "श्री राजकुमार जैन",
    post: "सह प्रचार मंत्री",
  },
  {
    name: "श्री राहुल जैन (प्रभु छाया)",
    post: "सह कोषाध्यक्ष",
  },
  {
    name: "श्रीमती स्वाति सिंधई",
    post: "विशिष्ट सदस्य",
  },
  {
    name: "श्रीमती ज्योति नायक",
    post: "विशिष्ट सदस्य",
  },
  {
    name: "श्री शरद गोयल",
    post: "विशिष्ट सदस्य",
  },
];
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
            <div className="mt-5 bg-green-50 rounded-2xl p-3">
            <p className="font-medium">
              📞 मो.: 9870849573
            </p>
          </div>

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
            संरक्षक
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
                 <div className="mt-5 bg-green-50 rounded-2xl p-3">
           
          </div>
              
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

    <section className="py-20 bg-gradient-to-b from-[#F8FFF4] via-[#FFFDF8] to-[#FFF8E7]">

  <div className="w-full px-4 md:px-8 lg:px-12">

    <div className="relative overflow-hidden rounded-[40px] bg-white border border-green-100 shadow-[0_25px_80px_rgba(0,0,0,0.08)] p-6 md:p-10 lg:p-14">

      {/* Background Decorations */}

      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10">

        {/* Header */}

        <div className="text-center mb-14">

          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white text-4xl shadow-xl mb-5">
            👥
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-3">
            प्रबंधन समिति
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            गौशाला के सफल संचालन, गौसंरक्षण, सेवा कार्यों एवं
            विकास गतिविधियों के लिए समर्पित अनुभवी प्रबंधन टीम।
          </p>

        </div>

        {/* Stats Section */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">

          <div className="bg-[#F8FFF4] border border-green-100 rounded-3xl p-6 text-center shadow-sm">

            <h3 className="text-3xl font-bold text-[#1B5E20]">
              3200+
            </h3>

            <p className="text-gray-600 mt-2">
              संरक्षित गौवंश
            </p>

          </div>

          <div className="bg-[#FFF7ED] border border-orange-100 rounded-3xl p-6 text-center shadow-sm">

            <h3 className="text-3xl font-bold text-[#FF9933]">
              92+
            </h3>

            <p className="text-gray-600 mt-2">
              सक्रिय सदस्य
            </p>

          </div>

          <div className="bg-[#F8FFF4] border border-green-100 rounded-3xl p-6 text-center shadow-sm">

            <h3 className="text-3xl font-bold text-[#1B5E20]">
              14+
            </h3>

            <p className="text-gray-600 mt-2">
              समिति पदाधिकारी
            </p>

          </div>

          <div className="bg-[#FFF7ED] border border-orange-100 rounded-3xl p-6 text-center shadow-sm">

            <h3 className="text-3xl font-bold text-[#FF9933]">
              24×7
            </h3>

            <p className="text-gray-600 mt-2">
              गौ सेवा
            </p>

          </div>

        </div>

        {/* Members */}

       <div className="bg-white rounded-[32px] shadow-xl overflow-hidden border border-green-100">

  {/* Header */}

  <div className="bg-gradient-to-r from-[#1B5E20] via-[#2E7D32] to-[#43A047] p-8 text-white">

    <h3 className="text-3xl font-bold">
      प्रबंधन समिति
    </h3>

    <p className="text-green-100 mt-2">
      गौशाला संचालन एवं सेवा प्रबंधन समिति
    </p>

  </div>

  {/* Committee Table */}

  <div className="divide-y divide-green-50">

    {managementCommittee.map((member, index) => (

      <div
        key={index}
        className="group flex flex-col md:flex-row md:items-center md:justify-between px-6 md:px-8 py-5 hover:bg-[#F8FFF4] transition-all duration-300"
      >

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-[#FFF8E7] border-2 border-[#FF9933] flex items-center justify-center font-bold text-[#FF9933]">
            {index + 1}
          </div>

          <div>

            <h4 className="font-bold text-lg text-gray-800">
              {member.name}
            </h4>

            <p className="text-sm text-gray-500">
              गौशाला प्रबंधन समिति
            </p>

          </div>

        </div>

        <div className="mt-3 md:mt-0">

          <span className="bg-green-50 text-[#1B5E20] border border-green-200 px-5 py-2 rounded-full font-semibold">
            {member.post}
          </span>

        </div>

      </div>

    ))}

  </div>

</div>

        {/* Special Patrons */}

        <div className="mt-16 bg-gradient-to-r from-[#FFF8E7] to-[#F8FFF4] border border-green-100 rounded-[32px] p-8 md:p-10">

          <h3 className="text-3xl font-bold text-center text-[#1B5E20] mb-8">
            🌹 विशेष संरक्षक
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-3xl p-6 text-center shadow-md">

              <div className="text-4xl mb-3">
                🙏
              </div>

              <h4 className="font-bold text-lg">
                श्री अरविंद मोदी
              </h4>

              <p className="text-gray-500 mt-2">
                संरक्षक
              </p>

            </div>

            <div className="bg-white rounded-3xl p-6 text-center shadow-md">

              <div className="text-4xl mb-3">
                🌹
              </div>

              <h4 className="font-bold text-lg">
                श्री नरेश भाई संगवी
              </h4>

              <p className="text-gray-500 mt-2">
                मुंबई
              </p>

            </div>

            <div className="bg-white rounded-3xl p-6 text-center shadow-md">

              <div className="text-4xl mb-3">
                📺
              </div>

              <h4 className="font-bold text-lg">
                श्री नीरज जैन
              </h4>

              <p className="text-gray-500 mt-2">
                चेयरमैन एवं एम.डी.
                <br />
                जिनवाणी चैनल
              </p>

            </div>

          </div>

        </div>

        {/* Appreciation */}

        {/* <div className="mt-14 bg-gradient-to-r from-[#1B5E20] via-[#2E7D32] to-[#43A047] rounded-[32px] p-8 md:p-10 text-center text-white shadow-xl">

          <h3 className="text-3xl font-bold mb-5">
            🙏 सेवा, समर्पण एवं संस्कार
          </h3>

          <p className="max-w-5xl mx-auto text-lg leading-relaxed text-white/90">

            आचार्य श्री विद्यासागर दयोदय गौशाला, तेंदूखेड़ा परिवार
            सभी सम्माननीय पदाधिकारियों, संरक्षकों एवं सहयोगकर्ताओं का
            हृदय से आभार व्यक्त करता है। इनके मार्गदर्शन, सहयोग और
            प्रेरणा से गौसेवा का यह पावन कार्य निरंतर प्रगति की ओर अग्रसर है।

          </p>

        </div> */}

      </div>

    </div>

  </div>

</section>

    {/* Gaushala Committee */}

   

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