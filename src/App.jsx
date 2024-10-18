import React from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Services from "./services/Services";
import About from "./about/About";
import ContactForm from "./contact/ContactForm";
import Footer from "./footer/Footer";

function App(){
  return(
    <div>
       <Header/>
       <Hero/>
       <Services/>
       <About/>
       <ContactForm/>
       <Footer/>
       </div>
  )
}

export default App