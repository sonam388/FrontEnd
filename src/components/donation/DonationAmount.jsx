import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const amounts = [501,2500, 5100, 21000, 111000];

const DonationAmount = ({ amount, setAmount }) => {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-[#FFF8E7]">
      <div className="max-w-5xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-8">
          <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold">
            ❤️ Choose Donation Amount
          </span>

          <h2 className="text-3xl font-bold mt-4 text-[#1B5E20]">
            Support Gau Seva
          </h2>

          <p className="text-gray-600 mt-2">
            Select an amount or enter your own.
          </p>
        </div>

        {/* Amount Cards */}

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">

          {amounts.map((item) => (
            <motion.button
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setAmount(item)}
              className={`rounded-2xl border-2 p-4 transition-all duration-300

              ${
                Number(amount) === item
                  ? "bg-[#1B5E20] text-white border-[#1B5E20]"
                  : "bg-white border-gray-200 hover:border-[#1B5E20]"
              }`}
            >
              <FaHeart
                className={`mx-auto mb-2 text-lg ${
                  Number(amount) === item
                    ? "text-red-300"
                    : "text-red-500"
                }`}
              />

              <h3 className="text-lg font-bold">
                ₹{item}
              </h3>
            </motion.button>
          ))}
        </div>

        {/* Custom Amount */}

        <div className="mt-8 max-w-md mx-auto">
          <label className="block text-base font-semibold text-[#1B5E20] mb-2">
            Custom Amount
          </label>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-lg text-gray-500">
              ₹
            </span>

            <input
              type="number"
              min="1"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-xl border-2 border-gray-300 focus:border-[#1B5E20] outline-none py-3 pl-10 pr-4 text-lg font-semibold"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default DonationAmount;