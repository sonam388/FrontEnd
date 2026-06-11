import {
  FaHeart,
  FaAward,
  FaBullseye,
  FaHandsHelping,
} from "react-icons/fa";

const About = () => {
  const achievements = [
    "30 सितंबर 2018 को मध्यप्रदेश का प्रथम समृद्ध गौशाला पुरस्कार",
    "3 अप्रैल 2023 को मध्यप्रदेश शासन द्वारा विशेष सम्मान",
    "20 जून 2023 को मध्यप्रदेश शासन द्वारा द्वितीय स्थान प्राप्त",
    "मध्यप्रदेश का प्रथम प्राइवेट एवं स्व-संचालित गौ चिकित्सालय",
  ];

  return (
    <div className="bg-(--surface-soft)">

      {/* Hero Section */}

      <section className="bg-(--primary) text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            हमारे बारे में Rishav
          </h1>

          <p className="max-w-3xl mx-auto text-lg">
            सेवा, करुणा और गौ संरक्षण का एक
            पवित्र संकल्प
          </p>

        </div>
      </section>

      {/* About Section */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-4xl font-bold text-(--primary) mb-6">
                हमारी गौशाला
              </h2>

              <p className="text-(--muted) leading-8">
                आचार्य श्री विद्यासागर दयोदय
                गौशाला, तेंदूखेड़ा सेवा, करुणा,
                धर्म और जीव दया के मूल्यों पर
                आधारित संस्था है। यहाँ बेसहारा,
                बीमार एवं त्यागी गई गौमाताओं को
                सुरक्षित आश्रय, पौष्टिक आहार एवं
                उचित चिकित्सा सुविधा प्रदान की जाती है।
              </p>

              <p className="text-(--muted) leading-8 mt-4">
                यह गौशाला केवल गौवंश संरक्षण का
                केंद्र नहीं बल्कि भारतीय संस्कृति,
                सेवा भावना और मानवता का जीवंत
                उदाहरण है।
              </p>
            </div>

            <div className="surface-card rounded-3xl p-8">
              <FaHeart className="text-6xl text-red-500 mb-4" />

              <h3 className="text-2xl font-bold mb-4">
                हमारी प्रेरणा
              </h3>

              <p className="text-(--muted) leading-8">
                आचार्य श्री विद्यासागर जी महाराज
                की प्रेरणा से स्थापित यह गौशाला
                मानवता, सेवा और धर्म के मूल्यों
                को समाज तक पहुँचाने का कार्य कर रही है।
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Abhaydaan Section */}

      <section className="py-20 bg-(--surface)">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <FaHandsHelping className="mx-auto text-6xl text-[#1B5E20] mb-6" />

          <h2 className="text-4xl font-bold text-(--primary) mb-8">
            अभयदान — श्रेष्ठ दान
          </h2>

          <p className="text-(--muted) text-lg leading-8 max-w-4xl mx-auto">
            फरवरी 2016 में नई समिति के गठन के समय
            गौशाला में केवल 66 गौवंश थे।
            आज समाज एवं जीव दया प्रेमियों के सहयोग से
            लगभग 1900 गौवंशों का संरक्षण किया जा रहा है।
            गौशाला समिति भविष्य में 3000 गौवंशों के
            संरक्षण हेतु निरंतर प्रयासरत है।
          </p>

          <div className="mt-10 surface-card rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-(--primary)">
              आपका सहयोग एक गौमाता का जीवन बचा सकता है ❤️
            </h3>
          </div>

        </div>
      </section>

      {/* Statistics */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8">

              <div className="surface-card p-8 rounded-3xl text-center">
              <h2 className="text-5xl font-bold text-(--primary)">
                1900+
              </h2>
              <p className="mt-4 font-semibold">
                संरक्षित गौवंश
              </p>
            </div>

            <div className="surface-card p-8 rounded-3xl text-center">
              <h2 className="text-5xl font-bold text-(--primary)">
                66 →
              </h2>
              <p className="mt-4 font-semibold">
                1900 तक का सफर
              </p>
            </div>

            <div className="surface-card p-8 rounded-3xl text-center">
              <h2 className="text-5xl font-bold text-(--primary)">
                3000
              </h2>
              <p className="mt-4 font-semibold">
                भविष्य लक्ष्य
              </p>
            </div>

            <div className="surface-card p-8 rounded-3xl text-center">
              <h2 className="text-5xl font-bold text-(--primary)">
                24x7
              </h2>
              <p className="mt-4 font-semibold">
                गौ सेवा
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Achievements */}

      <section className="py-20 bg-(--surface)">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <FaAward className="mx-auto text-6xl text-(--primary) mb-4" />

            <h2 className="text-4xl font-bold text-(--primary)">
              हमारी उपलब्धियाँ
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {achievements.map((item, index) => (
              <div
                key={index}
                className="surface-card p-8 rounded-3xl"
              >
                <p className="font-semibold">
                  🏆 {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Future Goal */}

      <section className="py-20 bg-(--surface-soft)">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <FaBullseye className="mx-auto text-6xl text-(--primary) mb-6" />

          <h2 className="text-4xl font-bold text-(--primary) mb-6">
            हमारा लक्ष्य
          </h2>

          <p className="text-lg text-(--muted) leading-8">
            हमारा उद्देश्य भविष्य में 3000 से अधिक
            गौवंशों के संरक्षण, चिकित्सा एवं पालन-पोषण
            की व्यवस्था करना है तथा समाज में गौ सेवा
            एवं जीव दया के प्रति जागरूकता बढ़ाना है।
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="/donation"
              className="bg-[#1B5E20] text-white px-8 py-3 rounded-xl"
            >
              दान करें
            </a>

            <a
              href="/volunteer"
              className="border-2 border-(--primary) text-(--primary) px-8 py-3 rounded-xl"
            >
              स्वयंसेवक बनें
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};

export default About;