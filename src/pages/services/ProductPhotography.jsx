import React from "react";
import productImg1 from "../../assets/productImg1.png";
import productImg2 from "../../assets/productImg2.jpg";
import productImg3 from "../../assets/productImg3.jpg";
import productImg4 from "../../assets/productNike.jpg";
import productPhone from "../../assets/productPhone.png";


const ProductPhotography = () => {
//   const images = [productImg1, productImg2, productImg3, productImg4];

  const serviceImages = [
    {
      img: productImg4,
      title: "Product Photography on Your Choice",
    },
    {
      img: productImg2,
      title: "Product Photography On Color",
    },
    {
      img: productImg3,
      title: "Creative & Lifestyle Photography, Motion & 360 Spins",
    },

  ];
  
  
  return (
    <section className="bg-white ">
      {/* SECTION 1 */}
  <div className="bg-blue-950 py-10">
  <div className="max-w-[1340px] mx-auto px-4">
    
    {/* Desktop Image (1024px and above) */}
    <div className="hidden lg:block">
      <img
        src={productImg1}
        alt="Product Photography"
        className="w-full h-auto object-contain rounded-2xl"
        loading="lazy"
      />
    </div>

    {/* Mobile/Tablet Image (below 1024px) */}
    <div className="block lg:hidden">
      <img
        src={productPhone}
        alt="Product Photography (Mobile)"
        className="w-full h-auto object-contain rounded-2xl"
        loading="lazy"
      />
    </div>

  </div>
</div>

      {/* SECTION 2 */}
      {/* <div className="max-w-[1340px] mx-auto px-6 mt-16">
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-500 text-center mb-10 leading-snug">
          Elevate Your E-Commerce Game with <br />
          <span className="text-[#1A3255]">Stunning Product Photography</span>{" "}
          by <span className="text-yellow-600">The Star Solution</span>
        </h2>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide py-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-[250px] md:min-w-[350px] flex-shrink-0"
            >
              <img
                src={img}
                alt={`Product ${index + 1}`}
                className="w-full h-[250px] md:h-[400px] object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div> */}

      {/* SECTION 3 */}
      <div className="max-w-[1340px] mx-auto px-6 mt-20 pb-16  ">
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-500 text-center mb-12">
          Product Photography Services
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">
          {serviceImages.map((service, index) => (
            <div
              key={index}
              className="flex-1 bg-white rounded-2xl  shadow-2xl p-4 flex flex-col justify-between items-center hover:shadow-2xl transition-all duration-300"
            >
          
              <img
                src={service.img}
                alt={`Service ${index + 1}`}
                className="w-full h-[350px] md:h-[420px] object-contain rounded-xl"
                loading="lazy"
              />

              <p className="text-[#1A3255] text-lg md:text-[14px]  mt-4">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPhotography;
