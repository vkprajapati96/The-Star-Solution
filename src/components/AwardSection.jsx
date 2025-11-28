import React from "react";
// import video from "../assets/Award2.mp4";

const AwardSection = () => {
  return (
    <div className="bg-white py-16 px-6">
      {/* Parent container with proper width control */}
      <div className="max-w-[1340px] w-full mx-auto flex flex-col lg:flex-row items-center lg:items-stretch gap-10">
        {/* Left Side - Text Content */}
        <div className="flex-1 text-center md:text-left flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4">
            Amazon Gold Partner Award
          </h2>
      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
  We Are Honored To Be Recognized As One Of India’s Leading Amazon Service Providers, Proudly Awarded The Prestigious Amazon Gold Partner Title. This Achievement Reflects Our Consistent Performance, Trusted Expertise, And Proven Ability To Help Brands Scale On One Of The World’s Largest E-Commerce Platforms. As A Certified Amazon Gold Partner, We Bring Advanced Tools, Marketplace Insights, And Strategic Guidance That Give Our Clients A Strong Competitive Advantage. Whether You Are A New Seller Or An Established Brand, We Offer End-To-End Support—From Account Setup To Advertising, Cataloging, SEO Optimization, And Growth Strategy. At The Star Solution, We Are Your Trusted Amazon Partner, Dedicated To Driving Sustainable Sales, Improved Visibility, And Long-Term E-Commerce Success.
</p>

        </div>

        {/* Right Side - Full-width Video */}
        <div className="flex-1 w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[210px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-xl shadow-lg object-cover"
          >
            <source
              src="https://res.cloudinary.com/dq0nsixu6/video/upload/v1763184366/Award2_tp9vwp.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default AwardSection;
