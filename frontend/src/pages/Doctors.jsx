
import React, { useState, useEffect } from "react"; 
import { Search, AlertCircle, Loader2 } from "lucide-react"; // Added Loader2
import DoctorCard from "../components/DoctorCard";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allDoctors, setAllDoctors] = useState([]); 
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { isSignedIn } = useAuth(); 

  const [errorModal, setErrorModal] = useState({ show: false, message: "" });

  // FETCH DOCTORS FROM BACKEND
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        // Ensure this URL is exactly as written, with no trailing colons
        const response = await fetch("http://localhost:4000/api/doctors");
        
        if (!response.ok) {
          throw new Error(`Server responded with status: ${response.status}`);
        }
        
        const data = await response.json();
        setAllDoctors(data);
      } catch (err) {
        console.error("Fetch Error:", err);
        setErrorModal({ 
          show: true, 
          message: "Unable to load medical experts. Please ensure your backend server is running on port 4000." 
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchDoctors();
  }, []);

  const filteredDoctors = allDoctors.filter(doc => 
    doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    doc.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDoctorClick = (name) => {
    navigate(`/doctor/${name.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-24 relative overflow-x-hidden">
      
      {/* ERROR MODAL */}
      {errorModal.show && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setErrorModal({ show: false, message: "" })}></div>
          <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl relative z-10 text-center space-y-6 border border-rose-50 animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-500">
              <AlertCircle size={32} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-slate-900">Connection Issue</h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">{errorModal.message}</p>
            </div>
            <button 
              onClick={() => setErrorModal({ show: false, message: "" })}
              className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm shadow-md hover:bg-[#008f75] transition-all"
            >
              OK
            </button>
          </div>
        </div>
      )}

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
      {loading ? (
        <div className="text-center py-20 flex flex-col items-center gap-4">
          <Loader2 className="animate-spin text-[#00a386]" size={48} />
          <p className="text-teal-700 font-bold animate-pulse uppercase tracking-tighter">Syncing with Medical Database...</p>
        </div>
      ) : filteredDoctors.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {filteredDoctors.map((doc) => (
            <div 
              key={doc._id} 
              onClick={() => handleDoctorClick(doc.name)} 
              className="cursor-pointer transition-transform hover:scale-105"
            >
              <DoctorCard doctor={doc} />
            </div>
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