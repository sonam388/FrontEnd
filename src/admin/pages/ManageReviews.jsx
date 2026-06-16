import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import API from "../../services/api";
import AdminLayout from "../layout/AdminLayout";
import {
  FaStar,
  FaCheckCircle,
  FaTrash,
} from "react-icons/fa";

const ManageReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const { data } = await API.get("/review/admin");

      if (data.success) {
        setReviews(data.reviews);
      }
    } catch (error) {
      toast.error("Failed to load reviews");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const approveReview = async (id) => {
    try {
      const { data } = await API.put(`/review/${id}`);

      if (data.success) {
        toast.success("Review Approved");
        fetchReviews();
      }
    } catch (error) {
      toast.error("Approval Failed");
    }
  };

  const deleteReview = async (id) => {
    if (!window.confirm("Delete this review?"))
      return;

    try {
      const { data } = await API.delete(
        `/review/${id}`
      );

      if (data.success) {
        toast.success("Review Deleted");
        fetchReviews();
      }
    } catch (error) {
      toast.error("Delete Failed");
    }
  };

  return (
    <AdminLayout>
      <div className="p-6">

        <h1 className="text-4xl font-bold text-[#1B5E20] mb-8">
          Manage Reviews
        </h1>

        {loading ? (
          <p>Loading Reviews...</p>
        ) : reviews.length === 0 ? (
          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            No Reviews Found
          </div>
        ) : (
          <div className="grid gap-6">

            {reviews.map((review) => (
              <div
                key={review._id}
                className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100"
              >

                <div className="flex flex-col lg:flex-row lg:justify-between gap-5">

                  <div className="flex-1">

                    <div className="flex items-center gap-3 mb-3">

                      <h3 className="text-xl font-bold">
                        {review.name}
                      </h3>

                      <span className="text-gray-500">
                        {review.city}
                      </span>

                    </div>

                    <div className="flex gap-1 mb-4">

                      {[...Array(review.rating)].map(
                        (_, index) => (
                          <FaStar
                            key={index}
                            className="text-yellow-500"
                          />
                        )
                      )}

                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      {review.message}
                    </p>

                    <div className="mt-4">

                      {review.status ===
                      "approved" ? (
                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                          Approved
                        </span>
                      ) : (
                        <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
                          Pending
                        </span>
                      )}

                    </div>

                  </div>

                  <div className="flex flex-col gap-3 min-w-[180px]">

                    {review.status !==
                      "approved" && (
                      <button
                        onClick={() =>
                          approveReview(
                            review._id
                          )
                        }
                        className="bg-[#1B5E20] hover:bg-[#14481a] text-white px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition"
                      >
                        <FaCheckCircle />
                        Approve
                      </button>
                    )}

                    <button
                      onClick={() =>
                        deleteReview(
                          review._id
                        )
                      }
                      className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition"
                    >
                      <FaTrash />
                      Delete
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </AdminLayout>
  );
};

export default ManageReviews;