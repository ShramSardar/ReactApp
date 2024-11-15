import React, { useState } from 'react';
import useFormValidation from '../hooks/useFormValidation';  // Import the useFormValidation hook

const Footer = () => {
  // Use useFormValidation hook for form state and validation
  const { values, errors, handleChange, validateForm } = useFormValidation({
    email: '', // Initial form value
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (validateForm()) {
      setIsSubmitting(true);
      setError('');
      setSuccessMessage('');

      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: values.email }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to subscribe. Please try again.');
        }

        // Success response
        setSuccessMessage('You have successfully subscribed to the newsletter!');
        // Reset form after success
        handleChange({ target: { name: 'email', value: '' } });
      } catch (error) {
        setError(error.message || 'An error occurred. Please try again later.');
        console.error('Subscription error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      {/* Footer Section */}
      <footer>
        <section id="footer-section">
          <div className="container">
            <div>
              <img className="notice" src="/images/notification.svg" alt="Notification Icon" />
              <h3>Subscribe to our newsletter to stay informed about the latest updates</h3>
              <div className="newsletter">
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    disabled={isSubmitting}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
                {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
                {successMessage && <p style={{ color: 'green', marginTop: '10px' }}>{successMessage}</p>}
              </div>
            </div>
          </div>
          <p id="fotq">&copy; 2024 Silicon. All rights reserved. Credit MadrasThemes</p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
