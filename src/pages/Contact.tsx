import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(`https://your-railway-app-url.railway.app/api/contact-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'contact_form',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      city: 'Lahore',
      address: '20-F, KHAN TOWER, DEFENCE CHOWK, WALTON ROAD, LAHORE CANTT',
      phone: '042-36686620-1',
      email: 'parasevslhr@yahoo.com'
    },
    {
      city: 'Karachi',
      address: 'F-7, 6th FLOOR, OCEAN CENTRE, OPP. CUSTOM HOUSE, KARACHI',
      phone: '021-32205730, 32210501',
      email: 'paraservs498@gmail.com'
    }
  ];

  const ceoInfo = {
    name: 'Zahid Sharif Butt',
    position: 'CEO',
    phone: '0300-8480287'
  };

  return (
    <div className="contact-page offset-for-header">
      <div className="contact-hero page-section">
        <h1>Contact Us</h1>
        <p>Get in touch with our team for all your logistics and customs needs</p>
      </div>

      <div className="contact-content page-section">
        <div className="contact-grid">
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Required</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  <option value="">Select a service</option>
                  <option value="customs-clearance">Customs Clearance</option>
                  <option value="inland-transportation">Inland Transportation</option>
                  <option value="door-to-door">Door to Door Service</option>
                  <option value="air-freight">Air Freight</option>
                  <option value="sea-freight">Sea Freight</option>
                  <option value="project-management">Project Management</option>
                  <option value="consultancy">Consultancy</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Please describe your requirements..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  ✅ Thank you for your message! We will get back to you within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  ❌ Sorry, there was an error sending your message. Please try again or contact us directly.
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact; 