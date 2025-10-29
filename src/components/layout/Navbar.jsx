import React, { useState } from "react";
import { X, ChevronDown, Menu, PhoneCall, HousePlus } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-md z-50 sticky top-0 w-full">
      <div className="w-full max-w-[1340px] mx-auto flex justify-between items-center py-2 px-4">
        {/* Logo */}
        <div>
          <Link to="/">
            <img className="w-[140px]" src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12 font-semibold text-black relative">
          <Link to="/" onClick={() => setShowServices(false)}>
            <li className="text-lg font-semibold flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
              <HousePlus className="w-6 h-6" /> Home
            </li>
          </Link>

          <Link to="/about" onClick={() => setShowServices(false)}>
            <li className="text-lg font-semibold flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
              About Us
            </li>
          </Link>
          <a
            href="https://www.bharatdropshipping.shop"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShowServices(false)}
          >
            <li className="text-lg font-semibold flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
              Drop Shipping
            </li>
          </a>

          {/* Services Dropdown */}
          <li
            className="text-lg font-semibold flex items-center gap-1 cursor-pointer hover:text-blue-600 transition relative"
            onClick={() => setShowServices(!showServices)}
          >
            Services
            <ChevronDown className="w-4 h-4 mt-1" />
            {/* Dropdown Popup */}
            {showServices && (
              <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg w-[300px] py-4 px-4 z-50">
                <ul className="flex flex-col gap-3 text-gray-700 font-medium">
                  <Link to="/services/ecommerce">
                    <li className="hover:text-blue-600 cursor-pointer transition">
                      E-commerce
                    </li>
                  </Link>
                  <Link to="/services/digital-marketing">
                    <li className="hover:text-blue-600 cursor-pointer transition">
                      Digital Marketing
                    </li>
                  </Link>
                  <Link to="/services/free-support">
                    <li className="hover:text-blue-600 cursor-pointer transition">
                      Free Support
                    </li>
                  </Link>
                  <Link to="/services/web-development">
                    <li className="hover:text-blue-600 cursor-pointer transition">
                      Web Development
                    </li>
                  </Link>
                  <Link to="/services/app-development">
                    <li className="hover:text-blue-600 cursor-pointer transition">
                      App Development
                    </li>
                  </Link>
                  <Link to="/services/bpo">
                    <li className="hover:text-blue-600 cursor-pointer transition">
                      BPO Service
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </li>

          <Link to="/contact" onClick={() => setShowServices(false)}>
            <li className="text-lg font-semibold flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
              Contact Us
            </li>
          </Link>
        </ul>

        {/* Phone Number */}
        <div className="hidden lg:block text-black font-bold text-lg">
          <div className="flex items-center gap-2">
            <PhoneCall className="w-6 h-6 font-semibold text-xl" />
            <span className="text-lg font-semibold">01204120438</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t transition-all duration-500 ease-in-out overflow-hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-4 gap-4 font-medium text-black">
          <Link to="/" onClick={() => setOpen(false)}>
            <li className="flex text-black items-center gap-2 hover:text-blue-600">
              <HousePlus className="w-5 h-5" /> Home
            </li>
          </Link>

          <Link to="/about" onClick={() => setOpen(false)}>
            <li className="hover:text-blue-600">About Us</li>
          </Link>

          {/* Services inside mobile */}
          <li
            onClick={() => setShowServices(!showServices)}
            className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
          >
            Services
            <ChevronDown className="w-4 h-4 mt-1" />
          </li>

          {showServices && (
            <ul className="ml-4 flex flex-col gap-2 text-gray-700">
              <Link
                to="/services/ecommerce"
                onClick={() => {
                  setShowServices(false);
                  setOpen(false);
                }}
              >
                <li className="hover:text-blue-600">E-commerce</li>
              </Link>
              <Link
                to="/services/digital-marketing"
                onClick={() => {
                  setShowServices(false);
                  setOpen(false);
                }}
              >
                <li className="hover:text-blue-600">Digital Marketing</li>
              </Link>
              <Link
                to="/services/free-support"
                onClick={() => {
                  setShowServices(false);
                  setOpen(false);
                }}
              >
                <li className="hover:text-blue-600">Free Support</li>
              </Link>
              <Link
                to="/services/web-development"
                onClick={() => {
                  setShowServices(false);
                  setOpen(false);
                }}
              >
                <li className="hover:text-blue-600">Web Development</li>
              </Link>
              <Link
                to="/services/app-development"
                onClick={() => {
                  setShowServices(false);
                  setOpen(false);
                }}
              >
                <li className="hover:text-blue-600">App Development</li>
              </Link>
              <Link
                to="/services/bpo"
                onClick={() => {
                  setShowServices(false);
                  setOpen(false);
                }}
              >
                <li className="hover:text-blue-600">BPO Service</li>
              </Link>
            </ul>
          )}

          <Link to="/contact" onClick={() => setOpen(false)}>
            <li className="hover:text-blue-600">Contact Us</li>
          </Link>

          <li className="text-black font-semibold flex gap-2">
            <PhoneCall />
            <span> 01204120438</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
