
// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { 
//   ArrowLeft, Star, GraduationCap, MapPin, 
//   Clock, ShieldCheck, Calendar, User, Phone, X, LockKeyhole
// } from "lucide-react";

// const DoctorProfile = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
  
//   // Dynamic Image Mapping based on your Medical Experts list
//   const doctorData = {
//     mri: { img: "/images/doctor1.jpg", specialty: "Pediatrics" },
//     kevin: { img: "/images/doc2.jpg", specialty: "Brain" },
//     sarah: { img: "/images/doc3.jpeg", specialty: "Cardiology" },
//     robert: { img: "/images/doc4.jpeg", specialty: "Orthopedic" }
//   };

//   // Get current doctor details or use placeholder if not found
//   const currentDoc = doctorData[id?.toLowerCase()] || { img: "/images/mri.png", specialty: "Specialist" };

//   const [selectedDate, setSelectedDate] = useState(null);
//   const [paymentMethod, setPaymentMethod] = useState("Cash");
//   const [showLoginPopup, setShowLoginPopup] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); 

//   const getNextSevenDays = () => {
//     const days = [];
//     for (let i = 0; i < 7; i++) {
//       const date = new Date();
//       date.setDate(date.getDate() + i);
//       days.push({
//         fullDate: date.toDateString(),
//         dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
//         dayNum: date.getDate(),
//         month: date.toLocaleDateString('en-US', { month: 'short' })
//       });
//     }
//     return days;
//   };

//   const dates = getNextSevenDays();

//   const handleBookingAttempt = () => {
//     if (!isLoggedIn) {
//       setShowLoginPopup(true);
//     } else {
//       alert("Booking confirmed successfully!");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f1fcfb] py-10 px-6 lg:px-24 relative">
      
//       {/* 1. LOGIN REQUIRED POPUP */}
//       {showLoginPopup && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
//           <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setShowLoginPopup(false)}></div>
//           <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl relative z-10 text-center space-y-6 border border-slate-100 animate-in fade-in zoom-in duration-300">
//             <button onClick={() => setShowLoginPopup(false)} className="absolute top-6 right-6 text-slate-400 hover:text-rose-500 transition-colors">
//               <X size={24} />
//             </button>
//             <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-500">
//               <LockKeyhole size={40} />
//             </div>
//             <div className="space-y-2">
//               <h2 className="text-2xl font-black text-slate-900">Authentication Required</h2>
//               <p className="text-slate-500 font-medium text-sm leading-relaxed">
//                 To ensure a secure booking experience, please log in to your account first.
//               </p>
//             </div>
//             <div className="pt-4 flex flex-col gap-3">
//               <button onClick={() => navigate("/login")} className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm shadow-lg shadow-teal-100 hover:bg-[#008f75] transition-all">
//                 LOGIN NOW
//               </button>
//               <button onClick={() => setShowLoginPopup(false)} className="text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-slate-600 transition">
//                 Maybe Later
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* 2. NAVIGATION HEADER */}
//       <div className="max-w-6xl mx-auto flex justify-between items-center mb-10 bg-white p-4 rounded-2xl shadow-sm border border-slate-50">
//         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#00a386] font-bold border border-teal-100 px-4 py-2 rounded-full hover:bg-teal-50 transition">
//           <ArrowLeft size={18} /> Back
//         </button>
//         <h1 className="text-2xl font-black text-[#137d6e]">Doctor Profile</h1>
//         <div className="bg-yellow-50 text-yellow-600 px-3 py-1 rounded-full flex items-center gap-1 font-bold text-sm border border-yellow-100">
//           <Star size={14} fill="currentColor" /> 5
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto space-y-8">
//         {/* 3. BIO CARD */}
//         <div className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-xl shadow-teal-50 border border-slate-50 flex flex-col lg:flex-row gap-12">
//           <div className="flex flex-col items-center gap-6">
//             <div className="relative">
//                <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
//                {/* Updated Image Source */}
//                <img src={currentDoc.img} alt="Doctor" className="relative z-10 w-48 h-48 rounded-full border-8 border-[#f1fcfb] shadow-inner object-cover" />
//             </div>
//             <div className="flex gap-4">
//               <StatCard label="Success" value="95%" icon="❤️" />
//               <StatCard label="Experience" value="5 Years" icon="🎓" />
//               <StatCard label="Patients" value="100" icon="👥" />
//             </div>
//           </div>
//           <div className="flex-1 space-y-6">
//             <div>
//               <h2 className="text-4xl font-black text-slate-900 capitalize leading-tight">Dr {id}</h2>
//               <span className="inline-block bg-[#00a386] text-white px-6 py-1.5 rounded-full text-xs font-bold mt-2 uppercase tracking-widest">
//                 🩺 {currentDoc.specialty}
//               </span>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <InfoBadge icon={<GraduationCap size={18}/>} label="Qualifications" value="Professor" />
//               <InfoBadge icon={<MapPin size={18}/>} label="Location" value="Lucknow, India" />
//               <InfoBadge icon={<Clock size={18}/>} label="Consultation Fee" value="₹1000" color="text-rose-500" />
//               <InfoBadge icon={<ShieldCheck size={18}/>} label="Availability" value="Available" color="text-green-500" />
//             </div>
//           </div>
//         </div>

