import React from "react";

const Blog = () => {
  const blogs = [
  {
    title:
      "Quick Commerce Grew 142% During FY22-25, GOV To Hit Rs 2 Lakh Crore By 2028: CareEdge",
    description:
      "India’s Quick Commerce (Q-Commerce) Market Is Estimated To Have Reached Around ₹64,000 Crore By FY25. It Has Grown At A Very High CAGR Of 142% Between FY22 And FY25. This Rapid Growth Is Driven By Changing Consumer Preferences, Better Hyperlocal Delivery Infrastructure, And Starting From A Smaller Base, According To A Recent Report By Market Analytics Firm CareEdge.",
    link: "https://retail.economictimes.indiatimes.com/",
  },

  {
    title:
      "Flipkart Brings Smartphone Exchange To Quick Commerce; Scales Prexo And Recommerce Network",
    description:
      "Flipkart Introduces Smartphone Exchange On Its Quick Commerce Platform, Flipkart Minutes. Customers Can Now Exchange Old Phones For New Ones In Just 40 Minutes. The Service Is Currently Available In Select Areas Of Bengaluru, Delhi, And Mumbai. This Initiative Is Powered By Flipkart Prexo, Simplifying Device Exchange With Doorstep Diagnostics And Instant Value Assessment.",
    link: "https://retail.economictimes.indiatimes.com/",
  },
];

  return (
    <section className="bg-[#1A3255] py-16">
      <div className="max-w-[1340px] mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12 text-center">
          Latest Blogs & Insights
        </h2>

        <div className="flex flex-col gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-yellow-50 shadow-lg p-8 rounded-2xl hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A3255] mb-4 leading-snug">
                {blog.title}
              </h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                {blog.description}
              </p>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 font-semibold hover:underline text-lg break-all"
              >
                Read More → {blog.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
