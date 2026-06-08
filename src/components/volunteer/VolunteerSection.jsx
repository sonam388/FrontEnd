const VolunteerSection = () => {
  return (
    <section className="py-24 bg-(--primary) text-white">

      <div className="max-w-5xl mx-auto px-5 text-center">

        <h2 className="text-4xl font-bold">
          गौ सेवा से जुड़ें
        </h2>

        <p className="mt-6 text-lg leading-8">
          आइए, गौ सेवा के इस पुण्य कार्य में सहभागी बनें
          और समाज में सकारात्मक परिवर्तन लाएँ।
        </p>

        <button className="mt-10 bg-(--accent) px-10 py-4 rounded-full text-lg transition hover:opacity-90">
          स्वयंसेवक बनें
        </button>

      </div>
    </section>
  );
};

export default VolunteerSection;