//         {/* 4. BOOKING SECTION */}
//         <div className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-xl shadow-teal-50 border border-slate-50">
//           <h2 className="text-3xl font-black text-[#137d6e] mb-8 italic flex items-center gap-3">
//             <Calendar className="text-green-500" /> Book Your Appointment
//           </h2>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//              <div className="space-y-10">
//                 <div className="space-y-6">
//                   <h3 className="text-sm font-black text-teal-700 uppercase tracking-widest flex items-center gap-2">
//                     <Calendar size={16}/> Select Date
//                   </h3>
//                   <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
//                     {dates.map((date, idx) => (
//                       <button
//                         key={idx}
//                         onClick={() => setSelectedDate(date.fullDate)}
//                         className={`flex-shrink-0 w-20 h-24 rounded-full border-2 flex flex-col items-center justify-center transition-all ${
//                           selectedDate === date.fullDate 
//                           ? "bg-[#00a386] border-[#00a386] text-white shadow-lg shadow-teal-100" 
//                           : "bg-white border-slate-100 text-slate-400 hover:border-teal-200"
//                         }`}
//                       >
//                         <span className="text-[10px] font-bold uppercase">{date.dayName}</span>
//                         <span className="text-xl font-black">{date.dayNum}</span>
//                         <span className="text-[10px] font-bold uppercase">{date.month}</span>
//                       </button>
//                     ))}
                    
//                     <div className="relative flex-shrink-0 w-20 h-24 rounded-full border-2 border-dashed border-teal-200 bg-teal-50/30 group hover:border-teal-400 transition-colors cursor-pointer overflow-hidden">
//                       <div className="flex flex-col items-center justify-center w-full h-full">
//                         <span className="text-[10px] font-black text-teal-600 mb-1">OTHER</span>
//                         <Calendar size={22} className="text-teal-600" />
//                       </div>
//                       <input 
//                         type="date" 
//                         className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
//                         min={new Date().toISOString().split("T")[0]} 
//                         onChange={(e) => {
//                           if(e.target.value) {
//                             const picked = new Date(e.target.value);
//                             setSelectedDate(picked.toDateString());
//                           }
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                    <h3 className="text-sm font-black text-teal-700 uppercase tracking-widest flex items-center gap-2">
//                       <ShieldCheck size={16}/> Patient Details
//                    </h3>
//                    <div className="grid grid-cols-2 gap-4">
//                       <input type="text" placeholder="Full Name" className="col-span-1 bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" />
//                       <input type="number" placeholder="Age" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" />
//                    </div>
//                    <input type="tel" placeholder="Mobile Number (10 digits)" className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" />
//                    <select className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none appearance-none cursor-pointer">
//                       <option>Gender</option>
//                       <option>Male</option>
//                       <option>Female</option>
//                       <option>Others</option>
//                    </select>
//                    <input type="email" placeholder="Email (optional - for receipts)" className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" />
//                 </div>
//              </div>

