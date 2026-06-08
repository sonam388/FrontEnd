const donationOptions = [
  {
    title: "गौमाता को कत्लखाने से बचाने हेतु",
    amount: 2500,
    icon: "🐄",
  },
  {
    title: "एक दिन का चिकित्सा खर्च",
    amount: 5100,
    icon: "🏥",
  },
  {
    title: "एक माह का पालन-पोषण",
    amount: 1100,
    icon: "🌾",
  },
  {
    title: "आजीवन संरक्षण",
    amount: 21000,
    icon: "❤️",
  },
  {
    title: "एक दिन का कुल गौशाला खर्च",
    amount: 111000,
    icon: "🏡",
  },
];

const DonationCards = ({ onSelectAmount }) => {
  return (
    <section className="bg-(--surface-soft) py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-(--primary) sm:text-5xl">
            सेवा का अवसर
          </h2>

          <p className="mt-4 text-(--muted)">
            आपका प्रत्येक सहयोग गौमाताओं के जीवन में आशा का दीप जलाता है।
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {donationOptions.map((item, index) => (
            <div
              key={index}
              className="surface-card rounded-3xl p-8 transition hover:-translate-y-2"
            >
              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl mb-4">
                {item.title}
              </h3>

              <p className="mb-6 text-3xl font-bold text-(--primary)">
                ₹{item.amount}
              </p>

              <button
                onClick={() => onSelectAmount?.(item.amount)}
                className="w-full rounded-xl bg-(--primary) py-3 text-white transition hover:opacity-95"
              >
                सहयोग करें
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationCards;