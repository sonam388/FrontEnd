import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../../services/api";
import AdminLayout from "../layout/AdminLayout";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const { data } = await API.get(`/blog/${id}`);

      setTitle(data.blog.title);
      setContent(data.blog.content);
      setAuthor(data.blog.author);
      setImage(data.blog.image);
    } catch (error) {
      toast.error("Failed to load blog");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await API.put(`/blog/${id}`, {
        title,
        content,
        author,
        image,
      });

      toast.success("Blog Updated Successfully");

      navigate("/admin/blogs");
    } catch (error) {
      toast.error("Update Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold text-[#1B5E20] mb-8">
        Edit Blog
      </h1>

      <div className="bg-white p-8 rounded-3xl shadow-lg">
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) =>
              setAuthor(e.target.value)
            }
            className="w-full border p-4 rounded-xl"
          />

          <textarea
            rows="8"
            placeholder="Blog Content"
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
            className="w-full border p-4 rounded-xl"
            required
          />

          {image && (
            <img
              src={image}
              alt="Blog"
              className="h-48 rounded-xl"
            />
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-[#1B5E20] text-white px-8 py-3 rounded-xl"
          >
            {loading
              ? "Updating..."
              : "Update Blog"}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default EditBlog;