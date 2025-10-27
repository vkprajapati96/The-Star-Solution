import React from 'react'
import ContactUs from '../../components/ContactUs';

const AppDevelopment = () => {

const features = [
  {
    title: "Custom Solutions for Your Business:",
    description:
      "Every business is different, and so are its goals. That’s why we focus on building customized mobile applications that align with your specific requirements. Whether you need an e-commerce app, a customer engagement tool, or a business management platform, we develop apps that deliver measurable results and enhance your operational efficiency.",
  },
  {
    title: "End-to-End Development Process:",
    description:
      "From the initial conceptualization to the final launch, we handle every stage of the app development process. Our team works closely with you to understand your objectives, identify your target audience, and define key features. We follow a structured process that includes planning, design, development, testing, and deployment, ensuring that your app is ready to make an impact.",
  },
  {
    title: "Seamless Functionality:",
    description:
      "A successful app is one that works flawlessly. We ensure your application is built for seamless functionality, offering smooth navigation, quick response times, and minimal downtime. By leveraging cutting-edge technologies, we create apps that are not only powerful but also reliable and efficient.",
  },
  {
    title: "Intuitive and Engaging Design:",
    description:
      "User experience is at the heart of every app we create. Our design team focuses on crafting intuitive interfaces that are visually appealing and easy to use. Whether your app is targeting tech-savvy users or first-time app users, we ensure that it’s accessible and engaging, keeping your audience coming back for more.",
  },
  {
    title: "Multi-Platform Compatibility:",
    description:
      "To maximize your reach, we develop apps that are compatible with both Android and iOS platforms. Our cross-platform development approach ensures that your app delivers a consistent experience, regardless of the device your customers use. This versatility helps you engage a broader audience without compromising on quality.",
  },
  {
    title: "Optimized Performance:",
    description:
      "Speed and performance are critical for mobile apps. We optimize every aspect of your application to ensure fast load times, smooth interactions, and efficient resource utilization. Whether your app handles real-time data, multimedia content, or complex transactions, we ensure it performs flawlessly under all conditions.",
  },
];

  return (
    <>
      <section className="bg-[hsl(216,53%,22%)] py-16 px-6">
        <div className="max-w-[1340px] mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Side (Text Content) */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4 leading-snug">
              Transform Your Business <br />
              with Expert App <br />
              Development Solutions
            </h2>
            <p className="text-white text-base leading-relaxed">
              Our App Development Services turn your business vision into custom,
              high-performance mobile apps. In today’s digital world, having an app is
              essential for staying competitive, engaging customers, and driving growth.
              We create tailored apps with seamless functionality, intuitive design, and
              exceptional user experiences that set your brand apart.
            </p>
          </div>

          {/* Right Side (Image) */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://i.ibb.co/qMn42HK/app-development-2.jpg"
              alt="App Development"
              className="w-full max-w-sm md:max-w-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>


   <div className="bg-white py-16 px-6">
      <div className="max-w-[1340px] mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-10">
Key Why Choose Our App Development Services?

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

export default AppDevelopment