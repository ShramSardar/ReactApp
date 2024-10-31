import React from 'react'

const MainSection = () => {
  return (
    <>
      
      <main>
        <section id="hero">
    <div className="container">
        <div className="hero-content">
            <h1>Manage All Your <br />  Money in One App</h1>
            <p className="lead-text">We offer you a new generation of the mobile banking.
            <br /> Save, spend & manage money in your pocket.</p>
            
            {/* <!-- 
               Buttons --> */}
            <div className="store-buttons">
                <img src="images/googleplay.svg" alt="Google Play Store" />
                <img src="images/appstore.svg" alt="Apple App Store" />
            </div>

        </div>

        <div className="hero-image">
            <img src="images/2iphones.svg" alt="Banking App Interface" />
        </div>
    </div>
{/*     
            <!-- Discover Button --> */}
            <button className="button discover">
              <img src="/images/next-btn.svg" alt="discover"/>
              Discover more
              </button>
</section>
    </main>
    </>
  )
}

export default MainSection
