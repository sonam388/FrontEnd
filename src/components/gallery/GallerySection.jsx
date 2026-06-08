const images = [
  "https://media.istockphoto.com/id/1280686397/photo/indian-dairy-farming-indian-cattle.jpg?s=612x612&w=0&k=20&c=A6ZUi6lW64NHDoUeOCkBqPJxhyy5bS2AOQiyQ4lHu7w=",
  "https://media.istockphoto.com/id/584752054/photo/cows-in-goshala-protective-shelters-for-cows.jpg?s=612x612&w=0&k=20&c=O3Y4NlIxVsZQznI9u_WWwqYUN4NnZmhpdiO6enO73pc=",
  "https://media.istockphoto.com/id/1985055268/video/close-up-of-an-indian-boy-feeding-green-grass-to-domestic-cows-and-calves-in-the-morning.avif?s=640x640&k=20&c=0sTXZWvd2mUoAl3872IVojRmKozMOWGuKDlb6e_RRy4=",
  " https://media.istockphoto.com/id/1280686397/photo/indian-dairy-farming-indian-cattle.jpg?s=612x612&w=0&k=20&c=A6ZUi6lW64NHDoUeOCkBqPJxhyy5bS2AOQiyQ4lHu7w=",
];

const GallerySection = () => {
  return (
    <section className="py-24 bg-(--surface-soft)">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-(--primary)">
            प्रेरणादायक क्षण
          </h2>

          <p className="mt-6 text-lg text-(--muted)">
            सेवा, करुणा और समर्पण के कुछ विशेष पल
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-16">

          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={img}
                alt=""
                className="h-80 w-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default GallerySection;