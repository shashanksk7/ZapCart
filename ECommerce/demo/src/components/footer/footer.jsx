import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">ElectroMart</h2>
          <p>Your one-stop shop for the latest electronics and gadgets.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul>
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            <li><a href="#" className="hover:text-gray-400">Support</a></li>
          </ul>
        </div>

        {/* Product Categories */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Categories</h2>
          <ul>
            <li><a href="#" className="hover:text-gray-400">Smartphones</a></li>
            <li><a href="#" className="hover:text-gray-400">Laptops</a></li>
            <li><a href="#" className="hover:text-gray-400">Gaming</a></li>
            <li><a href="#" className="hover:text-gray-400">Accessories</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-500"><FaFacebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-pink-500"><FaInstagram size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-red-500"><FaYoutube size={24} /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} ElectroMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
