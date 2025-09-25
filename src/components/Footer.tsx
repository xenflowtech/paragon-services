import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Contact Information Column */}
        <div className="footer-column contact-column">
          <div className="footer-logo">
            <img src="/logo.png" alt="Paragon Services" />
          </div>
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <span>Lahore: 042-36686620-1</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <span>Karachi: 021-32205730, 32210501</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <span>CEO: 0300-8480287</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>Lahore: parasevslhr@yahoo.com</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>Karachi: paraservs498@gmail.com</span>
          </div>
        </div>

        {/* Services Column */}
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services#customs-clearance">Customs Clearance</Link></li>
            <li><Link to="/services#inland-transportation">Inland Transportation</Link></li>
            <li><Link to="/services#door-to-door">Door to Door Service</Link></li>
            <li><Link to="/services#air-freight">Air Freight</Link></li>
            <li><Link to="/services#sea-freight">Sea Freight</Link></li>
            <li><Link to="/services#project-management">Project Management</Link></li>
            <li><Link to="/services#consultancy">Consultancy</Link></li>
          </ul>
        </div>

        {/* Industries Column */}
        <div className="footer-column">
          <h4>Industries</h4>
          <ul>
            <li><Link to="/industries#textile-sector">Textile Sector</Link></li>
            <li><Link to="/industries#construction-machinery">Construction Machinery</Link></li>
            <li><Link to="/industries#sugar-plant">Sugar Plant</Link></li>
            <li><Link to="/industries#wasa">WASA</Link></li>
            <li><Link to="/industries#solar-energy">Solar Energy</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>


      </div>
    </footer>
  );
};

export default Footer;