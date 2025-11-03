import React from "react";
import { HashLink } from "react-router-hash-link";
import heroimg1 from "../assets/heroimg1.webp"
import heroimg2 from "../assets/heroimg2.png"
import heroimg3 from "../assets/heroimg3.png"
import heroimg4 from "../assets/heroimg4.png"
import { Link } from "react-router-dom";

const HeroSection = () => {
  const services = [
  { name: "Ecommerce", path: "/services/ecommerce" },
  { name: "Digital Marketing", path:"/services/digital-marketing " },
  { name: "Web Development", path: "/services/web-development" },
  { name: "App Development", path: "/services/app-development" },
  { name: "BPO Service", path: "/services/bpo" },
];


  return (
    <div className="bg-[hsl(216,53%,22%)]">
      <div className="relative md:pb-20 flex flex-col items-center w-full max-w-[1340px] mx-auto px-4 md:px-8 bg-[#1A3255]">
        <div className="lg:block hidden">
          {/* absolute left dives */}
          <div className="hidden md:block absolute md:top-[90px] lg:top-16 left-16 w-[120px] h-[100px]">
            <img
              className="rounded-full h-28 w-28"
              src={heroimg1}
              alt="web development"
            />
          </div>

          <div className="hidden md:block absolute md:top-[390px] lg:top-96 left-20 w-[120px] h-[100px]">
            <img
              className="rounded-full h-28 w-28"
              src={heroimg3}
              alt="Walmart"
            />
          </div>

          {/* absolute right dives */}
          <div className="hidden md:block absolute md:top-[50px] lg:top-[40px] right-32 w-[150px] h-[100px]">
            <img
              className="h-32"
              src={heroimg2}
              alt="meta add"
            />
          </div>

          <div className="hidden md:block absolute md:top-[450px] lg:top-96 right-28 w-[150px] h-[100px]">
            <img
              className="w-full"
              src={heroimg4}
              alt="eBay"
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

   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-between mt-14 lg:mt-20 mb-8 lg:mb-0 px-4 md:px-0">
  {services.map((service, index) => (
    <Link
      key={index}
      to={service.path}
      className="flex justify-center items-center 
                 px-5 py-2 rounded-full shadow-md border border-white text-white  
                 font-semibold transition-all duration-300 
                 hover:bg-yellow-600 hover:text-white hover:border-none hover:scale-105 
                 whitespace-nowrap overflow-hidden text-ellipsis text-center
                 text-sm sm:text-base"
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
