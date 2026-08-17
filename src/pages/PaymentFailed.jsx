import { Link } from "react-router-dom";

const PaymentFailed = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-5">
      <div className="bg-white rounded-3xl shadow-xl p-10 text-center max-w-lg">

        <div className="text-7xl mb-5">
          ❌
        </div>

        <h1 className="text-3xl font-bold text-green-700">
          Payment Failed    
        </h1>

        <p className="mt-4 text-gray-600 leading-7">
          Thank you for supporting
          <br />
          Dayoday Gaushala.
          <br />
          Your donation will help protect and care for Gau Mata.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block bg-[#1B5E20] text-white px-8 py-3 rounded-xl"
        >
          Back to Home
        </Link>

      </div>
    </div>
  );
};

export default PaymentFailed;