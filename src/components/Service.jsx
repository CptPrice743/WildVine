import React from 'react';
// Import images
import subtitleImgGreen from '../assets/images/subtitle-img-green.png';
// Note: The background image is set via CSS, so no import needed here for that.
// Ensure the path in style.css is correct relative to the CSS file itself,
// or adjust it to be relative to the public folder if you move the image there.
// For example, if service-map.png is in src/assets/images, the CSS url might become url('../images/service-map.png')

function Service() {
  return (
    <section className="section service" id="service" /* style={{ backgroundImage: `url(${serviceMap})` }} */ >
       {/* Background image is handled by CSS */}
      <div className="container">
        <p className="section-subtitle">
          <img src={subtitleImgGreen} width="32" height="7" alt="Wavy line" />
          <span>What We Do</span>
        </p>
        <h2 className="h2 section-title">
          We Work Differently to <strong>keep The World Safe</strong>
        </h2>
        <ul className="service-list">
          <li>
            <div className="service-card">
              <div className="card-icon"><ion-icon name="leaf-outline"></ion-icon></div>
              <h3 className="h3 card-title">Save Nature</h3>
              <p className="card-text">Tempor incididunt ut labores dolore magna suspene</p>
              <a href="#" className="btn-link">
                <span>Read More</span><ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon"><ion-icon name="earth-outline"></ion-icon></div>
              <h3 className="h3 card-title">Save Ecology</h3>
              <p className="card-text">Tempor incididunt ut labores dolore magna suspene</p>
              <a href="#" className="btn-link">
                <span>Read More</span><ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </li>
           <li>
            <div className="service-card">
              <div className="card-icon"><ion-icon name="flower-outline"></ion-icon></div>
              <h3 className="h3 card-title">Tree Plantation</h3>
              <p className="card-text">Tempor incididunt ut labores dolore magna suspene</p>
              <a href="#" className="btn-link">
                <span>Read More</span><ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </li>
           <li>
            <div className="service-card">
              <div className="card-icon"><ion-icon name="boat-outline"></ion-icon></div>
              <h3 className="h3 card-title">Clear Ocean</h3>
              <p className="card-text">Tempor incididunt ut labores dolore magna suspene</p>
              <a href="#" className="btn-link">
                <span>Read More</span><ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Service;