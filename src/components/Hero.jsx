import React from 'react';
// Import images
import subtitleImgWhite from '../assets/images/subtitle-img-white.png';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <p className="section-subtitle">
          <img src={subtitleImgWhite} width="32" height="7" alt="Wavy line" />
          <span>Welcome to Wildvine</span>
        </p>

        <h2 className="h1 hero-title">
          Give Love for Saving <strong>World Animals</strong>
        </h2>

        <p className="hero-text">
          Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua suspendisse ultrices gravida.
        </p>
        {/* Link button to donate section */}
         <a href="#donate" className="btn btn-primary">
           <span>Donation</span>
           <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
         </a>
      </div>
    </section>
  );
}

export default Hero;