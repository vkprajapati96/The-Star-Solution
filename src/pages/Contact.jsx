import React, { useState, useRef } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Contact = () => {
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
    <section id="contact" className="bg-gray-100 text-gray-900 pt-12 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl  font-extrabold tracking-wide text-yellow-600">
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
              className="bg-yellow-500 w-[120px] mx-auto text-gray-900 font-semibold py-2 rounded-md hover:bg-yellow-600 transition-colors mt-2"
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
              0120 4120438 , +91 9670242590
            </span>
          </div>

          <p className="text-gray-700 text-sm sm:text-base mt-4">
            At The Star Solution, we are committed to providing exceptional e-commerce seller account management services on platforms like Amazon, Flipkart, and more. Whether you have questions about our services, need support with your seller account, or are looking to collaborate, our dedicated team is here to assist you.
          </p>
          <p className="text-gray-700 text-sm sm:text-base mt-2">
            Feel free to reach out to us via email, phone, or the contact form beside. We strive to respond promptly and ensure that your needs are met with the highest level of professionalism and care.
          </p>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-16 flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.461593844692!2d77.3148355754991!3d28.5859260756902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a83e8c2b7d%3A0x9d9bed3612f70196!2sThe%20Star%20Solution!5e0!3m2!1sen!2sin!4v1727351556903!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
     </div>
    </section>
  );
};

export default Contact;
