import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import API from "../../services/api";
import AdminLayout from "../layout/AdminLayout";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data } = await API.get("/blog");

      setBlogs(data.blogs);
    } catch (error) {
      toast.error("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/blog/${id}`);

      toast.success("Blog Deleted");

      fetchBlogs();
    } catch (error) {
      toast.error("Delete Failed");
    }
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-[#1B5E20]">
          Blog Management
        </h1>

        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold">
          Total Blogs: {blogs.length}
        </div>
      </div>

      {loading ? (
        <div className="text-center text-xl">
          Loading Blogs...
        </div>
      ) : blogs.length === 0 ? (
        <div className="bg-white p-8 rounded-2xl shadow text-center">
          No Blogs Found
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-bold mb-2">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-sm mb-3">
                  By {blog.author}
                </p>

                <p className="text-gray-500 text-sm mb-4">
                  {new Date(
                    blog.createdAt
                  ).toLocaleDateString()}
                </p>

                <p className="text-gray-700 line-clamp-3">
                  {blog.content}
                </p>

                <button
                  onClick={() =>
                    deleteBlog(blog._id)
                  }
                  className="mt-5 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl"
                >
                  Delete Blog
                </button>
                <button
                  onClick={() => navigate(`/admin/edit-blog/${blog._id}`)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteBlog(blog._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
                <button
                  onClick={() =>
                    navigate(`/admin/edit-blog/${blog._id}`)
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Edit
                </button>

              </div>
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
};

export default Blogs;