const Achievements = () => {
  const achievements = [
    {
      title: "प्रथम समृद्ध गौशाला पुरस्कार",
      year: "30 सितंबर 2018",
    },
    {
      title: "अध्यक्ष श्री संजय कुमार जैन को विशेष सम्मान द्वारा सम्मानित किया गया",
      year: "3 अप्रैल 2023",
    },
    {
      title: "द्वितीय समृद्ध गौशाला पुरस्कार",
      year: "20 जून 2025",
    },
    {
      title:
        "मध्यप्रदेश का प्रथम प्राइवेट एवं स्व-संचालित गौ चिकित्सालय",
      year: "गौरव उपलब्धि",
    },
  ];

  return (
    <section className="py-20 bg-(--surface)">
      {/* <section className=" bg-gradient-to-br from-[#FFF8E7] to-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl border border-orange-100">

            <div className="text-center mb-10">

              <span className="inline-block bg-[#FF9933]/10 text-[#FF9933] px-5 py-2 rounded-full font-semibold mb-4">
                प्रेरणा स्रोत
              </span>

              <h2 className="text-4xl font-bold text-[#1B5E20]">
                हमारी प्रेरणा गौशाला
              </h2>

              <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                आचार्य श्री विद्यासागर दयोदय गौशाला, तेंदूखेड़ा का संचालन
                गौसेवा, करुणा एवं समाज सेवा की प्रेरणा से किया जा रहा है।
                हमारी गौशाला की स्थापना एवं विकास में निम्न संस्था का विशेष
                मार्गदर्शन एवं प्रेरणादायक योगदान रहा है।
              </p>

            </div>

            <div className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] rounded-[28px] p-8 text-white">

              <h3 className="text-3xl font-bold mb-6">
                कायोत्सर्ग मानव सुख उत्थान समिति
              </h3>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
                  <h4 className="font-bold text-xl mb-2">
                    अध्यक्ष
                  </h4>

                  <p className="text-lg">
                    श्री प्रमोद जैन
                  </p>

                  <p className="text-white/80">
                    📞 7987622933
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
                  <h4 className="font-bold text-xl mb-2">
                    महामंत्री
                  </h4>

                  <p className="text-lg">
                    श्री संजय जैन (अछोता नगर)
                  </p>

                  <p className="text-white/80">
                    📞 8770250571
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
                  <h4 className="font-bold text-xl mb-2">
                    कोषाध्यक्ष
                  </h4>

                  <p className="text-lg">
                    श्री अमितेश जैन (सिलानी)
                  </p>

                  <p className="text-white/80">
                    📞 9424319595
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
                  <h4 className="font-bold text-xl mb-2">
                    संरक्षक संस्था
                  </h4>

                  <p className="text-lg">
                    विद्यासागर संस्कार पीठ
                  </p>

                  <p className="text-white/80">
                    मुंबई
                  </p>

                  <p className="text-white/80">
                    📞 9820288455
                  </p>
                </div>

              </div>

            </div>

            <div className="mt-8 text-center">

              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                हमारी गौशाला इनके आदर्शों, मार्गदर्शन एवं प्रेरणा से संचालित
                हो रही है। हम इस संस्था एवं इसके सभी पदाधिकारियों के प्रति
                हृदय से कृतज्ञ हैं। इनके सहयोग एवं प्रेरणा से गौसेवा का यह
                पावन कार्य निरंतर आगे बढ़ रहा है।
              </p>

              <p className="mt-5 text-2xl font-bold text-[#1B5E20]">
                "गौसेवा ही परम सेवा है" 🙏🐄
              </p>

            </div>

          </div>

        </div>
      </section> */}
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-(--primary) mb-4">
          हमारी उपलब्धियाँ
        </h2>

        <p className="text-center text-(--muted) mb-12">
          वर्षों की सेवा, समर्पण और गौ संरक्षण का परिणाम
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="surface-card p-8 rounded-3xl hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-bold text-(--primary) mb-3">
                {item.title}
              </h3>

              <p className="text-(--muted)">
                {item.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;