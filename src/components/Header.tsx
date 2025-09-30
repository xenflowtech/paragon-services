import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import QuoteModal from './QuoteModal';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // Desktop dropdown states
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  // Mobile dropdown states (separate to avoid interference on certain pages)
  const [mobileServicesDropdown, setMobileServicesDropdown] = useState(false);
  const [mobileIndustriesDropdown, setMobileIndustriesDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const body = document.body;
    if (isMobileMenuOpen) {
      body.classList.add('mobile-menu-open');
    } else {
      body.classList.remove('mobile-menu-open');
    }
  }, [isMobileMenuOpen]);

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsQuoteModalOpen(true);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesDropdown(false);
    setMobileIndustriesDropdown(false);
    setAboutDropdown(false);
  };

  // Handle swipe to close on mobile
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleTouchStart = (e: TouchEvent) => {
      const startY = e.touches[0].clientY;
      const startX = e.touches[0].clientX;
      
      const handleTouchMove = (e: TouchEvent) => {
        const currentY = e.touches[0].clientY;
        const currentX = e.touches[0].clientX;
        const deltaY = currentY - startY;
        const deltaX = currentX - startX;
        
        // If swiping down more than 100px and not swiping horizontally
        if (deltaY > 100 && Math.abs(deltaX) < 50) {
          closeMobileMenu();
          document.removeEventListener('touchmove', handleTouchMove);
          document.removeEventListener('touchend', handleTouchEnd);
        }
      };
      
      const handleTouchEnd = () => {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
      
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchstart', handleTouchStart);
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          {/* Logo Section */}
          <div className="logo-section">
            <Link to="/" onClick={closeMobileMenu}>
              <img src="/logo.png" alt="Paragon Services" className="logo-image" />
            </Link>
            <div className="logo-tagline">Your Trusted Partner in Customs & Freight Solutions</div>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Desktop Navigation Menu */}
          <nav className="nav-menu desktop-nav">
            <ul>
              <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
              <li>
                <div 
                  className="dropdown-trigger"
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
                  <i className="fas fa-chevron-down"></i>
                  {servicesDropdown && (
                    <div className="dropdown-menu">
                      <Link to="/services#customs-clearance">Customs Clearance</Link>
                      <Link to="/services#inland-transportation">Inland Transportation</Link>
                      <Link to="/services#door-to-door">Door to Door Service</Link>
                      <Link to="/services#air-freight">Air Freight</Link>
                      <Link to="/services#sea-freight">Sea Freight</Link>
                      <Link to="/services#project-management">Project Management</Link>
                      <Link to="/services#consultancy">Consultancy</Link>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <div 
                  className="dropdown-trigger"
                  onMouseEnter={() => setIndustriesDropdown(true)}
                  onMouseLeave={() => setIndustriesDropdown(false)}
                >
                  <Link to="/industries" className={location.pathname === '/industries' ? 'active' : ''}>Industries</Link>
                  <i className="fas fa-chevron-down"></i>
                  {industriesDropdown && (
                    <div className="dropdown-menu">
                      <Link to="/industries#textile-sector">Textile Sector</Link>
                      <Link to="/industries#construction-machinery">Construction Machinery</Link>
                      <Link to="/industries#sugar-plant">Sugar Plant</Link>
                      <Link to="/industries#wasa">WASA</Link>
                      <Link to="/industries#solar-energy">Solar Energy</Link>
                    </div>
                  )}
                </div>
              </li>
              <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
              <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
            </ul>
          </nav>

          {/* Desktop Get A Quote Button */}
          <button className="quote-btn desktop-quote-btn" onClick={handleQuoteClick}>GET A QUOTE</button>
        </div>

        {/* Mobile Navigation Menu */}
        <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          {/* Mobile Menu Header with Close Button */}
          <div className="mobile-nav-header">
            <div className="mobile-nav-logo">
              <img src="/logo.png" alt="Paragon Services" className="mobile-logo-image" />
            </div>
            <button className="mobile-close-btn" onClick={closeMobileMenu}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <ul>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMobileMenu}>Home</Link></li>
            <li>
              <div className="mobile-dropdown">
                <div className="mobile-dropdown-trigger" onClick={() => {
                  setMobileServicesDropdown(!mobileServicesDropdown);
                  if (mobileIndustriesDropdown) setMobileIndustriesDropdown(false);
                  if (aboutDropdown) setAboutDropdown(false);
                }}>
                  <span>Services</span>
                  <i className={`fas fa-chevron-down ${mobileServicesDropdown ? 'rotated' : ''}`}></i>
                </div>
                {mobileServicesDropdown && (
                  <div className="mobile-dropdown-menu">
                    <Link to="/services#customs-clearance" onClick={closeMobileMenu}>Customs Clearance</Link>
                    <Link to="/services#inland-transportation" onClick={closeMobileMenu}>Inland Transportation</Link>
                    <Link to="/services#door-to-door" onClick={closeMobileMenu}>Door to Door Service</Link>
                    <Link to="/services#air-freight" onClick={closeMobileMenu}>Air Freight</Link>
                    <Link to="/services#sea-freight" onClick={closeMobileMenu}>Sea Freight</Link>
                    <Link to="/services#project-management" onClick={closeMobileMenu}>Project Management</Link>
                    <Link to="/services#consultancy" onClick={closeMobileMenu}>Consultancy</Link>
                  </div>
                )}
              </div>
            </li>
            <li>
              <div className="mobile-dropdown">
                <div className="mobile-dropdown-trigger" onClick={() => {
                  setMobileIndustriesDropdown(!mobileIndustriesDropdown);
                  if (mobileServicesDropdown) setMobileServicesDropdown(false);
                  if (aboutDropdown) setAboutDropdown(false);
                }}>
                  <span>Industries</span>
                  <i className={`fas fa-chevron-down ${mobileIndustriesDropdown ? 'rotated' : ''}`}></i>
                </div>
                {mobileIndustriesDropdown && (
                  <div className="mobile-dropdown-menu">
                    <Link to="/industries#textile-sector" onClick={closeMobileMenu}>Textile Sector</Link>
                    <Link to="/industries#construction-machinery" onClick={closeMobileMenu}>Construction Machinery</Link>
                    <Link to="/industries#sugar-plant" onClick={closeMobileMenu}>Sugar Plant</Link>
                    <Link to="/industries#wasa" onClick={closeMobileMenu}>WASA</Link>
                    <Link to="/industries#solar-energy" onClick={closeMobileMenu}>Solar Energy</Link>
                  </div>
                )}
              </div>
            </li>
            <li>
              <div className="mobile-dropdown">
                <div className="mobile-dropdown-trigger" onClick={() => {
                  setAboutDropdown(!aboutDropdown);
                  if (mobileServicesDropdown) setMobileServicesDropdown(false);
                  if (mobileIndustriesDropdown) setMobileIndustriesDropdown(false);
                }}>
                  <span>About Us</span>
                  <i className={`fas fa-chevron-down ${aboutDropdown ? 'rotated' : ''}`}></i>
                </div>
                {aboutDropdown && (
                  <div className="mobile-dropdown-menu">
                    <Link to="/about" onClick={closeMobileMenu}>Company History</Link>
                    <Link to="/about" onClick={closeMobileMenu}>Our Mission</Link>
                    <Link to="/about" onClick={closeMobileMenu}>Team</Link>
                    <Link to="/about" onClick={closeMobileMenu}>Careers</Link>
                    <Link to="/about" onClick={closeMobileMenu}>News & Updates</Link>
                  </div>
                )}
              </div>
            </li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMobileMenu}>Contact</Link></li>
            <li>
              <button className="mobile-quote-btn" onClick={(e) => { handleQuoteClick(e); closeMobileMenu(); }}>
                GET A QUOTE
              </button>
            </li>
          </ul>
        </nav>
      </header>
      
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </>
  );
};

export default Header; 