import React from 'react'

const PaymentDetails = () => {
  return (
    <>
             {/* <!-- Payment Details --> */}
          
          <section id="payment-details">
            <div className="container">
              <div className="image">
                <img src="/images/bildkort.svg" alt="Contacts and Payment Card"/>
              </div>
              <div className="content">
                <h3>Receive payment from international bank details</h3>
                <div className="features">
                  <div className="feature">
                    <img src="/images/icon-7.svg" alt="Icon 1"/>
                    <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                  </div>
                  <div className="feature">
                    <img src="/images/icon-1.svg" alt="Icon 2" />
                    <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                  </div>
                </div>
                <button className="contact-button">Leran more</button>
                <div></div>

              </div>
            </div>
          </section>

    </>
  )
}

export default PaymentDetails
