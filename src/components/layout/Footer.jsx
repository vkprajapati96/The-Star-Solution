import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Logo and About */}
        <div className="flex flex-col gap-4">
        <Link to="/">
          <img
             src={logo}
             alt="the Star Solution Logo"
             
             className="w-32 h-auto "
            
            
            />
             </Link>
          <h3 className="text-white font-bold text-lg">The Star Solution</h3>
          <p className="text-gray-400 text-sm">
            Empowering Your Business
          </p>
          <p className="text-gray-400 text-sm">
            We specialize in empowering businesses to shine in the digital era. From driving e-commerce success to crafting engaging websites and mobile apps, we are your trusted partner for innovation and growth. Our digital marketing expertise ensures your brand reaches its target audience effectively, while our BPO services streamline operations  <br />
             and enhance customer satisfaction.
          </p>

          {/* Social Icons */}
          
          <div className="flex gap-4 mt-2">

            <a href="https://www.instagram.com/thestar_solution/?hl=en" className="text-gray-400 hover:text-yellow-500">
              <FaInstagram size={20} />
            </a>
            
            <a href="https://www.facebook.com/thestarsolution/" className="text-gray-400 hover:text-yellow-500">
              <FaFacebookF size={20} />
            </a>
            
            <a href="https://www.linkedin.com/company/the-star-solution/" className="text-gray-400 hover:text-yellow-500">
              <FaLinkedinIn size={20}   />
            </a>

          </div>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="text-gray-400 text-sm flex flex-col gap-2">
            <li>Product Photography</li>
            <li>Catalog Management</li>
            <li>Seller Training</li>
            <li>Full Customers Satisfaction</li>
            <li>A+ Catalog/Enhance Brand Content</li>
            <li>Account Management</li>
          </ul>
        </div>

        {/* Right: What We Do */}
        <div>
          <h4 className="text-white font-semibold mb-4">What We Do</h4>
          <ul className="text-gray-400 text-sm flex flex-col gap-2">
            <li>E-Commerce Business</li>
            <li>E-Commerce Account Management</li>
            <li>Free Support for E-Commerce Businesses</li>
            <li>Web Development Services</li>
            <li>App Development</li>
            <li>BPO-Service</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © 2025 The Star Solution. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
