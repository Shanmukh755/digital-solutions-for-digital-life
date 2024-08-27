import React from 'react';
import './index.css'; // Ensure you have this CSS file

const ScrollingText = () => {
  return (
    <div className="scroll-container">
      <div className="marquee">
        <span>Web Design</span>
        <span>SEO(Social Engine Optimization)</span>
        <span>Social Media Marketing</span>
        <span>Digital Marketing</span>
        <span>Graphic Design</span>
        <span>Content Strategy</span>
      </div>
    </div>
  );
};

export default ScrollingText;