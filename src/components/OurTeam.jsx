import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import team1 from "../assets/image/TeamImages/team1.jpeg";
import team2 from "../assets/image/TeamImages/team2.jpeg";
import team3 from "../assets/image/TeamImages/team3.jpeg";
import team4 from "../assets/image/TeamImages/team4.jpeg";
import team5 from "../assets/image/TeamImages/team5.jpeg";
import team6 from "../assets/image/TeamImages/team6.jpeg";
import team7 from "../assets/image/TeamImages/team7.jpeg";
import team8 from "../assets/image/TeamImages/team8.jpeg";
import team9 from "../assets/image/TeamImages/team9.jpeg";
import team10 from "../assets/image/TeamImages/team10.jpeg";
import team11 from "../assets/image/TeamImages/team11.jpeg";
import team12 from "../assets/image/TeamImages/team12.jpeg";
import team13 from "../assets/image/TeamImages/team13.jpeg";
import team14 from "../assets/image/TeamImages/team14.jpeg";
import team15 from "../assets/image/TeamImages/team15.jpeg";
import team16 from "../assets/image/TeamImages/team16.jpeg";
import team17 from "../assets/image/TeamImages/team17.jpeg";
import team18 from "../assets/image/TeamImages/team18.jpeg";
import team19 from "../assets/image/TeamImages/team19.jpeg";

const OurTeam = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth - 100;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const teamImages = [
    team1,
    team2,
    team3,
    team4,
    team5, // sk sir
    team19,
    team16,
    team15,
    team17,
    team18,
    team6,
    team7,
    team8,
    team9,
    team10,
    team11,
    team14,
    team12,
    team13,
  ];

  return (
    <section className="bg-[#f0f0f0] py-16 px-6">
      <div className="w-full max-w-[1340px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-600">
            OUR TEAM
          </h2>
        </div>

        {/* Scrollable Wrapper */}
        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-2 rounded-full shadow-md hover:bg-yellow-600 transition z-10"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Scrollable Images */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth px-10"
          >
            {teamImages.map((img, index) => (
              <div
                key={index}
                className="shrink-0 w-[220px] sm:w-[260px] md:w-[300px] transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={img}
                  alt={`team-${index}`}
                  className="w-full h-[250px] object-cover rounded-xl shadow-lg"
                />
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-2 rounded-full shadow-md hover:bg-yellow-600 transition z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
