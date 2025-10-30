import React, { useRef, useEffect, useState } from "react";
// import amazon from "../assets/amazon.png";
// import filpkart from "../assets/filpkart.png";
// import glowroad from "../assets/glowroad.jpg";
// import jiomart from "../assets/jiomart.png";
// import meesho from "../assets/meesho2.png";
// import walmart from "../assets/walmart.png";
import "./IconSections.css";

const IconSections = ({ speed =5 }) => {
  const marqueeRef = useRef(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  // const icons = [amazon, filpkart, meesho, glowroad, jiomart, walmart];

  useEffect(() => {
    if (marqueeRef.current) {
      setMarqueeWidth(marqueeRef.current.scrollWidth / 2); // half because we duplicated icons
    }
  }, []);

  return (
    <div className="marquee-container">
      <div
        className="marquee"
        style={{
          animationDuration: `${speed}s`,
          transform: `translateX(0)`,
          "--marquee-width": `${marqueeWidth}px`,
        }}
        ref={marqueeRef}
      >
        {icons.concat(icons).map((icon, idx) => (
          <img key={idx} src={icon} alt="icon" className="icon-item" />
        ))}
      </div>
    </div>
  );
};

export default IconSections;
