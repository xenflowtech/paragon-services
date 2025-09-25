import React from 'react';
import './CallToAction.css';

const CallToAction: React.FC = () => {
  return (
    <section className="call-to-action-section">
      <div className="call-to-action-container">
        <div className="call-to-action-header">
          <h2>Ready to Get Started?</h2>
          <div className="header-line"></div>
        </div>
        <div className="call-to-action">
          <p>
            In order to discuss our offer and scope of our services in detail, we request you to spare some moments of your convenience for a meeting to discuss various aspects of your import. We can offer you door-to-door services of your shipment.
          </p>
          <p>
            Kindly let us have your coming forth shipment and we shall prove that <strong>"WE SPIN THE TIME"</strong>.
          </p>
          <p>
            Looking forward to hear you soon.
          </p>
          <div className="contact-info">
            <p><strong>Contact:</strong> Zahid Abdul Sattar Butt (CEO) - 0300-8480287</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
