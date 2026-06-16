import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import API from "../../services/api";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const { data } = await API.get("/review");

      if (data.success) {
        setReviews(data.reviews);
      }
    } catch (error) {
      console.error("Failed to fetch reviews");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFFDF7] to-[#F8FFF4]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="inline-block bg-[#E8F5E9] text-[#1B5E20] px-5 py-2 rounded-full text-sm font-semibold mb-4">
            गौभक्तों के अनुभव
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-4">
            श्रद्धालुओं की प्रतिक्रियाएँ
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            गौशाला से जुड़े श्रद्धालुओं एवं सहयोगकर्ताओं के अनुभव
            और उनके प्रेरणादायक विचार।
          </p>

        </div>

        {loading ? (

          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-14 w-14 border-4 border-[#1B5E20] border-t-transparent mx-auto"></div>
            <p className="mt-4 text-gray-500">
              Reviews Loading...
            </p>
          </div>

        ) : reviews.length === 0 ? (

          <div className="bg-white rounded-3xl p-10 text-center shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">
              अभी तक कोई समीक्षा उपलब्ध नहीं है
            </h3>

            <p className="text-gray-500">
              सबसे पहले अपना अनुभव साझा करें।
            </p>
          </div>

        ) : (

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {reviews.map((review, index) => (

              <motion.div
                key={review._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative bg-white rounded-[32px] p-7 shadow-lg border border-green-100 hover:border-[#1B5E20] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >

                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FF9933]/10 to-[#1B5E20]/10 rounded-bl-full"></div>

                <FaQuoteLeft className="text-[#FF9933] text-3xl mb-5" />

                <div className="flex items-center gap-4 mb-5">

                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#1B5E20] to-[#FF9933] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {review.name?.charAt(0)?.toUpperCase()}
                  </div>

                  <div>

                    <h3 className="font-bold text-lg text-gray-800">
                      {review.name}
                    </h3>

                    <p className="text-gray-500 text-sm">
                      {review.city}
                    </p>

                  </div>

                </div>

                <div className="flex gap-1 mb-4">

                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-yellow-500"
                    />
                  ))}

                </div>

                <p className="text-gray-700 leading-relaxed">
                  {review.message}
                </p>

              </motion.div>

            ))}

          </div>

        )}

        <div className="text-center mt-14">

          <div className="inline-flex items-center gap-2 bg-[#1B5E20] text-white px-8 py-4 rounded-full shadow-lg">
            <span>🙏</span>
            <span>
              आपके सुझाव एवं अनुभव हमारे लिए अमूल्य हैं
            </span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;