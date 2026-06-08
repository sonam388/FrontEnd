import { Link } from "react-router-dom";

const LibrarySection = () => {
  return (
    <section className="py-20 bg-(--surface)">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-(--primary)">
            विद्या समय पुस्तकालय
          </h2>

          <p className="text-(--muted) mt-4 max-w-3xl mx-auto">
            ज्ञान, संस्कार और उज्ज्वल भविष्य की ओर एक प्रयास
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da"
              alt="Library"
              className="rounded-3xl shadow-lg"
            />
          </div>

          <div>
            <p className="text-(--muted) leading-8 mb-6">
              आचार्य श्री विद्यासागर दयोदय गौशाला, तेंदूखेड़ा द्वारा
              “विद्या संयम पुस्तकालय” का संचालन किया जा रहा है।
              इस नि:शुल्क पुस्तकालय का उद्देश्य ग्रामीण एवं जरूरतमंद
              बच्चों को बेहतर शिक्षा और अध्ययन का वातावरण प्रदान करना है।
            </p>

            <ul className="space-y-3 text-(--muted)">
              <li>✓ विद्यार्थियों के लिए पूर्णतः नि:शुल्क सुविधा</li>
              <li>✓ शांत एवं स्वच्छ अध्ययन वातावरण</li>
              <li>✓ प्रतियोगी परीक्षाओं की पुस्तकें</li>
              <li>✓ प्रेरणादायक साहित्य</li>
              <li>✓ उचित बैठने की व्यवस्था</li>
              <li>✓ सभी वर्गों के विद्यार्थियों के लिए खुला</li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/donation" className="bg-(--primary) text-white px-6 py-3 rounded-xl transition hover:opacity-90" >
                दान करें
              </Link>

              <Link to="/volunteer" className="border border-(--primary) text-(--primary) px-6 py-3 rounded-xl transition hover:bg-(--primary) hover:text-white">
                शिक्षा सेवा से जुड़ें
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LibrarySection;