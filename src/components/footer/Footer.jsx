
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaHeart,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#14532D] via-[#114427] to-[#0B2E19] text-white mt-20">

      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#FF9933]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#FFD54F]/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* About */}
          <div>

            <h2 className="text-2xl font-bold mb-4">
              🐄 दयोदय गौशाला
            </h2>

            <p className="text-gray-300 leading-7 text-sm">
              आचार्य श्री विद्यासागर दयोदय गौशाला, तेंदूखेड़ा
              गौमाताओं की सेवा, संरक्षण, चिकित्सा एवं
              पर्यावरण संरक्षण हेतु समर्पित एक पवित्र
              सेवा संस्थान है।
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm">

              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-300 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-yellow-300 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="hover:text-yellow-300 transition"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/donation"
                  className="hover:text-yellow-300 transition"
                >
                  Donation
                </Link>
              </li>

            </ul>

          </div>

          {/* Policies */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Policies
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm">

              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-yellow-300 transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms-conditions"
                  className="hover:text-yellow-300 transition"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="/refund-policy"
                  className="hover:text-yellow-300 transition"
                >
                  Refund Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/shipping-policy"
                  className="hover:text-yellow-300 transition"
                >
                  Shipping Policy
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact Us
            </h3>

            <ul className="space-y-4 text-gray-300 text-sm">

              <li className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-yellow-400" />
                <span>+91 9589807047</span>
              </li>

              <li className="flex items-start gap-3 break-all">
                <FaEnvelope className="mt-1 text-yellow-400" />
                <span>
                  gaushalatendukheda@gmail.com
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-yellow-400" />
                <span>
                  Tendukheda, Madhya Pradesh
                </span>
              </li>

            </ul>

          </div>

          {/* Social */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-3 flex-wrap">

              <a
                href="/"
                className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-pink-600 hover:scale-110 transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="/"
                className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="/"
                className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all duration-300"
              >
                <FaYoutube size={20} />
              </a>

            </div>

          </div>

        </div>

        {/* Developer Credit */}

        <div className="mt-12 border-t border-white/10 pt-6">

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 text-sm text-gray-300">

            <span>
              Website Designed & Developed by
              <span className="font-semibold text-white ml-1">
                Rishav Chourasiya
              </span>
            </span>

            <a
              href="https://www.linkedin.com/in/rishav-chourasiya-b81b17253/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#0A66C2] hover:text-white transition"
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-white/10 bg-black/10 backdrop-blur-sm">

        <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-300">

          <p className="text-center md:text-left">
            © 2026 Dayoday Gaushala Tendukheda.
            All Rights Reserved.
          </p>

          <p className="flex items-center gap-2">
            Made with
            <FaHeart className="text-red-400 animate-pulse" />
            for Gau Seva
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

