import {
  FaLeaf,
  FaHandHoldingHeart,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const impactData = [
  {
    id: 1,
    icon: <FaLeaf />,
    title: "Feed a Cow",
    amount: "₹101",
    description:
      "Provide nutritious fodder and clean drinking water for a cow for one day.",
    color: "from-green-500 to-green-700",
  },
  {
    id: 2,
    icon: (
      <span className="text-5xl leading-none">
        🐄
      </span>
    ),
    title: "Care & Shelter",
    amount: "₹501",
    description:
      "Support shelter maintenance, cleanliness, and daily care for rescued cows.",
    color: "from-orange-500 to-orange-700",
  },
  {
    id: 3,
    icon: <FaHandHoldingHeart />,
    title: "Medical Support",
    amount: "₹1100",
    description:
      "Help provide medicines, veterinary treatment, and emergency healthcare.",
    color: "from-pink-500 to-red-500",
  },
  {
    id: 4,
    icon: <FaShieldAlt />,
    title: "Protect Gau Mata",
    amount: "Any Amount",
    description:
      "Every contribution helps rescue, protect, and serve abandoned and injured cows.",
    color: "from-yellow-500 to-amber-600",
  },
];

const DonationImpact = () => {
  return (
    <section className="bg-[#FFFDF7] py-20">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-orange-100 text-orange-700 px-5 py-2 rounded-full text-sm font-semibold mb-4">
            ❤️ Your Donation Creates Impact
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E20]">
            Every Contribution Matters
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
            Your support enables us to provide food, shelter, medical care,
            and lifelong protection to rescued cows. Together, we can preserve
            compassion, culture, and humanity through Gau Seva.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {impactData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300"
            >
              {/* Top Gradient */}
              <div
                className={`bg-gradient-to-r ${item.color} h-3`}
              ></div>

              <div className="p-8 text-center">

                {/* Icon */}
                <div
                  className={`mx-auto w-24 h-24 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-4xl shadow-lg mb-6 group-hover:rotate-6 transition`}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#1B5E20] mb-3">
                  {item.title}
                </h3>

                {/* Amount */}
                <div className="text-3xl font-extrabold text-orange-600 mb-4">
                  {item.amount}
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-7 text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] rounded-3xl p-10 text-center text-white shadow-xl"
        >
          <h3 className="text-3xl font-bold mb-4">
            "गौ सेवा ही मानव सेवा है"
          </h3>

          <p className="max-w-3xl mx-auto text-lg text-green-100 leading-8">
            By donating today, you become a part of our mission to protect,
            nourish, and care for Gau Mata. Even the smallest contribution
            creates a meaningful impact.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default DonationImpact;