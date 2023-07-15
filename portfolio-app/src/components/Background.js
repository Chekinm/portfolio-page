import React, { useState } from "react";

const Background = ({children}) => {
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;
    setGradientPosition({ x, y });
  };

  const getBackgroundStyle = () => {
    const { x, y } = gradientPosition;
    return {
      background: `radial-gradient(circle at ${x}% ${y}%, #2b567b, #32343e 80%)`,
    };
  };

  return (
    <div
      style={getBackgroundStyle()}
      onMouseMove={handleMouseMove}
      className="app"
    >
      {children}
    </div>
  );
}

export default Background;
