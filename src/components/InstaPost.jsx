import React from 'react';
// Import images
import insta1 from '../assets/images/insta-1.jpg';
import insta2 from '../assets/images/insta-2.jpg';
import insta3 from '../assets/images/insta-3.jpg';
import insta4 from '../assets/images/insta-4.jpg';
import insta5 from '../assets/images/insta-5.jpg';

const posts = [
    { id: 1, img: insta1, alt: "Lion", link: "#" },
    { id: 2, img: insta2, alt: "Deer", link: "#" },
    { id: 3, img: insta3, alt: "Wild Bear", link: "#" },
    { id: 4, img: insta4, alt: "Deer", link: "#" },
    { id: 5, img: insta5, alt: "Horses", link: "#" },
];

function InstaPost() {
  return (
    <section className="insta-post">
      <ul className="insta-post-list">
          {posts.map(post => (
            <li className="insta-post-item" key={post.id}>
                <a href={post.link} className="insta-post-link" target="_blank" rel="noopener noreferrer"> {/* Added target and rel for external links */}
                    <img src={post.img} width="320" height="300" loading="lazy" alt={post.alt} className="img-cover" />
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
             </li>
          ))}
      </ul>
    </section>
  );
}

export default InstaPost;