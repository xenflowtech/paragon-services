import React from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="about-us-section">
      <div className="about-container">
        <div className="about-header">
          <h2>COMPANY INTRODUCTION</h2>
          <div className="header-line"></div>
        </div>
        
        <div className="about-content">
          <div className="intro-text">
            <p>
              Dear Sirs,
            </p>
            <p>
              We hereby like to introduce <strong>Paragon Services</strong> as one of the leading freight forwarding and custom brokerage companies in Pakistan operating import custom clearance and freight forwarding industry since <strong>1996</strong>. Our major objectives are to provide optimum level of service and to achieve customer satisfaction.
            </p>
            <p>
              Paragon Service is Lahore based company having branches in major business cities like <strong>Lahore, Karachi, and Sialkot</strong> with strength of more than <strong>4 staff members</strong>.
            </p>
            <p>
              Paragon Services seasoned team of professionals working with the ambition to cater the evolving needs of business community. We possess a good clientele and rapport in the market, with the following services.
            </p>
          </div>



          {/* clients-section removed per request */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 