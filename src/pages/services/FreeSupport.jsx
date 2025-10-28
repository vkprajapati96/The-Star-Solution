import React from "react";
import ContactUs from "../../components/ContactUs";

import freeSupport from "../../assets/freeSupport.jpeg"

const FreeSupport = () => {
const features = [
    {
      title: "SHassle-Free Seller Account Setup:",
      description:
        "Setting up a seller account can seem daunting, but our free support ensures that the process is smooth and straightforward. We assist with everything from registering your account, verifying details, and understanding platform policies to configuring payment gateways and managing your account settings. Our goal is to make the process as effortless as possible, so you can focus on growing your business from the start.",
    },
    {
      title: "Expert Guidance on Product Listing:",
      description:
        "Once your account is set up, creating high-quality product listings is key to attracting customers. Our team offers free support by providing tips on writing compelling product titles, descriptions, and selecting the right images. We also help you optimize your listings for search engines within the platform, ensuring they are visible and appealing to potential buyers.",
    },
    {
      title: "Inventory and Order Management Assistance:",
      description:
        "Managing inventory can be overwhelming, especially for new sellers. Our free support includes guidance on how to effectively track stock levels, manage product availability, and streamline order processing. With our help, you can ensure timely deliveries and prevent issues like overselling, leading to a smoother experience for both you and your customers.",
    },
    {
      title: "Understanding Platform Policies and Best Practices:",
      description:
        "Each marketplace has its own set of rules and regulations. We help you understand the policies of Amazon, Flipkart, and other platforms so that you avoid common mistakes that can affect your seller status. Whether it's understanding seller fees, return policies, or customer service standards, our free support ensures you’re always in the know.",
    },
    {
      title: "Free Troubleshooting and Issue Resolution:",
      description:
        "If you face any technical issues or account-related challenges, our team is here to assist. Whether it's a listing getting flagged or an order issue, we provide guidance on how to resolve these problems quickly, saving you time and frustration.",
    },

    {
      title: "Optimizing Sales Strategies and Marketing:",
      description:
        "Once your store is set up, the next step is driving traffic and boosting sales. We provide free advice on using the tools and features available on the platform, such as promotions, discounts, ads, and campaigns. We also offer guidance on how to use social media and other digital marketing strategies to reach your target audience.",
    },
  ];
  


  return (
  <>
    <section className="bg-[hsl(216,53%,22%)] py-16 px-6">
      <div className="max-w-[1340px] mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-600 leading-snug">
              Free Account <br className="hidden sm:block" />
            & Management Support <br className="hidden md:block" />
            for Your Ecommerce Store
          </h2>

          <p className="text-white text-sm sm:text-base leading-relaxed max-w-[600px] mx-auto lg:mx-0">
            We understand the challenges e-commerce sellers face on platforms like
            Amazon and Flipkart. To help, we offer free support to guide you
            through every step, whether you're starting out or optimizing your
            store. Our dedicated team provides expert advice and hands-on
            assistance to help you succeed in the competitive e-commerce world.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
          src={freeSupport}
            alt="Ecommerce Support"
            className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[85%] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
          />
        </div>
      </div>
    </section>

    
         <div className="bg-white py-16 px-6">
      <div className="max-w-[1340px] mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-10">
Comprehensive Free Support for Sellers

        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1A3255] text-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 text-left"
            >
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">
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
    
  );
};

export default FreeSupport;
