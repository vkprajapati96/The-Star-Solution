import React from "react";
import { Link } from "react-router-dom";

const Specialization = () => {
 const services = [
  {
    title: "Grow Your Ecommerce",
    desc: "Boost your e-commerce growth with professional services like account setup, cataloging, sales optimization, and streamlined order management. Enhance visibility, attract customers, and increase sales effortlessly while focusing on your products, as every detail is expertly handled for your success.",
    path: "/services/ecommerce",
  },
  {
    title: "Digital Marketing",
    desc: "Our Digital Marketing Services help businesses grow online through targeted strategies. We specialize in SEO, social media marketing, PPC, content creation, and email campaigns, driving traffic, increasing brand visibility, and boosting conversions to ensure sustainable success.",
    path: "/services/digital-marketing",
  },
  {
    title: "Free Support",
    desc: "We understand the challenges e-commerce sellers face, offering free support to help you get started and succeed on platforms like Amazon, Flipkart, and more. Whether new or optimizing, our team ensures a smooth, hassle-free seller account setup and guidance throughout.",
    path: "/services/free-support",
  },
  {
    title: "Web Development",
    desc: "Our Web Development Services provide custom, user-friendly websites designed to meet your business needs. From responsive design to seamless functionality, we ensure your site is optimized for performance, offering an engaging online experience that drives growth and success.",
    path: "/services/web-development",
  },
  {
    title: "App Development",
    desc: "Our App Development Services create custom, high-performance mobile applications tailored to your business needs. From concept to launch, we ensure seamless functionality, intuitive design, and a user-friendly experience, helping you engage customers and drive growth effectively.",
    path: "/services/app-development",
  },
  {
    title: "BPO Services",
    desc: "Our BPO Services streamline operations and enhance efficiency. Specializing in customer support, data entry, technical support, telemarketing, and back-office services, we enable businesses to focus on core activities, reduce costs, and achieve sustainable, significant, exceptional growth.",
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
              to={service.path} // 👈 Route path added here
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

export default Specialization;
