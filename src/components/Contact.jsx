
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Users, MapPin, Phone, Clock } from 'lucide-react';
import Navbar from './Navbar';  // Import Navbar
import useFormValidation from '../hooks/useFormValidation';  

const Contact = () => {
  // Use the useFormValidation hook for form state management and validation
  const { values, errors, handleChange, validateForm } = useFormValidation({
    fullName: '',
    email: '',
    specialist: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    if (validateForm()) {
      setIsSubmitting(true);
      setError('');
      setSuccessMessage('');

      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          setSuccessMessage('Your appointment has been successfully made! We will contact you shortly.');
          // Reset form values after successful submission
          handleChange({ target: { name: 'fullName', value: '' } });
          handleChange({ target: { name: 'email', value: '' } });
          handleChange({ target: { name: 'specialist', value: '' } });
        } else {
          throw new Error('Failed to submit your request. Please try again later.');
        }
      } catch (err) {
        console.error('Error during fetch:', err);
        setError(err.message || 'Failed to submit your request. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="contact-page">
      <Navbar />
      <br />
      <br />

      <div className="contact-container">
        <div className="breadcrumb">
          <span className="home-icon">🏠</span>
          <Link to="/" className="contact-link">Homepage</Link>
          <span>&gt;</span>
          <span>Contact</span>
        </div>

        <h1>Contact Us</h1>

        <div className="contact-info">
          <div className="info-card">
            <Mail className="icon" />
            <h3>Email us</h3>
            <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
            <a href="#" className="link-button">Leave a message →</a>
          </div>

          <div className="info-card">
            <Users className="icon" />
            <h3>Careers</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <a href="#" className="link-button">Send an application →</a>
          </div>
        </div>

        <div className="consultation-form">
          <h2>Get Online Consultation</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full name</label>
              <input
                type="text"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                className={errors.fullName ? 'error' : ''}
                required
                disabled={isSubmitting}
              />
              {errors.fullName && <span className="error-message">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                required
                disabled={isSubmitting}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Specialist</label>
              <select
                name="specialist"
                value={values.specialist}
                onChange={handleChange}
                className={errors.specialist ? 'error' : ''}
                required
                disabled={isSubmitting}
              >
                <option value="">Select a specialist</option>
                <option value="general">General Physician</option>
                <option value="cardio">Cardiologist</option>
                <option value="derma">Dermatologist</option>
              </select>
              {errors.specialist && <span className="error-message">{errors.specialist}</span>}
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Make an appointment'}
            </button>
          </form>

          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          {successMessage && <p style={{ color: 'green', marginTop: '10px' }}>{successMessage}</p>}
        </div>
      </div>

      <div className="map-and-locations-wrapper">
        <div className="map-section">
          <img 
            src="./images/mapg.svg" 
            alt="Location map" 
            className="map-image"
          />
        </div>

        <div className="locations">
          <div className="center-info">
            <h3>Medical Center 1</h3>
            <div className="info-line">
              <MapPin className="icon" />
              <p>4517 Washington Ave, Manchester, Kentucky 39495</p>
            </div>
            <div className="info-line">
              <Phone className="icon" />
              <p>(406) 555-0120</p>
            </div>
            <div className="info-line">
              <Clock className="icon" />
              <div>
                <p>Mon - Fri: 9:00 am - 22:00 am</p>
                <p>Sat - Sun: 9:00 am - 20:00 am</p>
              </div>
            </div>
          </div>

          <div className="center-info">
            <h3>Medical Center 2</h3>
            <div className="info-line">
              <MapPin className="icon" />
              <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
            </div>
            <div className="info-line">
              <Phone className="icon" />
              <p>(406) 544-0123</p>
            </div>
            <div className="info-line">
              <Clock className="icon" />
              <div>
                <p>Mon - Fri: 9:00 am - 22:00 am</p>
                <p>Sat - Sun: 9:00 am - 20:00 am</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="social-links">
        <a href="#" aria-label="Facebook">FB</a>
        <a href="#" aria-label="Twitter">TW</a>
        <a href="#" aria-label="Instagram">IG</a>
        <a href="#" aria-label="YouTube">YT</a>
      </div>
      <br />
      <br />
      <p id="fotq">&copy; 2024 Silicon. All rights reserved. Credit MadrasThemes</p>
    </div>
  );
};

export default Contact;
