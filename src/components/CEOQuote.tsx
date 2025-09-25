import React from 'react';
import './CEOQuote.css';

const CEOQuote: React.FC = () => {
  return (
    <section className="ceo-quote-section">
      <div className="ceo-container">
        <div className="ceo-content">
          <div className="ceo-image">
            <img 
              src="/ceo-photo.jpg" 
              alt="Zahid Abdul Sattar Butt - CEO of Paragon Services" 
              className="ceo-photo"
            />
          </div>
          <div className="ceo-quote">
            <div className="quote-icon">❝</div>
            <blockquote>
              "At Paragon Services, our goal is simple: to make cargo handling, clearance, and transportation seamless for our clients. With my background as a Customs Lawyer, I ensure that every service we provide—from freight forwarding to customs consultancy—is handled with professionalism, compliance, and care.

              We are committed to building trust, delivering efficiency, and helping businesses move forward with confidence."
            </blockquote>
            <div className="ceo-info">
              <h3>Zahid Abdul Sattar Butt</h3>
              <p>Chief Executive Officer</p>
              <p>Paragon Services</p>
              <p className="ceo-contact">📞 0300-8480287</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOQuote; 