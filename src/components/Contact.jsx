// ContactPage.jsx
import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    specialist: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="contact-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span className="breadcrumb__item">Homepage</span>
        <span className="breadcrumb__separator">&gt;</span>
        <span className="breadcrumb__item">Contact</span>
      </div>

      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        
        <div className="contact-grid">
          {/* Left Column */}
          <div className="contact-info">
            {/* Email Section */}
            <div className="info-card">
              {/* <Mail className="info-card__icon" /> */}
              <div className="info-card__content">
                <h2>Email us</h2>
                <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                <a href="#" className="info-card__link">Leave a message →</a>
              </div>
            </div>

            {/* Careers Section */}
            <div className="info-card">
              {/* <Users className="info-card__icon" /> */}
              <div className="info-card__content">
                <h2>Careers</h2>
                <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                <a href="#" className="info-card__link">Send an application →</a>
              </div>
            </div>

            {/* Map Section */}
            <div className="map-container">
              <img src="/api/placeholder/800/400" alt="Location Map" className="map-image" />
            </div>
          </div>

          {/* Right Column */}
          <div className="contact-form-section">
            <div className="form-card">
              <h2>Get Online Consultation</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <select
                    value={formData.specialist}
                    onChange={(e) => setFormData({...formData, specialist: e.target.value})}
                  >
                    <option value="">Specialist</option>
                    <option value="doctor1">Doctor 1</option>
                    <option value="doctor2">Doctor 2</option>
                  </select>
                </div>
                <button type="submit" className="submit-button">
                  Make an appointment
                </button>
              </form>
            </div>

            {/* Medical Centers Info */}
            <div className="medical-centers">
              <div className="center-card">
                <h3>Medical Center 1</h3>
                <div className="center-info">
                  {/* <MapPin className="icon" /> */}
                  <span>4517 Washington Ave, Manchester, Kentucky 39495</span>
                </div>
                <div className="center-info">
                  {/* <Phone className="icon" /> */}
                  <span>(406) 555-0120</span>
                </div>
                <div className="center-info">
                  {/* <Clock className="icon" /> */}
                  <div className="hours">
                    <p>Mon - Fri: 9:00 am - 22:00 am</p>
                    <p>Sat - Sun: 9:00 am - 20:00 am</p>
                  </div>
                </div>
              </div>

              <div className="center-card">
                <h3>Medical Center 2</h3>
                <div className="center-info">
                  {/* <MapPin className="icon" /> */}
                  <span>2464 Royal Ln. Mesa, New Jersey 45463</span>
                </div>
                <div className="center-info">
                  {/* <Phone className="icon" /> */}
                  <span>(406) 544-0123</span>
                </div>
                <div className="center-info">
                  {/* <Clock className="icon" /> */}
                  <div className="hours">
                    <p>Mon - Fri: 9:00 am - 22:00 am</p>
                    <p>Sat - Sun: 9:00 am - 20:00 am</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;