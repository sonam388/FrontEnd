import { useState } from "react";
import toast from "react-hot-toast";
import API from "../../services/api";
import AdminLayout from "../layout/AdminLayout";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] =
    useState("");
  const [author, setAuthor] =
    useState("Gaushala Admin");

  const [image, setImage] =
    useState(null);

  const [preview, setPreview] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setImage(file);

    if (file) {
      setPreview(
        URL.createObjectURL(file)
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      return toast.error(
        "Please select image"
      );
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("image", image);

      const uploadRes =
        await API.post(
          "/upload",
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

      await API.post("/blog", {
        title,
        content,
        author,
        image:
          uploadRes.data.imageUrl,
      });

      toast.success(
        "Blog Added Successfully"
      );

      setTitle("");
      setContent("");
      setAuthor("Gaushala Admin");
      setImage(null);
      setPreview("");
    } catch (error) {
      toast.error(
        "Failed to Add Blog"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold text-[#1B5E20] mb-8">
        Add Blog
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
              setContent(
                e.target.value
              )
            }
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={
              handleImageChange
            }
            className="w-full border p-3 rounded-xl"
          />

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="h-48 rounded-xl"
            />
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-[#1B5E20] text-white px-8 py-3 rounded-xl"
          >
            {loading
              ? "Publishing..."
              : "Publish Blog"}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddBlog;