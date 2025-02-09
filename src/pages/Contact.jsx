import React from 'react';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactPage from '../components/Contact/ContactPage';
const Contact = () => {
    return (
       <>
         <Navbar />
      <ContactPage/>
      <Footer />
       </>
    );
};

export default Contact;