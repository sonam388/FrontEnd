import {
  FaLeaf,
  FaSeedling,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Products = () => {
  const foodProducts = [
    {
      name: "जैविक गेहूँ",
      price: "₹30 / किलो",
      icon: "🌾",
    },
    {
      name: "बासमती चावल",
      price: "₹60 / किलो",
      icon: "🍚",
    },
    {
      name: "खंडा चावल",
      price: "₹35 / किलो",
      icon: "🍚",
    },
    {
      name: "कनकी",
      price: "₹20 / किलो",
      icon: "🌾",
    },
  ];

  const utilityProducts = [
    {
      name: "कछुआ खाद",
      detail: "25 किलोग्राम",
    },
    {
      name: "नॉर्मल खाद",
      detail: "5 किलोग्राम",
    },
    {
      name: "गोमला",
      detail: "25 नग",
    },
    {
      name: "कंडा",
      detail: "5 नग",
    },
    {
      name: "मच्छर कंडा",
      detail: "50 पैकेट / 10 कंडे",
    },
  ];

  return (
    <div className="bg-(--surface-soft) min-h-screen">

      {/* Hero Section */}

      <section className="bg-(--primary) text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            गौ सेवा से प्राप्त शुद्ध एवं प्राकृतिक उत्पाद
          </h1>

          <p className="max-w-3xl mx-auto text-lg">
            गौशाला तेंदूखेड़ा द्वारा निर्मित जैविक एवं
            प्राकृतिक उत्पाद आपके स्वास्थ्य, पर्यावरण
            और गौ संरक्षण के प्रति हमारी प्रतिबद्धता हैं।
          </p>

        </div>
      </section>

      {/* Organic Products */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-(--primary) mb-12">
            जैविक खाद्य उत्पाद
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {foodProducts.map((item, index) => (
              <div
                key={index}
                className="surface-card rounded-3xl p-8 text-center hover:-translate-y-2 transition"
              >
                <div className="text-5xl mb-4">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {item.name}
                </h3>

                <p className="text-(--primary) text-2xl font-bold">
                  {item.price}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Utility Products */}

      <section className="py-20 bg-(--surface)">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-(--primary) mb-12">
            गौशाला उपयोगी उत्पाद
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {utilityProducts.map((item, index) => (
              <div
                key={index}
                className="surface-card rounded-3xl p-8 text-center"
              >
                <FaSeedling className="mx-auto text-4xl text-(--primary) mb-4" />

                <h3 className="text-xl font-bold mb-3">
                  {item.name}
                </h3>

                <p className="text-(--muted)">
                  {item.detail}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Why Buy From Us */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-(--primary) mb-12">
            हमसे क्यों खरीदें?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="surface-card p-8 rounded-3xl text-center">
              <FaLeaf className="mx-auto text-4xl text-(--primary) mb-4" />
              <h3 className="font-bold text-xl mb-3">
                प्राकृतिक
              </h3>
              <p>
                रसायन मुक्त एवं सुरक्षित उत्पाद
              </p>
            </div>

            <div className="surface-card p-8 rounded-3xl text-center">
              <FaLeaf className="mx-auto text-4xl text-(--primary) mb-4" />
              <h3 className="font-bold text-xl mb-3">
                गौ सेवा
              </h3>
              <p>
                प्रत्येक खरीद गौ सेवा में सहयोग
              </p>
            </div>

            <div className="surface-card p-8 rounded-3xl text-center">
              <FaLeaf className="mx-auto text-4xl text-(--primary) mb-4" />
              <h3 className="font-bold text-xl mb-3">
                जैविक
              </h3>
              <p>
                पर्यावरण अनुकूल उत्पाद
              </p>
            </div>

            <div className="surface-card p-8 rounded-3xl text-center">
              <FaLeaf className="mx-auto text-4xl text-(--primary) mb-4" />
              <h3 className="font-bold text-xl mb-3">
                स्थानीय
              </h3>
              <p>
                स्थानीय उत्पादन एवं रोजगार
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Contact Section */}

      <section className="py-20 bg-(--primary) text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            ऑर्डर एवं जानकारी हेतु संपर्क करें
          </h2>

          <h3 className="text-2xl font-semibold mb-4">
            संजय कुमार जैन पारस्मणी
          </h3>

          <p className="mb-8">
            अध्यक्ष, गौशाला तेंदूखेड़ा
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="tel:9589807047"
              className="bg-white text-[#1B5E20] px-6 py-3 rounded-xl flex items-center gap-2 font-semibold"
            >
              <FaPhoneAlt />
              Call Now
            </a>

            <a
              href="https://wa.me/919589807047"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 px-6 py-3 rounded-xl flex items-center gap-2 font-semibold"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Products;