import React, { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const scrollRef = useRef(null);

  const testimonials = [
  {
    name: "Devraj",
    text: "Working With The Star Solution Has Been A Fantastic Experience. They Know The Ins And Outs Of Amazon And Flipkart, And Their Strategies Have Boosted Our Visibility And Sales. A Reliable Partner For Any E-Commerce Seller!",
    rating: 4,
  },
  {
    name: "Amyra",
    text: "Thanks To The Star Solution, Managing Our Online Store Has Become So Much Easier. They Handle Everything With Expertise, Allowing Us To Focus On Growing Our Business. Highly Recommended For Anyone In E-Commerce!",
    rating: 5,
  },
  {
    name: "Rahul",
    text: "We Were Struggling To Manage Our Listings On Amazon, But The Star Solution Stepped In And Made The Process Smooth And Effective. Our Rankings Have Improved, And Our Account Health Is Better Than Ever. Exceptional Service!",
    rating: 4,
  },
  {
    name: "Dkhand",
    text: "The Star Solution Offers A Comprehensive Range Of Services For E-Commerce Sellers. They Cover Everything From Account Setup To Ongoing Management, Making It A One-Stop Shop!",
    rating: 3,
  },
  {
    name: "Suman",
    text: "The Star Solution Has Made Managing My E-Commerce Accounts A Breeze. From Optimizing Listings To Handling All The Little Details, They Take Care Of Everything. I’ve Been Able To Focus On Expanding My Business Without Worrying About The Day-To-Day Tasks. Highly Recommended!",
    rating: 5,
  },
  {
    name: "Jeetu Kumar",
    text: "Since Day One, The Star Solution Has Been A Game-Changer For My Business. The Services They Provide Have Made Managing My Seller Account So Much Easier. My Sales Have Increased, My Reviews Have Gotten Better, And My Listings Are Performing At Their Best. I Couldn’t Be More Satisfied!",
    rating: 4,
  },
];


  const scroll = (direction) => {
    const scrollAmount = 300;
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-[1340px] mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-10">
          Testimonials
        </h2>

        {/* Scrollable Cards (with relative wrapper for buttons) */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="cursor-pointer absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 
                       bg-white text-black p-2 sm:p-3 rounded-full shadow-md 
                       hover:bg-gray-200 transition z-20"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="cursor-pointer absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 
                       bg-white text-black p-2 sm:p-3 rounded-full shadow-md 
                       hover:bg-gray-200 transition z-20"
          >
            <ChevronRight size={18} />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2 py-4"
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 rounded-xl shadow-md 
                hover:scale-105 transition-transform duration-300 ease-in-out 
                w-[260px] sm:w-[280px] shrink-0 p-5 flex flex-col justify-between"
              >
                {/* Name */}
                <span className="font-semibold text-yellow-400 text-sm mb-2">
                  {item.name}
                </span>

                {/* Review */}
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
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
      </div>
    </div>
  );
};

export default Testimonials;
