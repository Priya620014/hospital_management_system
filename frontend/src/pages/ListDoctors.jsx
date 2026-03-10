// // import React, { useState, useEffect } from "react";
// // import { Search, Trash2, Star, Users, IndianRupee } from "lucide-react";

// // const ListDoctors = () => {
// //   const [doctors, setDoctors] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [filter, setFilter] = useState("Available");

// //   const fetchDoctors = async () => {
// //     const res = await fetch("http://localhost:4000/api/admin/doctors-list");
// //     const data = await res.json();
// //     setDoctors(data);
// //   };

// //   useEffect(() => { fetchDoctors(); }, []);

// //   const handleDelete = async (id) => {
// //     if (window.confirm("Are you sure you want to remove this doctor?")) {
// //       const res = await fetch(`http://localhost:4000/api/doctors/${id}`, { method: "DELETE" });
// //       if (res.ok) fetchDoctors();
// //     }
// //   };

// //   const filteredDoctors = doctors.filter(doc => 
// //     (doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
// //      doc.specialty.toLowerCase().includes(searchTerm.toLowerCase())) &&
// //     (doc.availability === filter)
// //   );

// //   return (
// //     <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-16">
// //       <div className="max-w-7xl mx-auto space-y-10">
        
// //         {/* SEARCH AND FILTER HEADER */}
// //         <div className="flex flex-col md:flex-row justify-between items-end gap-6">
// //           <div className="space-y-4 w-full md:w-auto">
// //             <div className="flex items-center gap-2 text-[#137d6e]">
// //               <Users size={24} />
// //               <h1 className="text-xl font-black uppercase">Find a Doctor</h1>
// //             </div>
// //             <div className="flex gap-2">
// //               {["Available", "On Leave"].map((status) => (
// //                 <button
// //                   key={status}
// //                   onClick={() => setFilter(status)}
// //                   className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
// //                     filter === status ? "bg-[#00a386] text-white" : "bg-white text-rose-400 border border-rose-100"
// //                   }`}
// //                 >
// //                   {status === "Available" ? "Available" : "Unavailable"}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-sm border border-teal-50 w-full md:w-[400px]">
// //             <Search className="text-teal-400 mr-3" size={18} />
// //             <input 
// //               type="text" 
// //               placeholder="Search doctors, specialization" 
// //               className="w-full outline-none text-sm bg-transparent"
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //             />
// //             {searchTerm && <button onClick={() => setSearchTerm("")} className="text-[#00a386] font-black text-xs ml-2">Clear</button>}
// //           </div>
// //         </div>

// //         {/* DOCTOR CARDS GRID */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //           {filteredDoctors.map((doc) => (
// //             <div key={doc._id} className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-teal-50 border border-slate-50 flex items-center gap-6 relative group transition-all hover:scale-[1.02]">
// //               <div className="relative">
// //                 <img 
// //                   src={doc.imageUrl || "/images/default-doc.jpg"} 
// //                   className="w-24 h-24 rounded-3xl object-cover shadow-md border-2 border-[#f1fcfb]" 
// //                   alt={doc.name} 
// //                 />
// //                 <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-lg text-[8px] font-black uppercase ${doc.availability === "Available" ? "bg-teal-50 text-teal-600" : "bg-rose-50 text-rose-600"}`}>
// //                   ● {doc.availability}
// //                 </div>
// //               </div>

// //               <div className="flex-1 space-y-3">
// //                 <div className="flex justify-between items-start">
// //                   <div>
// //                     <h2 className="text-lg font-black text-slate-800 capitalize">Dr {doc.name}</h2>
// //                     <p className="text-xs font-bold text-slate-400">{doc.specialty} • {doc.experience} years</p>
// //                   </div>
// //                   <div className="flex items-center gap-1 text-amber-400">
// //                     <Star size={14} fill="currentColor" />
// //                     <span className="text-xs font-black text-slate-800">{doc.rating || "5.0"}</span>
// //                   </div>
// //                 </div>

// //                 <div className="flex items-center justify-between pt-2 border-t border-slate-50">
// //                    <div className="flex items-center gap-4">
// //                       <div className="text-center">
// //                         <p className="text-[9px] font-black text-slate-300 uppercase leading-none">Patients</p>
// //                         <p className="text-sm font-black text-[#00a386] mt-1">{doc.patients || "100"}+</p>
// //                       </div>
// //                       <div className="text-center">
// //                         <p className="text-[9px] font-black text-slate-300 uppercase leading-none">Fees</p>
// //                         <div className="flex items-center gap-1 text-sm font-black text-slate-800 mt-1">
// //                           <IndianRupee size={12} /> {doc.fees || "1000"}
// //                         </div>
// //                       </div>
// //                    </div>

