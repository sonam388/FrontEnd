const testimonials = [
  {
    name: "राहुल शर्मा",
    message:
      "यह गौशाला सेवा, करुणा और भारतीय संस्कृति का अद्भुत उदाहरण है।",
  },

  {
    name: "सीमा जैन",
    message:
      "गौ माता की इतनी अच्छी सेवा देखकर मन प्रसन्न हो गया।",
  },

  {
    name: "अमित पटेल",
    message:
      "दान का सही उपयोग यहाँ स्पष्ट दिखाई देता है।",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-(--surface)">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-(--primary)">
            श्रद्धालुओं के विचार
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="surface-card p-8 rounded-3xl"
            >
              <p className="text-(--muted) leading-8">
                {item.message}
              </p>

              <h3 className="mt-6 text-xl font-semibold text-(--primary)">
                {item.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;