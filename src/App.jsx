// src/App.jsx

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Brands from './components/Brands.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Main from './components/MainSection.jsx';  
import MoneyTransfer from './components/MoneyTransfer.jsx';
import Navbar from './components/Navbar.jsx';
import PaymentDetails from './components/PaymentDetails.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from "./components/Contact.jsx";  
import './styling/index.css';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <Router>
 
      <Routes>

        <Route path="/" element={
          <>
            <Navbar />  
            <Main /> 
            <Brands />
            <Features />
            <HowItWorks />
            <MoneyTransfer />
            <PaymentDetails />
            <Testimonials />
            <Faq />
            <Footer />
          </>
        } />


        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </Router>
  );
};

export default App;
