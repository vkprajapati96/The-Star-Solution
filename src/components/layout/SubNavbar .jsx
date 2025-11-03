import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const SubNavbar = () => {
  return (
    <div className="bg-blue-950">
      <div className="w-full max-w-[1340px] mx-auto text-white py-2 px-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        
        {/* Left Side - Contact Info */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-yellow-400" size={14} />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            |<FaEnvelope className="text-yellow-400" size={14} />
            <span>support@example.com</span>
          </div>
        </div>

        {/* Right Side - Social Media Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            <FaInstagram size={18} />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            <FaFacebookF size={18} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
