import React, { useState } from "react";
import { Search, MoveRight } from "lucide-react";
import DoctorCard from "../components/DoctorCard";

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const allDoctors = [
    { name: "Mri", specialty: "Pediatrics", experience: 5, imageUrl: "/images/doctor1.jpg" },
    { name: "Kevin", specialty: "Brain", experience: 12, imageUrl: "/images/doc2.jpg" },
    { name: "Sarah", specialty: "Cardiology", experience: 8, imageUrl: "/images/doc3.jpeg" },
    { name: "Robert", specialty: "Orthopedic", experience: 15, imageUrl: "/images/doc4.jpeg" },
  ];

  // Filter logic for the search bar
  const filteredDoctors = allDoctors.filter(doc => 
    doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    doc.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f1fcfb] py-20 px-6 lg:px-24">
      {/* Page Header */}
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-5xl lg:text-6xl font-black text-[#137d6e] leading-tight">
          Our <span className="text-slate-900">Medical Experts</span>
        </h1>
        <p className="text-teal-600 font-bold text-lg italic">
          Find your ideal doctor by name or specialization.
        </p>
      </div>

      {/* Large Pill Search Bar */}
      <div className="max-w-3xl mx-auto mb-20 relative group">
        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-teal-500 group-focus-within:text-green-500 transition-colors">
          <Search size={24} />
        </div>
        <input 
          type="text" 
          placeholder="Search doctors by name or specialization..."
          className="w-full bg-white border-2 border-white shadow-xl shadow-teal-50 rounded-full py-6 pl-16 pr-8 text-lg focus:outline-none focus:border-green-300 transition-all placeholder:text-slate-300 font-medium"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Doctor Grid */}
      {filteredDoctors.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {filteredDoctors.map((doc, index) => (
            <DoctorCard key={index} doctor={doc} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white/50 rounded-[3rem] border-2 border-dashed border-teal-200">
          <p className="text-teal-700 font-bold text-xl uppercase tracking-widest">No experts found matching your search</p>
        </div>
      )}
    </div>
  );
};

export default Doctors;