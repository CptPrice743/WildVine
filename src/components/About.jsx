import React, { useState } from 'react';
// Import images
import decoImg from '../assets/images/deco-img.png';
import aboutBanner1 from '../assets/images/about-banner-1.jpg';
import aboutBanner2 from '../assets/images/about-banner-2.jpg';
import aboutBanner3 from '../assets/images/about-banner-3.jpg';
import aboutBanner4 from '../assets/images/about-banner-4.jpg';
import subtitleImgGreen from '../assets/images/subtitle-img-green.png';

function About() {
  // Simple state for tabs - can be expanded with different content per tab
  const [activeTab, setActiveTab] = useState('mission');

  // Placeholder content for tabs - replace with actual content if it differs
  const tabContent = {
    mission: {
      text: "But I must explain to you how all this mistaken denouncing pleasure and praising pain was born and I will give you a complete account of the system expoundmaster",
      listItems: ["Charity For Foods", "Charity For Education", "Charity For Water", "Charity For Medical"],
    },
    vision: {
      text: "Our vision is to create a world where all animals are treated with respect and kindness. We strive for a future where habitats are protected.",
      listItems: ["Habitat Protection", "Wildlife Conservation", "Community Education", "Sustainable Practices"],
    },
    plan: {
        text: "Our next plan involves expanding our rescue operations and launching new educational programs globally.",
        listItems: ["Expand Rescue Centers", "Global Awareness Campaigns", "Partner with Schools", "Increase Volunteer Base"],
    }
  };

  const currentContent = tabContent[activeTab];


  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-banner">
          <h2 className="deco-title">About Us</h2>
          <img src={decoImg} width="58" height="261" alt="" className="deco-img" />
          <div className="banner-row">
            <div className="banner-col">
              <img src={aboutBanner1} width="315" height="380" loading="lazy" alt="Tiger" className="about-img w-100" />
              <img src={aboutBanner2} width="386" height="250" loading="lazy" alt="Panda" className="about-img about-img-2 w-100" />
            </div>
            <div className="banner-col">
              <img src={aboutBanner3} width="250" height="277" loading="lazy" alt="Elephant" className="about-img about-img-3 w-100" />
              <img src={aboutBanner4} width="315" height="380" loading="lazy" alt="Deer" className="about-img w-100" />
            </div>
          </div>
        </div>

        <div className="about-content">
          <p className="section-subtitle">
            <img src={subtitleImgGreen} width="32" height="7" alt="Wavy line" />
            <span>Why Choose Us</span>
          </p>
          <h2 className="h2 section-title">
            Rise Your Hand to Save <strong>World Animals Life</strong>
          </h2>

          <ul className="tab-nav">
            <li>
              <button className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`} onClick={() => setActiveTab('mission')}>Our Mission</button>
            </li>
            <li>
              <button className={`tab-btn ${activeTab === 'vision' ? 'active' : ''}`} onClick={() => setActiveTab('vision')}>Our Vision</button>
            </li>
            <li>
              <button className={`tab-btn ${activeTab === 'plan' ? 'active' : ''}`} onClick={() => setActiveTab('plan')}>Next Plan</button>
            </li>
          </ul>

          <div className="tab-content">
             <p className="section-text">
                 {currentContent.text}
             </p>
             <ul className="tab-list">
                 {currentContent.listItems.map((item, index) => (
                     <li className="tab-item" key={index}>
                         <div className="item-icon">
                             <ion-icon name="checkmark-circle"></ion-icon>
                         </div>
                         <p className="tab-text">{item}</p>
                     </li>
                 ))}
             </ul>
             {/* This button could link to a more detailed about page if one exists */}
             <button className="btn btn-secondary">
                 <span>Learn More Us</span>
                 <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
             </button>
         </div>

        </div>
      </div>
    </section>
  );
}

export default About;