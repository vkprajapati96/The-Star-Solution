import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import walmart from "../assets/image/heroSectionImg/Walmart.png";
import amazon from "../assets/image/heroSectionImg/Amazon.png";
import ebay from "../assets/image/heroSectionImg/Ebay.png";


import meesho from "../assets/image/heroSectionImg/Meesho.jpg";
import jiomart from "../assets/image/heroSectionImg/jiomart.jpg";
import flipkart from "../assets/image/heroSectionImg/flipkart.webp";

const HeroSection = () => {
  const services = [
    { id: 1, name: "Ecommerce", path: "/services/ecommerce" },
    { id: 2, name: "Digital Marketing", path: "/services/digital-marketing" },
    { id: 3, name: "Web Development", path: "/services/web-development" },
    { id: 4, name: "App Development", path: "/services/app-development" },
    { id: 5, name: "BPO Service", path: "/services/bpo" },
  ];

  return (
    <div className="bg-[hsl(216,53%,22%)]">
      <div className="relative md:pb-20 flex flex-col items-center w-full max-w-[1340px] mx-auto px-4 md:px-8 bg-[#1A3255]">
        <div className="lg:block hidden">
          {/* absolute left dives */}
          <div>
            {/* card 1  #  */}

            <div className="absolute lg:top-15 left-40 ">
              <img
                className="w-[140px] h-20 object-contain rounded-full"
                src={amazon}
                alt="amazon"
              />
            </div>

            {/* card 2 # */}

            <div className="absolute  lg:top-70 left-5 ">
              <img
                className="w-[140px] h-20 object-contain rounded-full"
                src={walmart}
                alt="walmart"
              />{" "}
            </div>

            {/* card 3 */}

            <div className="absolute lg:top-[490px] left-40">
              <img
                className="w-[140px] h-20 object-contain rounded-full"
                src={meesho}
                alt="meesho"
              />
            </div>
          </div>


{/* absolute right div */}
          <div>
            {/* card 4 */}

            <div className="absolute lg:top-15 right-40">
              <img
                className="w-[140px] h-20 object-contain rounded-full"
                src={flipkart}
                alt="flipkart"
              />
            </div>

            {/* card 5 */}

            <div className="absolute lg:top-70 right-5">
              <img
                className="w-[140px] h-20 object-contain rounded-full"
                src={jiomart}
                alt="jiomart"
              />{" "}
            </div>

            {/* card 6 */}

            <div className="absolute  lg:top-[490px] right-40">
              <img
                className="w-[140px] h-20 object-contain rounded-full"
                src={ebay}
                alt="ebay"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full flex flex-col items-center text-center mt-20 md:mt-24">
          <h1 className="text-yellow-400 font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight drop-shadow-[0_4px_10px_rgba(255,255,255,0.15)]">
            The Star Solution
            <span className="block text-white text-lg sm:text-xl md:text-2xl font-medium mt-1 tracking-wide">
              Information Technology
            </span>
          </h1>

          <h2 className="text-lg font-semibold md:text-2xl lg:text-xl text-white mt-4 leading-tight ">
            Empowering Businesses with eCommerce, Digital Marketing & Web
            Solutions
          </h2>

          <p className="font-semibold  lg:text-md sm:text-md md:w-[700px] lg:w-[760px] text-white mt-5 md:mt-8 mx-auto px-2 ">
            At The Star Solution, We Help Brands Grow Across Leading
            Marketplaces Such As Amazon, Flipkart, Meesho, Walmart, EBay, Etsy,
            And JioMart With Complete Ecommerce Management And Optimization
            Services. We Specialize In Amazon Account Management, Product
            Listing, Cataloging, A+ Content, Brand Store Creation, SEO
            Optimization, ACOS/ROI Improvement, And Marketplace Growth
            Strategies. Along With Ecommerce Services, We Also Build
            High-Performance Websites, Shopify Stores, Mobile Applications, And
            Deliver Result-Driven Digital Marketing Solutions To Boost
            Visibility, Traffic, And Sales. Our Mission Is To Help Businesses
            Create A Strong, Profitable, And Scalable Online Presence Through
            Data-Driven, Growth-Oriented Digital Strategies.{" "}
          </p>

          {/* Buttons */}
          <div className="flex  justify-center pb-4 mt-12">
            <HashLink to="#contact">
              <button className="cursor-pointer px-10 md:px-14 py-2 text-white text-lg font-semibold border border-yellow-400 rounded-full hover:shadow-[0_4px_8px_rgba(253,224,71,0.4)] transition-shadow duration-300">
                Get Free Consultation
              </button>
            </HashLink>
          </div>
        </div>

        {/* service cards */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-14 lg:mt-20 mb-8 lg:mb-0 px-4 md:px-0 relative">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.path}
              className="flex justify-center items-center 
        px-5 py-2 rounded-full border border-white text-white  
        font-semibold transition-all duration-300 
        hover:bg-yellow-600 hover:text-white hover:border-transparent hover:scale-105 
        whitespace-nowrap overflow-hidden text-ellipsis text-center
        text-sm sm:text-base cursor-pointer relative z-10"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
