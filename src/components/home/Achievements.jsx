const Achievements = () => {
  const achievements = [
    {
      title: "प्रथम समृद्ध गौशाला पुरस्कार",
      year: "30 सितंबर 2018",
    },
    {
      title: "विशेष सम्मान",
      year: "3 अप्रैल 2023",
    },
    {
      title: "द्वितीय स्थान",
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