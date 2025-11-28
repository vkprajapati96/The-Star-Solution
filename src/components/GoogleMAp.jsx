import React from "react";

const GoogleMap = () => {
  return (
    <div className="w-full h-[450px] mb-16 ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.561748403562!2d77.3150615!3d28.584622899999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a83e8c2b7d%3A0x9d9bed3612f70196!2sThe%20Star%20Solution!5e1!3m2!1sen!2sin!4v1761375518472!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="shadow-lg"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
