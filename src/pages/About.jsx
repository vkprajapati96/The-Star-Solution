import { FaUsers, FaLightbulb, FaRocket } from "react-icons/fa";

// import { MapPin, Mail, Phone } from "lucide-react";
import ContactUs from "../components/ContactUs";

import about from "../assets/about.jpeg"
import about2 from "../assets/about2.jpeg"
import about3 from "../assets/about3.jpeg"

const About = () => {
  return ( <>
       <section className="py-16 bg-[#1A3255]">
     <div className="w-full max-w-[1340px] mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-10 text-center lg:text-left">

  {/* Text Div */}
  <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
    <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 flex justify-center lg:justify-start items-center gap-3">
      Grow 10X times faster by Our Expertise
    </h2>

    <p className="text-white text-lg md:text-base">
      Welcome to, your trusted partner in driving business growth and success.
      With a proven track record of excellence and innovation, we specialize in
      providing comprehensive services in IT, E-Commerce, Digital Marketing,
      and BPO (Business Process Outsourcing). Our goal is to empower businesses
      by streamlining their operations, enhancing their online presence, and
      delivering unmatched customer support solutions. With years of experience
      and a deep understanding of diverse industries, we pride ourselves on
      being a reliable and forward-thinking company.
    </p>

    <ul className="mt-4 flex flex-col gap-3 items-center lg:items-start">
      <li className="flex items-center gap-3 text-white">
        <FaUsers className="text-yellow-600 text-xl shrink-0" />
        Experienced Team
      </li>
      <li className="flex items-center gap-3 text-white">
        <FaRocket className="text-yellow-600 text-xl shrink-0" />
        Fast Business Growth
      </li>
      <li className="flex items-center gap-3 text-white">
        <FaLightbulb className="text-yellow-600 text-xl shrink-0" />
        Innovative Solutions
      </li>
    </ul>
  </div>

  {/* Image Div */}
  <div className="w-full lg:w-1/2 flex justify-center">
    <img
      src={about}
      alt="About Us"
      className="w-full h-auto rounded-lg shadow-lg object-cover"
    />
  </div>

</div>

  </section>




    <section className="py-12 md:py-16 bg-white">
    <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10 text-center lg:text-left">

  {/* Text Div (upar small screens pe) */}
  <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4 lg:gap-6">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-600">
      Who Are We?
    </h2>

    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
      The Star Solution Hundreds of suspended accounts from the e-commerce site have been revoked by The Star Solution in partnership with Upsell Ecommerce. Your account may be suspended temporarily or permanently due to various reasons. At The Star Solution, we provide a predetermined plan of action. Leave your differences to us and concentrate on your business expansion plans.
    </p>

    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
      With The Star Solution, you can navigate the complexities of account suspension and focus on growing your business.
    </p>

    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
      <strong>Our Vision:</strong> Build a streamlined, reliable, and growth-oriented support system for all e-commerce businesses to help them thrive without interruptions.
    </p>
  </div>

  {/* Image Div (neeche small screens pe) */}
  <div className="w-full lg:w-1/2 flex justify-center">
    <img
      src={about2}
      alt="Who Are We"
      className="w-full h-auto rounded-lg shadow-lg object-cover"
    />
  </div>

</div>

    </section>  

        <section className="py-12 md:py-16" style={{ backgroundColor: "#1A3255" }}>
<div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10">

  {/* Text Div (lg ke niche upar aur center aligned) */}
  <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4 lg:gap-6 text-center lg:text-left">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-600">
      Our Vision
    </h2>
    <p className="text-white text-base sm:text-lg lg:text-base leading-relaxed">
      To be a global leader in providing innovative, reliable, and customer-centric business solutions that drive growth and create lasting value for our clients. Our vision extends beyond delivering exceptional services—we aim to redefine industry standards by fostering a culture of innovation and excellence. We aspire to build a future where businesses of all sizes can achieve their full potential with confidence and ease. By embracing emerging technologies and prioritizing sustainability, we envision creating a positive and enduring impact on the business world and the communities we serve.
    </p>
  </div>

  {/* Image Div (lg ke niche niche aa jaye aur full width le) */}
  <div className="w-full lg:w-1/2 flex justify-center">
    <img
      src={about3}
      alt="Our Vision"
      className="w-full h-auto rounded-lg shadow-lg object-cover"
    />
  </div>
</div>



    </section>

    {/*  contact section */}

    <ContactUs/>
       </>

  );
};

export default About;
