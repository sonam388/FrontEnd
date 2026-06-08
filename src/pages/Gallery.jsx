import { useEffect, useState } from "react";
import API from "../services/api";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [selectedImage, setSelectedImage] =
    useState(null);

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

  return (
    <section className="py-20 bg-(--surface-soft) min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-(--primary) mb-4">
          Gallery
        </h1>

        <p className="text-center text-(--muted) mb-12">
          Inspiring moments of Gau Seva
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gallery.map((item) => (
            <div
              key={item._id}
              className="overflow-hidden rounded-3xl shadow-lg cursor-pointer"
              onClick={() =>
                setSelectedImage(item.image)
              }
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() =>
            setSelectedImage(null)
          }
        >
          <img
            src={selectedImage}
            alt=""
            className="max-h-[90vh] max-w-[90vw] rounded-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;