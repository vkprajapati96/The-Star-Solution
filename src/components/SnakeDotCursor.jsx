import React, { useEffect, useRef } from "react";

const SnakeCursor = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const trail = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Full screen setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 🔹 Trail points (kam rakhe taaki line chhoti aur tight ho)
    for (let i = 0; i < 4; i++) {
  trail.current.push({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
}


    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 🔹 1️⃣ Mouse se pehla point move hota hai (slow follow)
      const head = trail.current[0];
      head.x += (mouse.current.x - head.x) * 0.15;
      head.y += (mouse.current.y - head.y) * 0.15;

      // 🔹 2️⃣ Baaki points apne pehle wale ko follow karte hain (tight)
      for (let i = 1; i < trail.current.length; i++) {
        const prev = trail.current[i - 1];
        const point = trail.current[i];
        point.x += (prev.x - point.x) * 0.25;
        point.y += (prev.y - point.y) * 0.25;
      }

      // 🔹 Line draw karo
      ctx.beginPath();
      ctx.moveTo(trail.current[0].x, trail.current[0].y);
      for (let i = 1; i < trail.current.length; i++) {
        const point = trail.current[i];
        ctx.lineTo(point.x, point.y);
      }

      ctx.lineJoin = "round";
      ctx.strokeStyle = "rgba(234, 179, 8, 0.8)"; // soft yellow-500
      ctx.lineWidth = 4; // line moti/smooth
      ctx.lineCap = "round";
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
    />
  );
};

export default SnakeCursor;
