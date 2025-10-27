import React from "react";
import ContactUs from "../../components/ContactUs";

const DigitalMarketing = () => {
const features = [
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "We focus on improving your website’s visibility in search engine results, helping potential customers find you easily. Our SEO services include keyword research, on-page optimization, technical SEO, and link-building strategies that drive organic traffic and boost your rankings. By ensuring your website is optimized for both search engines and users, we help you stay ahead of the competition.",
    },
    {
      title: "Social Media Marketing (SMM)",
      description:
        "Social media platforms are powerful tools for connecting with your audience and building brand loyalty. Our SMM strategies are tailored to your business, ensuring the right mix of content, ads, and engagement techniques. Whether it’s Facebook, Instagram, LinkedIn, or Twitter, we help you grow your followers, increase engagement, and drive traffic to your website.",
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "For instant results, our PPC campaigns deliver targeted ads to potential customers who are actively searching for your products or services. From Google Ads to social media ad platforms, we create and manage cost-effective campaigns that maximize your return on investment. Our data-driven approach ensures your ad spend generates leads and drives conversions.",
    },
    {
      title: "Content Marketing",
      description:
        "Engaging and informative content is the foundation of any successful digital marketing strategy. We create high-quality blog posts, articles, videos, infographics, and other content formats that resonate with your audience. By providing value and addressing your customers’ needs, we position your brand as an industry leader and build trust over time.",
    },
    {
      title: "Email Marketing Campaigns",
      description:
        "Email remains one of the most effective ways to nurture leads and engage existing customers. Our email marketing services include crafting personalized campaigns that deliver the right message to the right audience at the right time. From product announcements to newsletters and drip campaigns, we ensure your emails drive action and foster brand loyalty.",
    },
    {
      title: "Data-Driven Strategies",
      description:
        "We believe in the power of data to inform decisions. Our digital marketing strategies are built on a foundation of analytics, allowing us to track performance, measure ROI, and continuously optimize campaigns. From Google Analytics to social media insights, we use data to refine our approach and ensure maximum impact.",
    },
  ];
  

  return ( <>
  

    <section className="py-16 bg-[#1A3255]">
      <div className="w-full max-w-[1340px] mx-auto px-4 flex flex-col md:flex-row items-center gap-10">

        {/* Text Div Left */}
        <div className="md:w-1/2 flex flex-col justify-center gap-6 text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 leading-snug">
            Grow Your Business <br />
            with Results-Driven <br />
            Digital Marketing Services
          </h2>

          <p className="text-lg md:text-base">
            Our Digital Marketing Services are designed to help businesses thrive in the online space by leveraging targeted strategies that deliver real results.
          </p>

          <p className="text-lg md:text-base">
            In today’s digital-first world, having a strong online presence is no longer optional—it’s essential for success. We specialize in creating comprehensive marketing campaigns that not only attract visitors but also convert them into loyal customers, driving sustainable growth and long-term success for your business.
          </p>
        </div>

        {/* Image Div Right - Using Ecommerce Image */}
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg"
            alt="Digital Marketing"
            className="w-full md:w-[90%] h-[300px] md:h-[350px] rounded-lg shadow-lg object-cover"
          />
        </div>

      </div>
    </section>

         <div className="bg-white py-16 px-6">
      <div className="max-w-[1340px] mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-10">
          Key Features of Our Digital Marketing Services
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

export default DigitalMarketing;


