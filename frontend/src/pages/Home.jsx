

import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Certification from "../components/Certification";
import DoctorCard from "../components/DoctorCard";
import Testimonials from "../components/Testimonials";

const Home = () => {
  const navigate = useNavigate();

  // Updated paths and names to match your DoctorProfile routing
  const doctors = [
    { name: "Mri", specialty: "Pediatrics", experience: 5, imageUrl: "/images/doctor1.jpg" },
    { name: "Kevin", specialty: "Brain", experience: 12, imageUrl: "/images/doc2.jpg" },
    { name: "Sarah", specialty: "Cardiology", experience: 8, imageUrl: "/images/doc3.jpeg" },
  ];

  return (
    // Add pt-24 to push content below the fixed navbar
    <div className="bg-white min-h-screen pt-24 overflow-x-hidden">
      
      {/* Container to prevent hero section from increasing width indefinitely */}
      <div className="max-w-screen-2xl mx-auto">
        {/* 1. Hero Section */}
        <Hero title={"Premium Healthcare At Your Fingerprints"} />
        
        {/* 2. Horizontal Scrolling Certifications */}
        <Certification />
      </div>

      {/* 3. Our Medical Team Section */}
      <section className="py-24 px-6 lg:px-24 bg-[#f1fcfb]">
        <div className="max-w-screen-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
            Our <span className="text-[#00a386] italic">Medical Team</span>
          </h2>
          <p className="text-slate-500 mt-4 text-lg font-medium">
            Book appointments quickly with our verified specialists.
          </p>
        </div>

        {/* Doctor Grid */}
        <div className="flex flex-nowrap lg:flex-row justify-center gap-6 lg:gap-10 max-w-7xl mx-auto overflow-x-auto pb-8 scrollbar-hide px-4">
          {doctors.map((doc, index) => (
            <div key={index} className="flex-shrink-0">
              {/* Ensure DoctorCard receives the navigation logic */}
              <div onClick={() => navigate(`/doctor/${doc.name.toLowerCase()}`)} className="cursor-pointer">
                <DoctorCard doctor={doc} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Testimonials Section */}
      <div className="max-w-screen-2xl mx-auto">
        <Testimonials />
      </div>

      {/* 5. Services Header */}
      <section className="py-20 text-center bg-white border-t border-slate-100 max-w-screen-2xl mx-auto">
        <h2 className="text-3xl font-black text-[#137d6e] uppercase tracking-tight">
          Our Medical Services
        </h2>
        <p className="text-slate-400 mt-3 font-medium">
          Expert care for your family's health.
        </p>
      </section>
      
      {/* Note: Footer is rendered globally in App.jsx */}
    </div>
  );
};

export default Home;