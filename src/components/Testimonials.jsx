import React from 'react'

const Testimonials = () => {
  return (
    <>
           {/* <!-- Testimonials --> */}
          <section id="testimonials">
            <div className="container">
              <h2>Clients are Loving Our App</h2>
              <div className="testimonial-grid">
                <div className="testimonial">

                  <blockquote>
                    <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
                  </blockquote>
                  <div className="author">
                    <img src="images/boyface.svg" alt="Albert Flores"/>
                    Albert Flores, Developer
                  </div>
                </div>
                <div className="testimonial">

                  <blockquote>
                    <p>Another testimonial text here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </blockquote>
                  <div className="author">
                    <img src="/images/girlface.svg" alt="Jane Doe"/>
                    Jane Doe, Designer
                  </div>
                </div>
              </div>
            </div>
          </section>
       
    </>
  )
}

export default Testimonials
