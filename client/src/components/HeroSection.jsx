import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Maximize Your Crop Yield with AI-Powered Soil Analysis</h1>
        <p>
          AgriPredict helps farmers make data-driven decisions by analyzing soil
          nutrition and recommending optimal crops for maximum yield and
          sustainability.
        </p>
        <a href="/signup" className="cta-button" role="button">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;