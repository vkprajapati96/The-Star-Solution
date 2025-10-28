import React from "react";
import amazon from "../assets/partnerImg/Amazon.png";
import flipkart from  "../assets/partnerImg/flipkart.webp"
import myntra from    "../assets/partnerImg/Myntra-Logo.png"
import meesho from    "../assets/partnerImg/meesho.png"
import swiggy from    "../assets/partnerImg/swiggy.png"
import byjus from     "../assets/partnerImg/Byju's.png";
import glowroad from  "../assets/partnerImg/glowRoad.webp"
import cars24 from  "../assets/partnerImg/cars24.png"
import hcl from  "../assets/partnerImg/HCL.png"
// import jioMart from  "../assets/partnerImg/jiomart.png"
import jioMart2 from  "../assets/partnerImg/JioMart-.jpg"
import tcs from  "../assets/partnerImg/tcs.png"
import  zomato  from "../assets/partnerImg/Zomato.png"

const PartnersSection = () => {
  const partnersRow1 = [amazon, flipkart,meesho,jioMart2,glowroad,cars24];
  const partnersRow2 = [myntra,zomato,tcs,hcl ,byjus, swiggy];

  return (
    <div className="bg-gray-900">
      <div className="max-w-[1340px] mx-auto px-4 w-full py-12">
        <h2 className="text-center text-yellow-600 text-3xl font-bold mb-10">
          Our Partners
        </h2>

        <div className="flex flex-col items-center gap-8">
          {/* -------- First Row -------- */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 w-[90%] md:w-[80%]">
            {partnersRow1.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center bg-white p-4 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="w-25 h-25 object-contain"
                />
              </div>
            ))}
          </div>

          {/* -------- Second Row -------- */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 w-[90%] md:w-[80%]">
            {partnersRow2.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center bg-white p-4 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 7}`}
                  className="w-25 h-25 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
