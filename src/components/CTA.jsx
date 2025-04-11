import React from 'react';
// Import images
import ctaBanner from '../assets/images/cta-banner.jpg';

function CTA() {
  return (
    <section className="section cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="h2 section-title">324+ Trusted Global Partners</h2>
          {/* This button could link to a partnership page/form */}
          <button className="btn btn-outline">
            <span>Become a Partner</span>
            <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>
        <figure className="cta-banner">
          <img src={ctaBanner} width="520" height="228" loading="lazy" alt="Fox" className="img-cover" />
        </figure>
      </div>
    </section>
  );
}

export default CTA;