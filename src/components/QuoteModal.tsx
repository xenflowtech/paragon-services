import React, { useState } from 'react';
import './QuoteModal.css';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    origin: '',
    destination: '',
    cargoType: '',
    weight: '',
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
      const response = await fetch('/api/quote-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'quote_request',
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
          origin: '',
          destination: '',
          cargoType: '',
          weight: '',
          message: ''
        });
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting quote request:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Get A Quote</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="quote-form">
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
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
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

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="service">Service Required *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
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
              <label htmlFor="cargoType">Cargo Type</label>
              <input
                type="text"
                id="cargoType"
                name="cargoType"
                value={formData.cargoType}
                onChange={handleInputChange}
                placeholder="e.g., Machinery, Textiles, Electronics"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="origin">Origin</label>
              <input
                type="text"
                id="origin"
                name="origin"
                value={formData.origin}
                onChange={handleInputChange}
                placeholder="e.g., China, Germany, USA"
              />
            </div>
            <div className="form-group">
              <label htmlFor="destination">Destination</label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                placeholder="e.g., Karachi, Lahore"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="weight">Estimated Weight/Volume</label>
            <input
              type="text"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              placeholder="e.g., 1000 kg, 20 ft container"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Additional Details *</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Please describe your requirements, timeline, and any specific needs..."
            ></textarea>
          </div>

          {submitStatus === 'success' && (
            <div className="success-message">
              ✅ Thank you! Your quote request has been sent successfully. We'll get back to you within 24 hours.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="error-message">
              ❌ Sorry, there was an error sending your request. Please try again or contact us directly.
            </div>
          )}

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit Quote Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal; 