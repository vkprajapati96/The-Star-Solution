import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Services = () => {
  const scrollRef = useRef(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const brands = [
    "Amazon",
    "Meesho",
    "Flipkart",
    "JioMart",
    "Amazon Global",
  ];
  const details = [
    "Brand Approval Assistance",
    "Listing & Cataloging",
    "Promotional activites",
    "Advertising & Marketing",
    "Return Safety Claims",
    "Monthly Sales Boost",
    "Rank improvement",
    "Account health management",
    "Feedback Management",
    "Training",
  ];

  const scrollLeft = () =>
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });

  const handleBrandClick = (brand, idx) => {
    setSelectedBrand(brand);
    // Scroll the card into view
    const card = scrollRef.current.children[0].children[idx];
    card.scrollIntoView({ behavior: "smooth", inline: "center" });
  };

  return (
    <div className="bg-[#2C4870] pt-16 pb-12 relative">
      <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-10">
        <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl text-yellow-600">
           Specialization

        </h1>

        {/* Brand buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-8">
          {brands.map((item, i) => (
            <div
              key={i}
              onClick={() => handleBrandClick(item, i)}
              className={`border border-slate-500 rounded-full px-4 sm:px-6 md:px-8 py-2 cursor-pointer transition-all duration-300 text-sm sm:text-base
                ${
                  selectedBrand === item
                    ? "bg-yellow-600 text-black scale-105"
                    : "text-white hover:bg-yellow-600 hover:text-black"
                }
              `}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Services cards */}
        <div className="relative mt-8">
          <button
            onClick={scrollLeft}
            className="cursor-pointer sm:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 text-white p-1.5 rounded-full transition-all duration-300 z-50"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={scrollRight}
            className=" cursor-pointer  sm:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 text-white p-1.5 rounded-full transition-all duration-300 z-50"
          >
            <ChevronRight size={18} />
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-auto scroll-smooth scrollbar-hide"
          >
            <div className="flex gap-4 sm:gap-6 p-4 sm:p-8 min-w-max">
              {brands.map((brand, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg p-4 sm:p-5 shadow-md min-w-[250px] sm:min-w-[280px] md:min-w-[300px] transition-all duration-300 transform
                    ${
                      selectedBrand === brand
                        ? "bg-white text-black scale-105 shadow-[0_0_25px_rgba(255,215,0,0.7)] -translate-y-2"
                        : "bg-[#243553] text-white hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.5)]"
                    }
                  `}
                >
                  <div
                    className={`border-b-2 py-2 text-xl sm:text-2xl font-bold text-center mb-3
                    ${
                      selectedBrand === brand
                        ? "border-yellow-500"
                        : "border-yellow-500 text-yellow-400"
                    }
                  `}
                  >
                    {brand}
                  </div>
                  <ul className="list-disc list-inside space-y-2 sm:space-y-3">
                    {details.map((item, i) => (
                      <li
                        key={i}
                        className={`${
                          selectedBrand === brand ? "text-black" : "text-white"
                        } text-xs sm:text-sm md:text-base`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
