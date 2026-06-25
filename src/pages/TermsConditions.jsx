const TermsConditions = () => {
  return (
    <section className="min-h-screen bg-[#FFFDF8] py-20">
      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white rounded-[32px] shadow-xl p-8 md:p-12">

          <h1 className="text-4xl font-bold text-[#FF9933] mb-6">
            Terms & Conditions
          </h1>

          <p className="text-gray-500 mb-8">
            Last Updated: June 2026
          </p>

          <div className="space-y-6 text-gray-700 leading-8">

            <p>
              By accessing this website, you agree to follow these terms and
              conditions.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-[#FF9933] mb-3">
                Website Usage
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Users must use the website responsibly.</li>
                <li>False information should not be submitted.</li>
                <li>Any misuse of the website is prohibited.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#FF9933] mb-3">
                Donations
              </h2>

              <p>
                Donations made through this website are voluntary and support
                Gau Seva, shelter, food, healthcare, and welfare activities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#FF9933] mb-3">
                Intellectual Property
              </h2>

              <p>
                All content including images, logos, text, and designs belongs
                to Shri Vidyasagar Dayoday Gaushala.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TermsConditions;