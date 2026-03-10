// import React, { useState, useEffect } from "react";
// import { Calendar, Clock, User, Phone, Search, Trash2, CheckCircle } from "lucide-react";

// const AdminAppointments = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterDate, setFilterDate] = useState("");

//   const fetchAllAppointments = async () => {
//     const res = await fetch("http://localhost:4000/api/admin/all-appointments");
//     const data = await res.json();
//     setAppointments(data);
//   };

//   useEffect(() => { fetchAllAppointments(); }, []);

//   // Filter logic for search and date
//   const filteredApts = appointments.filter(apt => 
//     (apt.patientName?.toLowerCase().includes(searchTerm.toLowerCase()) || 
//      apt.doctorName?.toLowerCase().includes(searchTerm.toLowerCase())) &&
//     (filterDate === "" || apt.appointmentDate === filterDate)
//   );

//   return (
//     <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-12">
//       <div className="max-w-7xl mx-auto space-y-10">
        
//         {/* HEADER & FILTERS */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//           <div className="text-left w-full">
//             <h1 className="text-3xl font-black text-[#137d6e] uppercase">Appointments</h1>
//             <p className="text-slate-500 font-medium italic text-sm">Manage and search upcoming patient appointments</p>
//           </div>

//           <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
//             <input 
//               type="date" 
//               className="bg-white border border-teal-100 rounded-full px-4 py-2 text-xs font-bold outline-none"
//               onChange={(e) => setFilterDate(e.target.value)}
//             />
//             <div className="relative flex-1 md:w-64">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-400" size={16} />
//               <input 
//                 type="text" 
//                 placeholder="Search doctor, patient..." 
//                 className="w-full bg-white border border-teal-100 rounded-full py-2 pl-10 pr-4 text-xs outline-none"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>

//         {/* APPOINTMENTS GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {filteredApts.map((apt) => (
//             <div key={apt._id} className="bg-white rounded-[2rem] p-6 shadow-xl shadow-teal-50/50 border border-slate-50 flex flex-col justify-between space-y-4 relative group">
              
//               {/* Patient Info Header */}
//               <div className="space-y-1">
//                 <div className="flex justify-between items-start">
//                   <h3 className="text-lg font-black text-slate-800 capitalize">{apt.patientName}</h3>
//                   <span className="text-[10px] font-bold text-teal-500 bg-teal-50 px-2 py-1 rounded-lg">
//                     {apt.patientGender || "N/A"}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
//                   <Phone size={12} /> {apt.patientMobile}
//                 </div>
//               </div>

//               {/* Doctor and Fee Info */}
//               <div className="bg-[#f1fcfb] p-4 rounded-2xl space-y-2">
//                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Fees</p>
//                 <p className="text-lg font-black text-[#00a386]">₹{apt.fees || 1000}</p>
//                 <p className="text-xs font-bold text-slate-600 capitalize">Dr. {apt.doctorName}</p>
//               </div>

//               {/* Date/Time Row */}
//               <div className="flex items-center justify-between text-[10px] font-black text-teal-600 bg-teal-50/50 p-2 rounded-xl">
//                 <span className="flex items-center gap-1"><Calendar size={12}/> {apt.appointmentDate}</span>
//                 <span className="flex items-center gap-1"><Clock size={12}/> {apt.appointmentTime}</span>
//               </div>

