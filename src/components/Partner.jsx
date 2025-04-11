import React from 'react';
// Import images
import partner1 from '../assets/images/partner-1.png';
import partner1Active from '../assets/images/partner-1-active.png';
import partner2 from '../assets/images/partner-2.png';
import partner2Active from '../assets/images/partner-2-active.png';
import partner3 from '../assets/images/partner-3.png';
import partner3Active from '../assets/images/partner-3-active.png';
import partner4 from '../assets/images/partner-4.png';
import partner4Active from '../assets/images/partner-4-active.png';
import partner5 from '../assets/images/partner-5.png';
import partner5Active from '../assets/images/partner-5-active.png';

const partners = [
    { id: 1, gray: partner1, color: partner1Active, alt: "Children Fund", width: 157, height: 55, link: "#" },
    { id: 2, gray: partner2, color: partner2Active, alt: "Non Profit Agency", width: 163, height: 55, link: "#" },
    { id: 3, gray: partner3, color: partner3Active, alt: "Rise Hand Help Us", width: 149, height: 55, link: "#" },
    { id: 4, gray: partner4, color: partner4Active, alt: "Helping", width: 169, height: 58, link: "#" },
    { id: 5, gray: partner5, color: partner5Active, alt: "Poor Fund Organization", width: 211, height: 55, link: "#" },
]

function Partner() {
  return (
    <section className="section partner">
      <div className="container">
         {partners.map(p => (
            <a href={p.link} className="partner-logo" key={p.id}>
                <img src={p.gray} width={p.width} height={p.height} loading="lazy" alt={p.alt} className="gray" />
                <img src={p.color} width={p.width} height={p.height} loading="lazy" alt={p.alt} className="color" />
             </a>
         ))}
      </div>
    </section>
  );
}

export default Partner;