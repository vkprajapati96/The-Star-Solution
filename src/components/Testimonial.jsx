import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rohit Sharma",
      text: "Amazing service! My Amazon store performance improved a lot within a month.",
      rating: 5,
    },
    {
      name: "Sneha Gupta",
      text: "Very professional team and great support. Helped me with brand approvals smoothly!",
      rating: 4,
    },
    {
      name: "Arjun Mehta",
      text: "Their promotional strategies boosted my Flipkart sales significantly.",
      rating: 5,
    },
    {
      name: "Priya Verma",
      text: "They really know how to manage eCommerce accounts efficiently.",
      rating: 3,
    },
    {
      name: "Ravi Kumar",
      text: "Excellent experience! Totally recommend them for online sellers.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-500 mb-10">
          Testimonials
        </h2>

        {/* Cards container */}
        <div className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 
          gap-6 md:gap-8 justify-items-center
        ">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 rounded-xl shadow-md 
              hover:scale-105 transition-transform duration-300 ease-in-out w-full max-w-[220px] p-5 flex flex-col justify-between"
            >
              {/* Name */}
              <span className="font-semibold text-yellow-400 text-sm mb-2">
                {item.name}
              </span>

              {/* Review */}
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3">
                “{item.text}”
              </p>

              {/* Stars */}
              <div className="flex justify-center sm:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < item.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-600"
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
