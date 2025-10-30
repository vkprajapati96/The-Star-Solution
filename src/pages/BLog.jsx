import React from "react";

const Blog = () => {
  const blogs = [
    {
      title:
        "Quick commerce grew 142% during FY22-25, GOV to hit Rs 2 lakh crore by 2028: CareEdge",
      description:
        "India’s Quick Commerce (Q-commerce) market is estimated to have reached around ₹64,000 crore by FY25. It has grown at a very high CAGR of 142% between FY22 and FY25. This rapid growth is driven by changing consumer preferences, better hyperlocal delivery infrastructure, and starting from a smaller base, according to a recent report by market analytics firm CareEdge.",
      link: "https://retail.economictimes.indiatimes.com/",
    },

    {
      title:
        "Flipkart brings smartphone exchange to quick commerce; scales Prexo and Recommerce network",
      description:
        "Flipkart introduces smartphone exchange on its quick commerce platform, Flipkart Minutes. Customers can now exchange old phones for new ones in just 40 minutes. The service is currently available in select areas of Bengaluru, Delhi, and Mumbai. This initiative is powered by Flipkart Prexo, simplifying device exchange with doorstep diagnostics and instant value assessment.",
      link: "https://retail.economictimes.indiatimes.com/",
    },
  ];

  return (
    <section className="bg-[#1A3255] py-16">
      <div className="max-w-[1340px] mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-12 text-center">
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
