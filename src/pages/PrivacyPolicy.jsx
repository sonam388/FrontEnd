const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-[#F8FFF8] py-20">
      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white rounded-[32px] shadow-xl p-8 md:p-12">

          <h1 className="text-4xl font-bold text-[#1B5E20] mb-6">
            Privacy Policy
          </h1>

          <p className="text-gray-500 mb-8">
            Last Updated: June 2026
          </p>

          <div className="space-y-6 text-gray-700 leading-8">

            <p>
              Shri Vidyasagar Dayoday Gaushala, Tendukheda respects your privacy
              and is committed to protecting your personal information.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-[#1B5E20] mb-3">
                Information We Collect
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Name</li>
                <li>Email Address</li>
                <li>Mobile Number</li>
                <li>Donation Information</li>
                <li>Messages submitted through forms</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1B5E20] mb-3">
                How We Use Information
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Process donations</li>
                <li>Respond to inquiries</li>
                <li>Improve website services</li>
                <li>Provide important updates</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1B5E20] mb-3">
                Data Security
              </h2>

              <p>
                We use appropriate security measures to protect your personal
                information from unauthorized access.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PrivacyPolicy;