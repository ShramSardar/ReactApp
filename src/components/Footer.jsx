import React from 'react'

const Footer = () => {
  return (
    <>

{/* <!-- Footer --> */}
   
   <footer>
            <section id="footer-section">
            <div className="container">
                <div > 
                <img className="notice" src="/images/notification.svg" alt="" />

                <h3>Subscribe to our newsletter to stay <br />informed about the latest updates</h3>
                <div className="newsletter">
                  <form>
                    <input type="email" placeholder="Your Email" required />
                    <button type="submit">Subscribe</button>
                  </form> 
                  </div>
                </div>

                </div>
                
          <p id="fotq">&copy; 2024 Silicon. All rights reserved. Credit MadrasThemes</p>
        </section>
    </footer>

      
    </>
  )
}

export default Footer 
