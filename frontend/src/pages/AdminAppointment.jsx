
// // import React, { useState, useEffect } from "react";
// // import { Calendar, Clock, Phone, Search, IndianRupee, X, AlertTriangle, CheckCircle } from "lucide-react";

// // const AdminAppointments = () => {
// //   const [appointments, setAppointments] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [filterDate, setFilterDate] = useState("");
  
// //   // Modal State: Stores whether to show and which ID to target
// //   const [cancelModal, setCancelModal] = useState({ show: false, id: null });

// //   const fetchAllAppointments = async () => {
// //     try {
// //       const res = await fetch("http://localhost:4000/api/admin/all-appointments");
// //       const data = await res.json();
// //       setAppointments(data);
// //     } catch (err) { console.error("Fetch error:", err); }
// //   };

// //   useEffect(() => { fetchAllAppointments(); }, []);

// //   // Backend Logic: Updates status to "Cancelled"
// //   const confirmCancellation = async () => {
// //     try {
// //       const res = await fetch(`http://localhost:4000/api/appointments/${cancelModal.id}`, {
// //         method: "PUT",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ status: "Cancelled" }),
// //       });
// //       if (res.ok) {
// //         setCancelModal({ show: false, id: null });
// //         fetchAllAppointments(); // Refresh the grid
// //       }
// //     } catch (err) { console.error("Cancellation failed:", err); }
// //   };

// //   const filteredApts = appointments.filter(apt => 
// //   // 1. Only show appointments that are NOT cancelled
// //   apt.status !== "Cancelled" && apt.status !== "CANCELED" &&
  
// //   // 2. Keep your existing search and date filters
// //   (apt.patientName?.toLowerCase().includes(searchTerm.toLowerCase()) || 
// //    apt.doctorName?.toLowerCase().includes(searchTerm.toLowerCase())) &&
// //   (filterDate === "" || apt.appointmentDate === filterDate)
// // );

// //   return (
// //     <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-12 relative">
      
// //       {/* MODERN WHITE POPUP (MODAL) */}
// //       {cancelModal.show && (
// //         <div className="fixed inset-0 z-[1000] flex items-center justify-center px-6">
// //           {/* Backdrop */}
// //           <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm transition-opacity" onClick={() => setCancelModal({ show: false, id: null })}></div>
          
// //           {/* Modal Card */}
// //           <div className="bg-white w-full max-w-sm rounded-[3rem] p-10 shadow-2xl relative z-10 text-center space-y-6 border border-slate-50 animate-in zoom-in duration-300">
// //             <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-500 mb-2">
// //               <AlertTriangle size={42} />
// //             </div>
            
// //             <div className="space-y-2">
// //               <h3 className="text-2xl font-black text-slate-900 leading-tight">Cancel Appointment?</h3>
// //               <p className="text-slate-400 font-bold text-sm leading-relaxed px-4">
// //                 This action cannot be undone. The patient will be notified.
// //               </p>
// //             </div>

// //             <div className="flex flex-col gap-3 pt-4">
// //               <button 
// //                 onClick={confirmCancellation}
// //                 className="w-full bg-rose-500 text-white py-4 rounded-full font-black text-sm shadow-xl shadow-rose-100 hover:bg-rose-600 transition-all active:scale-95"
// //               >
// //                 CONFIRM CANCELLATION
// //               </button>
// //               <button 
// //                 onClick={() => setCancelModal({ show: false, id: null })}
// //                 className="w-full bg-white text-slate-400 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:text-slate-600 transition-colors"
// //               >
// //                 Go Back
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       <div className="max-w-7xl mx-auto space-y-10">
// //         {/* HEADER & FILTERS */}
// //         <div className="flex flex-col md:flex-row justify-between items-center gap-6">
// //           <div className="text-left w-full">
// //             <h1 className="text-3xl font-black text-[#137d6e] uppercase tracking-tight">Appointments</h1>
// //             <p className="text-slate-400 font-bold italic text-xs">Manage and search upcoming patient appointments</p>
// //           </div>

