import React, { useState, useEffect, useRef } from "react";

// Note: Vite handles image imports like this
// import logoImg from '../assets/images/logo.png'; // Example if you had a logo image

function Header({ onDonateClick }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const navbarRef = useRef(null); // Ref for the navbar element

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  // Effect for header scroll activation
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 50 ? setIsHeaderActive(true) : setIsHeaderActive(false);
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array means this effect runs once on mount

  // Effect for closing navbar when clicking a link (or outside) - basic version
  // A more robust solution might involve checking click targets
  useEffect(() => {
    const handleLinkClick = (event) => {
      // Check if the click is on a navbar link
      if (
        navbarRef.current &&
        navbarRef.current.contains(event.target) &&
        event.target.tagName === "A"
      ) {
        closeNav();
      }
    };

    // Add event listener to the document
    document.addEventListener("click", handleLinkClick);

    // Cleanup listener
    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, [navbarRef]); // Re-run if navbarRef changes (though it shouldn't often)

  return (
    <header className={`header ${isHeaderActive ? "active" : ""}`} data-header>
      <div className="container">
        <h1>
          <a href="#" className="logo">
            Wildvine
          </a>
        </h1>

        <select name="language" className="lang-switch">
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="spanish">Spanish</option>
        </select>

        <button
          className="nav-open-btn"
          aria-label="Open Menu"
          onClick={toggleNav}
          data-nav-open-btn
        >
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <nav
          className={`navbar ${isNavOpen ? "active" : ""}`}
          data-navbar
          ref={navbarRef}
        >
          <button
            className="nav-close-btn"
            aria-label="Close Menu"
            onClick={closeNav}
            data-nav-close-btn
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <a href="#" className="logo">
            Wildvine
          </a>

          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link" data-nav-link>
                <span>Home</span>
                <ion-icon
                  name="chevron-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a href="#about" className="navbar-link" data-nav-link>
                <span>About</span>
                <ion-icon
                  name="chevron-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a href="#service" className="navbar-link" data-nav-link>
                <span>Service</span>
                <ion-icon
                  name="chevron-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a href="#donate" className="navbar-link" data-nav-link>
                <span>Donate</span>
                <ion-icon
                  name="chevron-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a href="#event" className="navbar-link" data-nav-link>
                <span>Event</span>
                <ion-icon
                  name="chevron-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a href="#footer" className="navbar-link" data-nav-link>
                <span>Contact</span>
                <ion-icon
                  name="chevron-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-action">
          <button className="search-btn" aria-label="Search">
            <ion-icon name="search-outline"></ion-icon>
          </button>
          <button className="btn btn-primary" onClick={onDonateClick}>
            <span>Donation</span>
            <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
