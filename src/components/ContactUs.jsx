import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <section id="contact" className="bg-gray-100 text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      {/* Top Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl  font-bold tracking-wide text-yellow-600">
          CONTACT US
        </h2>
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Div: Form */}
        <div className="flex-1 bg-white p-8 sm:p-10 rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
          <form className="flex flex-col gap-4 flex-1">
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900"
            />
            <button
              type="submit"
              className="bg-yellow-500 w-[100px] mx-auto text-gray-900 font-semibold py-2 rounded-md hover:bg-yellow-600 transition-colors mt-2"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Div: Contact Info */}

        <div className="flex-1 flex flex-col justify-start gap-6 p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <MapPin size={24} className="text-yellow-500" />
            <span className="text-lg sm:text-xl font-semibold">
             The Star Solution
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={24} className="text-yellow-500" />
            <span className="text-lg text-black sm:text-xl">
              info@thestarsolution.com, 
            hr@thestarsolution.com

</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={24} className="text-yellow-500" />
            <span className="text-lg text-black sm:text-xl">0120 4120438 ,


+91 9670242590</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm sm:text-base mt-4">
            At The Star Solution, we are committed to providing exceptional
            e-commerce seller account management services on platforms like
            Amazon, Flipkart, and more. Whether you have questions about our
            services, need support with your seller account, or are looking to
            collaborate, our dedicated team is here to assist you.
          </p>
          <p className="text-gray-700 text-sm sm:text-base mt-2">
            Feel free to reach out to us via email, phone, or the contact form
            beside. We strive to respond promptly and ensure that your needs are
            met with the highest level of professionalism and care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

