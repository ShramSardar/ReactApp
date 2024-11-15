
// Testimonials.jsx

import React, { useState, useEffect } from 'react';
import StarRating from './StarRating'; // Import the StarRating component

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data) && data.length === 0) {
          setTestimonials([]);
        } else {
          setTestimonials(data);
        }
      })
      .catch(error => {
        console.error('API Error:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section id="testimonials">
        <div className="container">
          <h2>Clients are Loving Our App</h2>
          <div>Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials">
      <div className="container">
        <h2>Clients are Loving Our App</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial">
              <blockquote>
                <p>{testimonial.comment || 'No testimonial content available'}</p>
              </blockquote>
              <div className="author">
                <img 
                  src={testimonial.avatarUrl}
                  alt={testimonial.author || 'Anonymous'}
                />
                <span>{testimonial.author || 'Anonymous'}, {testimonial.jobRole || 'User'}</span>
              </div>

              {/* Render StarRating component here */}
              <StarRating rating={testimonial.starRating || 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

