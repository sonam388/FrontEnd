import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1B5E20] text-white mt-20">
      <div className="max-w-7xl mx-auto px-5 py-12 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold mb-4">
            गौशाला
          </h2>

          <p className="text-sm leading-7">
            Dedicated to protecting and serving cows with
            love, food, shelter, and medical care.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">

            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/about">About</Link></li>
            <li> <Link to="/contact">contact</Link> </li>
            <li> <Link to="/donation">Donation</Link> </li>

          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <ul className="space-y-2 text-sm">
            <li>+91 9589807047</li>
            <li>Gaushalatendukheda@gmail.com</li>
            <li> Address:- Tendukheda, Madhya Pradesh </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-5 text-2xl">
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-500 text-center py-4 text-sm">
        © 2026 Gaushala. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;