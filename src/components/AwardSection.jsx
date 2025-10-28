import React from "react";
import video from "../assets/awardVideo.mp4";

const AwardSection = () => {
  return (
    <section className="bg-white py-16 px-6">
      {/* Parent container with proper width control */}
      <div className="max-w-[1340px] w-full mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-10">
        
        {/* Left Side - Text Content */}
        <div className="flex-1 text-center md:text-left flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-4">
            Amazon Gold Partner Award
          </h2>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            We are proud to be recognized as one of the leading Amazon service
            providers in India, recently honored with the prestigious title of
            Amazon Gold Partner. This award is a testament to our consistent
            performance, trust, and commitment to helping businesses grow on one
            of the world's biggest e-commerce platforms. As a certified Amazon
            Gold Partner, we bring unmatched insights, tools, and access that
            give our clients a competitive edge. Whether you are a budding
            entrepreneur or an established brand, we are your one-stop solution
            for your business growth.
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
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
