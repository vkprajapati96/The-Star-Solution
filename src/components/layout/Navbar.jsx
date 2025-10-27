import React, { useState, useEffect, useRef } from "react";
import { X, ChevronDown, Menu, PhoneCall, HousePlus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // ✅ Close dropdown when clicking outside (Desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowServices(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Function to handle service click in mobile
  const handleServiceClick = (path) => {
    setShowServices(false);
    setOpen(false);
    navigate(path);
  };

  return (
    <nav className="bg-white shadow-md z-50 relative">
      <div className="w-full max-w-[1340px] mx-auto flex justify-between items-center py-2 px-4">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              className="w-[140px]"
              src="https://thestarsolution.com/assets/TSS_PNG-BUcIzKxo.png"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12 font-semibold text-black relative">
          <Link to="/">
            <li className="text-xl flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
              <HousePlus className="w-6 h-6" /> Home
            </li>
          </Link>

          <Link to="/about">
            <li className="text-xl cursor-pointer hover:text-blue-600 transition">
              About Us
            </li>
          </Link>

          {/* Services Dropdown */}
          <li
            ref={dropdownRef}
            className="text-xl flex items-center gap-1 cursor-pointer hover:text-blue-600 transition relative"
            onClick={() => setShowServices(!showServices)}
          >
            Services
            <ChevronDown className="w-4 h-4 mt-1" />
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

          <HashLink smooth to="#contact">
            <li className="text-xl cursor-pointer hover:text-blue-600 transition">
              Contact Us
            </li>
          </HashLink>
        </ul>

        {/* Phone Number */}
        <div className="hidden lg:block text-black font-bold text-lg">
          <div className="flex items-center gap-2">
            <PhoneCall className="w-6 h-6" />
            <span className="text-xl font-semibold">+(91) 9623231885</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
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

          {/* ✅ Services Dropdown in Mobile */}
          <li
            onClick={() => setShowServices(!showServices)}
            className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
          >
            Services
            <ChevronDown className="w-4 h-4 mt-1" />
          </li>

          {showServices && (
            <ul className="ml-4 flex flex-col gap-2 text-gray-700">
              <li
                className="hover:text-blue-600 cursor-pointer"
                onClick={() => handleServiceClick("/services/ecommerce")}
              >
                E-commerce
              </li>
              <li
                className="hover:text-blue-600 cursor-pointer"
                onClick={() => handleServiceClick("/services/digital-marketing")}
              >
                Digital Marketing
              </li>
              <li
                className="hover:text-blue-600 cursor-pointer"
                onClick={() => handleServiceClick("/services/free-support")}
              >
                Free Support
              </li>
              <li
                className="hover:text-blue-600 cursor-pointer"
                onClick={() => handleServiceClick("/services/web-development")}
              >
                Web Development
              </li>
              <li
                className="hover:text-blue-600 cursor-pointer"
                onClick={() => handleServiceClick("/services/app-development")}
              >
                App Development
              </li>
              <li
                className="hover:text-blue-600 cursor-pointer"
                onClick={() => handleServiceClick("/services/bpo")}
              >
                BPO Service
              </li>
            </ul>
          )}

          <HashLink smooth to="#contact" onClick={() => setOpen(false)}>
            <li className="hover:text-blue-600">Contact Us</li>
          </HashLink>

          <li className="text-black font-semibold flex gap-2">
            <PhoneCall />
            <span>9623231885</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
