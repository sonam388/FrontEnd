const RefundPolicy = () => {
  return (
    <section className="min-h-screen bg-[#FFF8F8] py-20">
      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white rounded-[32px] shadow-xl p-8 md:p-12">

          <h1 className="text-4xl font-bold text-red-600 mb-6">
            Refund & Return Policy
          </h1>

          <p className="text-gray-500 mb-8">
            Last Updated: June 2026
          </p>

          <div className="space-y-6 text-gray-700 leading-8">

            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-red-600 mb-3">
                No Refund Policy
              </h2>

              <p>
                All donations made to Shri Vidyasagar Dayoday Gaushala are
                voluntary and non-refundable.
              </p>
            </div>

            <p>
              Once a donation has been successfully processed, no refund,
              cancellation, or reversal request will be accepted.
            </p>

            <p>
              Every contribution is directly utilized for Gau Seva, food,
              shelter, medical treatment, and welfare activities.
            </p>

            <div className="bg-[#FFF8E7] p-6 rounded-2xl border border-yellow-200">
              <p className="font-semibold text-[#1B5E20] text-lg">
                🙏 "गौसेवा हेतु दिया गया प्रत्येक योगदान गौमाताओं की सेवा
                एवं संरक्षण में उपयोग किया जाता है।"
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default RefundPolicy;