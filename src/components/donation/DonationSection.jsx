import { Link } from "react-router-dom";

const DonationSection = () => {
  return (
    <section className="py-24 bg-(--surface)">

      <div className="max-w-7xl mx-auto px-5 text-center">

        <h2 className="text-4xl font-bold text-(--primary)">
          आपका सहयोग अमूल्य है
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-(--muted) leading-8">
          आपका छोटा सा सहयोग भी अनेक गौ माताओं के जीवन
          में नई उम्मीद ला सकता है।
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          <div className="surface-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-(--primary)">
              ₹2500
            </h3>

            <p className="mt-4 text-(--muted)">
              कत्लखाने से गौमाता को बचाने हेतु
            </p>
          </div>

          <div className="surface-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-(--primary)">
              ₹5100
            </h3>

            <p className="mt-4 text-(--muted)">
              चिकित्सा सहायता
            </p>
          </div>

          <div className="surface-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-(--primary)">
              ₹21000
            </h3>

            <p className="mt-4 text-(--muted)">
              गौ संरक्षण सहयोग
            </p>
          </div>

          <div className="surface-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-(--primary)">
              ₹111000
            </h3>

            <p className="mt-4 text-(--muted)">
              गौशाला दैनिक खर्च
            </p>
          </div>

        </div>

        {/* <button className="mt-12 bg-[#FF9933] text-white px-10 py-4 rounded-full text-lg hover:bg-[#e88922] transition">
          अभी दान करें
        </button> */} 
        <Link to="/donation" className="mt-12 bg-(--accent) text-white px-10 py-4 rounded-full text-lg transition hover:opacity-90 inline-block">
          अभी दान करें
        </Link>

      </div>
    </section>
  );
};

export default DonationSection;