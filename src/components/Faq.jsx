// Faq.jsx

import React, { useState, useEffect } from 'react';

const Faq = () => { 
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    fetch('https://win24-assignment.azurewebsites.net/api/faq') // Fetch FAQs from the API
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data); 


        if (Array.isArray(data) && data.length > 0) {
          setFaqs(data);
        } else {
          setFaqs([]);
        }
      })
      .catch(error => {
        console.error('API Error:', error);
        setFaqs([]); 
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <section id="faq">
      <div className="container">
        <div className="faq-section">
          <div className="contact-info">
            <div className="contact-options">
              <div className="contact-box">
                <i className="fa fa-phone" style={{ fontSize: '48px', color: 'rgb(63, 61, 137)' }} />
                <h4>Still have questions?</h4>
                <a href="#">Contact us →</a>
              </div>
              <div className="contact-box">
                <i className="fa fa-cloud" style={{ fontSize: '48px', color: 'green' }} />
                <h4>Don’t like phone calls?</h4>
                <a href="#">Contact us →</a>
              </div>
            </div>
          </div>

          <div className="faq-content">
            <h2>Any questions? Check out the FAQs</h2>
            <p>Still have unanswered questions and need to get in touch?</p>

            {isLoading ? (
              <div>Loading...</div>
            ) : faqs.length > 0 ? (
              <div className="faq-list">
                {faqs.map(faq => (
                  <details key={faq.id}>
                    <summary>{faq.title || 'No question available'}</summary>
                    <p>{faq.content || 'No answer available'}</p>
                  </details>
                ))}
              </div>
            ) : (
              <p>No FAQs available at the moment.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
