import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; 
import logo from "../../assets/images/background.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
   const { t } = useTranslation();
  return (
    <section className="w-full min-h-screen bg-(--surface-soft) flex items-center">

      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-(--primary)"> 
           {t("heroTitle")}
            
          </h1>

          <p className="mt-6 text-(--muted) text-lg leading-8">
             {t("heroDesc")} 
          </p>

          <div className="flex gap-5 mt-8">
            {/* <button className="bg-(--accent) text-white px-7 py-3 rounded-full text-lg transition hover:opacity-90">
              {t("donateNow")}
            </button> */}  
            <Link to="/donation" className="bg-(--accent) text-white px-7 py-3 rounded-full text-lg transition hover:opacity-90">
              {t("donateNow")}
            </Link>
{/* 
            <button className="border-2 border-(--primary) px-7 py-3 rounded-full text-lg text-(--primary) transition hover:bg-(--primary) hover:text-white">
              {t("learnMore")}
            </button> */} 
            <Link to="/about" className="border-2 border-(--primary) px-7 py-3 rounded-full text-lg text-(--primary) transition hover:bg-(--primary) hover:text-white">  
              {t("learnMore")} </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={logo}
            alt="Cow"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;