const ImpactSection = () => {
  return (
    <section className="py-20 bg-(--surface-soft)">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold text-(--primary) mb-10">
          आपका सहयोग कहाँ उपयोग होता है?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="surface-card p-6 rounded-3xl">
            <h3 className="font-bold mb-3">
              पौष्टिक आहार
            </h3>
            <p>
              गौमाताओं के दैनिक भोजन हेतु
            </p>
          </div>

          <div className="surface-card p-6 rounded-3xl">
            <h3 className="font-bold mb-3">
              चिकित्सा सेवा
            </h3>
            <p>
              बीमार एवं घायल गौवंश के उपचार हेतु
            </p>
          </div>

          <div className="surface-card p-6 rounded-3xl">
            <h3 className="font-bold mb-3">
              आश्रय
            </h3>
            <p>
              सुरक्षित एवं स्वच्छ वातावरण हेतु
            </p>
          </div>

          <div className="surface-card p-6 rounded-3xl">
            <h3 className="font-bold mb-3">
              संरक्षण
            </h3>
            <p>
              बेसहारा गौमाताओं के बचाव एवं संरक्षण हेतु
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImpactSection;