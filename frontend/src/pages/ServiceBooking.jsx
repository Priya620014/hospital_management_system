
// // // import React, { useState } from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import { 
// // //   ArrowLeft, FileText, IndianRupee, Clock, 
// // //   ShieldCheck, Send, Calendar, X, LockKeyhole, AlertCircle 
// // // } from "lucide-react";

// // // const ServiceBooking = () => {
// // //   const { serviceName } = useParams();
// // //   const navigate = useNavigate();
  
// // //   // States
// // //   const [formData, setFormData] = useState({ fullName: "", mobile: "", age: "", gender: "", email: "" });
// // //   const [paymentMethod, setPaymentMethod] = useState("Online");
// // //   const [selectedDate, setSelectedDate] = useState("");
// // //   const [selectedTime, setSelectedTime] = useState("");
// // //   const [isLoggedIn, setIsLoggedIn] = useState(false); 

// // //   // Modal States
// // //   const [showLoginPopup, setShowLoginPopup] = useState(false);
// // //   const [errorModal, setErrorModal] = useState({ show: false, message: "" });

// // //   const serviceData = {
// // //     "heart-rating": { img: "/images/heart.webp", price: 599, about: "Advanced ECG monitoring.", instructions: ["Arram se le", "jakli na machaye"] },
// // //     "general-consultation": { img: "/images/gn.webp", price: 499, about: "Expert medical advice.", instructions: ["Fast for 8 hours"] },
// // //     "blood-sugar-test": { img: "/images/bloodsugar.jpg", price: 299, about: "Glucose monitoring.", instructions: ["Empty stomach"] },
// // //     "lab-analysis": { img: "/images/lab.webp", price: 899, about: "State-of-the-art pathology.", instructions: ["Drink water"] }
// // //   };

// // //   const currentService = serviceData[serviceName] || { img: "/images/shipchain-placeholder.jpg", price: 599, about: "Specialized service.", instructions: ["Follow advice"] };

// // //   // Replaced local host alert with Error Modal
// // //   const handleBookingAttempt = () => {
// // //     const { fullName, mobile, email } = formData;

// // //     if (!/^[a-zA-Z\s]+$/.test(fullName)) {
// // //       setErrorModal({ show: true, message: "Full Name must contain only letters." });
// // //       return;
// // //     }

// // //     if (!/^\d{10}$/.test(mobile)) {
// // //       setErrorModal({ show: true, message: "Mobile Number must be exactly 10 digits." });
// // //       return;
// // //     }

// // //     if (email && !email.includes("@")) {
// // //       setErrorModal({ show: true, message: "Invalid Email. It must contain the '@' symbol." });
// // //       return;
// // //     }

// // //     if (!isLoggedIn) {
// // //       setShowLoginPopup(true);
// // //     } else {
// // //       alert("Booking confirmed!"); 
// // //     }
// // //   };

// // //   const title = serviceName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

// // //   return (
// // //     <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-24 relative">
      
// // //       {/* 1. CUSTOM ERROR MODAL (Replaces Localhost Alert) */}
// // //       {errorModal.show && (
// // //         <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
// // //           <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setErrorModal({ show: false, message: "" })}></div>
// // //           <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl relative z-10 text-center space-y-6 border border-rose-50 animate-in fade-in zoom-in duration-300">
// // //             <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-500">
// // //               <AlertCircle size={32} />
// // //             </div>
// // //             <div className="space-y-2">
// // //               <h3 className="text-xl font-black text-slate-900">Validation Error</h3>
// // //               <p className="text-slate-500 font-medium text-sm leading-relaxed">{errorModal.message}</p>
// // //             </div>
// // //             <button 
// // //               onClick={() => setErrorModal({ show: false, message: "" })}
// // //               className="w-full bg-slate-900 text-white py-4 rounded-full font-black text-sm hover:bg-slate-800 transition-all"
// // //             >
// // //               OK
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* 2. LOGIN REQUIRED POPUP */}
// // //       {showLoginPopup && (
// // //         <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
// // //           <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setShowLoginPopup(false)}></div>
// // //           <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl relative z-10 text-center space-y-6 border border-slate-100 animate-in fade-in zoom-in duration-300">
// // //             <button onClick={() => setShowLoginPopup(false)} className="absolute top-6 right-6 text-slate-400 hover:text-rose-500"><X size={24} /></button>
// // //             <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-500"><LockKeyhole size={40} /></div>
// // //             <h2 className="text-2xl font-black text-slate-900">Authentication Required</h2>
// // //             <div className="pt-4 flex flex-col gap-3">
// // //               <button onClick={() => navigate("/login")} className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm hover:bg-[#008f75]">LOGIN NOW</button>
// // //               <button onClick={() => setShowLoginPopup(false)} className="text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-slate-600">Maybe Later</button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* 3. PAGE CONTENT */}
// // //       <button onClick={() => navigate(-1)} className="flex items-center gap-2 bg-white text-[#00a386] px-4 py-2 rounded-full font-bold shadow-sm mb-8 border border-slate-50 hover:bg-teal-50"><ArrowLeft size={18} /> Back</button>

// // //       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
// // //         <div className="flex-1 space-y-8">
// // //           <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-50">
// // //              <img src={currentService.img} alt={title} className="w-full h-80 object-cover" />
// // //              <div className="p-8 space-y-6">
// // //                 <h1 className="text-4xl font-black text-slate-900">{title}</h1>
// // //                 <div className="bg-[#f1fcfb] p-6 rounded-2xl border border-teal-50">
// // //                    <h3 className="flex items-center gap-2 text-[#137d6e] font-black uppercase text-xs tracking-widest mb-2"><FileText size={14}/> About This Service</h3>
// // //                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{currentService.about}</p>
// // //                 </div>
// // //                 <div className="flex items-center gap-2 bg-teal-50 text-[#00a386] w-fit px-6 py-3 rounded-full font-black"><IndianRupee size={20}/> {currentService.price}</div>
// // //              </div>
// // //           </div>

// // //           <div className="bg-white rounded-[2rem] p-8 shadow-xl space-y-10 border border-slate-50">
// // //              <div className="space-y-6">
// // //                 <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest flex items-center gap-2"><ShieldCheck size={16}/> Your Details</h3>
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //                     <input type="text" placeholder="Full Name *" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
// // //                     <input type="number" placeholder="Mobile (10 digits) *" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, mobile: e.target.value})} />
// // //                     <input type="number" placeholder="Age *" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, age: e.target.value})} />
// // //                     <select className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none appearance-none" onChange={(e) => setFormData({...formData, gender: e.target.value})}>
// // //                       <option>Select Gender *</option><option>Male</option><option>Female</option>
// // //                     </select>
// // //                 </div>
// // //                 <input type="email" placeholder="Email (must contain @)" className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, email: e.target.value})} />
// // //                 <div className="flex gap-4 pt-4">
// // //                   {["Cash", "Online"].map((m) => (
// // //                     <button key={m} onClick={() => setPaymentMethod(m)} className={`px-8 py-2.5 rounded-full text-xs font-black transition-all ${paymentMethod === m ? "bg-[#00a386] text-white" : "bg-white text-slate-400 border border-slate-100"}`}>{m}</button>
// // //                   ))}
// // //                 </div>
// // //              </div>

// // //              <div className="space-y-4 pt-6 border-t border-slate-50">
// // //                 <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest flex items-center gap-2"><Calendar size={16}/> Select Date *</h3>
// // //                 <input type="date" className="w-full max-w-xs bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none cursor-pointer text-slate-600 font-bold" min={new Date().toISOString().split("T")[0]} onChange={(e) => setSelectedDate(e.target.value)} />
// // //              </div>

// // //              <div className="space-y-4 pt-6 border-t border-slate-50">
// // //                 <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest flex items-center gap-2"><Clock size={16}/> Select Time *</h3>
// // //                 <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
// // //                    {["09:00 AM", "10:30 AM", "11:00 AM", "01:30 PM", "04:00 PM", "06:30 PM"].map((time) => (
// // //                      <button key={time} onClick={() => setSelectedTime(time)} className={`py-3 px-4 rounded-full text-xs font-bold transition-all border ${selectedTime === time ? "bg-teal-50 border-[#00a386] text-[#00a386]" : "bg-white border-slate-100 text-slate-400"}`}>{time}</button>
// // //                    ))}
// // //                 </div>
// // //              </div>
// // //           </div>
// // //         </div>

// // //         {/* SUMMARY */}
// // //         <div className="lg:w-96">
// // //            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-50 space-y-6 sticky top-32">
// // //               <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest">Booking Summary</h3>
// // //               <div className="space-y-3">
// // //                  <SummaryRow label="Name" value={formData.fullName || "Not filled"} />
// // //                  <SummaryRow label="Date" value={selectedDate || "Not selected"} color={selectedDate ? "text-slate-700" : "text-rose-400"} />
// // //                  <SummaryRow label="Time" value={selectedTime || "Not selected"} color={selectedTime ? "text-slate-700" : "text-rose-400"} />
// // //                  <SummaryRow label="Payment" value={paymentMethod} />
// // //                  <SummaryRow label="Price" value={`₹${currentService.price}`} color="text-[#137d6e]" />
// // //               </div>
// // //               <button 
// // //                 disabled={!selectedDate || !selectedTime || !formData.fullName || !formData.mobile}
// // //                 onClick={handleBookingAttempt}
// // //                 className={`w-full py-5 rounded-full font-black flex items-center justify-center gap-3 transition-all ${selectedDate && selectedTime ? "bg-[#00a386] text-white shadow-xl hover:bg-[#008f75]" : "bg-slate-200 text-slate-400 cursor-not-allowed"}`}
// // //               >
// // //                  <Send size={18} /> Confirm Booking • ₹{currentService.price}
// // //               </button>
// // //            </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const SummaryRow = ({ label, value, color = "text-slate-500" }) => (
// // //   <div className="flex justify-between text-sm font-bold">
// // //     <span className="text-[#00a386]">{label}:</span>
// // //     <span className={color}>{value}</span>
// // //   </div>
// // // );

// // // export default ServiceBooking;
// // // import React, { useState } from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import { 
// // //   ArrowLeft, FileText, IndianRupee, Clock, 
// // //   ShieldCheck, Send, Calendar, X, LockKeyhole, AlertCircle 
// // // } from "lucide-react";

// // // const ServiceBooking = () => {
// // //   const { serviceName } = useParams();
// // //   const navigate = useNavigate();
  
// // //   // Form and Selection States
// // //   const [formData, setFormData] = useState({ fullName: "", mobile: "", age: "", gender: "", email: "" });
// // //   const [paymentMethod, setPaymentMethod] = useState("Online");
// // //   const [selectedDate, setSelectedDate] = useState("");
// // //   const [selectedTime, setSelectedTime] = useState("");
// // //   const [isLoggedIn, setIsLoggedIn] = useState(false); 

// // //   // Modal States
// // //   const [showLoginPopup, setShowLoginPopup] = useState(false);
// // //   const [errorModal, setErrorModal] = useState({ show: false, message: "" });

// // //   const serviceData = {
// // //     "heart-rating": { img: "/images/heart.webp", price: 599, about: "Advanced ECG monitoring.", instructions: ["Arram se le", "jakli na machaye"] },
// // //     "general-consultation": { img: "/images/gn.webp", price: 499, about: "Expert medical advice.", instructions: ["Fast for 8 hours"] },
// // //     "blood-sugar-test": { img: "/images/bloodsugar.jpg", price: 299, about: "Glucose monitoring.", instructions: ["Empty stomach"] },
// // //     "lab-analysis": { img: "/images/lab.webp", price: 899, about: "State-of-the-art pathology.", instructions: ["Drink water"] }
// // //   };

// // //   const currentService = serviceData[serviceName] || { img: "/images/shipchain-placeholder.jpg", price: 599, about: "Specialized service.", instructions: ["Follow advice"] };

// // //   // Enhanced Validation Logic
// // //   const handleBookingAttempt = () => {
// // //     const { fullName, mobile, email } = formData;

// // //     // 1. Details Validation
// // //     if (!/^[a-zA-Z\s]+$/.test(fullName)) {
// // //       setErrorModal({ show: true, message: "Please enter a valid Name (letters only)." });
// // //       return;
// // //     }

// // //     if (!/^\d{10}$/.test(mobile)) {
// // //       setErrorModal({ show: true, message: "Mobile Number must be exactly 10 digits." });
// // //       return;
// // //     }

// // //     if (email && !email.includes("@")) {
// // //       setErrorModal({ show: true, message: "Invalid Email. It must contain the '@' symbol." });
// // //       return;
// // //     }

// // //     // 2. Date and Time Selection Validation
// // //     if (!selectedDate) {
// // //       setErrorModal({ show: true, message: "Please select a preferred Date for your appointment." });
// // //       return;
// // //     }

// // //     if (!selectedTime) {
// // //       setErrorModal({ show: true, message: "Please select a preferred Time Slot to continue." });
// // //       return;
// // //     }

// // //     // 3. Login Check
// // //     if (!isLoggedIn) {
// // //       setShowLoginPopup(true);
// // //     } else {
// // //       alert("Booking confirmed successfully!");
// // //     }
// // //   };

// // //   const title = serviceName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

// // //   return (
// // //     <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-24 relative">
      
// // //       {/* ERROR MODAL */}
// // //       {errorModal.show && (
// // //         <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
// // //           <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setErrorModal({ show: false, message: "" })}></div>
// // //           <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl relative z-10 text-center space-y-6 animate-in fade-in zoom-in duration-300">
// // //             <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-500">
// // //               <AlertCircle size={32} />
// // //             </div>
// // //             <div className="space-y-2">
// // //               <h3 className="text-xl font-black text-slate-900">Missing Information</h3>
// // //               <p className="text-slate-500 font-medium text-sm leading-relaxed">{errorModal.message}</p>
// // //             </div>
// // //             <button 
// // //               onClick={() => setErrorModal({ show: false, message: "" })}
// // //               className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm shadow-md shadow-teal-50 hover:bg-[#008f75] transition-all"
// // //             >
// // //               OK
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* LOGIN POPUP */}
// // //       {showLoginPopup && (
// // //         <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
// // //           <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setShowLoginPopup(false)}></div>
// // //           <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl relative z-10 text-center space-y-6">
// // //             <button onClick={() => setShowLoginPopup(false)} className="absolute top-6 right-6 text-slate-400 hover:text-rose-500"><X size={24} /></button>
// // //             <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-500"><LockKeyhole size={40} /></div>
// // //             <h2 className="text-2xl font-black text-slate-900">Authentication Required</h2>
// // //             <div className="pt-4 flex flex-col gap-3">
// // //               <button onClick={() => navigate("/login")} className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm shadow-lg shadow-teal-100 hover:bg-[#008f75]">LOGIN NOW</button>
// // //               <button onClick={() => setShowLoginPopup(false)} className="text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-slate-600">Maybe Later</button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       <button onClick={() => navigate(-1)} className="flex items-center gap-2 bg-white text-[#00a386] px-4 py-2 rounded-full font-bold shadow-sm mb-8 border border-slate-50"><ArrowLeft size={18} /> Back</button>

// // //       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
// // //         <div className="flex-1 space-y-8">
// // //           {/* Service Banner */}
// // //           <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-50">
// // //              <img src={currentService.img} alt={title} className="w-full h-80 object-cover" />
// // //              <div className="p-8 space-y-6">
// // //                 <h1 className="text-4xl font-black text-slate-900">{title}</h1>
// // //                 <div className="bg-[#f1fcfb] p-6 rounded-2xl border border-teal-50">
// // //                    <h3 className="flex items-center gap-2 text-[#137d6e] font-black uppercase text-xs tracking-widest mb-2"><FileText size={14}/> About This Service</h3>
// // //                    <p className="text-slate-500 text-sm font-medium">{currentService.about}</p>
// // //                 </div>
// // //                 <div className="flex items-center gap-2 bg-teal-50 text-[#00a386] w-fit px-6 py-3 rounded-full font-black"><IndianRupee size={20}/> {currentService.price}</div>
// // //              </div>
// // //           </div>

// // //           {/* Selection Panels */}
// // //           <div className="bg-white rounded-[2rem] p-8 shadow-xl space-y-10 border border-slate-50">
// // //              <div className="space-y-6">
// // //                 <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest flex items-center gap-2"><ShieldCheck size={16}/> Your Details</h3>
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //                     <input type="text" placeholder="Full Name *" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
// // //                     <input type="number" placeholder="Mobile (10 digits) *" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, mobile: e.target.value})} />
// // //                     <input type="number" placeholder="Age *" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, age: e.target.value})} />
// // //                     <select className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none appearance-none" onChange={(e) => setFormData({...formData, gender: e.target.value})}>
// // //                       <option>Select Gender *</option><option>Male</option><option>Female</option>
// // //                     </select>
// // //                 </div>
// // //                 <input type="email" placeholder="Email (must contain @)" className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, email: e.target.value})} />
// // //                 <div className="flex gap-4 pt-4">
// // //                   {["Cash", "Online"].map((m) => (
// // //                     <button key={m} onClick={() => setPaymentMethod(m)} className={`px-8 py-2.5 rounded-full text-xs font-black transition-all ${paymentMethod === m ? "bg-[#00a386] text-white shadow-md" : "bg-white text-slate-400 border border-slate-100"}`}>{m}</button>
// // //                   ))}
// // //                 </div>
// // //              </div>

// // //              {/* Date Selector */}
// // //              <div className="space-y-4 pt-6 border-t border-slate-50">
// // //                 <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest flex items-center gap-2"><Calendar size={16}/> Select Date *</h3>
// // //                 <input 
// // //                   type="date" 
// // //                   className={`w-full max-w-xs border rounded-full py-4 px-6 text-sm outline-none cursor-pointer font-bold ${selectedDate ? "bg-[#00a386] text-white border-transparent" : "bg-[#f1fcfb] border-green-100 text-slate-600"}`}
// // //                   min={new Date().toISOString().split("T")[0]} 
// // //                   onChange={(e) => setSelectedDate(e.target.value)} 
// // //                 />
// // //              </div>

// // //              {/* Time Selector */}
// // //              <div className="space-y-4 pt-6 border-t border-slate-50">
// // //                 <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest flex items-center gap-2"><Clock size={16}/> Select Time *</h3>
// // //                 <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
// // //                    {["09:00 AM", "10:30 AM", "11:00 AM", "01:30 PM", "04:00 PM", "06:30 PM"].map((time) => (
// // //                      <button key={time} onClick={() => setSelectedTime(time)} className={`py-3 px-4 rounded-full text-xs font-bold transition-all border ${selectedTime === time ? "bg-teal-50 border-[#00a386] text-[#00a386] shadow-sm" : "bg-white border-slate-100 text-slate-400"}`}>{time}</button>
// // //                    ))}
// // //                 </div>
// // //              </div>
// // //           </div>
// // //         </div>

// // //         {/* SUMMARY */}
// // //         <div className="lg:w-96">
// // //            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-50 space-y-6 sticky top-32">
// // //               <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest">Booking Summary</h3>
// // //               <div className="space-y-3">
// // //                  <SummaryRow label="Date" value={selectedDate || "Not selected"} color={selectedDate ? "text-slate-700" : "text-rose-400"} />
// // //                  <SummaryRow label="Time" value={selectedTime || "Not selected"} color={selectedTime ? "text-slate-700" : "text-rose-400"} />
// // //                  <SummaryRow label="Price" value={`₹${currentService.price}`} color="text-[#137d6e]" />
// // //               </div>
// // //               <button 
// // //                 onClick={handleBookingAttempt}
// // //                 className="w-full py-5 rounded-full font-black flex items-center justify-center gap-3 transition-all bg-[#00a386] text-white shadow-xl hover:bg-[#008f75]"
// // //               >
// // //                  <Send size={18} /> Confirm Booking
// // //               </button>
// // //            </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const SummaryRow = ({ label, value, color = "text-slate-500" }) => (
// // //   <div className="flex justify-between text-sm font-bold">
// // //     <span className="text-[#00a386]">{label}:</span>
// // //     <span className={color}>{value}</span>
// // //   </div>
// // // );

// // // export default ServiceBooking;
// // import React, { useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { 
// //   ArrowLeft, FileText, IndianRupee, Clock, 
// //   ShieldCheck, Send, Calendar, X, LockKeyhole, AlertCircle, CheckCircle 
// // } from "lucide-react";
// // // 1. Import Clerk hooks
// // import { useAuth, useUser } from "@clerk/clerk-react";

// // const ServiceBooking = () => {
// //   const { serviceName } = useParams();
// //   const navigate = useNavigate();
  
// //   // 2. USE REAL AUTHENTICATION
// //   const { isSignedIn } = useAuth();
// //   const { user } = useUser(); 

// //   const [formData, setFormData] = useState({ fullName: "", mobile: "", age: "", gender: "", email: "" });
// //   const [paymentMethod, setPaymentMethod] = useState("Online");
// //   const [selectedDate, setSelectedDate] = useState("");
// //   const [selectedTime, setSelectedTime] = useState("");

// //   // Modal States
// //   const [showLoginPopup, setShowLoginPopup] = useState(false);
// //   const [showSuccess, setShowSuccess] = useState(false); // Success Modal
// //   const [errorModal, setErrorModal] = useState({ show: false, message: "" });

// //   const serviceData = {
// //     "heart-rating": { img: "/images/heart.webp", price: 599, about: "Advanced ECG monitoring." },
// //     "general-consultation": { img: "/images/gn.webp", price: 499, about: "Expert medical advice." },
// //     "blood-sugar-test": { img: "/images/bloodsugar.jpg", price: 299, about: "Glucose monitoring." },
// //     "lab-analysis": { img: "/images/lab.webp", price: 899, about: "State-of-the-art pathology." }
// //   };

// //   const currentService = serviceData[serviceName] || { img: "/images/shipchain-placeholder.jpg", price: 599, about: "Specialized service." };

// //   const handleBookingAttempt = async () => {
// //     const { fullName, mobile, email } = formData;

// //     // --- VALIDATION LOGIC ---
// //     if (!/^[a-zA-Z\s]+$/.test(fullName)) {
// //       setErrorModal({ show: true, message: "Please enter a valid Name." });
// //       return;
// //     }
// //     if (!/^\d{10}$/.test(mobile)) {
// //       setErrorModal({ show: true, message: "Mobile Number must be 10 digits." });
// //       return;
// //     }
// //     if (!selectedDate || !selectedTime) {
// //       setErrorModal({ show: true, message: "Please select both Date and Time." });
// //       return;
// //     }

// //     // 3. CHECK LOGIN STATUS
// //     if (!isSignedIn) {
// //       setShowLoginPopup(true);
// //       return;
// //     }

// //     // 4. SAVE TO MONGODB
// //     try {
// //       const response = await fetch("http://localhost:4000/api/appointments", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           userId: user.id, // Clerk ID
// //           doctorName: serviceName.split('-').join(' ').toUpperCase(), // Service as Name
// //           patientName: fullName,
// //           patientAge: formData.age,
// //           patientMobile: mobile,
// //           appointmentDate: selectedDate,
// //           appointmentTime: selectedTime,
// //           status: "Pending"
// //         }),
// //       });

// //       if (response.ok) {
// //         setShowSuccess(true); // Show success popup
// //       }
// //     } catch (err) {
// //       setErrorModal({ show: true, message: "Server connection failed." });
// //     }
// //   };

// //   const title = serviceName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

// //   return (
// //     <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-24 relative">
      
// //       {/* SUCCESS MODAL */}
// //       {showSuccess && (
// //         <div className="fixed inset-0 z-[150] flex items-center justify-center px-6">
// //           <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>
// //           <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl relative z-10 text-center space-y-6">
// //             <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto text-[#00a386]">
// //               <CheckCircle size={40} />
// //             </div>
// //             <h3 className="text-xl font-black text-slate-900">Booking Confirmed!</h3>
// //             <p className="text-slate-500 text-sm leading-relaxed">Your service has been scheduled. Check your Appointments section for details.</p>
// //             <button 
// //               onClick={() => navigate("/appointments")} 
// //               className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm shadow-md"
// //             >
// //               Go to Appointments
// //             </button>
// //           </div>
// //         </div>
// //       )}

// //       {/* LOGIN POPUP */}
// //       {showLoginPopup && (
// //         <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
// //           <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setShowLoginPopup(false)}></div>
// //           <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl relative z-10 text-center space-y-6">
// //             <button onClick={() => setShowLoginPopup(false)} className="absolute top-6 right-6 text-slate-400 hover:text-rose-500"><X size={24} /></button>
// //             <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-500"><LockKeyhole size={40} /></div>
// //             <h2 className="text-2xl font-black text-slate-900">Authentication Required</h2>
// //             <p className="text-slate-500 text-sm">You must be logged in to confirm your booking.</p>
// //             <button onClick={() => { setShowLoginPopup(false); navigate("/"); }} className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm">LOGIN NOW 🔑</button>
// //           </div>
// //         </div>
// //       )}

// //       {/* ERROR MODAL */}
// //       {errorModal.show && (
// //         <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
// //           <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setErrorModal({ show: false, message: "" })}></div>
// //           <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl relative z-10 text-center space-y-6">
// //             <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-500"><AlertCircle size={32} /></div>
// //             <div className="space-y-2">
// //               <h3 className="text-xl font-black text-slate-900">Information Required</h3>
// //               <p className="text-slate-500 font-medium text-sm leading-relaxed">{errorModal.message}</p>
// //             </div>
// //             <button onClick={() => setErrorModal({ show: false, message: "" })} className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm shadow-md">OK</button>
// //           </div>
// //         </div>
// //       )}

// //       <button onClick={() => navigate(-1)} className="flex items-center gap-2 bg-white text-[#00a386] px-4 py-2 rounded-full font-bold shadow-sm mb-8 border border-slate-50"><ArrowLeft size={18} /> Back</button>

// //       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
// //         <div className="flex-1 space-y-8">
// //           {/* Service Banner */}
// //           <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-50">
// //              <img src={currentService.img} alt={title} className="w-full h-80 object-cover" />
// //              <div className="p-8 space-y-6">
// //                 <h1 className="text-4xl font-black text-slate-900">{title}</h1>
// //                 <div className="bg-[#f1fcfb] p-6 rounded-2xl border border-teal-50">
// //                    <h3 className="flex items-center gap-2 text-[#137d6e] font-black uppercase text-xs tracking-widest mb-2"><FileText size={14}/> About This Service</h3>
// //                    <p className="text-slate-500 text-sm font-medium">{currentService.about}</p>
// //                 </div>
// //                 <div className="flex items-center gap-2 bg-teal-50 text-[#00a386] w-fit px-6 py-3 rounded-full font-black"><IndianRupee size={20}/> {currentService.price}</div>
// //              </div>
// //           </div>

// //           {/* Selection Panels */}
// //           <div className="bg-white rounded-[2rem] p-8 shadow-xl space-y-10 border border-slate-50">
// //              <div className="space-y-6">
// //                 <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest flex items-center gap-2"><ShieldCheck size={16}/> Your Details</h3>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                     <input type="text" placeholder="Full Name *" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
// //                     <input type="number" placeholder="Mobile (10 digits) *" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, mobile: e.target.value})} />
// //                     <input type="number" placeholder="Age *" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, age: e.target.value})} />
// //                     <select className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none appearance-none" onChange={(e) => setFormData({...formData, gender: e.target.value})}>
// //                       <option>Select Gender *</option><option>Male</option><option>Female</option>
// //                     </select>
// //                 </div>
// //                 <input type="email" placeholder="Email" className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, email: e.target.value})} />
// //              </div>

// //              {/* Date Selector */}
// //              <div className="space-y-4 pt-6 border-t border-slate-50">
// //                 <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest flex items-center gap-2"><Calendar size={16}/> Select Date *</h3>
// //                 <input 
// //                   type="date" 
// //                   className={`w-full max-w-xs border rounded-full py-4 px-6 text-sm outline-none cursor-pointer font-bold ${selectedDate ? "bg-[#00a386] text-white border-transparent" : "bg-[#f1fcfb] border-green-100 text-slate-600"}`}
// //                   min={new Date().toISOString().split("T")[0]} 
// //                   onChange={(e) => setSelectedDate(e.target.value)} 
// //                 />
// //              </div>

// //              {/* Time Selector */}
// //              <div className="space-y-4 pt-6 border-t border-slate-50">
// //                 <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest flex items-center gap-2"><Clock size={16}/> Select Time *</h3>
// //                 <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
// //                    {["09:00 AM", "10:30 AM", "11:00 AM", "01:30 PM", "04:00 PM", "06:30 PM"].map((time) => (
// //                      <button key={time} onClick={() => setSelectedTime(time)} className={`py-3 px-4 rounded-full text-xs font-bold transition-all border ${selectedTime === time ? "bg-teal-50 border-[#00a386] text-[#00a386] shadow-sm" : "bg-white border-slate-100 text-slate-400"}`}>{time}</button>
// //                    ))}
// //                 </div>
// //              </div>
// //           </div>
// //         </div>

// //         {/* SUMMARY SECTION */}
// //         <div className="lg:w-96">
// //            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-50 space-y-6 sticky top-32">
// //               <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest">Booking Summary</h3>
// //               <div className="space-y-3">
// //                  <SummaryRow label="Date" value={selectedDate || "Not selected"} color={selectedDate ? "text-slate-700" : "text-rose-400"} />
// //                  <SummaryRow label="Time" value={selectedTime || "Not selected"} color={selectedTime ? "text-slate-700" : "text-rose-400"} />
// //                  <SummaryRow label="Price" value={`₹${currentService.price}`} color="text-[#137d6e]" />
// //               </div>
// //               <button 
// //                 onClick={handleBookingAttempt}
// //                 className="w-full py-5 rounded-full font-black flex items-center justify-center gap-3 transition-all bg-[#00a386] text-white shadow-xl hover:bg-[#008f75]"
// //               >
// //                  <Send size={18} /> Confirm Booking
// //               </button>
// //            </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const SummaryRow = ({ label, value, color = "text-slate-500" }) => (
// //   <div className="flex justify-between text-sm font-bold">
// //     <span className="text-[#00a386]">{label}:</span>
// //     <span className={color}>{value}</span>
// //   </div>
// // );

// // export default ServiceBooking;
// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { 
//   ArrowLeft, FileText, IndianRupee, Clock, 
//   ShieldCheck, Send, Calendar, X, LockKeyhole, AlertCircle, CheckCircle 
// } from "lucide-react";
// import { useAuth, useUser } from "@clerk/clerk-react";

// const ServiceBooking = () => {
//   const { serviceName } = useParams();
//   const navigate = useNavigate();
  
//   const { isSignedIn } = useAuth();
//   const { user } = useUser(); 

//   const [formData, setFormData] = useState({ fullName: "", mobile: "", age: "", gender: "", email: "" });
//   const [paymentMethod, setPaymentMethod] = useState("Online");
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTime, setSelectedTime] = useState("");

//   const [showLoginPopup, setShowLoginPopup] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false); 
//   const [errorModal, setErrorModal] = useState({ show: false, message: "" });

//   const serviceData = {
//     "heart-rating": { img: "/images/heart.webp", price: 599, about: "Advanced ECG monitoring." },
//     "general-consultation": { img: "/images/gn.webp", price: 499, about: "Expert medical advice." },
//     "blood-sugar-test": { img: "/images/bloodsugar.jpg", price: 299, about: "Glucose monitoring." },
//     "lab-analysis": { img: "/images/lab.webp", price: 899, about: "State-of-the-art pathology." }
//   };

//   const currentService = serviceData[serviceName] || { img: "/images/shipchain-placeholder.jpg", price: 599, about: "Specialized service." };
//   const title = serviceName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

//   const handleBookingAttempt = async () => {
//     const { fullName, mobile } = formData;

//     if (!/^[a-zA-Z\s]+$/.test(fullName)) {
//       setErrorModal({ show: true, message: "Please enter a valid Name." });
//       return;
//     }
//     if (!/^\d{10}$/.test(mobile)) {
//       setErrorModal({ show: true, message: "Mobile Number must be 10 digits." });
//       return;
//     }
//     if (!selectedDate || !selectedTime) {
//       setErrorModal({ show: true, message: "Please select both Date and Time." });
//       return;
//     }

//     if (!isSignedIn) {
//       setShowLoginPopup(true);
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:4000/api/services/book",{
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     userId: user.id,
//     serviceName: title, 
//     patientName: formData.fullName,
//     patientAge: formData.age,
//     patientMobile: formData.mobile,
//     appointmentDate: selectedDate,
//     appointmentTime: selectedTime
//   }),
//       });

//       if (response.ok) {
//         setShowSuccess(true);
//       }
//     } catch (err) {
//       setErrorModal({ show: true, message: "Server connection failed." });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-24 relative">
      
//       {showSuccess && (
//         <div className="fixed inset-0 z-[150] flex items-center justify-center px-6">
//           <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>
//           <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl relative z-10 text-center space-y-6">
//             <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto text-[#00a386]">
//               <CheckCircle size={40} />
//             </div>
//             <h3 className="text-xl font-black text-slate-900">Booking Confirmed!</h3>
//             <p className="text-slate-500 text-sm leading-relaxed">Your service has been scheduled. Check your Appointments section for details.</p>
//             <button 
//               onClick={() => navigate("/appointments")} 
//               className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm shadow-md"
//             >
//               Go to Appointments
//             </button>
//           </div>
//         </div>
//       )}

//       {showLoginPopup && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
//           <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setShowLoginPopup(false)}></div>
//           <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl relative z-10 text-center space-y-6">
//             <button onClick={() => setShowLoginPopup(false)} className="absolute top-6 right-6 text-slate-400 hover:text-rose-500"><X size={24} /></button>
//             <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-500"><LockKeyhole size={40} /></div>
//             <h2 className="text-2xl font-black text-slate-900">Authentication Required</h2>
//             <button onClick={() => { setShowLoginPopup(false); navigate("/"); }} className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm">LOGIN NOW 🔑</button>
//           </div>
//         </div>
//       )}

//       {errorModal.show && (
//         <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
//           <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setErrorModal({ show: false, message: "" })}></div>
//           <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl relative z-10 text-center space-y-6">
//             <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-500"><AlertCircle size={32} /></div>
//             <div className="space-y-2">
//               <h3 className="text-xl font-black text-slate-900">Information Required</h3>
//               <p className="text-slate-500 font-medium text-sm leading-relaxed">{errorModal.message}</p>
//             </div>
//             <button onClick={() => setErrorModal({ show: false, message: "" })} className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm shadow-md">OK</button>
//           </div>
//         </div>
//       )}

//       <button onClick={() => navigate(-1)} className="flex items-center gap-2 bg-white text-[#00a386] px-4 py-2 rounded-full font-bold shadow-sm mb-8 border border-slate-50"><ArrowLeft size={18} /> Back</button>

//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
//         <div className="flex-1 space-y-8">
//           <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-50">
//              <img src={currentService.img} alt={title} className="w-full h-80 object-cover" />
//              <div className="p-8 space-y-6">
//                 <h1 className="text-4xl font-black text-slate-900">{title}</h1>
//                 <div className="bg-[#f1fcfb] p-6 rounded-2xl border border-teal-50">
//                    <h3 className="flex items-center gap-2 text-[#137d6e] font-black uppercase text-xs tracking-widest mb-2"><FileText size={14}/> About This Service</h3>
//                    <p className="text-slate-500 text-sm font-medium">{currentService.about}</p>
//                 </div>
//                 <div className="flex items-center gap-2 bg-teal-50 text-[#00a386] w-fit px-6 py-3 rounded-full font-black"><IndianRupee size={20}/> {currentService.price}</div>
//              </div>
//           </div>

//           <div className="bg-white rounded-[2rem] p-8 shadow-xl space-y-10 border border-slate-50">
//              <div className="space-y-6">
//                 <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest flex items-center gap-2"><ShieldCheck size={16}/> Your Details</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <input type="text" placeholder="Full Name *" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
//                     <input type="number" placeholder="Mobile (10 digits) *" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, mobile: e.target.value})} />
//                     <input type="number" placeholder="Age *" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, age: e.target.value})} />
//                     <select className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none appearance-none" onChange={(e) => setFormData({...formData, gender: e.target.value})}>
//                       <option>Select Gender *</option><option>Male</option><option>Female</option>
//                     </select>
//                 </div>
//                 <input type="email" placeholder="Email" className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, email: e.target.value})} />
//              </div>

//              <div className="space-y-4 pt-6 border-t border-slate-50">
//                 <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest flex items-center gap-2"><Calendar size={16}/> Select Date *</h3>
//                 <input 
//                   type="date" 
//                   className={`w-full max-w-xs border rounded-full py-4 px-6 text-sm outline-none cursor-pointer font-bold ${selectedDate ? "bg-[#00a386] text-white border-transparent" : "bg-[#f1fcfb] border-green-100 text-slate-600"}`}
//                   min={new Date().toISOString().split("T")[0]} 
//                   onChange={(e) => setSelectedDate(e.target.value)} 
//                 />
//              </div>

//              <div className="space-y-4 pt-6 border-t border-slate-50">
//                 <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest flex items-center gap-2"><Clock size={16}/> Select Time *</h3>
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//                    {["09:00 AM", "10:30 AM", "11:00 AM", "01:30 PM", "04:00 PM", "06:30 PM"].map((time) => (
//                      <button key={time} onClick={() => setSelectedTime(time)} className={`py-3 px-4 rounded-full text-xs font-bold transition-all border ${selectedTime === time ? "bg-teal-50 border-[#00a386] text-[#00a386] shadow-sm" : "bg-white border-slate-100 text-slate-400"}`}>{time}</button>
//                    ))}
//                 </div>
//              </div>
//           </div>
//         </div>

//         <div className="lg:w-96">
//            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-50 space-y-6 sticky top-32">
//               <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest">Booking Summary</h3>
//               <div className="space-y-3">
//                  <SummaryRow label="Date" value={selectedDate || "Not selected"} color={selectedDate ? "text-slate-700" : "text-rose-400"} />
//                  <SummaryRow label="Time" value={selectedTime || "Not selected"} color={selectedTime ? "text-slate-700" : "text-rose-400"} />
//                  <SummaryRow label="Price" value={`₹${currentService.price}`} color="text-[#137d6e]" />
//               </div>
//               <button 
//                 onClick={handleBookingAttempt}
//                 className="w-full py-5 rounded-full font-black flex items-center justify-center gap-3 transition-all bg-[#00a386] text-white shadow-xl hover:bg-[#008f75]"
//               >
//                  <Send size={18} /> Confirm Booking
//               </button>
//            </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const SummaryRow = ({ label, value, color = "text-slate-500" }) => (
//   <div className="flex justify-between text-sm font-bold">
//     <span className="text-[#00a386]">{label}:</span>
//     <span className={color}>{value}</span>
//   </div>
// );

// export default ServiceBooking;
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, FileText, IndianRupee, Clock, 
  ShieldCheck, Send, Calendar, X, LockKeyhole, AlertCircle, CheckCircle 
} from "lucide-react";
import { useAuth, useUser } from "@clerk/clerk-react";

const ServiceBooking = () => {
  const { serviceName } = useParams();
  const navigate = useNavigate();
  
  const { isSignedIn } = useAuth();
  const { user } = useUser(); 

  const [formData, setFormData] = useState({ fullName: "", mobile: "", age: "", gender: "", email: "" });
  const [paymentMethod, setPaymentMethod] = useState("Online");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); 
  const [errorModal, setErrorModal] = useState({ show: false, message: "" });

  const serviceData = {
    "heart-rating": { img: "/images/heart.webp", price: 599, about: "Advanced ECG monitoring." },
    "general-consultation": { img: "/images/gn.webp", price: 499, about: "Expert medical advice." },
    "blood-sugar-test": { img: "/images/bloodsugar.jpg", price: 299, about: "Glucose monitoring." },
    "lab-analysis": { img: "/images/lab.webp", price: 899, about: "State-of-the-art pathology." }
  };

  const currentService = serviceData[serviceName] || { img: "/images/shipchain-placeholder.jpg", price: 599, about: "Specialized service." };
  const title = serviceName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const handleBookingAttempt = async () => {
    const { fullName, mobile } = formData;

    if (!/^[a-zA-Z\s]+$/.test(fullName)) { setErrorModal({ show: true, message: "Please enter a valid Name." }); return; }
    if (!/^\d{10}$/.test(mobile)) { setErrorModal({ show: true, message: "Mobile Number must be 10 digits." }); return; }
    if (!selectedDate || !selectedTime) { setErrorModal({ show: true, message: "Please select both Date and Time." }); return; }
    if (!isSignedIn) { setShowLoginPopup(true); return; }

    try {
      // 1. Create Razorpay Order
      const orderRes = await fetch("http://localhost:4000/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: currentService.price }),
      });
      const order = await orderRes.json();

      // 2. Configure Razorpay Options
      const options = {
        key: "rzp_test_eWbSbu5AuEM5Ey", 
        amount: order.amount,
        currency: "INR",
        name: "Medicare+",
        description: `Lab Test: ${title}`,
        order_id: order.id,
        handler: async (response) => {
          // 3. Verify Payment Signature
          const verifyRes = await fetch("http://localhost:4000/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const verifyData = await verifyRes.json();

          if (verifyData.status === "success") {
            // 4. Save to Database only if verified
            const saveRes = await fetch("http://localhost:4000/api/services/book", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                userId: user.id,
                serviceName: title, 
                patientName: formData.fullName,
                patientAge: formData.age,
                patientMobile: formData.mobile,
                appointmentDate: selectedDate,
                appointmentTime: selectedTime,
                paymentId: response.razorpay_payment_id // Tracking info
              }),
            });

            if (saveRes.ok) setShowSuccess(true);
          }
        },
        prefill: { name: formData.fullName, email: user.primaryEmailAddress?.emailAddress, contact: formData.mobile },
        theme: { color: "#00a386" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      setErrorModal({ show: true, message: "Payment initialization failed." });
    }
  };

  return (
    <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-24 relative">
      
      {showSuccess && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>
          <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl relative z-10 text-center space-y-6">
            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto text-[#00a386]">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-xl font-black text-slate-900">Booking Confirmed!</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Your payment was successful and your service has been scheduled. View details in Appointments.</p>
            <button 
              onClick={() => navigate("/appointments")} 
              className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm shadow-md"
            >
              Go to Appointments
            </button>
          </div>
        </div>
      )}

      {showLoginPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setShowLoginPopup(false)}></div>
          <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl relative z-10 text-center space-y-6">
            <button onClick={() => setShowLoginPopup(false)} className="absolute top-6 right-6 text-slate-400 hover:text-rose-500"><X size={24} /></button>
            <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-500"><LockKeyhole size={40} /></div>
            <h2 className="text-2xl font-black text-slate-900">Authentication Required</h2>
            <button onClick={() => { setShowLoginPopup(false); navigate("/"); }} className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm">LOGIN NOW 🔑</button>
          </div>
        </div>
      )}

      {errorModal.show && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setErrorModal({ show: false, message: "" })}></div>
          <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl relative z-10 text-center space-y-6">
            <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-500"><AlertCircle size={32} /></div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-slate-900">Information Required</h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">{errorModal.message}</p>
            </div>
            <button onClick={() => setErrorModal({ show: false, message: "" })} className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm shadow-md">OK</button>
          </div>
        </div>
      )}

      <button onClick={() => navigate(-1)} className="flex items-center gap-2 bg-white text-[#00a386] px-4 py-2 rounded-full font-bold shadow-sm mb-8 border border-slate-50"><ArrowLeft size={18} /> Back</button>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-8">
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-50">
             <img src={currentService.img} alt={title} className="w-full h-80 object-cover" />
             <div className="p-8 space-y-6">
                <h1 className="text-4xl font-black text-slate-900">{title}</h1>
                <div className="bg-[#f1fcfb] p-6 rounded-2xl border border-teal-50">
                   <h3 className="flex items-center gap-2 text-[#137d6e] font-black uppercase text-xs tracking-widest mb-2"><FileText size={14}/> About This Service</h3>
                   <p className="text-slate-500 text-sm font-medium">{currentService.about}</p>
                </div>
                <div className="flex items-center gap-2 bg-teal-50 text-[#00a386] w-fit px-6 py-3 rounded-full font-black"><IndianRupee size={20}/> {currentService.price}</div>
             </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-xl space-y-10 border border-slate-50">
             <div className="space-y-6">
                <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest flex items-center gap-2"><ShieldCheck size={16}/> Your Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name *" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
                    <input type="number" placeholder="Mobile (10 digits) *" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, mobile: e.target.value})} />
                    <input type="number" placeholder="Age *" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, age: e.target.value})} />
                    <select className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none appearance-none" onChange={(e) => setFormData({...formData, gender: e.target.value})}>
                      <option>Select Gender *</option><option>Male</option><option>Female</option>
                    </select>
                </div>
                <input type="email" placeholder="Email" className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, email: e.target.value})} />
             </div>

             <div className="space-y-4 pt-6 border-t border-slate-50">
                <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest flex items-center gap-2"><Calendar size={16}/> Select Date *</h3>
                <input 
                  type="date" 
                  className={`w-full max-w-xs border rounded-full py-4 px-6 text-sm outline-none cursor-pointer font-bold ${selectedDate ? "bg-[#00a386] text-white border-transparent" : "bg-[#f1fcfb] border-green-100 text-slate-600"}`}
                  min={new Date().toISOString().split("T")[0]} 
                  onChange={(e) => setSelectedDate(e.target.value)} 
                />
             </div>

             <div className="space-y-4 pt-6 border-t border-slate-50">
                <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest flex items-center gap-2"><Clock size={16}/> Select Time *</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                   {["09:00 AM", "10:30 AM", "11:00 AM", "01:30 PM", "04:00 PM", "06:30 PM"].map((time) => (
                     <button key={time} onClick={() => setSelectedTime(time)} className={`py-3 px-4 rounded-full text-xs font-bold transition-all border ${selectedTime === time ? "bg-teal-50 border-[#00a386] text-[#00a386] shadow-sm" : "bg-white border-slate-100 text-slate-400"}`}>{time}</button>
                   ))}
                </div>
             </div>
          </div>
        </div>

        <div className="lg:w-96">
           <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-50 space-y-6 sticky top-32">
              <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest">Booking Summary</h3>
              <div className="space-y-3">
                 <SummaryRow label="Date" value={selectedDate || "Not selected"} color={selectedDate ? "text-slate-700" : "text-rose-400"} />
                 <SummaryRow label="Time" value={selectedTime || "Not selected"} color={selectedTime ? "text-slate-700" : "text-rose-400"} />
                 <SummaryRow label="Price" value={`₹${currentService.price}`} color="text-[#137d6e]" />
              </div>
              <button 
                onClick={handleBookingAttempt}
                className="w-full py-5 rounded-full font-black flex items-center justify-center gap-3 transition-all bg-[#00a386] text-white shadow-xl hover:bg-[#008f75]"
              >
                 <Send size={18} /> Confirm Booking
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

const SummaryRow = ({ label, value, color = "text-slate-500" }) => (
  <div className="flex justify-between text-sm font-bold">
    <span className="text-[#00a386]">{label}:</span>
    <span className={color}>{value}</span>
  </div>
);

export default ServiceBooking;