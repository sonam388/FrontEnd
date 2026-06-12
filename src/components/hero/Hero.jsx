import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import bgImage from "../../assets/images/background.jpg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/60"></div>

      {/* Gradient Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          {/* Badge */}

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full mb-6">
            🐄 गौ सेवा • संरक्षण • संस्कार
          </div>

          {/* Heading */}

          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {t("heroTitle")}
          </h1>

          {/* Description */}

          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-8 max-w-3xl">
            {t("heroDesc")}
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-10">

            <Link
              to="/donation"
              className="bg-[#FF9933] hover:bg-[#ff8a00] text-white px-8 py-4 rounded-full font-semibold shadow-xl transition duration-300 hover:scale-105"
            >
              {t("donateNow")}
            </Link>

            <Link
              to="/about"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#1B5E20] transition duration-300"
            >
              {t("learnMore")}
            </Link>

          </div>

          {/* Statistics */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-5 text-center">
              <h3 className="text-3xl font-bold text-[#FF9933]">
                3200+
              </h3>

              <p className="text-white text-sm mt-1">
                संरक्षित गौवंश
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-5 text-center">
              <h3 className="text-3xl font-bold text-[#FF9933]">
                92+
              </h3>

              <p className="text-white text-sm mt-1">
                सक्रिय सदस्य
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-5 text-center">
              <h3 className="text-3xl font-bold text-[#FF9933]">
                24×7
              </h3>

              <p className="text-white text-sm mt-1">
                गौ सेवा
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-5 text-center">
              <h3 className="text-3xl font-bold text-[#FF9933]">
                100%
              </h3>

              <p className="text-white text-sm mt-1">
                समर्पण
              </p>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white text-3xl">
        ↓
      </div>
    </section>
  );
};

export default Hero;