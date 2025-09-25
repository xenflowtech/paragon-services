import React from 'react';
import './ServicesSection.css';

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-list">
          <h3>Our Core Services:</h3>
          <ul>
            <li><strong>Customs Clearance</strong> - Expert customs clearance services for all types of imports and exports</li>
            <li><strong>Inland Transportation</strong> - Comprehensive inland transportation solutions across Pakistan</li>
            <li><strong>Door to Door Service</strong> - Complete end-to-end logistics solutions</li>
            <li><strong>Air Freight</strong> - Fast and reliable air freight services worldwide</li>
            <li><strong>Sea Freight</strong> - Cost-effective sea freight solutions for large shipments</li>
            <li><strong>Project Management</strong> - Specialized project cargo management for complex shipments</li>
            <li><strong>Consultancy</strong> - Expert consultancy services for international trade and logistics</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
