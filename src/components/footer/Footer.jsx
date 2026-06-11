
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#14532D] to-[#0F3D22] text-white mt-20">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              🐄 दयोदय गौशाला
            </h2>

            <p className="text-gray-300 leading-7 text-sm">
              Dedicated to protecting and serving cows with love, food,
              shelter, medical care and compassion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/donation"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Donation
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Us
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm">

              <li>
                📞 +91 9589807047
              </li>

              <li className="break-all">
                📧 gaushalatendukheda@gmail.com
              </li>

              <li>
                📍 Tendukheda, Madhya Pradesh
              </li>

            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex flex-wrap gap-4">

              <a
                href="/"
                className="bg-white/10 p-3 rounded-full hover:bg-pink-600 hover:scale-110 transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="/"
                className="bg-white/10 p-3 rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="/"
                className="bg-white/10 p-3 rounded-full hover:bg-red-600 hover:scale-110 transition-all duration-300"
              >
                <FaYoutube size={20} />
              </a>

            </div>
          </div>

        </div>

        {/* Developer Credit */}
        <div className="border-t border-white/10 py-4">
          <div className="max-w-7xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-300">

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
              className="flex items-center gap-1 text-[#0A66C2] hover:text-white transition duration-300"
            >
              <FaLinkedin size={16} />
              <span>LinkedIn</span>
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5">

        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-300">

          <p>
            © 2026 Dayoday Gaushala. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2">
            Made with <FaHeart className="text-red-400" />
            in India
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

