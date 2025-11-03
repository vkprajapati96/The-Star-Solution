import React, { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      name: "Devraj",
      text: "Working with The Star Solution has been a fantastic experience. They know the ins and outs of Amazon and Flipkart, and their strategies have boosted our visibility and sales. A reliable partner for any e-commerce seller!",
      rating: 4,
    },
    {
      name: "Amyra",
      text: "Thanks to The Star Solution, managing our online store has become so much easier. They handle everything with expertise, allowing us to focus on growing our business. Highly recommended for anyone in e-commerce!",
      rating: 5,
    },
    {
      name: "Rahul",
      text: "We were struggling to manage our listings on Amazon, but The Star Solution stepped in and made the process smooth and effective. Our rankings have improved, and our account health is better than ever. Exceptional service!",
      rating: 4,
    },
    {
      name: "Dkhand",
      text: "The Star Solution offers a comprehensive range of services for e-commerce sellers. They cover everything from account setup to ongoing management, making it a one-stop shop!",
      rating: 3,
    },
    {
      name: "Suman",
      text: "The Star Solution has made managing my e-commerce accounts a breeze. From optimizing listings to handling all the little details, they take care of everything. I’ve been able to focus on expanding my business without worrying about the day-to-day tasks. Highly recommended!",
      rating: 5,
    },
     {
      name: "Jeetu Kumar",
      text: "Since day one, The Star Solution has been a game-changer for my business. The services they provide have made managing my seller account so much easier. My sales have increased, my reviews have gotten better, and my listings are performing at their best. I couldn’t be more satisfied!",
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
    <section className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-[1340px] mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-500 mb-10">
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
    </section>
  );
};

export default Testimonials;
