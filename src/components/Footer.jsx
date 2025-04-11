import React from 'react';

function Footer() {
  return (
    <footer className="footer" id="footer"> {/* Added id for contact link */}
      <div className="container">
        <ul className="footer-list">
          <li>
            <a href="#" className="footer-link">Terms of use</a>
          </li>
          <li>
            <a href="#" className="footer-link">Privacy & Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;