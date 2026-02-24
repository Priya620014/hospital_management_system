
import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  if (!doctor) return null;
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-50 hover:shadow-xl transition-all duration-300 w-full max-w-[320px] text-left">
      
      {/* 1. Large Rounded Image */}
      <div className="relative mb-6 overflow-hidden rounded-[2rem] h-64 bg-slate-100">
        <img 
          src={doctor.imageUrl || "/images/doctor-placeholder.png"} 
          alt={doctor.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
        />
      </div>
      
      {/* 2. Doctor Details */}
      <div className="px-2 space-y-2">
        <h3 className="text-2xl font-black text-slate-900 leading-tight">
          Dr {doctor.name}
        </h3>
        <p className="text-teal-600 font-bold text-lg italic">
          {doctor.specialty}
        </p>
        
        {/* 3. Experience Badge */}
        <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold w-fit mt-4 border border-green-100">
          <span className="text-lg">🛡️</span> {doctor.experience} years Experience
        </div>
        
        {/* 4. Gradient "Book Now" Button */}
        <button onClick={() => navigate(`/doctor/${doctor.name.toLowerCase()}`)} className="w-full mt-6 flex items-center justify-center gap-3 bg-gradient-to-r from-[#10b981] to-[#34d399] text-white py-4 rounded-full font-black text-lg hover:shadow-lg hover:opacity-90 transition-all">
          <span className="text-xl">»</span> Book Now
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;