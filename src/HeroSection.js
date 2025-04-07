import React from 'react';
import heroImage from './hero-background.png';


const HeroSection = () => {
  return (
    
    <section 
    className="hero" 
    style={{ backgroundImage: `url(${heroImage})` }} // Use inline style to set background image
  >
      <div className="hero-content">
        <h1>Welcome to Men on Fire</h1>
        <p>Explore the latest in fashion and style.</p>
        <button>Shop Now</button>
      </div>
    </section>
   
  );
};

export default HeroSection;
