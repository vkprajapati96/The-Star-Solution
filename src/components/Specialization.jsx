import React, { useState, useRef } from "react";
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";

const Specialization = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const scrollRef = useRef(null);

  const brands = ["Amazon", "Flipkart", "Meesho", "JioMart", "Amazon Global"];

  const brandDetails = {
    Amazon: [
      "Brand Approval Assistance",
      "Product Listing & Cataloguing",
      "A+ Content & Storefront Setup",
      "Advertising & PPC Management",
      "Return & Safety Claim Support",
      "Monthly Sales Boost Strategy",
      "Product Rank Improvement",
      "Account Health Management",
      "Feedback & Review Management",
      "Seller Training & Support",
    ],
    Flipkart: [
      "Brand Approval & Vertical Listing Support",
      "Product Listing & Cataloging",
      "Promotional Campaign Management",
      "Flipkart Advertising (PLA, PPC)",
      "Return & Safety Claim Assistance",
      "Monthly Sales Boost Strategy",
      "Product Rank Improvement",
      "Account Health Monitoring",
      "Feedback & Rating Management",
      "Seller Training & Support",
    ],
    Meesho: [
      "Brand Approval & Onboarding Support",
      "Product Listing & Catalog Optimization",
      "Promotional Activities & Campaign Setup",
      "Advertising & Marketing Strategy",
      "Return & Claim Assistance",
      "Monthly Sales Growth Strategy",
      "Product Rank Boost",
      "Account Health Management",
      "Feedback & Review Handling",
      "Seller Training & Support",
    ],
    JioMart: [
      "Brand Approval & Seller Onboarding",
      "Product Listing & Catalog Management",
      "Promotional Activities & Offers Setup",
      "JioMart Advertising & Marketing",
      "Return & Claim Support",
      "Monthly Sales Optimization",
      "Rank Improvement Strategy",
      "Account Health Monitoring",
      "Feedback & Review Handling",
      "Seller Training & Support",
    ],
    "Amazon Global": [
      "Brand Approval & Global Marketplace Onboarding",
      "International Listing & Cataloging",
      "Product Localization & SEO Optimization",
      "Sponsored Ads & Global Advertising Strategy",
      "Return & Safety Claim Support",
      "Monthly Sales Boost & Growth Planning",
      "Product Rank Improvement",
      "Account Health & Policy Compliance Management",
      "Feedback & Review Management",
      "Global Seller Training & Support",
    ],
  };

  const handleBrandClick = (item, index) => {
    if (selectedBrand === item) {
      setSelectedBrand(null);
      return;
    }

    setSelectedBrand(item);

    setTimeout(() => {
      const scroll = scrollRef.current;
      const card = scroll.children[0].children[index];

      scroll.scrollTo({
        left: card.offsetLeft - scroll.clientWidth / 2 + card.clientWidth / 2,
        behavior: "smooth",
      });
    }, 100);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="bg-[#2C4870] pt-16 pb-12 relative">
      <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-10">
        <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl text-yellow-400">
          Specialization
        </h1>

        {/* BRAND BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-8">
          {brands.map((item, i) => (
            <div
              key={i}
              onClick={() => handleBrandClick(item, i)}
              className={`border border-slate-500 rounded-full px-5 sm:px-7 py-2 cursor-pointer text-sm sm:text-base transition-all duration-300
                ${
                  selectedBrand === item
                    ? "bg-yellow-600 text-black scale-105"
                    : "text-white hover:bg-yellow-600 hover:text-black"
                }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* LEFT ICON BUTTON */}
        <button
          onClick={scrollLeft}
          className="
          cursor-pointer
          z-10
            absolute left-4 top-[65%] -translate-y-1/2
            bg-white/20 hover:bg-white/40
            backdrop-blur-md
            text-white
            p-1
            rounded-full
            shadow-xl
            transition-all duration-300
          "
        >
          <IoChevronBackCircle size={30} />
        </button>

        {/* RIGHT ICON BUTTON */}
        <button
          onClick={scrollRight}
          className="
           cursor-pointer
            z-0
            absolute right-4 top-[65%] -translate-y-1/2
            bg-white/20 hover:bg-white/40
            backdrop-blur-md
            text-white
            p-1
            rounded-full
            transition-all duration-300
          "
        >
          <IoChevronForwardCircle size={30} />
        </button>

        {/* CARD SECTION */}
        <div
          className="overflow-x-auto scroll-smooth mt-12 scrollbar-hide"
          ref={scrollRef}
        >
          <div className="flex gap-6 min-w-max">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl shadow-lg 
                w-[300px]
                h-[445px]
                flex flex-col transition-all duration-300 
                ${
                  selectedBrand === brand
                    ? "bg-white text-black scale-[1.06] shadow-yellow-500/50 -translate-y-2 rounded-2xl"
                    : "bg-[#243553] text-white hover:scale-[1.04] hover:shadow-yellow-500/30 rounded-xl"
                }`}
              >
                {/* TITLE */}
                <h2
                  className={`text-lg font-bold text-center pb-3 border-b-2 tracking-wide
                  ${
                    selectedBrand === brand
                      ? "border-yellow-600 text-black"
                      : "text-yellow-400 border-yellow-500"
                  }`}
                >
                  {brand}
                </h2>

                {/* LIST */}
                <ul className="mt-4 space-y-2 pr-1 text-sm leading-snug">
                  {brandDetails[brand].map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialization;