//               {/* Status and Actions */}
//               <div className="flex items-center justify-between pt-2">
//                 <span className={`text-[9px] font-black uppercase px-3 py-1 rounded-full ${
//                   apt.status === "Cancelled" ? "bg-rose-50 text-rose-500" : "bg-teal-50 text-teal-600"
//                 }`}>
//                   {apt.status || "Confirmed"}
//                 </span>
//                 <button className="text-[9px] font-black text-rose-400 hover:text-rose-600 uppercase tracking-tighter">
//                   Admin Cancel
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filteredApts.length === 0 && (
//           <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-teal-200 text-slate-400 font-bold">
//             No appointments found for the selected criteria.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminAppointments;
import React, { useState, useEffect } from "react";
import { Calendar, Clock, Phone, Search, IndianRupee } from "lucide-react";

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const fetchAllAppointments = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/admin/all-appointments");
      const data = await res.json();
      setAppointments(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => { fetchAllAppointments(); }, []);

  const filteredApts = appointments.filter(apt => 
    (apt.patientName?.toLowerCase().includes(searchTerm.toLowerCase()) || 
     apt.doctorName?.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterDate === "" || apt.appointmentDate === filterDate)
  );

  const handleAdminCancel = async (id) => {
    if (window.confirm("Are you sure you want to cancel this appointment as Admin?")) {
      // Logic for admin cancellation would go here
      console.log("Cancelling appointment:", id);
    }
  };

  return (
    <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* HEADER & FILTERS */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left w-full">
            <h1 className="text-3xl font-black text-[#137d6e] uppercase tracking-tight">Appointments</h1>
            <p className="text-slate-400 font-bold italic text-xs">Manage and search upcoming patient appointments</p>
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
                placeholder="Search doctor, patient, specialty..." 
                className="w-full bg-white border border-teal-100 rounded-full py-2.5 pl-12 pr-4 text-xs font-bold outline-none shadow-sm shadow-teal-50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* APPOINTMENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredApts.map((apt) => (
            <div key={apt._id} className="bg-white rounded-[2.5rem] p-7 shadow-xl shadow-teal-50/60 border border-slate-50 flex flex-col justify-between space-y-5 transition-transform hover:scale-[1.02]">
              
              {/* Patient Info Section */}
              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-black text-slate-800 capitalize leading-tight">{apt.patientName}</h3>
                  <span className="text-[9px] font-black text-teal-500 bg-teal-50 px-2 py-1 rounded-lg border border-teal-100/50">
                    {apt.patientGender || "N/A"}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] font-black text-slate-300">
                  <span>{apt.patientAge || "24"} yrs</span>
                  <span className="h-3 w-[1px] bg-slate-100"></span>
                  <span className="flex items-center gap-1"><Phone size={10} className="text-teal-300"/> {apt.patientMobile}</span>
                </div>
              </div>

              {/* Shaded Detail Box */}
              <div className="bg-[#f1fcfb]/60 p-5 rounded-[1.8rem] space-y-1 border border-teal-50/50">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Fees</p>
                <p className="text-2xl font-black text-[#00a386] flex items-center gap-1">
                  <IndianRupee size={18} strokeWidth={3} /> {apt.fees || 1000}
                </p>
                <p className="text-xs font-black text-slate-700 capitalize pt-1 italic">
                  {apt.doctorName} <span className="text-slate-400 font-bold ml-1">:{apt.specialty || "Brain"}</span>
                </p>
              </div>

              {/* Scheduling Details */}
              <div className="flex items-center justify-between text-[10px] font-black text-teal-600 bg-teal-50/30 p-3.5 rounded-2xl border border-teal-100/20">
                <span className="flex items-center gap-1.5"><Calendar size={13}/> {apt.appointmentDate}</span>
                <span className="flex items-center gap-1.5"><Clock size={13}/> {apt.appointmentTime}</span>
              </div>

              {/* Status and Action Row */}
              <div className="flex items-center justify-between pt-1">
                <span className={`text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-wider border ${
                  apt.status === "Cancelled" || apt.status === "CANCELED"
                    ? "bg-rose-50 text-rose-500 border-rose-100" 
                    : "bg-teal-50 text-teal-600 border-teal-100"
                }`}>
                  {apt.status || "PENDING"}
                </span>
                <button 
                  onClick={() => handleAdminCancel(apt._id)}
                  className="text-[10px] font-black text-rose-300 hover:text-rose-600 uppercase tracking-tighter transition-colors"
                >
                  Admin Cancel
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredApts.length === 0 && (
          <div className="text-center py-24 bg-white rounded-[3.5rem] border-2 border-dashed border-teal-50 text-slate-300 font-black uppercase tracking-widest">
            No Records Found
          </div>
        )}

        {/* Footer Link */}
        {filteredApts.length > 0 && (
          <div className="flex justify-center pt-10">
            <button className="bg-white text-slate-400 font-black text-[10px] uppercase px-10 py-3 rounded-full border border-slate-50 shadow-sm hover:text-teal-500 transition-colors">
              Show more ({filteredApts.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminAppointments;