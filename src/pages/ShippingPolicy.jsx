const ShippingPolicy = () => {
  return (
    <section className="min-h-screen bg-[#F8FBFF] py-20">
      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white rounded-[32px] shadow-xl p-8 md:p-12">

          <h1 className="text-4xl font-bold text-blue-600 mb-6">
            Shipping & Delivery Policy
          </h1>

          <p className="text-gray-500 mb-8">
            Last Updated: June 2026
          </p>

          <div className="space-y-6 text-gray-700 leading-8">

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">

              <h2 className="text-2xl font-bold text-blue-600 mb-3">
                Currently Not Applicable
              </h2>

              <p>
                Shri Vidyasagar Dayoday Gaushala currently does not provide
                online product shipping or delivery services through this
                website.
              </p>

            </div>

            <p>
              Products displayed on the website are for informational purposes
              only.
            </p>

            <p>
              If online ordering and delivery services are introduced in the
              future, this policy will be updated accordingly.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <p className="font-semibold text-[#1B5E20]">
                For product-related inquiries, please contact the Gaushala
                management directly.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ShippingPolicy;