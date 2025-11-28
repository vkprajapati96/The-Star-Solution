import React from "react";
import ContactUs from "../../components/ContactUs";

import dashboard1 from "../../assets/dashboard1.png";
import dashboard2 from "../../assets/dashboard2.jpeg";
import dashboard3 from "../../assets/dashboard3.jpeg";

// import about from "../../assets/about.jpeg";
import ecom1 from "../../assets/image/ecommerce/ecom1.png";
import ecom2 from "../../assets/image/ecommerce/ecom2.png";

const Ecommerce = () => {
  return (
    <>
    
      {/* div 1 */}
      <div className="py-16 bg-[#1A3255]">
        <div className="w-full max-w-[1340px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          {/* Text Div */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 text-white text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 leading-tight">
              Grow Your Online Business
              <span className="block text-yelloe-400 mt-1">With Professional</span>
              <span className="block text-yellow-400">
                Marketplace Management
              </span>
            </h2>

<p className="text-lg md:text-base leading-relaxed opacity-90">
  At{" "}
  <span className="font-semibold text-yellow-300">
    The Star Solution
  </span>
  , We Help Brands Scale Across Top E-Commerce Platforms Including
  <span className="text-yellow-300 font-medium">
    {" "}
    Amazon, Flipkart, Meesho, JioMart, Walmart, EBay,
  </span>{" "}
  And
  <span className="text-yellow-300 font-medium"> Etsy</span>.
</p>

<p className="text-lg md:text-base leading-relaxed opacity-90">
  Our E-Commerce Experts Manage Everything — From Product Listings,
  Optimization, Catalog Creation, Pricing, To Advertising — So Your
  Business Grows While You Focus On Operations.
</p>

<div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
  <p className="text-lg md:text-base font-semibold text-yellow-300">
    Our Goal Is Simple:
  </p>
  <p className="text-base leading-relaxed mt-1">
    Make Your Products Visible, Trusted, And Highly Sellable On
    Every Marketplace.
  </p>
</div>
          </div>

          {/* Image Div */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              src={ecom1}
              alt="E-commerce Growth"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* div 2 */}

      <div className="py-20 text-gray-900">
  <div className="w-full max-w-[1340px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
    {/* Left: Image */}
    <div className="w-full lg:w-1/2 flex items-center justify-center order-last lg:order-first">
      <img
        src={ecom2}
        alt="E-Commerce Management"
        className="w-full max-w-[520px] h-[260px] md:h-[340px] lg:h-[380px] rounded-2xl shadow-2xl object-cover"
      />
    </div>

    {/* Right: Text Content */}
    <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
      {/* Heading same style */}
      <h3 className="text-2 xl md:text-4xl font-bold text-yellow-400 leading-snug">
        Why E-Commerce
        <br className="hidden md:block" />
        Management Is Important
      </h3>

      {/* Short explanation */}
      <p className="text-lg md:text-base leading-relaxed opacity-90">
        Selling Online Isn’t Just About Listing Products It Requires
        Professional Management:
      </p>

      {/* Points list styled same as first div */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
        {[
          "SEO-Optimized Listings",
          "Correct Categories",
          "High-Quality Content",
          "Ads Strategy",
          "Account Health",
          "Performance Tracking",
        ].map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-gray-900 bg-white border border-gray-100 p-3 rounded-lg shadow-sm"
          >
            <span
              aria-hidden="true"
              className="flex-none mt-0.5 text-green-500 text-xl font-bold"
            >
              ✓
            </span>
            <span className="text-base md:text-lg">{item}</span>
          </li>
        ))}
      </ul>

      {/* Bottom Line */}
      <p className="text-lg md:text-base opacity-90 mt-4">
        We Manage Everything Professionally To Increase Your{" "}
        <span className="font-semibold text-yellow-600">
          Reach, Ranking, And Revenue
        </span>
        .
      </p>
    </div>
  </div>
</div>

      {/* div 3 */}

<div className="py-20 bg-[#1A3255] text-white">
  <div className="w-full max-w-[1340px] mx-auto px-4 flex flex-col gap-12">
    {/* div Heading - Centered */}
    <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 text-center">
      Our E-Commerce Services
    </h2>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Marketplace Account Setup & Brand Approval",
          description:
            "We Set Up Your Seller Accounts And Ensure Smooth Onboarding.",
          includes: [
            "Seller Account Creation",
            "KYC Support",
            "Brand Approval Assistance",
            "Category/Vertical Approval",
            "Policy Guidance",
          ],
        },
        {
          title: "Product Listing & Catalog Management",
          description:
            "Professional, SEO-Rich Listings That Help Your Products Rank Higher And Convert Better.",
          includes: [
            "Title & Keyword Optimization",
            "Bullet Points & Descriptions",
            "Category Mapping",
            "Price Management",
            "Bulk Listing Support",
            "Variation Listings (Size/Color)",
          ],
        },
        {
          title: "A+ Content & Brand Store Design",
          description:
            "Enhance Brand Visibility And Increase Conversions.",
          includes: [
            "Premium A+ Content",
            "Infographics & Lifestyle Images",
            "Storefront / Brand Store Creation",
            "Mobile-Friendly Designs",
            "Brand Consistency & Storytelling",
          ],
        },
        {
          title: "Marketplace SEO & Ranking Boost",
          description:
            "Improve Product Rank And Visibility On All Marketplaces.",
          includes: [
            "Search Term Optimization",
            "Keyword Research",
            "Competitor Analysis",
            "Rank Improvement Strategy",
            "SEO-Based Listing Enhancement",
          ],
        },
        {
          title: "Advertising & PPC Management",
          description:
            "We Run ROI-Driven Campaigns To Increase Sales And Reduce ACOS.",
          includes: [
            "Amazon Ads (SP, SB, SD)",
            "Flipkart Ads (PLA, PPC)",
            "Meesho Ads",
            "Campaign Setup & Optimization",
            "Daily Monitoring & Reports",
          ],
        },
        {
          title: "Account Health & Performance Management",
          description:
            "We Ensure Your Account Stays Safe, Compliant, And Fully Functional.",
          includes: [
            "Order Defect Rate Monitoring",
            "Policy Compliance",
            "Warning / Violation Handling",
            "Claims & Return Support",
            "Seller Rating Improvement",
          ],
        },
        {
          title: "Monthly Sales Growth Strategy",
          description:
            "A Dedicated Strategy To Boost Your Sales Month After Month.",
          includes: [
            "Data Analysis",
            "Keyword Performance Audit",
            "Product Rank Planning",
            "Market Trend Reports",
            "Personalized Growth Roadmap",
          ],
        },
        {
          title: "Domestic Shipping & Logistics Support",
          description:
            "We Streamline Your Order Dispatch Process With Reliable And Fast Shipping Solutions.",
          includes: [
            "Courier Partner Integration & Setup",
            "Competitive Shipping Rate Guidance",
            "Domestic Shipping Management (PAN India)",
            "Pickup Scheduling & Logistics Coordination",
            "Order Tracking & Issue Resolution",
            "RTO Reduction Strategies",
          ],
        },
        {
          title: "FBA Prep & Packaging Services",
          description:
            "Complete Product Preparation And Packaging Support For Amazon FBA And Marketplace Standards.",
          includes: [
            "FBA Labelling & Barcode Application",
            "Packaging As Per Marketplace Guidelines",
            "Bundling & Kitting Services",
            "Polybagging / Bubble Wrapping / Box Packing",
            "FNSKU & Carton Label Support",
            "Inbound Shipment Creation & Coordination",
          ],
        },
      ].map((service, idx) => (
        <div
          key={idx}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-xl flex flex-col text-left"
        >
          {/* Card Title */}
          <h3 className="text-xl md:text-2xl font-semibold text-yellow-300 mb-3">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-white mb-3">{service.description}</p>

          {/* Includes List */}
          <ul className="list-disc list-inside space-y-1 text-white text-sm md:text-base">
            {service.includes.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* dashboard */}
      <div className="py-16 bg-white">
        <div className="w-full  mx-auto px-4 flex flex-col gap-8">
          {/* div Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black">
            Our Client Dashboard
          </h2>

          {/* Images Full Width */}
          <div className="flex flex-col gap-6">
            <img
              src={dashboard1}
              alt="Dashboard 1"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            <img
              src={dashboard2}
              alt="Dashboard 2"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            <img
              src={dashboard3}
              alt="Dashboard 3"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* contact */}

      <ContactUs />
    </>
  );
};

export default Ecommerce;
