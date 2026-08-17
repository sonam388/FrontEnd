import { motion } from "framer-motion";
import QRCode from "react-qr-code";
import toast from "react-hot-toast";

import {
  FaGooglePay,
  FaLock,
  FaCopy,
} from "react-icons/fa";

import {
  SiPhonepe,
  SiPaytm,
} from "react-icons/si";

const DonationQR = ({
  upiQR,
  amount,
  expiry,
  merchantRefNo,
}) => {
  const copyUPILink = () => {
    navigator.clipboard.writeText(upiQR);

    toast.success("UPI Link Copied Successfully");
  };

  return (
    <section className="min-h-screen bg-[#FFFDF7] flex items-center justify-center py-16 px-5">

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="w-full max-w-md bg-white rounded-[32px] shadow-2xl overflow-hidden border border-gray-100"
      >
        {/* Header */}

        <div className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-center px-6 py-8">

          <img
            src="/logo.png"
            alt="Gaushala Logo"
            className="w-20 h-20 object-contain mx-auto mb-4"
          />

          <h2 className="text-3xl font-bold text-white">
            Dayoday Gaushala
          </h2>

          <p className="text-green-100 mt-2">
            Complete Your Donation
          </p>

        </div>

        {/* Amount */}

        <div className="text-center mt-8">

          <p className="text-gray-500">
            Donation Amount
          </p>

          <h1 className="text-5xl font-bold text-[#1B5E20] mt-2">
            ₹{amount}
          </h1>

        </div>

        {/* QR */}

        <div className="flex justify-center mt-8">

          <div className="bg-white p-5 rounded-3xl shadow-xl border">

            <QRCode
              value={upiQR}
              size={220}
            />

          </div>

        </div>

        {/* Instructions */}

        <p className="text-center text-gray-500 text-sm px-8 mt-5 leading-6">

          Open any UPI application and scan the QR code
          to securely complete your donation.

        </p>

        {/* Merchant Reference */}

        <div className="mt-6 text-center">

          <p className="text-sm text-gray-500">

            Merchant Reference

          </p>

          <p className="font-semibold text-[#1B5E20] mt-1">

            {merchantRefNo}

          </p>

        </div>

        {/* Copy Link */}

        <div className="px-8 mt-6">

          <button
            onClick={copyUPILink}
            className="w-full flex items-center justify-center gap-3 bg-[#1B5E20] hover:bg-[#174d1a] text-white py-4 rounded-xl font-semibold transition duration-300"
          >
            <FaCopy />

            Copy UPI Link

          </button>

        </div>

        {/* Supported Apps */}

        <div className="px-8 mt-8">

          <h3 className="text-center text-gray-700 font-semibold mb-5">

            Supported UPI Apps

          </h3>

          <div className="grid grid-cols-2 gap-4">

            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">

              <SiPhonepe className="text-3xl text-purple-700" />

              <span>PhonePe</span>

            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">

              <FaGooglePay className="text-3xl text-blue-600" />

              <span>Google Pay</span>

            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">

              <SiPaytm className="text-3xl text-sky-600" />

              <span>Paytm</span>

            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">

              <FaLock className="text-2xl text-green-700" />

              <span>Secure Payment</span>

            </div>

          </div>

        </div>

        {/* Expiry */}

        <div className="bg-green-50 mt-8 border-t border-green-100 py-5">

          <p className="text-center text-green-800 font-semibold">

            ⏳ QR expires in {expiry} minutes

          </p>

        </div>

      </motion.div>

    </section>
  );
};

export default DonationQR;