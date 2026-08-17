import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaArrowRight,
  FaShieldAlt,
  FaLeaf,
} from "react-icons/fa";

const DonationHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(' https://images.unsplash.com/photo-1601758123927-1c3f0b6e5d4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')", 
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/40" />

      {/* Decorative Blur */}
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">

            <FaHeart className="text-red-400" />

            <span className="text-sm text-white">
              Every Donation Makes a Difference
            </span>

          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">

            Protecting
            <span className="text-yellow-400">
              {" "}Gau Mata{" "}
            </span>

            with Love,
            Care &
            Compassion

          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200">

            Your contribution helps us provide nutritious food,
            medical treatment, shelter, and lifelong care for
            rescued and abandoned cows.

            Together we can preserve our culture and serve
            humanity through Gau Seva.

          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="#donation-form"
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105"
            >
              Donate Now
              <FaArrowRight className="transition group-hover:translate-x-1" />
            </Link>

            <Link
              to="/about"
              className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-green-700"
            >
              Learn More
            </Link>

          </div>

          {/* Trust Badges */}
          <div className="mt-14 flex flex-wrap gap-6">

            <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-md">

              <FaShieldAlt className="text-2xl text-green-400" />

              <div>
                <h4 className="font-semibold text-white">
                  Secure Donation
                </h4>

                <p className="text-sm text-gray-300">
                  ICICI Payment Gateway
                </p>
              </div>

            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-md">

              <FaLeaf className="text-2xl text-green-400" />

              <div>

                <h4 className="font-semibold text-white">
                  100% Used for Gau Seva
                </h4>

                <p className="text-sm text-gray-300">
                  Transparency & Accountability
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border-2 border-white">
          <div className="mt-2 h-3 w-1 rounded-full bg-white" />
        </div>
      </motion.div>

    </section>
  );
};

export default DonationHero;