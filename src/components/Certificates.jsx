import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import certi1 from "../assets/image/certificates/certificate1.jpg";
import certi2 from "../assets/image/certificates/certificate2.jpg";
import certi3 from "../assets/image/certificates/certificate3.jpg";
import certi4 from "../assets/image/certificates/certificate4.jpg";
// import certi5 from "../assets/image/certificates/certificate5.jpg";
import certi6 from "../assets/image/certificates/certificate6.jpg";
import certi7 from "../assets/image/certificates/certificate7.jpg";
import certi8 from "../assets/image/certificates/certificate8.jpg";
import certi9 from "../assets/image/certificates/certificate9.jpeg";

const Certificates = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 350;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const certificateImages = [
    certi1,
    certi2,
    certi3,
    certi4,
    // certi5,
    certi6,
    certi7,
    certi8,
    certi9,
  ];

  return (
    <div className="bg-[#f0f0f0]">
      <div className="max-w-[1340px] mx-auto w-full py-16 px-4 relative">
        {/* Heading */}
        <h2 className="text-center text-yellow-400 text-3xl sm:text-4xl font-bold mb-8">
          CERTIFICATES & ACHIEVEMENTS
        </h2>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="z-10 absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 bg-yellow-500 text-white p-2 rounded-full shadow-md hover:bg-yellow-600 transition sm:block"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="z-10 absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 bg-yellow-500 text-white p-2 rounded-full shadow-md hover:bg-yellow-600 transition sm:block"
        >
          <ChevronRight size={24} />
        </button>

        {/* Scrollable Image Row */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-2 sm:px-6 scroll-smooth"
        >
          {certificateImages.map((src, index) => (
            <div
              key={index}
              className="shrink-0 w-[260px] pt-4 sm:w-[300px] md:w-[340px] h-[220px] sm:h-[260px] md:h-[300px] flex items-center justify-center rounded-lg hover:scale-105 transition-transform duration-300 "
            >
              <img
                src={src}
                alt={`Certificate ${index + 1}`}
                className="w-full h-full object-contain rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
