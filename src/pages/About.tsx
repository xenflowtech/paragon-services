import React from 'react';
import './About.css';

const About: React.FC = () => {
  const companyInfo = {
    founded: '1996',
    employees: '4+',
    locations: ['Lahore', 'Karachi', 'Sialkot'],
    mission: 'To provide optimum level of service and to achieve customer satisfaction through professional customs clearance and freight forwarding solutions.',
    vision: 'To be the leading freight forwarding and customs brokerage company in Pakistan, known for reliability, efficiency, and customer-centric approach.'
  };

  const teamMembers = [
    {
      name: 'Zahid Sharif Butt',
      position: 'Chief Executive Officer',
      experience: '28+ years',
      expertise: 'International Trade & Logistics',
      phone: '0300-8480287'
    }
  ];

  const milestones = [
    { year: '1996', event: 'Company Founded in Lahore' },
    { year: '2000', event: 'Expanded to Karachi Office' },
    { year: '2005', event: 'Launched Air Freight Services' },
    { year: '2010', event: 'Added Sea Freight Operations' },
    { year: '2015', event: 'Opened Sialkot Branch' },
    { year: '2020', event: 'Digital Transformation Initiative' },
    { year: '2024', event: '28+ Years of Excellence' }
  ];

  return (
    <div className="about-page offset-for-header">
      <div className="about-hero page-section">
        <h1>About Paragon Services</h1>
        <p>Your Trusted Partner in Customs & Freight Solutions Since 1996</p>
      </div>

      <div className="about-content page-section">
        <div className="company-overview">
          <div className="overview-text">
            <h2>Company Overview</h2>
            <p>
              Paragon Services is one of the leading freight forwarding and custom brokerage companies in Pakistan, 
              operating in the import custom clearance and freight forwarding industry since 1996. Our major objectives 
              are to provide optimum level of service and to achieve customer satisfaction.
            </p>
            <p>
              We are a Lahore-based company with branches in major business cities like Lahore, Karachi, and Sialkot, 
              with a strength of more than 40 staff members. Our seasoned team of professionals works with the ambition 
              to cater to the evolving needs of the business community.
            </p>
          </div>
          <div className="overview-stats">
            <div className="stat">
              <h3>{companyInfo.founded}</h3>
              <p>Years of Excellence</p>
            </div>
            <div className="stat">
              <h3>{companyInfo.employees}</h3>
              <p>Professional Staff</p>
            </div>
            <div className="stat">
              <h3>{companyInfo.locations.length}</h3>
              <p>Office Locations</p>
            </div>
          </div>
        </div>

        <div className="mission-vision page-section">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>{companyInfo.mission}</p>
          </div>
          <div className="vision">
            <h2>Our Vision</h2>
            <p>{companyInfo.vision}</p>
          </div>
        </div>

        <div className="team-section page-section">
          <h2>Our Leadership Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-photo">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="position">{member.position}</p>
                  <p className="experience">{member.experience} Experience</p>
                  <p className="expertise">{member.expertise}</p>
                  <p className="phone"><i className="fas fa-phone"></i> {member.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="values-section page-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <i className="fas fa-handshake"></i>
              <h3>Trust & Reliability</h3>
              <p>Building long-term relationships based on trust and consistent service delivery.</p>
            </div>
            <div className="value-item">
              <i className="fas fa-cogs"></i>
              <h3>Efficiency</h3>
              <p>Optimizing processes to deliver faster, more cost-effective solutions.</p>
            </div>
            <div className="value-item">
              <i className="fas fa-users"></i>
              <h3>Customer Focus</h3>
              <p>Putting our clients' needs first and exceeding their expectations.</p>
            </div>
            <div className="value-item">
              <i className="fas fa-award"></i>
              <h3>Excellence</h3>
              <p>Maintaining the highest standards in all aspects of our operations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 