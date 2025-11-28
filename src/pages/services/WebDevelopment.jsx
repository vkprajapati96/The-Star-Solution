import React from 'react'
import ContactUs from '../../components/ContactUs';

// import webDev from "../../assets/web-dev.jpg";
import web from "../../assets/image/webdevimg/web.png";


const WebDevelopment = () => {

  const features = [
  {
    title: "Custom Website Design",
    description:
      "Build High-Performance Websites That Convert & Grow Your Business. Professional, Responsive, And SEO-Optimized Website Development Designed To Increase Engagement, Boost Credibility, And Generate Real Business Results Across Every Device.",
  },
  {
    title: "Responsive And Mobile-Friendly Design",
    description:
      "Crafting Modern, Powerful & Conversion-Focused Websites. We Combine Creativity, Technology, And Strategic UX Design To Develop Fast, Secure, And Scalable Websites That Elevate Your Brand And Maximize Customer Conversion.",
  },
  {
    title: "Seamless Functionality",
    description:
      "Your Trusted Partner For Tailored Website Development Solutions. From Custom UI/UX Design To Seamless Functionality And Smart SEO Architecture — We Create Websites That Drive Growth, Build Trust, And Stand Out In The Competitive Digital World.",
  },
  {
    title: "Optimized For Performance",
    description:
      "Transform Your Online Presence With Result-Driven Web Development. We Deliver Beautifully Designed And Mobile-Friendly Websites Engineered For Speed, Search Rankings, And A Smooth Customer Experience That Turns Visitors Into Loyal Customers.",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Where Creative Design Meets Powerful Technology. We Develop Custom Business Websites With Optimized Performance, Intuitive Navigation, Responsive Layouts, And Conversion-Centric Features That Help Brands Scale Online.",
  },
  {
    title: "Engaging User Experience (UX)",
    description:
      "Build Smarter, Faster & More Engaging Digital Experiences. From eCommerce Websites To Corporate Portals, We Create User-Centric, Secure, And SEO-Enhanced Platforms That Support Long-Term Success And Measurable Growth.",
  },
];

  return (
    <>   
<div className="py-16 bg-[#1A3255] text-white">
  <div className="w-full max-w-[1340px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">

    {/* Left: Heading + Description */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 text-center lg:text-left">

      {/* Heading (unchanged) */}
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        <span className="text-yellow-400">
          Unlock Top-Tier Website Development
        </span>
        <br />
        <span className="text-yellow-400">
          to Grow Your Digital Presence
        </span>
      </h2>

      {/* Paragraph with first letter capitalized and line-height */}
      <p className="text-lg md:text-base leading-relaxed opacity-90  ">
        Build High-Performance Websites That Convert & Scale Your Business.
        Your Website Is The Face Of Your Brand And We Make Sure It Leaves A Lasting Impression.
        We Design And Develop Fast-Loading, SEO-Optimized, Mobile-Responsive, And Visually Stunning
        Websites That Help Businesses Attract Customers And Increase Sales. Whether You're Launching
        A New Site Or Upgrading An Existing One, Our Expert Developers Combine Modern UI/UX Design,
        Advanced Technology, And Smart Strategy To Deliver A Seamless Digital Experience.
      </p>

    </div>

    {/* Right: Image */}
    <div className="w-full lg:w-1/2 flex items-center justify-center">
      <img
        src={web}   // <-- apna image yaha laga dena
        alt="Website Development"
        className="w-full lg:max-w-[520px] rounded-2xl shadow-2xl object-cover"
      />
    </div>

  </div>
</div>

       
   <div className="bg-white py-16 px-6">
  <div className="max-w-[1340px] mx-auto text-center">

    {/* div Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
      Key Features of Our Web Development Services
    </h2>

    {/* Clean Description */}
    <p className="text-[14px] md:text-lg  text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
        We Develop Visually Appealing, Fast, And User-Friendly Websites Tailored To Your Business Needs.
  Our Expert Team Blends Creative Design, Cutting-Edge Technology, And Strategic SEO Practices
  To Ensure Your Website Not Only Looks Great But Also Performs Exceptionally — Helping You Attract,
  Engage, And Convert More Customers Online.
 </p>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-[#1A3255] text-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 text-left"
        >
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">
            {feature.title}
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>

  </div>
</div>

    <ContactUs/>

    
 
    </>
  )
}

export default WebDevelopment