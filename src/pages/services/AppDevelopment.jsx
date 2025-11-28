import React from 'react'
import ContactUs from '../../components/ContactUs';

import app from "../../assets/image/appdevimg/app.png";

const deliverData = [
  {
    title: "Custom App Solutions",
    desc: "We Design And Develop Applications Tailored To Your Business Needs With Personalized Functionality, Automation, And Visually Engaging Layouts."
  },
  {
    title: "Seamless User Experience & UI/UX Design",
    desc: "Our Experts Craft Modern, Intuitive, And User-Friendly Interfaces To Increase Retention And Customer Satisfaction."
  },
  {
    title: "High Performance & Security",
    desc: "We Ensure Your App Is Fast, Scalable, And Protected With Enterprise-Level Security And Optimized Workflows."
  },
  {
    title: "AI-Driven & Smart Technology Integration",
    desc: "We Integrate Smart Features Like Chatbots, Predictive Analytics, Voice Recognition, And Automation."
  },
  {
    title: "Cross-Platform Flexibility",
    desc: "Develop Once, Run Everywhere — Android, iOS, Tablet, And Desktop With Smooth Performance."
  },
  {
    title: "End-to-End Support",
    desc: "From Planning To Deployment And Updates — We Support Your App Throughout Its Lifecycle."
  }
];



const AppDevelopment = () => {

// const features = [
//   {
//     title: "Custom Solutions for Your Business:",
//     description:
//       "Every business is different, and so are its goals. That’s why we focus on building customized mobile applications that align with your specific requirements. Whether you need an e-commerce app, a customer engagement tool, or a business management platform, we develop apps that deliver measurable results and enhance your operational efficiency.",
//   },
//   {
//     title: "End-to-End Development Process:",
//     description:
//       "From the initial conceptualization to the final launch, we handle every stage of the app development process. Our team works closely with you to understand your objectives, identify your target audience, and define key features. We follow a structured process that includes planning, design, development, testing, and deployment, ensuring that your app is ready to make an impact.",
//   },
//   {
//     title: "Seamless Functionality:",
//     description:
//       "A successful app is one that works flawlessly. We ensure your application is built for seamless functionality, offering smooth navigation, quick response times, and minimal downtime. By leveraging cutting-edge technologies, we create apps that are not only powerful but also reliable and efficient.",
//   },
//   {
//     title: "Intuitive and Engaging Design:",
//     description:
//       "User experience is at the heart of every app we create. Our design team focuses on crafting intuitive interfaces that are visually appealing and easy to use. Whether your app is targeting tech-savvy users or first-time app users, we ensure that it’s accessible and engaging, keeping your audience coming back for more.",
//   },
//   {
//     title: "Multi-Platform Compatibility:",
//     description:
//       "To maximize your reach, we develop apps that are compatible with both Android and iOS platforms. Our cross-platform development approach ensures that your app delivers a consistent experience, regardless of the device your customers use. This versatility helps you engage a broader audience without compromising on quality.",
//   },
//   {
//     title: "Optimized Performance:",
//     description:
//       "Speed and performance are critical for mobile apps. We optimize every aspect of your application to ensure fast load times, smooth interactions, and efficient resource utilization. Whether your app handles real-time data, multimedia content, or complex transactions, we ensure it performs flawlessly under all conditions.",
//   },
// ];


  return (
    <>
    {/* section 1 */}
<div className="bg-[#1A3255] py-16 px-6 text-white">
  <div className="max-w-[1340px] mx-auto">

    {/* CONTENT + IMAGE ROW */}
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* LEFT: Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
          <span className="text-yellow-400">Transform Your Ideas into</span><br />
          <span className="text-yellow-400">Smart & Scalable Mobile Apps</span>
        </h2>

        <p className="text-gray-200 text-base leading-relaxed mb-4">
          We Specialize In Building Fast, Secure, And User-Friendly Mobile Applications For Android,
          iOS, And Cross-Platform Platforms. Our Solutions Are Tailored To Your Business Goals,
          Ensuring A Seamless Experience For Your Users While Driving Growth And Engagement.
        </p>

        <p className="text-gray-200 text-base leading-relaxed mb-4">
          We Handle Everything — From Concept And Design To Development, AI Integration, And Deployment —
          So You Get A High-Performance, Scalable, And Future-Ready Mobile App.
        </p>
      </div>

      {/* RIGHT: Image */}
      <div className="lg:w-1/2 w-full flex justify-center">
        <img
          src={app} // Replace with your actual image
          alt="Mobile App Development"
          className="rounded-2xl shadow-2xl w-full object-cover"
        />
      </div>
    </div>

    {/* FEATURES GRID ROW */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      <div className="border border-gray-600 bg-[#223C61] p-6 rounded-xl text-gray-100 text-center font-medium transition duration-300 hover:bg-yellow-400 hover:text-black cursor-pointer">
         Custom Android & IOS Development
      </div>
      <div className="border border-gray-600 bg-[#223C61] p-6 rounded-xl text-gray-100 text-center font-medium transition duration-300 hover:bg-yellow-400 hover:text-black cursor-pointer">
        Cross-Platform Apps (Flutter / React Native)
      </div>
      <div className="border border-gray-600 bg-[#223C61] p-6 rounded-xl text-gray-100 text-center font-medium transition duration-300 hover:bg-yellow-400 hover:text-black cursor-pointer">
         AI-Powered Features & Automation
      </div>
      <div className="border border-gray-600 bg-[#223C61] p-6 rounded-xl text-gray-100 text-center font-medium transition duration-300 hover:bg-yellow-400 hover:text-black cursor-pointer">
         Business & CRM Applications
      </div>
      <div className="border border-gray-600 bg-[#223C61] p-6 rounded-xl text-gray-100 text-center font-medium transition duration-300 hover:bg-yellow-400 hover:text-black cursor-pointer">
         API & Cloud Integration
      </div>
      <div className="border border-gray-600 bg-[#223C61] p-6 rounded-xl text-gray-100 text-center font-medium transition duration-300 hover:bg-yellow-400 hover:text-black cursor-pointer">
         App Maintenance, Support & Upgrades
      </div>
    </div>

  </div>
</div>


{/* section 2 */}

   {/* <div className="bg-white py-16 px-6">
      <div className="max-w-[1340px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-10">
Key Why Choose Our App Development Services?

        </h2>

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
    </div> */}



{/* section 2 */}
    <div className="max-w-[1340px] mx-auto bg-white py-16 px-6 text-white">
  <div className=" text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
      What We Deliver
    </h2>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {deliverData.map((item, index) => (
      <div
        key={index}
        className="bg-[#142840] p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition"
      >
        <h3 className="text-xl font-semibold mb-3 text-yellow-400">
          {item.title}
        </h3>

        <p className="text-gray-200 text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</div>


<ContactUs/>

    </>
  )
}

export default AppDevelopment