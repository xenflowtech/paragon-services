import React from 'react';
import './CompanyDescription.css';

const CompanyDescription: React.FC = () => {
  return (
    <section className="company-description-section">
      <div className="company-description-container">
        <div className="company-description">
          <p>
            <strong>Paragon Services</strong> offers complete range of service including customs clearance, freight forwarding and related logistics services under a single roof.
          </p>
          <p>
            Paragon Services has handled numbers of import projects in Pakistan especially <strong>Textile Sector, Construction Machinery, Sugar Plant, WASA, and Solar Energy</strong> in which we provided technical guidance and services right from feasibility stage up to the commissioning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyDescription;
