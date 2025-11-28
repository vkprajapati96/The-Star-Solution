import React from "react";
import ContactUs from "../../components/ContactUs";

import dm1 from "../../assets/image/digitalMarketing/dm1.png";
import dm2 from "../../assets/image/digitalMarketing/dm2.png";
import dm3 from "../../assets/image/digitalMarketing/dm3.png";

const DigitalMarketing = () => {
const features = [
  {
    title: "Search Engine Optimization (SEO)",
    description: `
Increase Your Website’s Visibility And Rank Higher On Google With Powerful SEO Strategies.

Includes:
• Keyword Research
• On-Page Optimization
• Technical SEO
• Off-Page SEO & Backlinks
• Competitor Analysis
• Monthly Performance Reports
    `,
  },

  {
    title: "Social Media Marketing (SMM)",
    description: `
Build A Trusted And Engaging Brand On Major Social Media Platforms.

Includes:
• Instagram & Facebook Management
• Content Planning & Strategy
• Creative Posts & Reels
• Page Growth & Engagement
• Social Media Analytics
    `,
  },

  {
    title: "Paid Advertising (PPC & Media Buying)",
    description: `
Reach Your Ideal Customers Instantly With High-ROI Ad Campaigns.

Includes:
• Google Ads (Search, Display, YouTube)
• Meta Ads (Facebook & Instagram)
• Campaign Setup & Optimization
• Lead Generation Ads
• Conversion Tracking & Reporting
    `,
  },

  {
    title: "Content Creation & Branding",
    description: `
Create Meaningful Content That Builds Brand Authority And Trust.

Includes:
• Graphic Design
• Creative Ads
• Brand Messaging
• Social Media Content
• Marketing Copywriting
    `,
  },

  {
    title: "Website SEO Optimization",
    description: `
Improve Your Website Speed, Structure, And User Experience For Better Ranking And Conversions.

Includes:
• Page Speed Optimization
• UI/UX Enhancement
• Technical Fixes
• SEO-Friendly Structuring
    `,
  },

  {
    title: "Email & WhatsApp Marketing",
    description: `
Stay Connected With Your Customers And Generate Repeat Sales.

Includes:
• Email Campaigns
• Newsletter Designing
• WhatsApp Sequences
• Customer Retention Strategy
    `,
  },
];




  return (
    <>
    {/* part -1 */}
<div className="py-16 bg-[#1A3255]">
  <div className="w-full max-w-[1340px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">

    {/* Left Text div */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 text-white text-center lg:text-left">

      <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 leading-tight">
        Boost Your Online Presence,
        <span className="block text-yellow-400 mt-1">
          Increase Visibility,
        </span>
        <span className="block text-yellow-400">
          And Grow Your Business Faster
        </span>
      </h2>

      <p className="text-lg md:text-base">
        At The Star Solution, We Help Brands Grow With Data-Driven Digital
        Marketing Services, Covering Everything From SEO To Social Media,
        Google Ads, Meta Ads, Content Marketing, And Brand Building.
      </p>

      <p className="text-lg md:text-base">
        Our Strategies Are Designed To Bring You More Traffic, More Leads,
        And More Conversions—Without Unnecessary Complications.
      </p>

      <p className="text-lg md:text-base text-yellow-300">
        <strong className="text-white">Our Focus:</strong> Reach The Right
        Audience, At The Right Time, With The Right Marketing Strategy.
      </p>
    </div>

    {/* Right Image div */}
    <div className="w-full lg:w-1/2 flex items-center justify-center">

      {/* DESKTOP/TABLET IMAGE */}
      <img
        src={dm1}
        alt="Digital Marketing"
        className="hidden md:block w-full h-[300px] md:h-[400px] lg:h-[350px] rounded-lg shadow-lg object-cover"
      />

      {/* MOBILE IMAGE */}
      <img
        src={dm3}
        alt="Mobile Version Banner"
        className="block md:hidden w-full h-[260px] rounded-lg shadow-lg object-cover"
      />
    </div>

  </div>
</div>


{/* part-2 */}

<div className="py-16 text-gray-900">
  <div className="w-full max-w-[1340px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
    {/* Left: Image */}
    <div className="w-full lg:w-1/2 flex items-center justify-center order-last lg:order-first">
      <img
        src={dm2}
        alt="Digital Marketing Visual"
        className="w-full max-w-[520px] h-[260px] md:h-[340px] lg:h-[380px] rounded-2xl shadow-2xl object-cover"
      />
    </div>

    {/* Right: Text Content */}
    <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
      {/* Heading */}
      <h3 className="text-3xl md:text-4xl font-bold text-yellow-400 leading-snug">
        Why Digital Marketing Matters <br className="hidden md:block" />
      </h3>

      {/* Short explanation */}
      <p className="text-lg md:text-base leading-relaxed opacity-90">
        Digital Marketing Helps Your Business, We Build Strategies That Move The
        Needle:
      </p>

      {/* Benefits list */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
        {[
          "Rank Higher On Google",
          "Build A Strong Social Presence",
          "Generate Consistent Leads",
          "Improve Brand Awareness",
          "Increase Website Traffic",
          "Grow Sales With Targeted Ads",
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

      {/* Optional short CTA */}
      <div className="mt-4 flex justify-center lg:justify-start">
        <a
          href="#contact"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md"
        >
          Talk to an Expert
        </a>
      </div>
    </div>
  </div>
</div>

      {/* part-3 */}

      <div className="bg-white pt-6 md:pt-12 pb-16 px-6">
        <div className="max-w-[1340px] mx-auto text-center">
          {/* div Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10">
            Key Features of Our Digital Marketing Services
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#1A3255] text-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 text-left"
              >
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactUs />
    </>
  );
};

export default DigitalMarketing;