// //                    <button 
// //                     onClick={() => handleDelete(doc._id)}
// //                     className="flex items-center gap-2 text-rose-400 hover:text-rose-600 font-bold text-xs transition-colors"
// //                    >
// //                      <Trash2 size={16} /> Delete
// //                    </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {filteredDoctors.length === 0 && (
// //           <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-teal-200">
// //             <p className="text-slate-400 font-bold">No doctors found matching your criteria.</p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ListDoctors;
// import React, { useState, useEffect } from "react";
// import { Search, Trash2, Star, Users, IndianRupee, Loader2 } from "lucide-react";

// const ListDoctors = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filter, setFilter] = useState("Available");

//   // --- DATABASE FETCH LOGIC ---
//   // frontend/src/pages/ListDoctors.jsx
// useEffect(() => {
// const fetchDoctors = async () => {
//   setLoading(true);
//   try {
//     const res = await fetch("http://localhost:4000/api/admin/doctors-list");
//     const data = await res.json();
//     console.log("Fetched Doctors Data:", data);
//     setDoctors(data);
//   } catch (err) {
//     console.error("Fetch Error:", err);
//   } finally {
//     // THIS IS THE CRITICAL LINE
//     setLoading(false); 
//   }
// };
//   fetchDoctors();
// }, []);

//   // --- DELETE LOGIC ---
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to remove this doctor from the database?")) {
//       try {
//         const res = await fetch(`http://localhost:4000/api/doctors/${id}`, { method: "DELETE" });
//         if (res.ok) fetchDoctors(); // Refresh list after deletion
//       } catch (err) {
//         alert("Delete failed. Check server connection.");
//       }
//     }
//   };

//   // --- FILTERING LOGIC ---
//  const filteredDoctors = Array.isArray(doctors) ? doctors.filter(doc => 
//   (doc.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
//    doc.specialty?.toLowerCase().includes(searchTerm.toLowerCase())) &&
//   (doc.availability === filter)
// ) : [];

//   if (loading) return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f1fcfb]">
//       <Loader2 className="animate-spin text-[#00a386]" size={40} />
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-16">
//       <div className="max-w-7xl mx-auto space-y-10">
        
//         {/* HEADER & FILTERS */}
//         <div className="flex flex-col md:flex-row justify-between items-end gap-6">
//           <div className="space-y-4 w-full md:w-auto">
//             <div className="flex items-center gap-2 text-[#137d6e]">
//               <Users size={24} />
//               <h1 className="text-xl font-black uppercase">Find a Doctor</h1>
//             </div>
//             <div className="flex gap-2">
//               {["Available", "On Leave"].map((status) => (
//                 <button
//                   key={status}
//                   onClick={() => setFilter(status)}
//                   className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
//                     filter === status ? "bg-[#00a386] text-white" : "bg-white text-rose-400 border border-rose-100"
//                   }`}
//                 >
//                   {status === "Available" ? "Available" : "Unavailable"}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-sm border border-teal-50 w-full md:w-[400px]">
//             <Search className="text-teal-400 mr-3" size={18} />
//             <input 
//               type="text" 
//               placeholder="Search doctors, specialization" 
//               className="w-full outline-none text-sm bg-transparent"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* DOCTOR CARDS GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {filteredDoctors.map((doc) => (
//             <div key={doc._id} className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-teal-50 border border-slate-50 flex items-center gap-6 transition-all hover:scale-[1.02]">
//               <div className="relative">
//                 <img 
//                   src={doc.imageUrl || "/images/default-doc.jpg"} 
//                   className="w-24 h-24 rounded-3xl object-cover shadow-md border-2 border-[#f1fcfb]" 
//                   alt={doc.name} 
//                 />
//               </div>

