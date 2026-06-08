import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import API from "../../services/api";
import AdminLayout from "../layout/AdminLayout";

const AdminGallery = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const { data } = await API.get("/gallery");
      setGallery(data.gallery);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      return toast.error("Please select image");
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("image", image);

      // Upload to Cloudinary
      const uploadRes = await API.post(
        "/upload",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      // Save URL in MongoDB
      await API.post("/gallery", {
        title,
        image: uploadRes.data.imageUrl,
      });

      toast.success(
        "Image Uploaded Successfully"
      );

      setTitle("");
      setImage(null);
      setPreview("");

      fetchGallery();
    } catch (error) {
      toast.error("Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  const deleteImage = async (id) => {
    try {
      await API.delete(`/gallery/${id}`);

      toast.success("Image Deleted");

      fetchGallery();
    } catch (error) {
      toast.error("Delete Failed");
    }
  };

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold text-[#1B5E20] mb-8">
        Gallery Management
      </h1>

      {/* Upload Form */}

      <div className="bg-white p-8 rounded-3xl shadow-lg mb-10">
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            placeholder="Image Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border p-3 rounded-xl"
          />

          {preview && (
            <img
              src={preview}
              alt="preview"
              className="h-40 rounded-xl"
            />
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-[#1B5E20] text-white px-8 py-3 rounded-xl"
          >
            {loading
              ? "Uploading..."
              : "Upload Image"}
          </button>
        </form>
      </div>

      {/* Gallery Grid */}

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gallery.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold">
                {item.title}
              </h3>

              <button
                onClick={() =>
                  deleteImage(item._id)
                }
                className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default AdminGallery;