import React from "react";
import "./footer.css"; // Ensure you have this CSS file

const Footer = ({ siteLogo, githubIcon, linkedinIcon, instagramIcon, discordIcon }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={siteLogo} alt="website logo" />
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Product</h3>
            <ul>
              <li>Pricing</li>
              <li>Features</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li>Contact</li>
              <li>Platforms</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>GDPR</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Brand Guidelines</li>
            </ul>
          </div>
          <div className="footer-column get-it">
            <p><b>Get It</b></p>
            <p>Available On Chrome Store</p>
            <button className="download-button">Download Now</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>All rights are reserved &copy; BLOGI 2023</p>
        <div className="social-icons">
          <img src={githubIcon} alt="social media icons" width={20}/>
          <img src={linkedinIcon} alt="social media icons" width={20}/>
          <img src={discordIcon} alt="social media icons" width={20}/>
          <img src={instagramIcon} alt="social media icons" width={20}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