//               <div className="flex-1 space-y-3">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h2 className="text-lg font-black text-slate-800 capitalize">Dr {doc.name}</h2>
//                     <p className="text-xs font-bold text-slate-400">{doc.specialty} • {doc.experience} years exp.</p>
//                   </div>
//                   <div className="flex items-center gap-1 text-amber-400">
//                     <Star size={14} fill="currentColor" />
//                     <span className="text-xs font-black text-slate-800">{doc.rating || "5.0"}</span>
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between pt-2 border-t border-slate-50">
//                    <div className="flex items-center gap-4">
//                       <div className="text-center">
//                         <p className="text-[9px] font-black text-slate-300 uppercase leading-none">Patients</p>
//                         <p className="text-sm font-black text-[#00a386] mt-1">{doc.patients || "0"}+</p>
//                       </div>
//                       <div className="text-center">
//                         <p className="text-[9px] font-black text-slate-300 uppercase leading-none">Fees</p>
//                         <div className="flex items-center gap-1 text-sm font-black text-slate-800 mt-1">
//                           <IndianRupee size={12} /> {doc.fees || "1000"}
//                         </div>
//                       </div>
//                    </div>

//                    <button 
//                     onClick={() => handleDelete(doc._id)}
//                     className="flex items-center gap-2 text-rose-400 hover:text-rose-600 font-bold text-xs"
//                    >
//                      <Trash2 size={16} /> Delete
//                    </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListDoctors;
import React, { useState, useEffect } from "react";
import { Search, Trash2, Star, Users, IndianRupee } from "lucide-react";

const ListDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true); // Initial state is true
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("Available");

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:4000/api/admin/doctors-list");
      const data = await res.json();
      
      console.log("Fetched Doctors Data:", data); // Successfully appearing in your console
      setDoctors(data);
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      // THIS MUST RUN TO REMOVE THE SPINNER
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  // Ensure 'doctors' is an array before filtering to prevent blank screens
 // Inside your ListDoctors component
const filteredDoctors = Array.isArray(doctors) ? doctors.filter((doc) => {
  // 1. Check if name or specialty matches search term
  const matchesSearch = 
    doc.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    doc.specialty?.toLowerCase().includes(searchTerm.toLowerCase());

  // 2. FIX: Handle missing or mismatched availability data
  // We normalize the status. If 'availability' is missing, we default to "Available"
  const docStatus = doc.availability || "Available"; 
  
  // Ensure the comparison matches your filter state exactly
  const matchesFilter = docStatus.toLowerCase() === filter.toLowerCase();

  return matchesSearch && matchesFilter;
}) : [];

  // If loading is true, only the spinner shows. If loading becomes false but 
  // filteredDoctors is empty, the page looks blank.
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f1fcfb]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#00a386]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4">
            <h1 className="text-xl font-black uppercase text-[#137d6e]">Find a Doctor</h1>
            <div className="flex gap-2">
              <button 
                onClick={() => setFilter("Available")}
                className={`px-6 py-2 rounded-full text-xs font-bold ${filter === "Available" ? "bg-[#00a386] text-white" : "bg-white text-teal-600 border border-teal-100"}`}
              >
                Available
              </button>
              <button 
                onClick={() => setFilter("On Leave")}
                className={`px-6 py-2 rounded-full text-xs font-bold ${filter === "On Leave" ? "bg-rose-500 text-white" : "bg-white text-rose-400 border border-rose-100"}`}
              >
                Unavailable
              </button>
            </div>
          </div>

          <div className="flex items-center bg-white rounded-full px-6 py-3 border border-teal-50 w-full md:w-[400px]">
            <Search className="text-teal-400 mr-3" size={18} />
            <input 
              type="text" 
              placeholder="Search doctors, specialization" 
              className="outline-none text-sm w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* CARDS SECTION */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredDoctors.map((doc) => (
              <div key={doc._id} className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-teal-50 border border-slate-50 flex items-center gap-6">
                <img 
                  src={doc.imageUrl || "/images/default-doc.jpg"} 
                  className="w-24 h-24 rounded-3xl object-cover border-2 border-[#f1fcfb]" 
                  alt="" 
                />
                <div className="flex-1">
                  <h2 className="text-lg font-black text-slate-800">Dr {doc.name}</h2>
                  <p className="text-xs font-bold text-slate-400">{doc.specialty} • {doc.experience} years</p>
                  <div className="flex items-center justify-between mt-4 pt-2 border-t border-slate-50">
                    <div className="flex items-center gap-1 font-black text-slate-800">
                      <IndianRupee size={14} /> {doc.fees || 1000}
                    </div>
                    <button className="text-rose-400 hover:text-rose-600 font-bold text-xs flex items-center gap-1">
                      <Trash2 size={14} /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-20 rounded-[3rem] text-center border border-dashed border-teal-200">
            <p className="text-slate-400 font-bold italic">No doctors found in the "{filter}" category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListDoctors;