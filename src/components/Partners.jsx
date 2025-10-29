import React from "react";
import amazon from "../assets/partnerImg/Amazon.png";
import flipkart from "../assets/partnerImg/flipkart.webp";
import myntra from "../assets/partnerImg/Myntra-Logo.png";
import meesho from "../assets/partnerImg/meesho.png";
import swiggy from "../assets/partnerImg/swiggy.png";
import byjus from "../assets/partnerImg/Byju's.png";
import glowroad from "../assets/partnerImg/glowRoad.webp";
import cars24 from "../assets/partnerImg/cars24.png";
import hcl from "../assets/partnerImg/HCL.png";
import jioMart2 from "../assets/partnerImg/JioMart-.jpg";
import tcs from "../assets/partnerImg/tcs.png";
import zomato from "../assets/partnerImg/Zomato.png";
import fundnation from "../assets/partnerImg/fundnation.jpeg";

const PartnersSection = () => {
  // All logos in a single array for uniform structure
  const partners = [
    amazon,
    flipkart,
    myntra,
    meesho,
    fundnation,
    jioMart2,
    swiggy,
    byjus,
    glowroad,
    cars24,
    hcl,
    tcs,
    zomato,
  ];

  return (
    <section className="bg-gray-900 py-14">
      <div className="max-w-[1340px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-yellow-600 text-3xl font-bold mb-12">
          OUR PARTNERS
        </h2>

        {/* Grid of Logos */}
        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-4 
            lg:grid-cols-6 
            gap-6 
            justify-items-center
          "
        >
          {partners.map((logo, index) => (
            <div
              key={index}
              className="
                bg-white 
                flex 
                justify-center 
                items-center 
                p-4 
                rounded-xl 
                shadow-md 
                hover:shadow-lg 
                hover:scale-105 
                transition-all 
                duration-300 
                w-full 
                h-[100px]
              "
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="max-h-[60px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
