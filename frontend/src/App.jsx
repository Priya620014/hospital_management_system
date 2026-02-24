
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import DoctorProfile from "./pages/DoctorProfile";
import ScrollToTop from "./components/ScrollToTop";

// Inside <Routes>


const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Ensure the path here matches your Navbar link */}
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;