//              <div className="bg-[#f1fcfb] p-8 rounded-[2.5rem] border border-teal-50 space-y-6 h-fit sticky top-10">
//                 <div className="space-y-4 text-sm font-bold text-slate-600">
//                    <SummaryRow label="Selected Doctor" value={`Dr ${id}`} />
//                    <SummaryRow label="Selected Date" value={selectedDate || "Not selected"} color={selectedDate ? "text-teal-700" : "text-rose-400"} />
//                    <SummaryRow label="Consultation Fee" value="₹1000" color="text-rose-500" />
//                 </div>
//                 <div className="pt-6 border-t border-teal-100">
//                    <p className="text-[10px] font-black text-teal-600 uppercase mb-4 tracking-widest">Payment Method</p>
//                    <div className="flex gap-4">
//                       <button onClick={() => setPaymentMethod("Cash")} className={`px-8 py-2.5 rounded-full text-xs font-black transition-all ${paymentMethod === "Cash" ? "bg-[#00a386] text-white" : "bg-white text-slate-400 border border-slate-100"}`}>Cash</button>
//                       <button onClick={() => setPaymentMethod("Online")} className={`px-8 py-2.5 rounded-full text-xs font-black transition-all ${paymentMethod === "Online" ? "bg-[#00a386] text-white" : "bg-white text-slate-400 border border-slate-100"}`}>Online</button>
//                    </div>
//                 </div>
//                 <button 
//                   disabled={!selectedDate}
//                   onClick={handleBookingAttempt}
//                   className={`w-full py-5 rounded-full font-black flex items-center justify-center gap-3 transition-all ${selectedDate ? "bg-[#00a386] text-white shadow-xl hover:bg-[#008f75]" : "bg-slate-200 text-slate-400 cursor-not-allowed"}`}
//                 >
//                    <Phone size={18} /> Confirm Booking
//                 </button>
//              </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const StatCard = ({ label, value, icon }) => (
//   <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-50 text-center flex-1 min-w-[85px]">
//     <span className="text-xl mb-1 block">{icon}</span>
//     <p className="text-lg font-black text-slate-800 leading-none">{value}</p>
//     <p className="text-[10px] font-bold text-slate-400 uppercase mt-1 tracking-tighter">{label}</p>
//   </div>
// );

// const InfoBadge = ({ icon, label, value, color = "text-slate-600" }) => (
//   <div className="flex items-center gap-4 bg-white p-4 rounded-3xl border border-slate-100">
//     <div className="bg-[#f1fcfb] p-2 rounded-xl text-teal-600 flex-shrink-0">{icon}</div>
//     <div className="overflow-hidden">
//       <p className="text-[10px] font-black text-teal-600 uppercase tracking-widest leading-none">{label}</p>
//       <p className={`text-sm font-bold mt-1 truncate ${color}`}>{value}</p>
//     </div>
//   </div>
// );

// const SummaryRow = ({ label, value, color = "text-teal-700" }) => (
//   <div className="flex justify-between items-center gap-4">
//     <span className="text-slate-400 text-xs uppercase tracking-wider">{label}:</span>
//     <span className={`${color} font-black text-right`}>{value}</span>
//   </div>
// );

// export default DoctorProfile;
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, Star, GraduationCap, MapPin, 
  Clock, ShieldCheck, Calendar, User, Phone, X, LockKeyhole
} from "lucide-react";

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Dynamic Image Mapping based on your Medical Experts list
  const doctorData = {
    mri: { img: "/images/doctor1.jpg", specialty: "Pediatrics" },
    kevin: { img: "/images/doc2.jpg", specialty: "Brain" },
    sarah: { img: "/images/doc3.jpeg", specialty: "Cardiology" },
    robert: { img: "/images/doc4.jpeg", specialty: "Orthopedic" }
  };

  const currentDoc = doctorData[id?.toLowerCase()] || { img: "/images/mri.png", specialty: "Specialist" };

  const [selectedDate, setSelectedDate] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const getNextSevenDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push({
        fullDate: date.toDateString(),
        dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
        dayNum: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' })
      });
    }
    return days;
  };

  const dates = getNextSevenDays();

  const handleBookingAttempt = () => {
    if (!isLoggedIn) {
      setShowLoginPopup(true);
    } else {
      alert("Booking confirmed successfully!");
    }
  };

  return (
    // Added pt-32 to push content below the fixed navbar
    <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-24 relative overflow-x-hidden">
      
      {/* 1. LOGIN REQUIRED POPUP */}
      {showLoginPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setShowLoginPopup(false)}></div>
          <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl relative z-10 text-center space-y-6 border border-slate-100 animate-in fade-in zoom-in duration-300">
            <button onClick={() => setShowLoginPopup(false)} className="absolute top-6 right-6 text-slate-400 hover:text-rose-500 transition-colors">
              <X size={24} />
            </button>
            <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-500">
              <LockKeyhole size={40} />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-slate-900">Authentication Required</h2>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">
                To ensure a secure booking experience, please log in to your account first.
              </p>
            </div>
            <div className="pt-4 flex flex-col gap-3">
              <button onClick={() => navigate("/login")} className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm shadow-lg shadow-teal-100 hover:bg-[#008f75] transition-all">
                LOGIN NOW
              </button>
              <button onClick={() => setShowLoginPopup(false)} className="text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-slate-600 transition">
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. NAVIGATION HEADER */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-10 bg-white p-4 rounded-2xl shadow-sm border border-slate-50">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#00a386] font-bold border border-teal-100 px-4 py-2 rounded-full hover:bg-teal-50 transition">
          <ArrowLeft size={18} /> Back
        </button>
        <h1 className="text-2xl font-black text-[#137d6e]">Doctor Profile</h1>
        <div className="bg-yellow-50 text-yellow-600 px-3 py-1 rounded-full flex items-center gap-1 font-bold text-sm border border-yellow-100">
          <Star size={14} fill="currentColor" /> 5
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        {/* 3. BIO CARD */}
        <div className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-xl shadow-teal-50 border border-slate-50 flex flex-col lg:flex-row gap-12">
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
               <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
               <img src={currentDoc.img} alt="Doctor" className="relative z-10 w-48 h-48 rounded-full border-8 border-[#f1fcfb] shadow-inner object-cover" />
            </div>
            <div className="flex gap-4">
              <StatCard label="Success" value="95%" icon="❤️" />
              <StatCard label="Experience" value="5 Years" icon="🎓" />
              <StatCard label="Patients" value="100" icon="👥" />
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-4xl font-black text-slate-900 capitalize leading-tight">Dr {id}</h2>
              <span className="inline-block bg-[#00a386] text-white px-6 py-1.5 rounded-full text-xs font-bold mt-2 uppercase tracking-widest">
                🩺 {currentDoc.specialty}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoBadge icon={<GraduationCap size={18}/>} label="Qualifications" value="Professor" />
              <InfoBadge icon={<MapPin size={18}/>} label="Location" value="Lucknow, India" />
              <InfoBadge icon={<Clock size={18}/>} label="Consultation Fee" value="₹1000" color="text-rose-500" />
              <InfoBadge icon={<ShieldCheck size={18}/>} label="Availability" value="Available" color="text-green-500" />
            </div>
          </div>
        </div>

        {/* 4. BOOKING SECTION */}
        <div className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-xl shadow-teal-50 border border-slate-50">
          <h2 className="text-3xl font-black text-[#137d6e] mb-8 italic flex items-center gap-3">
            <Calendar className="text-green-500" /> Book Your Appointment
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             <div className="space-y-10">
                <div className="space-y-6">
                  <h3 className="text-sm font-black text-teal-700 uppercase tracking-widest flex items-center gap-2">
                    <Calendar size={16}/> Select Date
                  </h3>
                  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    {dates.map((date, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedDate(date.fullDate)}
                        className={`flex-shrink-0 w-20 h-24 rounded-full border-2 flex flex-col items-center justify-center transition-all ${
                          selectedDate === date.fullDate 
                          ? "bg-[#00a386] border-[#00a386] text-white shadow-lg shadow-teal-100" 
                          : "bg-white border-slate-100 text-slate-400 hover:border-teal-200"
                        }`}
                      >
                        <span className="text-[10px] font-bold uppercase">{date.dayName}</span>
                        <span className="text-xl font-black">{date.dayNum}</span>
                        <span className="text-[10px] font-bold uppercase">{date.month}</span>
                      </button>
                    ))}
                    
                    <div className="relative flex-shrink-0 w-20 h-24 rounded-full border-2 border-dashed border-teal-200 bg-teal-50/30 group hover:border-teal-400 transition-colors cursor-pointer overflow-hidden">
                      <div className="flex flex-col items-center justify-center w-full h-full">
                        <span className="text-[10px] font-black text-teal-600 mb-1">OTHER</span>
                        <Calendar size={22} className="text-teal-600" />
                      </div>
                      <input 
                        type="date" 
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        min={new Date().toISOString().split("T")[0]} 
                        onChange={(e) => {
                          if(e.target.value) {
                            const picked = new Date(e.target.value);
                            setSelectedDate(picked.toDateString());
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                   <h3 className="text-sm font-black text-teal-700 uppercase tracking-widest flex items-center gap-2">
                      <ShieldCheck size={16}/> Patient Details
                   </h3>
                   <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Full Name" className="col-span-1 bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" />
                      <input type="number" placeholder="Age" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" />
                   </div>
                   <input type="tel" placeholder="Mobile Number (10 digits)" className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" />
                   <select className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none appearance-none cursor-pointer">
                      <option>Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                   </select>
                   <input type="email" placeholder="Email (optional - for receipts)" className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" />
                </div>
             </div>

             <div className="bg-[#f1fcfb] p-8 rounded-[2.5rem] border border-teal-50 space-y-6 h-fit sticky top-10">
                <div className="space-y-4 text-sm font-bold text-slate-600">
                   <SummaryRow label="Selected Doctor" value={`Dr ${id}`} />
                   <SummaryRow label="Selected Date" value={selectedDate || "Not selected"} color={selectedDate ? "text-teal-700" : "text-rose-400"} />
                   <SummaryRow label="Consultation Fee" value="₹1000" color="text-rose-500" />
                </div>
                <div className="pt-6 border-t border-teal-100">
                   <p className="text-[10px] font-black text-teal-600 uppercase mb-4 tracking-widest">Payment Method</p>
                   <div className="flex gap-4">
                      {/* Interactive payment toggle logic */}
                      <button onClick={() => setPaymentMethod("Cash")} className={`px-8 py-2.5 rounded-full text-xs font-black transition-all ${paymentMethod === "Cash" ? "bg-[#00a386] text-white" : "bg-white text-slate-400 border border-slate-100"}`}>Cash</button>
                      <button onClick={() => setPaymentMethod("Online")} className={`px-8 py-2.5 rounded-full text-xs font-black transition-all ${paymentMethod === "Online" ? "bg-[#00a386] text-white" : "bg-white text-slate-400 border border-slate-100"}`}>Online</button>
                   </div>
                </div>
                {/* Updated Confirm Booking button to trigger login check */}
                <button 
                  disabled={!selectedDate}
                  onClick={handleBookingAttempt}
                  className={`w-full py-5 rounded-full font-black flex items-center justify-center gap-3 transition-all ${selectedDate ? "bg-[#00a386] text-white shadow-xl hover:bg-[#008f75]" : "bg-slate-200 text-slate-400 cursor-not-allowed"}`}
                >
                   <Phone size={18} /> Confirm Booking
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, icon }) => (
  <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-50 text-center flex-1 min-w-[85px]">
    <span className="text-xl mb-1 block">{icon}</span>
    <p className="text-lg font-black text-slate-800 leading-none">{value}</p>
    <p className="text-[10px] font-bold text-slate-400 uppercase mt-1 tracking-tighter">{label}</p>
  </div>
);

const InfoBadge = ({ icon, label, value, color = "text-slate-600" }) => (
  <div className="flex items-center gap-4 bg-white p-4 rounded-3xl border border-slate-100">
    <div className="bg-[#f1fcfb] p-2 rounded-xl text-teal-600 flex-shrink-0">{icon}</div>
    <div className="overflow-hidden">
      <p className="text-[10px] font-black text-teal-600 uppercase tracking-widest leading-none">{label}</p>
      <p className={`text-sm font-bold mt-1 truncate ${color}`}>{value}</p>
    </div>
  </div>
);

const SummaryRow = ({ label, value, color = "text-teal-700" }) => (
  <div className="flex justify-between items-center gap-4">
    <span className="text-slate-400 text-xs uppercase tracking-wider">{label}:</span>
    <span className={`${color} font-black text-right`}>{value}</span>
  </div>
);

export default DoctorProfile;