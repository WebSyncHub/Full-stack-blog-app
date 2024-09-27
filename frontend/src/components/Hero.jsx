import React from 'react';
import './HeroSection.css';
import { images } from "../constant"

const HeroSection = () => {
  return (
    <>
    <div className="hero__section">
      <div className="hero-content">
        <h1>A 6-Step Guide to Social Media for Small Businesses</h1>
        <p className="hero-description">
          Social media for small businesses can be crucial to growth and success. 
          Make an impact on your small business with this guide to social media.
        </p>
        <p className="hero-meta">
          <span>May 17, 2022</span> | <span>Social Media</span> | <span>12 min read</span>
        </p>
      </div>
      <div className="hero-image">
        <img src={images.skateboardImg} alt="Hero" />
      </div>
      
    </div>
      {/* New Sections */}
      </>
  );
};

export default HeroSection;
