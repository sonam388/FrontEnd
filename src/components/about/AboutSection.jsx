import { motion } from "framer-motion";
import logo from "../../assets/images/RR.png";
const AboutSection = () => {
  return (
    <section className="py-24 bg-(--surface)">

      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={logo}
            alt="RR Logo"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-(--primary) mb-6">
            हमारी प्रेरणा
          </h2>

          <p className="text-(--muted) leading-8 text-lg">
            आचार्य श्री विद्यासागर जी महाराज की प्रेरणा से
            स्थापित यह गौशाला मानवता, सेवा और धर्म के
            मूल्यों पर आधारित है।
          </p>

          <div className="grid grid-cols-2 gap-5 mt-10">

            <div className="surface-card p-5 rounded-2xl">
              <h3 className="font-semibold text-(--primary)">
                सुरक्षित आश्रय
              </h3>
            </div>

            <div className="surface-card p-5 rounded-2xl">
              <h3 className="font-semibold text-(--primary)">
                चिकित्सा सुविधा
              </h3>
            </div>

            <div className="surface-card p-5 rounded-2xl">
              <h3 className="font-semibold text-(--primary)">
                पौष्टिक भोजन
              </h3>
            </div>

            <div className="surface-card p-5 rounded-2xl">
              <h3 className="font-semibold text-(--primary)">
                धार्मिक सेवा
              </h3>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;