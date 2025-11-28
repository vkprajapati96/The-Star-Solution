import { FaUsers, FaLightbulb, FaRocket } from "react-icons/fa";
import ContactUs from "../components/ContactUs";


import about1 from "../assets/image/about/about1.png";
import about2 from "../assets/image/about/about2.png";
import about3 from "../assets/image/about/about3.png";
import about4 from "../assets/image/about/about4.png";


const About = () => {
  return (
 <>
  {/* ------------------ div 1 ------------------ */}
  <div className="py-16 bg-[#1A3255]">
    <div className="w-full max-w-[1340px] mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-10 text-center lg:text-left">

      {/* Text Div */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 flex justify-center lg:justify-start items-center gap-3">
          Grow 10X Faster with Our Expertise
        </h2>

<p className="text-white text-lg md:text-base">
  Welcome To The Star Solution — Your Trusted Partner In Driving Business Growth And Digital Transformation.
  We Specialize In Delivering High-Quality IT Services, E-Commerce Management, Digital Marketing,
  And BPO Solutions That Empower Brands To Grow Smarter And Faster.

  <br /><br />
  With A Proven History Of Results, We Combine Strategy, Innovation, And Technology To Strengthen Your Brand.
  Our Focus Is To Simplify Operations, Enhance Online Visibility, And Deliver Reliable Support While
  You Focus On Scaling Your Business.

  <br /><br />
  Backed By Years Of Experience And Deep Market Understanding, We Offer Expert Guidance,
  Consistent Performance, And Future-Ready Solutions Tailored Specifically To Your Business Needs.
  At The Star Solution, We Believe In Long-Term Value, Measurable Growth, And Exceptional Service.
</p>


        <strong className="text-white text-lg">Why Businesses Trust Us:</strong>

        <div className="flex flex-col gap-3 mt-3 items-center lg:items-start">

        <div className="flex items-center gap-3 text-white">
  <FaUsers className="text-yellow-600 text-xl" />
  Skilled & Experienced Team
</div>

<div className="flex items-center gap-3 text-white">
  <FaRocket className="text-yellow-600 text-xl" />
  Fast Business Growth
</div>

<div className="flex items-center gap-3 text-white">
  <FaLightbulb className="text-yellow-600 text-xl" />
  Innovative Solutions
</div>


        </div>

      </div>

      {/* Image Div */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={about1}
          alt="About Us"
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

    </div>
  </div>

  {/* ------------------ div 2 ------------------ */}
  <div className="py-12 md:py-16 bg-white">
    <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 
      flex flex-col lg:flex-row items-center lg:items-start 
      gap-8 lg:gap-10 text-center lg:text-left">

      {/* Text */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4 lg:gap-4 order-1 lg:order-2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400">
          Who Are We?
        </h2>

<p className="text-gray-800 text-base sm:text-lg leading-relaxed">
  The Star Solution Is A Complete Growth-Focused Agency Helping Businesses Scale Effortlessly In
  The Digital World. We Specialize In IT Services, E-Commerce Growth, Digital Marketing, And BPO Support — 
  Offering Seamless, End-To-End Solutions That Boost Productivity And Profitability.
</p>

<p className="text-gray-800 text-base sm:text-lg leading-relaxed">
  Whether You're A Startup, SME, Or Established Brand, We Provide The Strategy, Expertise, And 
  Technology Needed To Accelerate Your Growth. Our Professional Team Ensures Reliable, Data-Driven, 
  And Result-Oriented Services Built For Real Business Impact.
</p>

<p className="text-gray-800 text-base sm:text-lg leading-relaxed">
  At Our Core, We Are Innovators, Problem-Solvers, And Growth Enablers — Helping Businesses Create 
  Strong Digital Foundations And Achieve Sustainable Success In Competitive Markets.
</p>

      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
        <img
          src={about2}
          alt="Who Are We"
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

    </div>
  </div>

  {/* ------------------ div 3 ------------------ */}
  <div className="py-12 md:py-16" style={{ backgroundColor: "#1A3255" }}>
    <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10">

      {/* Text */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4 lg:gap-6 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400">
          Our Vision
        </h2>

<p className="text-white text-base sm:text-lg leading-relaxed">
  Our Vision Is To Become A Global Leader In IT Services, E-Commerce Management, 
  Digital Marketing, And BPO Solutions — Empowering Brands To Grow Smarter And More Efficiently
  In The Evolving Digital Era.
</p>

<p className="text-white text-base sm:text-lg leading-relaxed">
  We Aim To Create A Future Where Businesses Of All Sizes Gain Access To Technology,
  Seamless Operations, And Profitable Online Scaling — Without Complexity.
</p>

<p className="text-white text-base sm:text-lg leading-relaxed">
  With Innovative Strategies, Advanced Solutions, And Exceptional Support, We Strive To Build
  A Strong Digital Ecosystem Where Businesses Achieve Visibility, Performance, And Long-Term Success.
</p>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={about3}
          alt="Our Vision"
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

    </div>
  </div>

  {/* ------------------ div 4 ------------------ */}
  <div className="py-12 md:py-16 bg-white text-black">
    <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 
      flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10">

      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
        <img
          src={about4}
          alt="Our Mission"
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Text */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4 lg:gap-6 text-center lg:text-left order-1 lg:order-2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400">
          Our Mission
        </h2>

<p className="text-base sm:text-lg leading-relaxed">
  Our Mission Is To Empower Brands With Modern IT Solutions, Smart E-Commerce Growth,
  Effective Digital Marketing, And High-Quality BPO Services That Generate Measurable Results.
</p>

<p className="text-base sm:text-lg leading-relaxed">
  We Aim To Simplify Complex Digital Operations, Enhance Brand Visibility, And Deliver Seamless 
  Support That Helps Businesses Scale Confidently.
</p>

<p className="text-base sm:text-lg leading-relaxed">
  Through Innovation, Reliability, And Customer-First Strategies, We Build Long-Term Partnerships 
  That Enable Sustainable Growth And Strong Digital Success.
</p>

      </div>

    </div>
  </div>

  {/* ------------------ div 5 ------------------ */}
  <div className="w-full bg-[#1A3255] py-16 px-4 flex items-center justify-center">
    <div className="w-full max-w-[1340px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-10">
        Our Values
      </h2>

      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-8
        w-full
        place-items-center">

        {[
  {
    title: "Integrity & Transparency",
    text: "We Believe In Honest Communication, Ethical Practices, And Delivering Exactly What We Commit."
  },
  {
    title: "Innovation & Creativity",
    text: "We Adopt The Latest Technology And Creative Ideas To Provide Impactful, Modern Digital Solutions."
  },
  {
    title: "Client-Centric Approach",
    text: "Your Success Is Our Focus. We Design Every Service To Meet Your Exact Goals And Business Needs."
  },
  {
    title: "Quality & Excellence",
    text: "We Maintain Top-Quality Standards Across All Services — From IT Development To Marketplace Operations."
  },
  {
    title: "Commitment & Reliability",
    text: "We Ensure Consistent Delivery, Dedicated Support, And Complete Responsibility In Every Project."
  }
].map((item, index) => (
          <div
            key={index}
            className="
            w-full max-w-[360px] bg-white/10 backdrop-blur-md shadow-xl 
            border border-white/20 rounded-2xl p-6 hover:scale-105 
            transition duration-300">

            <h3 className="text-xl font-semibold text-yellow-300 mb-3 text-center">
              {item.title}
            </h3>
            <p className="text-white text-center leading-6">{item.text}</p>
          </div>
        ))}

      </div>
    </div>
  </div>

  {/* ------------------ div 6 ------------------ */}
  <div className="w-full bg-white py-16 px-4 flex items-center justify-center">
    <div className="w-full max-w-[1340px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A3255] text-center mb-10">
        Why Choose Us?
      </h2>

      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-8
        w-full
        place-items-center">

        {[
  {
    title: "End-to-End Services",
    text: "IT, E-Commerce, Marketing, And BPO Support — Everything Under One Roof For Seamless Growth."
  },
  {
    title: "Experienced Professionals",
    text: "A Skilled Team With Strong Industry Knowledge And Marketplace Expertise."
  },
  {
    title: "Result-Driven Strategies",
    text: "We Focus On Measurable Outcomes — Higher Sales, Stronger Visibility, And Efficient Operations."
  },
  {
    title: "Customised Solutions",
    text: "We Create Tailored Strategies Designed Specifically For Your Business Goals."
  },
  {
    title: "Affordable Pricing",
    text: "Premium-Quality Services Provided At Competitive And Budget-Friendly Pricing."
  },
  {
    title: "Proven Track Record",
    text: "Trusted By Multiple Industries With Successful Digital Growth Stories."
  }
].map((item, index) => (
          <div
            key={index}
            className="
            w-full max-w-[360px] bg-black/5 backdrop-blur-md 
            shadow-lg border border-black/10 rounded-2xl p-6 
            hover:scale-105 transition duration-300">

            <h3 className="text-xl font-semibold text-[#1A3255] mb-3 text-center">
              {item.title}
            </h3>
            <p className="text-gray-700 text-center leading-6">{item.text}</p>
          </div>
        ))}

      </div>
    </div>
  </div>

  {/* ------------------ div 7 ------------------ */}
  <div className="w-full bg-blue-900 text-white py-20 px-6 md:px-16">
    <div className="max-w-5xl mx-auto flex flex-col gap-10">

      <h2 className="text-3xl md:text-5xl font-bold text-center">
        Our Journey / Our Story
      </h2>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-xl flex flex-col gap-6">

<p className="text-base md:text-lg leading-relaxed">
  The Star Solution Began With A Clear Mission — To Make Digital Growth Simple, Powerful,
  And Accessible For Every Business. What Started As A Small Service Provider Has Now Grown
  Into A Multi-Service Agency Offering IT Development, E-Commerce Management, Digital Marketing,
  And BPO Solutions To Brands Across India And Beyond.
</p>

<p className="text-base md:text-lg leading-relaxed">
  With Continuous Innovation, Dedication, And A Strong Focus On Quality, We’ve Built A Reputation
  For Delivering Reliable And High-Impact Digital Services. Today, We Proudly Support Startups, SMEs,
  And Established Brands In Strengthening Their Online Presence, Boosting Sales, And Building Successful Digital Ecosystems.
</p>

<p className="text-base md:text-lg leading-relaxed">
  Our Journey Reflects Our Commitment To Help Businesses Grow With Confidence — Through Smart Solutions,
  Modern Technology, And Unmatched Service.
</p>

      </div>
    </div>
  </div>

  {/* CONTACT div */}
  <ContactUs />
</>

  );
};

export default About;
