import React from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Services from "./services/Services";
import About from "./about/About";
import ContactForm from "./contact/ContactForm";
import Footer from "./footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App(){
  return(
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<ContactForm/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="*" element={<NotFound/>} />

   </Routes>
  )
}

export default App