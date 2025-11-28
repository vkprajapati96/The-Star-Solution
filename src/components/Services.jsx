
import React from "react";
import { Link } from "react-router-dom";

const  Services = () => {
const services = [
  {
    title: "Grow Your Ecommerce",
    desc: "Boost Your Online Sales With Complete Amazon, Flipkart, Meesho, Walmart, And Ebay Account Management. We Handle Product Listing, Cataloging, SEO, A+ Content, Brand Store, And Marketplace Growth Strategies To Enhance Visibility, Attract Customers, And Increase Conversions.",
    path: "/services/ecommerce",
  },
  {
    title: "Digital Marketing",
    desc: "Grow Your Brand Online With Result-Driven SEO, Social Media Marketing, PPC Ads, Content Creation, And Targeted Campaigns. We Help Increase Website Traffic, Boost Brand Awareness, And Drive Consistent, High-Quality Conversions.",
    path: "/services/digital-marketing",
  },
  {
    title: "Product Photography",
    desc: "Make Your Products Stand Out With High-Quality, Clear, And Conversion-Focused Product Photography For Amazon, Flipkart, And Other Marketplaces. Our Professional Images Help Improve Trust, Visibility, And Sales.",
    path: "/services/product-photography",
  },
  {
    title: "Web Development",
    desc: "Get Custom, Responsive, And User-Friendly Business Websites And Shopify Stores Tailored To Your Brand. We Ensure Smooth Performance, Modern Design, And Seamless Functionality For A Strong Online Presence.",
    path: "/services/web-development",
  },
  {
    title: "App Development",
    desc: "We Build Custom, High-Performance Android And IOS Mobile Apps With Intuitive Design And Powerful Functionality. From Concept To Launch, We Deliver Apps That Engage Users And Support Business Growth.",
    path: "/services/app-development",
  },
  {
    title: "Bpo Services",
    desc: "Streamline Your Operations With Reliable Customer Support, Data Entry, Telecalling, Backend Management, And Process Outsourcing Services. We Help You Reduce Workload, Cut Costs, And Improve Efficiency.",
    path: "/services/bpo",
  },
];

  return (
    <div className="bg-[#F6F6F6]">
      <div className="w-full max-w-[1340px] mx-auto py-16 px-4 md:px-12 lg:px-20">
        {/* Heading */}
        <h2 className="text-center text-yellow-500 text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
           Our Services
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Link
              key={i}
              to={service.path} //  Route path added here
              className="bg-[#243553] rounded-lg p-6 shadow-md hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,0,0.5)] transition-all duration-300 text-white cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-sm text-gray-300 text-center leading-relaxed">
                {service.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};


 export default Services;

// export default ;
