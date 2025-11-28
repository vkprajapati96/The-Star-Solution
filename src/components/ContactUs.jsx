import React, { useState, useRef } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const ContactUs = () => {
  const form = useRef();
  const [message, setMessage] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setMessage({
      ...message,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zlxxs6a', 'template_fcorz4w', form.current, 'p83tjM7IlgltYDV87')
      .then(
        () => {
          toast.success("Message sent successfully");
          setMessage({
            fullname: '',
            phone: "",
            email: '',
            message: ''
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Failed to send message");
        }
      );
  };

  return (
    <div id="contact" className="bg-gray-100 text-gray-900 pt-12 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl  font-extrabold tracking-wide text-yellow-400">
          CONTACT US
        </h2>
      </div>

      {/* Main container for content and form */}
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8">
        {/* Contact Form */}
        <div className="flex-1 bg-white p-8 sm:p-10 rounded-2xl shadow-2xl border border-gray-200">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="fullname"
              id="fullname"
              value={message.fullname}
              onChange={handleChange}
              className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900"
              placeholder="Full Name"
              required
            />

            <input
              type="number"
              name="phone"
              id="phone"
              min="0"
              value={message.phone}
              onChange={handleChange}
              className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900"
              placeholder="Phone"
              required
            />

            <input
              type="email"
              name="email"
              id="email"
              value={message.email}
              onChange={handleChange}
              className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900"
              placeholder="Email"
              required
            
            />

            <textarea
              name="message"
              id="message"
              value={message.message}
              onChange={handleChange}
              rows="5"
              className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900"
              placeholder="Message"
              required
            />

            <button
              type="submit"
              className="cursor-pointer bg-yellow-400 w-[120px] mx-auto text-gray-900 font-semibold py-2 rounded-md hover:bg-yellow-600 transition-colors mt-2"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex-1 flex flex-col justify-start gap-6 p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <IoLocationSharp size={24} className="text-yellow-500" />
            <span className="text-lg sm:text-xl font-semibold text-black">The Star Solution</span>
          </div>

          <div className="flex items-center gap-3">
            <IoMdMail size={24} className="text-yellow-500" />
            <span className="text-lg sm:text-xl text-black font-semibold">
              info@thestarsolution.com, <br /> hr@thestarsolution.com
            </span>
          </div>

          <div className="flex items-center gap-3">
            <IoCall size={24} className="text-yellow-500" />
            <span className="text-lg sm:text-xl text-black font-semibold">
              0120 4120438 , +91 9670242590 , +91 8368067567
            </span>
          </div>

          <p className="text-gray-700 text-sm sm:text-base mt-4">
            
          Have Questions Or Need Support? Reach Out To Us We’re Here To Help.  
 </p>
        </div>
      </div>

     
    </div>
  );
};

export default ContactUs;