// //           <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
// //             <input 
// //               type="date" 
// //               className="bg-white border border-teal-100 rounded-full px-5 py-2 text-xs font-black text-slate-500 outline-none shadow-sm shadow-teal-50"
// //               onChange={(e) => setFilterDate(e.target.value)}
// //             />
// //             <div className="relative flex-1 md:w-72">
// //               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-400" size={16} />
// //               <input 
// //                 type="text" 
// //                 placeholder="Search..." 
// //                 className="w-full bg-white border border-teal-100 rounded-full py-2.5 pl-12 pr-4 text-xs font-bold outline-none shadow-sm shadow-teal-50"
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         {/* APPOINTMENTS GRID */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //           {filteredApts.map((apt) => (
// //             <div key={apt._id} className="bg-white rounded-[2.5rem] p-7 shadow-xl shadow-teal-50/60 border border-slate-50 flex flex-col justify-between space-y-5">
              
// //               {/* Patient Info */}
// //               <div className="space-y-1">
// //                 <div className="flex justify-between items-start">
// //                   <h3 className="text-xl font-black text-slate-800 capitalize leading-tight">{apt.patientName}</h3>
// //                   <span className="text-[9px] font-black text-teal-500 bg-teal-50 px-2 py-1 rounded-lg border border-teal-100/50">
// //                     {apt.patientGender || "N/A"}
// //                   </span>
// //                 </div>
// //                 <div className="flex items-center gap-3 text-[11px] font-black text-slate-300">
// //                   <span>{apt.patientAge || "24"} yrs</span>
// //                   <span className="h-3 w-[1px] bg-slate-100"></span>
// //                   <span className="flex items-center gap-1"><Phone size={10} className="text-teal-300"/> {apt.patientMobile}</span>
// //                 </div>
// //               </div>

// //               {/* Detail Box */}
// //               <div className="bg-[#f1fcfb]/60 p-5 rounded-[1.8rem] space-y-1 border border-teal-50/50">
// //                 <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Fees</p>
// //                 <p className="text-2xl font-black text-[#00a386] flex items-center gap-1">
// //                   <IndianRupee size={18} strokeWidth={3} /> {apt.fees || 1000}
// //                 </p>
// //                 <p className="text-xs font-black text-slate-700 capitalize pt-1 italic">
// //                   {apt.doctorName} <span className="text-slate-400 font-bold ml-1">:{apt.specialty || "General"}</span>
// //                 </p>
// //               </div>

// //               {/* Status and Action */}
// //               <div className="flex items-center justify-between pt-1">
// //                 <span className={`text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-wider border ${
// //                   apt.status === "Cancelled" || apt.status === "CANCELED"
// //                     ? "bg-rose-50 text-rose-500 border-rose-100" 
// //                     : "bg-teal-50 text-teal-600 border-teal-100"
// //                 }`}>
// //                   {apt.status || "PENDING"}
// //                 </span>
                
// //                 {/* BUTTON TRIGGERS MODAL */}
// //                 <button 
// //                   onClick={() => setCancelModal({ show: true, id: apt._id })}
// //                   className="text-[10px] font-black text-rose-300 hover:text-rose-600 uppercase tracking-tighter"
// //                 >
// //                   Admin Cancel
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminAppointments;
//   import React, { useState, useEffect } from "react";
//   import { Calendar, Clock, Phone, Search, IndianRupee, X, AlertTriangle, CheckCircle } from "lucide-react";

//   const AdminAppointments = () => {
//     const [appointments, setAppointments] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [filterDate, setFilterDate] = useState("");
//     const [viewStatus, setViewStatus] = useState("Confirmed");
    
//     // Modal State: Stores whether to show and which ID to target
//     const [cancelModal, setCancelModal] = useState({ show: false, id: null });

//     const fetchAllAppointments = async () => {
//       try {
//         const res = await fetch("http://localhost:4000/api/admin/all-appointments");
//         const data = await res.json();
//         setAppointments(data);
//       } catch (err) { console.error("Fetch error:", err); }
//     };

//     useEffect(() => { fetchAllAppointments(); }, []);

//     // NEW: Logic to mark appointment as Completed
//     const handleComplete = async (id) => {
//       try {
//         const res = await fetch(`http://localhost:4000/api/appointments/${id}`, {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ status: "Completed" }),
//         });
//         if (res.ok) {
//           fetchAllAppointments(); // Refresh the grid
//         }
//       } catch (err) { console.error("Update failed:", err); }
//     };

//     // Backend Logic: Updates status to "Cancelled"
//     const confirmCancellation = async () => {
//       try {
//         const res = await fetch(`http://localhost:4000/api/appointments/${cancelModal.id}`, {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ status: "Cancelled" }),
//         });
//         if (res.ok) {
//           setCancelModal({ show: false, id: null });
//           fetchAllAppointments(); // Refresh the grid
//         }
//       } catch (err) { console.error("Cancellation failed:", err); }
//     };

//   const filteredApts = appointments.filter(apt => {
//     const matchesStatus = apt.status === viewStatus;
//     const matchesSearch = apt.patientName?.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesDate = filterDate === "" || apt.appointmentDate === filterDate;
    
//     return matchesStatus && matchesSearch && matchesDate;
//   });

//     return (
//       <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-12 relative">
        
//         {/* MODERN WHITE POPUP (MODAL) */}
//         {cancelModal.show && (
//           <div className="fixed inset-0 z-[1000] flex items-center justify-center px-6">
//             {/* Backdrop */}
//             <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm transition-opacity" onClick={() => setCancelModal({ show: false, id: null })}></div>
            
//             {/* Modal Card */}
//             <div className="bg-white w-full max-w-sm rounded-[3rem] p-10 shadow-2xl relative z-10 text-center space-y-6 border border-slate-50 animate-in zoom-in duration-300">
//               <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-500 mb-2">
//                 <AlertTriangle size={42} />
//               </div>
              
//               <div className="space-y-2">
//                 <h3 className="text-2xl font-black text-slate-900 leading-tight">Cancel Appointment?</h3>
//                 <p className="text-slate-400 font-bold text-sm leading-relaxed px-4">
//                   This action cannot be undone. The patient will be notified.
//                 </p>
//               </div>

//               <div className="flex flex-col gap-3 pt-4">
//                 <button 
//                   onClick={confirmCancellation}
//                   className="w-full bg-rose-500 text-white py-4 rounded-full font-black text-sm shadow-xl shadow-rose-100 hover:bg-rose-600 transition-all active:scale-95"
//                 >
//                   CONFIRM CANCELLATION
//                 </button>
//                 <button 
//                   onClick={() => setCancelModal({ show: false, id: null })}
//                   className="w-full bg-white text-slate-400 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:text-slate-600 transition-colors"
//                 >
//                   Go Back
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="max-w-7xl mx-auto space-y-10">
//           {/* HEADER & FILTERS */}
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//             <div className="text-left w-full">
//               <h1 className="text-3xl font-black text-[#137d6e] uppercase tracking-tight">Appointments</h1>
//               <p className="text-slate-400 font-bold italic text-xs">Manage and search upcoming patient appointments</p>
//             </div>

//             <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
//               <input 
//                 type="date" 
//                 className="bg-white border border-teal-100 rounded-full px-5 py-2 text-xs font-black text-slate-500 outline-none shadow-sm shadow-teal-50"
//                 onChange={(e) => setFilterDate(e.target.value)}
//               />
//               <div className="relative flex-1 md:w-72">
//                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-400" size={16} />
//                 <input 
//                   type="text" 
//                   placeholder="Search..." 
//                   className="w-full bg-white border border-teal-100 rounded-full py-2.5 pl-12 pr-4 text-xs font-bold outline-none shadow-sm shadow-teal-50"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* APPOINTMENTS GRID */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {filteredApts.map((apt) => (
//               <div key={apt._id} className="bg-white rounded-[2.5rem] p-7 shadow-xl shadow-teal-50/60 border border-slate-50 flex flex-col justify-between space-y-5">
                
//                 {/* Patient Info */}
//                 <div className="space-y-1">
//                   <div className="flex justify-between items-start">
//                     <h3 className="text-xl font-black text-slate-800 capitalize leading-tight">{apt.patientName}</h3>
//                     <span className="text-[9px] font-black text-teal-500 bg-teal-50 px-2 py-1 rounded-lg border border-teal-100/50">
//                       {apt.patientGender || "N/A"}
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-3 text-[11px] font-black text-slate-300">
//                     <span>{apt.patientAge || "24"} yrs</span>
//                     <span className="h-3 w-[1px] bg-slate-100"></span>
//                     <span className="flex items-center gap-1"><Phone size={10} className="text-teal-300"/> {apt.patientMobile}</span>
//                   </div>
//                 </div>

//                 {/* Detail Box */}
//                 <div className="bg-[#f1fcfb]/60 p-5 rounded-[1.8rem] space-y-1 border border-teal-50/50">
//                   <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Fees</p>
//                   <p className="text-2xl font-black text-[#00a386] flex items-center gap-1">
//                     <IndianRupee size={18} strokeWidth={3} /> {apt.fees || 1000}
//                   </p>
//                   <p className="text-xs font-black text-slate-700 capitalize pt-1 italic">
//                     {apt.doctorName} <span className="text-slate-400 font-bold ml-1">:{apt.specialty || "General"}</span>
//                   </p>
//                 </div>

//                 {/* Status and Action */}
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between pt-1">
//                     <span className={`text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-wider border ${
//                       apt.status === "Completed" 
//                         ? "bg-green-50 text-green-600 border-green-100" 
//                         : "bg-teal-50 text-teal-600 border-teal-100"
//                     }`}>
//                       {apt.status || "CONFIRMED"}
//                     </span>
                    
//                     {/* ADMIN CANCEL BUTTON (Hidden if already completed) */}
//                     {apt.status !== "Completed" && (
//                       <button 
//                         onClick={() => setCancelModal({ show: true, id: apt._id })}
//                         className="text-[10px] font-black text-rose-300 hover:text-rose-600 uppercase tracking-tighter"
//                       >
//                         Admin Cancel
//                       </button>
//                     )}
//                   </div>

//                   {/* MARK COMPLETED BUTTON */}
//                   {apt.status !== "Completed" && (
//                     <button 
//                       onClick={() => handleComplete(apt._id)}
//                       className="w-full flex items-center justify-center gap-2 bg-[#137d6e] text-white py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#0e5e53] transition-all shadow-lg shadow-teal-100"
//                     >
//                       <CheckCircle size={14} />
//                       Mark Completed
//                     </button>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   export default AdminAppointments;
import React, { useState, useEffect, useRef } from "react";
import { Phone, Search, IndianRupee, AlertTriangle, CheckCircle, Upload, FileText, Loader2 } from "lucide-react";

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [viewStatus, setViewStatus] = useState("Confirmed"); 
  const [cancelModal, setCancelModal] = useState({ show: false, id: null });
  const [uploadingId, setUploadingId] = useState(null);
  const fileInputRef = useRef({});

  const fetchAllAppointments = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/all-appointments`);
      const data = await res.json();
      setAppointments(data);
    } catch (err) { console.error("Fetch error:", err); }
  };

  useEffect(() => { fetchAllAppointments(); }, []);

  const handleComplete = async (id) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "Completed" }),
      });
      if (res.ok) fetchAllAppointments(); 
    } catch (err) { console.error("Update failed:", err); }
  };

  const handlePrescriptionUpload = async (id, file) => {
    if (!file) return;
    setUploadingId(id);
    try {
      const formData = new FormData();
      formData.append("prescription", file);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/appointments/${id}/prescription`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) fetchAllAppointments();
      else console.error("Upload failed");
    } catch (err) { console.error("Upload error:", err); }
    finally { setUploadingId(null); }
  };

  const confirmCancellation = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments/${cancelModal.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "Cancelled" }),
      });
      if (res.ok) {
        setCancelModal({ show: false, id: null });
        fetchAllAppointments(); 
      }
    } catch (err) { console.error("Cancellation failed:", err); }
  };

  const filteredApts = appointments.filter(apt => {
    // Logic to handle case-insensitivity or missing status
    const currentAptStatus = apt.status || "Confirmed";
    const isConfirmed = viewStatus === "Confirmed" && (currentAptStatus === "Confirmed" || currentAptStatus === "pending");
    const matchesStatus = isConfirmed || currentAptStatus === viewStatus;
    const matchesSearch = apt.patientName?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          apt.doctorName?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = filterDate === "" || apt.appointmentDate === filterDate;
    
    return matchesStatus && matchesSearch && matchesDate;
  });

  return (
    <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-12 relative">
      
      {/* MODERN WHITE POPUP (MODAL) */}
      {cancelModal.show && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm transition-opacity" onClick={() => setCancelModal({ show: false, id: null })}></div>
          <div className="bg-white w-full max-w-sm rounded-[3rem] p-10 shadow-2xl relative z-10 text-center space-y-6 border border-slate-50 animate-in zoom-in duration-300">
            <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-500 mb-2">
              <AlertTriangle size={42} />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-slate-900 leading-tight">Cancel Appointment?</h3>
              <p className="text-slate-400 font-bold text-sm leading-relaxed px-4">This action cannot be undone.</p>
            </div>
            <div className="flex flex-col gap-3 pt-4">
              <button onClick={confirmCancellation} className="w-full bg-rose-500 text-white py-4 rounded-full font-black text-sm shadow-xl hover:bg-rose-600 transition-all active:scale-95">CONFIRM CANCELLATION</button>
              <button onClick={() => setCancelModal({ show: false, id: null })} className="w-full bg-white text-slate-400 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:text-slate-600">Go Back</button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-10">
        {/* HEADER & FILTERS */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="text-left w-full">
            <h1 className="text-3xl font-black text-[#137d6e] uppercase tracking-tight">Appointments</h1>
            <p className="text-slate-400 font-bold italic text-xs mb-6">Manage and search upcoming patient appointments</p>
            
            {/* STATUS TABS */}
            <div className="flex gap-2 bg-white/50 p-1.5 rounded-2xl w-fit border border-teal-100/50">
              {["Confirmed", "Completed", "Cancelled"].map((status) => (
                <button
                  key={status}
                  onClick={() => setViewStatus(status)}
                  className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    viewStatus === status 
                      ? "bg-[#137d6e] text-white shadow-lg shadow-teal-100" 
                      : "text-slate-400 hover:text-[#137d6e]"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <input 
              type="date" 
              className="bg-white border border-teal-100 rounded-full px-5 py-2 text-xs font-black text-slate-500 outline-none shadow-sm shadow-teal-50"
              onChange={(e) => setFilterDate(e.target.value)}
            />
            <div className="relative flex-1 md:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-400" size={16} />
              <input 
                type="text" 
                placeholder="Search name or doctor..." 
                className="w-full bg-white border border-teal-100 rounded-full py-2.5 pl-12 pr-4 text-xs font-bold outline-none shadow-sm shadow-teal-50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* APPOINTMENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredApts.length > 0 ? filteredApts.map((apt) => (
            <div key={apt._id} className="bg-white rounded-[2.5rem] p-7 shadow-xl shadow-teal-50/60 border border-slate-50 flex flex-col justify-between space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-black text-slate-800 capitalize leading-tight">{apt.patientName}</h3>
                  <span className="text-[9px] font-black text-teal-500 bg-teal-50 px-2 py-1 rounded-lg border border-teal-100/50">
                    {apt.patientGender || "N/A"}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] font-black text-slate-300">
                  <span>{apt.patientAge || "N/A"} yrs</span>
                  <span className="h-3 w-[1px] bg-slate-100"></span>
                  <span className="flex items-center gap-1"><Phone size={10} className="text-teal-300"/> {apt.patientMobile}</span>
                </div>
              </div>

              <div className="bg-[#f1fcfb]/60 p-5 rounded-[1.8rem] space-y-1 border border-teal-50/50">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Fees</p>
                <p className="text-2xl font-black text-[#00a386] flex items-center gap-1">
                  <IndianRupee size={18} strokeWidth={3} /> {apt.fees || 1000}
                </p>
                <p className="text-xs font-black text-slate-700 capitalize pt-1 italic">
                  {apt.doctorName} <span className="text-slate-400 font-bold ml-1">:{apt.specialty || "General"}</span>
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between pt-1">
                  <span className={`text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-wider border ${
                    apt.status === "Completed" 
                      ? "bg-green-50 text-green-600 border-green-100" 
                      : apt.status === "Cancelled"
                      ? "bg-rose-50 text-rose-500 border-rose-100"
                      : "bg-teal-50 text-teal-600 border-teal-100"
                  }`}>
                    {apt.status || "CONFIRMED"}
                  </span>
                  
                  {viewStatus === "Confirmed" && (
                    <button 
                      onClick={() => setCancelModal({ show: true, id: apt._id })}
                      className="text-[10px] font-black text-rose-300 hover:text-rose-600 uppercase tracking-tighter transition-colors"
                    >
                      Admin Cancel
                    </button>
                  )}
                </div>

                {viewStatus === "Confirmed" && (
                  <button 
                    onClick={() => handleComplete(apt._id)}
                    className="w-full flex items-center justify-center gap-2 bg-[#137d6e] text-white py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#0e5e53] transition-all shadow-lg shadow-teal-100 active:scale-95"
                  >
                    <CheckCircle size={14} />
                    Mark Completed
                  </button>
                )}

                {viewStatus === "Completed" && (
                  <div className="space-y-2">
                    <input
                      type="file"
                      accept="application/pdf"
                      ref={el => fileInputRef.current[apt._id] = el}
                      className="hidden"
                      onChange={(e) => handlePrescriptionUpload(apt._id, e.target.files[0])}
                    />
                    {apt.prescriptionUrl ? (
                      <a
                        href={apt.prescriptionUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-green-50 text-green-700 border border-green-100 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-green-100 transition-all"
                      >
                        <FileText size={14} /> View Prescription
                      </a>
                    ) : null}
                    <button
                      onClick={() => fileInputRef.current[apt._id]?.click()}
                      disabled={uploadingId === apt._id}
                      className="w-full flex items-center justify-center gap-2 bg-teal-50 text-[#137d6e] border border-teal-100 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-teal-100 transition-all disabled:opacity-50"
                    >
                      {uploadingId === apt._id ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
                      {apt.prescriptionUrl ? "Replace Prescription" : "Upload Prescription"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )) : (
            <div className="col-span-full py-20 text-center">
               <p className="text-slate-300 font-black uppercase tracking-widest text-sm">No {viewStatus} Appointments Found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminAppointments;
