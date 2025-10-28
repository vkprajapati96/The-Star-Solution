import React from 'react'
import ContactUs from '../../components/ContactUs';

import webDev from "../../assets/web-dev.jpg";

const WebDevelopment = () => {

  const features = [
    {
      title: "Custom Website Design",
      description:
        "We believe that every business is unique, which is why we offer fully customized designs that reflect your brand identity and business values. Our expert designers work closely with you to understand your requirements and create a visually appealing website that connects with your target audience. Whether you're looking for a modern, minimalist look or a more dynamic, interactive design, we ensure your website captures attention and leaves a lasting impression.",
    },
    {
      title: "Responsive and Mobile-Friendly Design",
      description:
        "With more users accessing websites from mobile devices, having a responsive design is crucial. Our web development services ensure that your website looks and functions perfectly on all devices, from desktops to smartphones and tablets. A mobile-friendly design not only improves the user experience but also boosts your search engine rankings, as search engines like Google prioritize mobile-optimized sites.",
    },
    {
      title: "Seamless Functionality",
      description:
        "A great website isn’t just about how it looks—it’s about how it works. We ensure your site is built with seamless functionality to make navigation intuitive and user-friendly. From fast load times to smooth transitions between pages, our team uses the latest technologies and best practices to ensure your website runs efficiently. This includes integrating features like contact forms, live chat, product catalogs, shopping carts, and more, depending on your business needs.",
    },
    {
      title: "Optimized for Performance",
      description:
        "Website speed and performance are key to providing a positive user experience and improving your conversion rates. We optimize every aspect of your website’s performance, ensuring fast loading times and smooth interaction. By minimizing page load times and optimizing code, images, and scripts, we ensure your visitors stay engaged and aren’t frustrated by delays.",
    },
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "A beautifully designed website is only effective if people can find it. That’s why we incorporate SEO best practices during the web development process. From optimizing page titles, meta descriptions, and headers to ensuring clean, SEO-friendly code, we help your website rank higher in search engine results, increasing visibility and driving organic traffic to your site.",
    },
    {
      title: "Engaging User Experience (UX)",
      description:
        "We design websites with your audience in mind, ensuring an intuitive and engaging user experience. Clear calls-to-action, easy navigation, and interactive elements enhance the user journey, guiding visitors toward taking the desired actions, whether it's making a purchase, signing up for a newsletter, or reaching out for more information.",
    },
  ];


  return (
    <>   
    <section className="bg-[hsl(216,53%,22%)] py-16 px-6">
      <div className="max-w-[1340px] mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side - Text */}
        <div className="flex-1 text-center lg:text-left space-y-5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-600 leading-snug">
            Boost Your Business <br className="hidden sm:block" />
            with Tailored Website <br className="hidden md:block" />
            Development Services
          </h2>

          <p className="text-white text-sm sm:text-base leading-relaxed max-w-[600px] mx-auto lg:mx-0">
            We understand the challenges e-commerce sellers face on platforms like
            Amazon and Flipkart. To support you, we offer free guidance at every
            step, whether you're starting out or optimizing your store. Our expert
            team provides the advice and assistance you need to succeed in the
            competitive e-commerce world.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={webDev}
            alt="Website Development"
            className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[85%] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
          />
        </div>
      </div>
    </section>
        
    <div className="bg-white py-16 px-6">
      <div className="max-w-[1340px] mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-10">
Key Features of Our Web Development Services:


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
  )
}

export default WebDevelopment