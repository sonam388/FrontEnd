import { motion } from "framer-motion";

const MissionSection = () => {
  return (
    <section className="py-24 bg-(--surface-soft)">

      <div className="max-w-7xl mx-auto px-5 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-(--primary)"
        >
          हमारा उद्देश्य
        </motion.h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-(--muted) leading-8">
          हमारी गौशाला का मुख्य उद्देश्य गौ माता की रक्षा,
          सेवा और संरक्षण करना है।
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="surface-card p-8 rounded-3xl hover:-translate-y-2 transition">
            <h3 className="text-2xl font-semibold text-(--primary)">
              गौ संरक्षण
            </h3>

            <p className="mt-4 text-(--muted)">
              बेसहारा गायों को सुरक्षित जीवन देना।
            </p>
          </div>

          <div className="surface-card p-8 rounded-3xl hover:-translate-y-2 transition">
            <h3 className="text-2xl font-semibold text-(--primary)">
              जागरूकता
            </h3>

            <p className="mt-4 text-(--muted)">
              समाज में गौ सेवा के प्रति जागरूकता बढ़ाना।
            </p>
          </div>

          <div className="surface-card p-8 rounded-3xl hover:-translate-y-2 transition">
            <h3 className="text-2xl font-semibold text-(--primary)">
              भारतीय संस्कृति
            </h3>

            <p className="mt-4 text-(--muted)">
              संस्कृति एवं प्राकृतिक जीवन शैली को बढ़ावा देना।
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionSection;