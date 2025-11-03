import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import career from "../assets/career.webp";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    role: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all required fields");
      return;
    }

    emailjs
      .send(
        "your_service_id",   
        "your_template_id",  
        formData,              
        "your_public_key"    
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            gender: "",
            role: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message");
        }
      );
  };

  return (
    <section className="bg-[#f0f0f0] py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left Side: Image */}
        <div className="">
          <img
            src={career}
            alt="We Are Hiring"
            className="object-contain rounded-xl shadow-md"
          />
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 shadow-2xl rounded-2xl p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center mb-6">
            Want To Join Us?
          </h2>

          <form onSubmit={sendEmail} className="flex flex-col gap-4">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-yellow-600"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-yellow-600"
            />

            {/* Phone + Gender */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="phone"
                  min="0"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-yellow-600"
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-yellow-600"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/* Role */}
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-yellow-600"
            >
              <option value="">Select Department / Role</option>
              <option>Human Resource (HR)</option>
              <option>Digital Marketing</option>
              <option>Sales & Marketing</option>
              <option>Business Development (BD)</option>
              <option>Customer Support / BPO</option>
              <option>Content Writer</option>
              <option>Graphic Designer</option>
              <option>Web Developer</option>
              <option>Frontend Developer (React / Next.js)</option>
              <option>Backend Developer (Node.js / Express)</option>
              <option>Full Stack Developer</option>
              <option>UI/UX Designer</option>
              <option>App Developer (React Native / Flutter)</option>
              <option>Software Tester / QA</option>
              <option>Project Manager</option>
              <option>Team Lead</option>
              <option>Finance / Accounts</option>
              <option>Operations Executive</option>
              <option>IT Support / Networking</option>
              <option>Intern (Fresher)</option>
              <option>Other</option>
            </select>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Send Messages"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-yellow-600"
              rows="4"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="bg-yellow-500 cursor-pointer mx-auto w-52 text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

    </section>
  );
};

export default Career;
