import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import Amazon from "../assets/image/heroSectionImg/Amazon.webp";
import Ebay from "../assets/image/heroSectionImg/Ebay.webp";
import Etsy from "../assets/image/heroSectionImg/Etsy.webp";
import Walmart from "../assets/image/heroSectionImg/Walmart.webp";
import meesho from "../assets/image/heroSectionImg/Meesho.jpg";
import jiomart from "../assets/image/heroSectionImg/jiomart.jpg";
import flipkart  from "../assets/image/heroSectionImg/flipkart.webp";

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

          {/* card 1 */}
          <div className="absolute lg:top-12 left-45 ">
            <img
              className="w-[120px] h-[60px] object-contain rounded-full"
              src={Amazon}
              alt="amazon"
            />
          </div>

          {/* card 2 */}

          <div className="absolute  lg:top-56 left-8 ">
            <img
              className="w-[120px] h-[60px] object-contain rounded-full"
              src={Walmart}
              alt="flipkart"
            />
          </div>

          {/* card 3 */}

          <div className="absolute lg:top-[310px] left-12">
            <img className="w-96 h-96" src={meesho} alt="meesho" />
          </div>

      {/* card 4 */}

      <div className="absolute lg:top-[-120px] right-48">
      
    <img
    className="w-96 h-96 object-contain rounded-full"
    src={flipkart}
    alt="flipkart"
  />
    
      </div>

          {/* card 5 */}

          <div className="absolute lg:top-15 right-0">
            <img className="w-96 h-96" src={jiomart} alt="jiomart" />
          </div>

          {/* card 6 */}

          <div className="absolute  lg:top-[480px] right-44">
            <img
              className="w-[120px] h-[60px] object-contain rounded-full"
              src={Ebay}
              alt="ebay"
            />
          </div>

        </div>

        {/* Main Content */}
        <div className="w-full flex flex-col items-center text-center mt-20 md:mt-28">
          <h1 className="text-yellow-600 font-semibold text-3xl md:text-4xl flex flex-col gap-2">
            The Star Solution
            <span className="text-xl md:text-xl">Information Technology</span>
          </h1>

          <h2 className="text-lg font-semibold md:text-4xl lg:text-2xl text-white mt-4 leading-tight">
            Empowering Businesses with eCommerce, Web, and Digital Solutions.
          </h2>

          <p className="font-semibold lg:text-lg md:w-[700px] lg:w-[700px] text-white mt-6 md:mt-8 mx-auto px-2">
            We specialize in end-to-end eCommerce management, website and app
            development, product optimization, advertising strategy (ROI/ACOS
            improvement), and result-driven digital marketing services. Our goal
            is to help businesses scale across leading marketplaces such as
            Amazon, Walmart, eBay, Etsy, and Shopify, while also enhancing their
            online visibility through powerful website and Digital marketing
            solutions. We focus on building a strong, recognizable, and
            profitable brand presence with innovative and growth-oriented
            digital strategies.
          </p>

          {/* Buttons */}
          <div className="flex  justify-center pb-4 mt-10">
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
