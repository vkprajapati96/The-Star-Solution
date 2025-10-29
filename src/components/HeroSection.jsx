import React from "react";
import { HashLink } from "react-router-hash-link";

const HeroSection = () => {
  const services = [
    "Ecommerce",
    "Digital Marketing",
    "Web/App Development",
    "BPO Service",
  ];

  return (
    <div className="bg-[hsl(216,53%,22%)]">
      <div className="relative min-h-screen md:pb-20 flex flex-col items-center w-full max-w-[1340px] mx-auto px-4 md:px-8 bg-[#1A3255]">
        <div className="lg:block hidden">
          {/* absolute left dives */}
          <div className="hidden md:block absolute md:top-[90px] lg:top-16 left-16 w-[120px] h-[100px]">
            <img
              className="rounded-full h-28 w-28"
              src="https://cdn.dribbble.com/userupload/16488169/file/original-63846b87d5e1b30dd8410c06f26db67f.png?resize=752x&vertical=center"
              alt="web development"
            />
          </div>

          <div className="hidden md:block absolute md:top-[390px] lg:top-96 left-20 w-[120px] h-[100px]">
            <img
              className="rounded-full h-28 w-28"
              src="https://cdn-icons-png.freepik.com/512/8026/8026439.png"
              alt="Walmart"
            />
          </div>

          {/* absolute right dives */}
          <div className="hidden md:block absolute md:top-[50px] lg:top-[40px] right-32 w-[150px] h-[100px]">
            <img
              className="h-32"
              src="https://cdn-icons-png.flaticon.com/512/8329/8329537.png"
              alt="meta add"
            />
          </div>

          <div className="hidden md:block absolute md:top-[450px] lg:top-96 right-28 w-[150px] h-[100px]">
            <img
              className="w-full"
              src="https://img.pikbest.com/origin/10/42/93/55IpIkbEsTJhy.png!sw800"
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

        {/* <div className='hidden md:flex justify-center'>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 md:mt-20">
        
            <img
              src="https://spectrumbpo.com/wp-content/uploads/2025/10/LG-03.webp?w=100&h=40"
              alt="Logo1"
            />
            <img
              src="https://spectrumbpo.com/wp-content/uploads/2025/10/LG-04.webp?w=100&h=40"
              alt="Logo2"
            />
            <img
              src="https://spectrumbpo.com/wp-content/uploads/2025/10/LG-01.webp?w=100&h=40"
              alt="Logo3"
            />
            <img
              src="https://spectrumbpo.com/wp-content/uploads/2025/10/LG-02.webp?w=100&h=40"
              alt="Logo5"
            />
          </div>
        </div> */}

    <div className="grid grid-cols-2 md:grid-cols-4  gap-3  justify-between mt-14 mb-8 lg:mb-[0px] ">
  {services.map((service, index) => (
    <div
      key={index}
      className="flex justify-center items-center rounded-full shadow-md text-xl font-semibold text-center px-4 py-2 border border-white text-white  "
    >
      {service}
    </div>
  ))}
</div>




      </div>
    </div>
  );
};

export default HeroSection;
