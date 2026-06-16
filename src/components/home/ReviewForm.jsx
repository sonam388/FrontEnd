import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import API from "../../services/api";

const ReviewForm = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    rating: 0,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRating = (rating) => {
    setFormData({
      ...formData,
      rating,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.rating === 0) {
      return toast.error("कृपया रेटिंग दें");
    }

    try {
      setLoading(true);

      const { data } = await API.post(
        "/review",
        formData
      );

      if (data.success) {
        toast.success(
          "आपकी समीक्षा सफलतापूर्वक भेज दी गई है।"
        );

        setFormData({
          name: "",
          city: "",
          rating: 0,
          message: "",
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Review Submit Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFFDF7] to-[#F8FFF4]">

      <div className="max-w-4xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="bg-white rounded-[36px] shadow-2xl border border-green-100 overflow-hidden"
        >

          <div className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] p-8 text-center">

            <h2 className="text-4xl font-bold text-white mb-3">
              अपना अनुभव साझा करें
            </h2>

            <p className="text-green-100">
              गौशाला के बारे में अपने विचार,
              सुझाव एवं अनुभव हमारे साथ साझा करें।
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="p-8 md:p-10 space-y-6"
          >

            <div className="grid md:grid-cols-2 gap-5">

              <div>

                <label className="block mb-2 font-semibold text-gray-700">
                  आपका नाम
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="पूरा नाम दर्ज करें"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#1B5E20] outline-none transition"
                  required
                />

              </div>

              <div>

                <label className="block mb-2 font-semibold text-gray-700">
                  शहर
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="आपका शहर"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#1B5E20] outline-none transition"
                  required
                />

              </div>

            </div>

            <div>

              <label className="block mb-3 font-semibold text-gray-700">
                आपकी रेटिंग
              </label>

              <div className="flex gap-3">

                {[1, 2, 3, 4, 5].map((star) => (

                  <button
                    key={star}
                    type="button"
                    onClick={() =>
                      handleRating(star)
                    }
                    className="transition hover:scale-125"
                  >

                    <FaStar
                      size={32}
                      className={
                        star <= formData.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    />

                  </button>

                ))}

              </div>

            </div>

            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                आपकी समीक्षा
              </label>

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="गौशाला के बारे में अपना अनुभव लिखें..."
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#1B5E20] outline-none resize-none transition"
                required
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              {loading
                ? "भेजा जा रहा है..."
                : "समीक्षा भेजें"}
            </button>

            <p className="text-center text-sm text-gray-500">
              समीक्षा पहले एडमिन द्वारा सत्यापित की जाएगी,
              उसके बाद वेबसाइट पर प्रदर्शित होगी।
            </p>

          </form>

        </motion.div>

      </div>

    </section>
  );
};

export default ReviewForm;