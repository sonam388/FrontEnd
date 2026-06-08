const DonationAppeal = () => {
  const donations = [
    {
      title: "कत्लखाने से गौमाता को बचाने हेतु",
      amount: "₹2500",
    },
    {
      title: "एक दिन का चिकित्सा खर्च",
      amount: "₹5100",
    },
    {
      title: "एक गाय के पालन-पोषण का मासिक खर्च",
      amount: "₹1100",
    },
    {
      title: "एक गौमाता का आजीवन संरक्षण",
      amount: "₹21000",
    },
    {
      title: "गौशाला का एक दिन का कुल खर्च",
      amount: "₹11000",
    },
  ];

  return (
    <section className="py-20 bg-(--surface-soft)">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-(--primary) mb-4">
          आपका सहयोग अमूल्य है
        </h2>

        <p className="text-center text-(--muted) mb-12">
          आपका छोटा सा योगदान भी गौमाताओं के जीवन में बड़ा परिवर्तन ला सकता है।
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {donations.map((item, index) => (
            <div
              key={index}
              className="surface-card rounded-3xl p-6 text-center"
            >
              <h3 className="font-semibold mb-4 min-h-[80px]">
                {item.title}
              </h3>

              <p className="text-3xl font-bold text-(--primary)">
                {item.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationAppeal;