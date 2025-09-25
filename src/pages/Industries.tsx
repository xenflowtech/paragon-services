import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Industries.css';

const Industries: React.FC = () => {
  const navigate = useNavigate();
  
  const industries = [
    {
      id: 'textile-sector',
      title: 'Textile Sector',
      description: 'Comprehensive logistics solutions for Pakistan\'s largest export sector. We handle raw materials, finished goods, and machinery for textile manufacturers.',
      services: ['Raw Material Import', 'Finished Goods Export', 'Machinery Transportation', 'Warehouse Management'],
      image: 'textile-icon'
    },
    {
      id: 'construction-machinery',
      title: 'Construction Machinery',
      description: 'Specialized handling of heavy construction equipment and machinery. We ensure safe transportation and customs clearance for construction projects.',
      services: ['Heavy Equipment Transport', 'Oversized Cargo', 'Project Cargo', 'Site Coordination'],
      image: 'construction-icon'
    },
    {
      id: 'sugar-plant',
      title: 'Sugar Plant',
      description: 'Complete logistics solutions for sugar industry including machinery, spare parts, and raw materials for sugar processing plants.',
      services: ['Plant Equipment', 'Spare Parts Import', 'Raw Material Transport', 'Technical Support'],
      image: 'sugar-icon'
    },
    {
      id: 'wasa',
      title: 'WASA',
      description: 'Infrastructure and water supply project logistics. We handle specialized equipment and materials for water and sanitation projects.',
      services: ['Infrastructure Projects', 'Water Supply Equipment', 'Project Management', 'Compliance Services'],
      image: 'wasa-icon'
    },
    {
      id: 'solar-energy',
      title: 'Solar Energy',
      description: 'Green energy logistics solutions for solar power projects. We handle solar panels, inverters, and related equipment.',
      services: ['Solar Panel Import', 'Inverter Transport', 'Project Cargo', 'Green Energy Support'],
      image: 'solar-icon'
    }
  ];

  const clients = [
    'Agritech Ltd. (Pak. American Fertilizers)',
    'Al-Fattah Glass',
    'Al-fattah aluminum',
    'Noon Group',
    'Blue Reeds Pakistan Pvt. Ltd.',
    'Alliance Medical',
    'Fuzion Healthcare',
    'Plaspack',
    'M.S.R Associates',
    'Kenwood Group',
    'Alpha Engineering',
    'Global Tech Int\'l',
    'Mughal Group of Industries',
    'Shamim & Co.',
    'Metal Farming',
    'Pak. Therm',
    'Hipra Pak. Pvt. Ltd.',
    'Trirarow Export Co.'
  ];

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <div className="industries-page offset-for-header">
      <div className="industries-hero page-section">
        <h1>Industries We Serve</h1>
        <p>Specialized logistics solutions for diverse industry sectors across Pakistan</p>
      </div>
      
      <div className="industries-container page-section">
        {industries.map((industry) => (
          <div key={industry.id} className="industry-card" id={industry.id}>
            <div className="industry-header">
              <div className="industry-icon">
                <i className={`fas fa-${industry.image}`}></i>
              </div>
              <h2>{industry.title}</h2>
            </div>
            <div className="industry-content">
              <p className="industry-description">{industry.description}</p>
              <div className="industry-services">
                <h3>Our Services for {industry.title}:</h3>
                <ul>
                  {industry.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="industries-stats page-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>28+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>100+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>18+</h3>
            <p>Major Clients</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries; 