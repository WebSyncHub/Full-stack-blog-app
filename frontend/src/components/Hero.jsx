import React from 'react';
import './HeroSection.css';
import { images } from "../constant"

const HeroSection = () => {
  return (
    <>
    <div className="hero__section-top">
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
      <div className="bottom-sections">
        <div className="section">
          <img src={images.frontendImg} alt="Section 1" className="section-image" />
          <div className="section-content">
            <h2>Section 1 Title</h2>
            <p className="section-meta">8 min read</p>
          </div>
        </div>
        <div className="section">
          <img src={images.serverImg} alt="Section 2" className="section-image" />
          <div className="section-content">
            <h2>Section 2 Title</h2>
            <p className="section-meta">10 min read</p>
          </div>
        </div>
      </div>
      </>
  );
};

export default HeroSection;
