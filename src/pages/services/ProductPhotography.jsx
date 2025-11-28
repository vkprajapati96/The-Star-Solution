import React from "react";
// import productImg1 from "../../assets/productImg1.png";
// import productImg2 from "../../assets/productImg2.jpg";
// import productImg3 from "../../assets/productImg3.jpg";
// import productImg4 from "../../assets/productNike.jpg";
// import productPhone from "../../assets/productPhone.png";

import product from "../../assets/image/productImg/product.png"
import product1 from "../../assets/image/productImg/product1.png"
import product2 from "../../assets/image/productImg/product2.png"
import product3 from "../../assets/image/productImg/product3.png"
import ContactUs from "../../components/ContactUs";


const ProductPhotography = () => {

//   const images = [productImg1, productImg2, productImg3, productImg4];


  const serviceImages = [
    {
      img: product3,
      title: "Product Photography on Your Choice",
    },
    {
      img: product2,
      title: "Product Photography On Color",
    },
    {
      img: product1,
      title: "Creative & Lifestyle Photography, Motion & 360 Spins",
    },

  ];  
  
  return (
    < >
      {/* div 1 */}
  
<div className="py-16 bg-[#1A3255] text-white">
  <div className="w-full max-w-[1340px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">

    {/* Left: Heading + Description */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 text-center lg:text-left">

      <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 leading-snug">
        Product Photography & Infographics
      </h2>

      <p className="text-lg md:text-base  opacity-90 leading-[30px]">
        We Offer High-Resolution Product Photography, Lifestyle Shoots, And Premium
        Graphic Design To Elevate Your Brand Presence Across All E-Commerce Platforms.
        Our Team Creates Visually Appealing Infographics, Comparison Charts, And Feature
        Highlights Using Advanced Editing Tools And AI-Powered Enhancement Techniques.
        From Amazon And Flipkart Listings To Shopify Stores, We Deliver Conversion-Focused
        Visuals, Creative Layouts, 3D Renders, And AI-Generated Concept Designs That Improve
        Click-Through Rates, Build Trust, And Make Your Products Stand Out In A Competitive Market.
      </p>

    </div>

    {/* Right: Image */}
    <div className="w-full lg:w-1/2 flex items-center justify-center">
      <img
        src={product}
        alt="Product Photography & Infographics"
        className="w-full lg:max-w-[520px] rounded-2xl shadow-2xl object-cover"
      />
    </div>

  </div>
</div>


     
      {/* section 2 */}

   <div className="max-w-[1340px] mx-auto px-6 mt-20 pb-16">
  <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 text-center mb-12">
    Product Photography Services
  </h2>

  {/* Responsive Grid Fix */}
  <div className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-2 
      lg:grid-cols-3 
      gap-8
    "
  >
    {serviceImages.map((service, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-2xl p-4 flex flex-col justify-between items-center hover:shadow-2xl transition-all duration-300"
      >
        <img
          src={service.img}
          alt={`Service ${index + 1}`}
          className="w-full h-[350px] md:h-[420px] object-contain rounded-xl"
          loading="lazy"
        />

        <p className="text-[#1A3255] text-lg md:text-[14px] mt-4 text-center">
          {service.title}
        </p>
      </div>
    ))}
  </div>
  </div>


{/*  */}

<ContactUs/>

  </>
  );
};

export default ProductPhotography;
