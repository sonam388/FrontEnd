const products = [
  {
    name: "जैविक गेहूं",
    price: "₹30 / किलो",
  },
  {
    name: "बासमती चावल",
    price: "₹60 / किलो",
  },
  {
    name: "खंडा चावल",
    price: "₹35 / किलो",
  },
  {
    name: "कनकी",
    price: "₹20 / किलो",
  },
];

const ProductsSection = () => {
  return (
    <section className="py-20 bg-(--surface-soft)">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-(--primary)">
            हमारे उत्पाद
          </h2>

          <p className="text-(--muted) mt-4">
            गौ सेवा से प्राप्त शुद्ध एवं प्राकृतिक उत्पाद
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.map((item, index) => (
            <div
              key={index}
              className="surface-card rounded-3xl p-6 text-center"
            >
              <h3 className="text-xl font-bold mb-4">
                {item.name}
              </h3>

              <p className="text-(--primary) font-bold text-lg">
                {item.price}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProductsSection;