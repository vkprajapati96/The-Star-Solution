import React from 'react'
import ContactUs from '../../components/ContactUs';

import bpo from "../../assets/image/bpo/bpo.png";

const BpoService = () => {
const bpoFeatures = [
  {
    title: "Expertise & Experience",
    description:
      "With Extensive Experience In The BPO Industry, Our Skilled Professionals Bring Deep Domain Expertise And Proven Strategies Tailored To Your Business Goals.",
  },
  {
    title: "Cost Efficiency",
    description:
      "Save Operational Costs And Maximize ROI Without Compromising Quality, Using Optimized Workflow Models That Ensure Consistent Productivity.",
  },
  {
    title: "Quality Assurance",
    description:
      "Strong QC Systems With Continuous Monitoring And Performance Audits Ensure Accuracy, Reliability, And Consistently High-Quality Results.",
  },
  {
    title: "Customer Support (Voice & Non-Voice)",
    description:
      "Inbound/Outbound Calling, Email, Chat, And Social Support That Ensures Quick Resolutions, Improved Satisfaction, And Stronger Customer Relationships.",
  },
  {
    title: "Data Entry & Back-Office Management",
    description:
      "Accurate Data Processing, Documentation, And Admin Support That Boosts Efficiency While Maintaining Confidentiality And Precision.",
  },
  {
    title: "IT & Technical Support",
    description:
      "Troubleshooting, Network Management, Software Assistance, And Maintenance To Ensure Smooth Operations And Secure Infrastructure.",
  },
];

  return (
    <>

<section className="bg-[hsl(216,53%,22%)] py-16 px-6">
  <div className="w-full max-w-[1340px] mx-auto flex flex-col lg:flex-row items-start gap-10 px-4">
    
    {/* Left Side (Text Content) */}
    <div className="w-full">
      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-4 leading-snug">
        Empowering Businesses with 
        <br />
        <span className="text-yellow-400 decoration-4">
          Scalable BPO Solutions
        </span>
      </h2>

      <p className="text-white text-base leading-[1.9]">
        At The Star Solution, We Provide Expert Business Process Outsourcing
        Services That Help Companies Optimize Operations, Reduce Costs,
        And Enhance Customer Experience. Our Skilled Team Manages Your
        Non-Core Tasks With Efficiency And Precision, Giving You The
        Freedom To Focus On Growth, Strategy, And Innovation.
      </p>
    </div>

    {/* Right Side (Image) */}
    <div className="w-full mt-6 md:mt-0">
      <img
        src={bpo}
        alt="BPO Solutions"
        className="w-full h-auto rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
      />
    </div>

  </div>
</section>

{/* section 2 */}
<section className="bg-white py-16 px-6">
  <div className="max-w-[1340px] mx-auto">

    {/* Section Title */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">
      Our BPO Service Expertise
    </h2>

    {/* Cards → Using Map */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {bpoFeatures.map((item, index) => (
        <div
          key={index}
          className="p-6 bg-[hsl(216,53%,22%)] border border-[#264C7E] rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">
            {item.title}
          </h3>

          <p className="text-gray-200 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>


<ContactUs/>

    </>
  )
}

export default BpoService