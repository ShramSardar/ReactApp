import React from 'react'

const Faq = () => {
  return (
    <>
{/* 
<!-- FAQ --> */}

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

        <div className="faq-list">
          <details>
            <summary>Is any of my personal information stored in the App?</summary>
            <p>Answer goes here...</p>
          </details>
          <details>
            <summary>What formats can I download my transaction history in?</summary>
            <p>Answer goes here...</p>
          </details>
          <details>
            <summary>Can I schedule future transfers?</summary>
            <p>Answer goes here...</p>
          </details>
          <details>
            <summary>When can I use Banking App services?</summary>
            <p>Answer goes here...</p>
          </details>
          <details>
            <summary>Can I create my own password that is easy for me to remember?</summary>
            <p>Answer goes here...</p>
          </details>
          <details>
            <summary>What happens if I forget or lose my password?</summary>
            <p>Answer goes here...</p>
          </details>
        </div>
      </div>
    </div>
  </div>
</section>

      

      
    </>
  )
}

export default Faq
