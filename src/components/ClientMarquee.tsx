import React from 'react';
import './ClientMarquee.css';

const ClientMarquee: React.FC = () => {
  const clients = [
    'Agritech Ltd. (Pak. American Fertilizers)', 'Al-Fattah Glass', 'Al-fattah aluminum', 
    'Noon Group', 'Blue Reeds Pakistan Pvt. Ltd.', 'Alliance Medical', 'Fuzion Healthcare', 
    'Plaspack', 'M.S.R Associates', 'Kenwood Group', 'Alpha Engineering', 
    'Global Tech Int\'l', 'Mughal Group of Industries', 'Shamim & Co.', 'Metal Farming', 
    'Pak. Therm', 'Hipra Pak. Pvt. Ltd.', 'Trirarow Export Co.'
  ];

  return (
    <section className="client-marquee-section">
      <h2 className="client-marquee-heading">Our Trusted Clients</h2>
      <div className="marquee-container">
        <div className="marquee">
          <div className="marquee-content">
            {clients.concat(clients).map((client, index) => (
              <div key={index} className="client-item">
                <span>{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee; 