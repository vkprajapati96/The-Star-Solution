import React from "react";
import ContactUs from "../../components/ContactUs";

const Ecommerce = () => {
  return ( <>

    <section className="py-16 bg-[#1A3255]">
  <div className="w-full max-w-[1340px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">

    {/* Text Div first */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 text-white text-center lg:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 leading-snug">
        {/* Mobile view title (line breaks visible) */}
        <span className="block md:hidden">
          Elevate Your <br />
          Online Business <br />
          with Premier <br />
          Ecommerce Partners
        </span>

        {/* Desktop/Laptop view title (normal continuous lines) */}
        <span className="hidden md:block">
          Elevate Your Online Business <br />
          with Premier <br />
          Ecommerce Partners
        </span>
      </h2>

      <p className="text-lg md:text-base">
        Boost your e-commerce growth with our professional expertise, backed by over 6+ years of experience.
      </p>

      <p className="text-lg md:text-base">
        If you’re ready to take your e-commerce business to the next level, partner with us and experience the difference.
      </p>
    </div>

    {/* Image Div second */}
    <div className="w-full lg:w-1/2 flex items-center justify-center">
      <img
        src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg"
        alt="E-commerce Growth"
        className="w-full h-auto rounded-lg shadow-lg object-cover"
      />
    </div>

  </div>
</section>

    {/* dashboard */}
   <section className="py-16 bg-white">
  <div className="w-full  mx-auto px-4 flex flex-col gap-8">

    {/* Section Title */}
    <h2 className="text-3xl md:text-4xl font-bold text-center text-black">
      Our Client Dashboard
    </h2>

    {/* Images Full Width */}
    <div className="flex flex-col gap-6">
      <img
        src="https://thestarsolution.com/assets/amazon2-CHoYAIsk.jpeg"
        alt="Dashboard 1"
        className="w-full h-auto rounded-lg shadow-lg object-cover"
      />
      <img
        src="https://thestarsolution.com/assets/amazon3-DDxi-szP.jpeg"
        alt="Dashboard 2"
        className="w-full h-auto rounded-lg shadow-lg object-cover"
      />
      <img
        src="https://thestarsolution.com/assets/filpkart1-CcqGDg6K.jpeg"
        alt="Dashboard 3"
        className="w-full h-auto rounded-lg shadow-lg object-cover"
      />
    </div>

  </div>
</section>
{/* contact */}

<ContactUs/>

     </>
  );
};

export default Ecommerce;
