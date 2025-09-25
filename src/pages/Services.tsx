import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services: React.FC = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      id: 'customs-clearance',
      title: 'Customs Clearance',
      description: 'Expert customs clearance services for all types of imports and exports. We handle documentation, duty calculations, and ensure compliance with all regulations.',
      features: ['Import/Export Documentation', 'Duty & Tax Calculations', 'Compliance Management', '24/7 Support'],
      icon: '🏛️'
    },
    {
      id: 'inland-transportation',
      title: 'Inland Transportation',
      description: 'Comprehensive inland transportation solutions across Pakistan. From port to destination, we ensure safe and timely delivery.',
      features: ['Road Transportation', 'Rail Freight', 'Warehouse Distribution', 'Real-time Tracking'],
      icon: '🚛'
    },
    {
      id: 'door-to-door',
      title: 'Door to Door Service',
      description: 'Complete end-to-end logistics solutions. We handle everything from origin pickup to final delivery at your doorstep.',
      features: ['Origin Pickup', 'Customs Clearance', 'Inland Transportation', 'Final Delivery'],
      icon: '🏠'
    },
    {
      id: 'air-freight',
      title: 'Air Freight',
      description: 'Fast and reliable air freight services worldwide. We offer competitive rates and expedited shipping options.',
      features: ['Express Shipping', 'Consolidated Freight', 'Charter Services', 'Temperature Controlled'],
      icon: '✈️'
    },
    {
      id: 'sea-freight',
      title: 'Sea Freight',
      description: 'Cost-effective sea freight solutions for large shipments. We offer both FCL and LCL services.',
      features: ['FCL & LCL Services', 'Container Management', 'Port Operations', 'Bulk Cargo'],
      icon: '🚢'
    },
    {
      id: 'project-management',
      title: 'Project Management',
      description: 'Specialized project cargo management for complex shipments. We handle oversized and heavy equipment.',
      features: ['Heavy Equipment', 'Oversized Cargo', 'Project Planning', 'Site Coordination'],
      icon: '📦'
    },
    {
      id: 'consultancy',
      title: 'Consultancy',
      description: 'Expert consultancy services for international trade and logistics. We provide strategic advice and compliance guidance.',
      features: ['Trade Compliance', 'Documentation Review', 'Risk Assessment', 'Training Programs'],
      icon: '💼'
    }
  ];

  const companyInfo = {
    about: "Paragon Services is one of the leading freight forwarding and custom brokerage companies in Pakistan, operating in import custom clearance and freight forwarding industry since 1996. Our major objectives are to provide optimum level of service and to achieve customer satisfaction. Paragon Service is Lahore based company having branches in major business cities like Lahore, Karachi, and Sialkot with strength of more than 4 staff members.",
    mission: "To provide optimum level of service and to achieve customer satisfaction through professional customs clearance and freight forwarding solutions.",
    vision: "To become the most trusted logistics partner in Pakistan, known for reliability, efficiency, and exceptional customer service.",
    experience: "28+ years",
    countries: "50+ countries",
    clients: "100+ satisfied clients"
  };

  const handleContact = () => {
    navigate('/contact');
  };

  const handleGetQuote = () => {
    navigate('/contact');
  };

  return (
    <div className="services-page offset-for-header">
      <div className="services-hero page-section">
        <h1>Our Services</h1>
        <p>Comprehensive logistics and customs solutions tailored to your business needs</p>
      </div>

      
      <div className="services-container page-section">
        {services.map((service) => (
          <div key={service.id} className="service-card" id={service.id}>
            <div className="service-header">
              <span className="service-icon">{service.icon}</span>
              <h2>{service.title}</h2>
            </div>
            <div className="service-content">
              <p className="service-description">{service.description}</p>
              <div className="service-features">
                <h3>Key Features:</h3>
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Information Section */}
      <div className="contact-info-section page-section">
        <h2>Ready to Get Started?</h2>
        <p>Contact us today for a customized quote tailored to your specific requirements.</p>
        
        <div className="contact-methods">
          <div className="contact-method">
            <h3>📞 Call Us</h3>
            <p>Lahore: 042-36686620-1</p>
            <p>Karachi: 021-32205730, 32210501</p>
            <p>CEO: 0300-8480287</p>
          </div>
          <div className="contact-method">
            <h3>📧 Email Us</h3>
            <p>Lahore: parasevslhr@yahoo.com</p>
            <p>Karachi: paraservs498@gmail.com</p>
          </div>
          <div className="contact-method">
            <h3>📍 Visit Us</h3>
            <p>Lahore: 20-F, KHAN TOWER, DEFENCE CHOWK, WALTON ROAD, LAHORE CANTT</p>
            <p>Karachi: F-7, 6th FLOOR, OCEAN CENTRE, OPP. CUSTOM HOUSE, KARACHI</p>
          </div>
        </div>

        <div className="services-cta">
          <button className="cta-button" onClick={handleGetQuote}>Get A Quote</button>
        </div>
      </div>
    </div>
  );
};

export default Services; 