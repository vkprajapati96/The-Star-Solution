import React from 'react'
import ContactUs from '../../components/ContactUs';

import bpo from "../../assets/bpo.jpg";

const BpoService = () => {

  const features = [
    {
      title: "Expertise and Experience",
      description:
        "With years of experience in the BPO industry, our team of highly skilled professionals brings a wealth of knowledge and expertise to your business processes. We understand the nuances of various industries and tailor our services to meet the specific needs of each client.",
    },
    {
      title: "Cost Efficiency",
      description:
        "Outsourcing your business processes to us can result in significant cost savings. By leveraging our services, you can reduce overhead expenses and allocate resources more effectively. Our flexible pricing models are designed to suit businesses of all sizes and budgets.",
    },
    {
      title: "Quality Assurance",
      description:
        "We are committed to delivering the highest quality of service. Our stringent quality control processes ensure that every task is executed with precision and accuracy. We continually monitor and improve our processes to exceed your expectations.",
    },
    {
      title: "Customer Support (Voice & Non-Voice)",
      description:
        "Our dedicated customer support team provides assistance to your customers. We handle inquiries, resolve issues, and ensure customer satisfaction through various channels including phone, email, and live chat",
    },
    {
      title: "Data Entry and Management",
      description:
        "We take care of your back-office operations such as data entry, data processing, and document management. Our efficient workflows and attention to detail ensure that your administrative tasks are handled smoothly and accurately. ",
    },

    {
      title: "IT Support Services",
      description:
        "Our IT services include technical support, network management, and software development. We ensure that your IT infrastructure is robust, secure, and capable of supporting your business operations.",
    },
  ];

  return (
    <>

          <section className="bg-[hsl(216,53%,22%)]  py-16 px-6">
<div className="w-full max-w-[1340px] mx-auto flex flex-col lg:flex-row items-center gap-10 px-4">
  {/* Left Side (Text Content) */}
  <div className="w-full  text-center  lg:text-left">
    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-yellow-500 mb-4 leading-snug">
      Scalable BPO Solutions <br />
      to Meet Your Business Needs
    </h2>
    <p className="text-white text-base leading-relaxed">
      At The Star Solution, we specialize in providing professional Business Process
      Outsourcing (BPO) services to help businesses operate efficiently and achieve
      their goals. By outsourcing your non-core tasks to our experienced team, you can
      focus on scaling your business while we handle the rest.
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


      <div className="bg-white py-16 px-6">
      <div className="max-w-[1340px] mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-10">
Why Choose Us?



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


  <section className="bg-[hsl(216,53%,22%)] py-16 px-6">
  <div className="max-w-[1340px] mx-auto text-center">

    {/* Title */}
    <h2 className="text-3xl font-bold text-yellow-500 mb-10">
      How We Add Value to Your Business
    </h2>

    {/* Paragraphs */}
    <div className="text-white text-center text-lg leading-relaxed space-y-10">
      <p className="w-full px-4 md:px-20">
        By partnering with us, you can reduce operational costs, improve service quality, 
        and focus on your core competencies. Whether you’re a startup or an established 
        business, our tailored solutions ensure that your back-office tasks are handled 
        with utmost professionalism.
      </p>

      <p className="w-full px-4 md:px-20">
        We utilize the latest technologies and tools to deliver efficient and effective 
        BPO solutions. Our investment in technology ensures that you benefit from 
        innovative solutions and stay ahead of the competition.
      </p>

      <p className="w-full px-4 md:px-20">
        We utilize the latest technologies and tools to deliver efficient and effective 
        BPO solutions. Our investment in technology ensures that you benefit from 
        innovative solutions and stay ahead of the competition.
      </p>
    </div>
  </div>
</section>


<ContactUs/>


    </>
  )
}

export default BpoService