import React, { useEffect, useRef } from "react";

const SnakeCursor = () => {
  const snakeLength = 10; 
  const trail = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const dots = useRef([]);
  const requestRef = useRef(null);

  const speed = 0.09    ;

  useEffect(() => {
    // document.body.style.cursor = "none"; 


    for (let i = 0; i < snakeLength; i++) {
      const dot = document.createElement("div");
      dot.style.position = "fixed";
      dot.style.top = "0";
      dot.style.left = "0";
      dot.style.width = "10px";
      dot.style.height = "10px";
      dot.style.borderRadius = "50%";
      dot.style.background = `hsl(${200 + i * 10}, 100%, 60%)`;
      dot.style.pointerEvents = "none";
      dot.style.zIndex = "9999";
      dot.style.filter = "blur(1px)";
      document.body.appendChild(dot);
      dots.current.push(dot);
      trail.current.push({ x: 0, y: 0 });
    }

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      //  Lead dot follows cursor with adjustable speed
      trail.current[0].x += (mouse.current.x - trail.current[0].x) * speed;
      trail.current[0].y += (mouse.current.y - trail.current[0].y) * speed;

      for (let i = 1; i < snakeLength; i++) {
        const prev = trail.current[i - 1];
        const curr = trail.current[i];
        curr.x += (prev.x - curr.x) * 0.3;
        curr.y += (prev.y - curr.y) * 0.3;
      }

      // Draw all dots
      for (let i = 0; i < snakeLength; i++) {
        const dot = dots.current[i];
        const pos = trail.current[i];
        dot.style.transform = `translate(${pos.x - 5}px, ${pos.y - 5}px)`;
      
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      dots.current.forEach((dot) => document.body.removeChild(dot));
    };
    
  }, []);

  return null;
};

export default SnakeCursor;
