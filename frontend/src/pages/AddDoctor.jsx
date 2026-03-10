// import React, { useState } from "react";
// import { UserPlus, Calendar, Plus, Trash2 } from "lucide-react";

// const AddDoctor = () => {
//   const [formData, setFormData] = useState({
//     name: "", specialty: "", location: "", experience: "",
//     qualifications: "", fees: "", rating: "5.0", patients: "0",
//     successRate: "", email: "", password: "", availability: "Available",
//     about: "", imageUrl: ""
//   });

//   const [slots, setSlots] = useState([]);
//   const [newSlot, setNewSlot] = useState({ date: "", hour: "09", min: "00", period: "AM" });
//   const [imageFile, setImageFile] = useState(null);

//   const addSlot = () => {
//     if (!newSlot.date) return alert("Please select a date");
//     setSlots([...slots, `${newSlot.date} ${newSlot.hour}:${newSlot.min} ${newSlot.period}`]);
//   };

//  const handleSubmit = async (e) => {
//   e.preventDefault();
//   const data = new FormData();

//   // Append text fields
//   Object.keys(formData).forEach((key) => data.append(key, formData[key]));
  
//   // Append the actual image file
//   if (imageFile) {
//     data.append("image", imageFile); 
//   }

//   const response = await fetch("http://localhost:4000/api/admin/add-doctor", {
//     method: "POST",
//     body: data, // Fetch automatically sets the correct headers for FormData
//   });

//   if (response.ok) alert("Doctor Added to Cloud!");
// };

//   return (
//     <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6">
//       <div className="max-w-4xl mx-auto">
//         <div className="flex items-center justify-center gap-3 mb-8 text-[#00a386]">
//           <UserPlus size={32} />
//           <h1 className="text-3xl font-black uppercase tracking-tight text-slate-800">Add New Doctor</h1>
//         </div>

//         <form onSubmit={handleSubmit} className="bg-white rounded-[3rem] p-12 shadow-xl shadow-teal-50 border border-slate-50 space-y-8">
//           {/* Image Upload Placeholder */}
//           <div className="space-y-2">
//             <label className="text-[10px] font-black uppercase text-slate-400 ml-4">Upload Profile Image</label>
//             <input type="file" className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-black file:bg-teal-50 file:text-[#00a386] hover:file:bg-teal-100" />
//           </div>

//           {/* Form Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <FormInput label="Full Name" placeholder="Dr. Name" value={formData.name} onChange={(v) => setFormData({...formData, name: v})} />
//             <FormInput label="Specialization" placeholder="e.g. Cardiology" value={formData.specialty} onChange={(v) => setFormData({...formData, specialty: v})} />
//             <FormInput label="Location" placeholder="City, State" value={formData.location} onChange={(v) => setFormData({...formData, location: v})} />
//             <FormInput label="Experience" placeholder="Years" value={formData.experience} onChange={(v) => setFormData({...formData, experience: v})} />
//             <FormInput label="Qualifications" placeholder="MBBS, MD" value={formData.qualifications} onChange={(v) => setFormData({...formData, qualifications: v})} />
//             <FormInput label="Consultation Fee" placeholder="INR" value={formData.fees} onChange={(v) => setFormData({...formData, fees: v})} />
//             <FormInput label="Rating (1.0 - 5.0)" value={formData.rating} onChange={(v) => setFormData({...formData, rating: v})} />
//             <FormInput label="Patients Served" value={formData.patients} onChange={(v) => setFormData({...formData, patients: v})} />
//             <FormInput label="Success Rate" placeholder="98%" value={formData.successRate} onChange={(v) => setFormData({...formData, successRate: v})} />
//             <FormInput label="Doctor Email" placeholder="email@hospital.com" value={formData.email} onChange={(v) => setFormData({...formData, email: v})} />
            
//             <div className="space-y-2">
//                <label className="text-[10px] font-black uppercase text-slate-400 ml-4">Status</label>
//                <select className="w-full bg-[#f1fcfb] border border-teal-100 rounded-full py-4 px-6 outline-none font-bold text-slate-700" value={formData.availability} onChange={(e) => setFormData({...formData, availability: e.target.value})}>
//                  <option>Available</option>
//                  <option>On Leave</option>
//                </select>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="text-[10px] font-black uppercase text-slate-400 ml-4">About Doctor</label>
//             <textarea rows="4" className="w-full bg-[#f1fcfb] border border-teal-100 rounded-[2rem] p-6 outline-none text-sm" placeholder="Professional background..." value={formData.about} onChange={(e) => setFormData({...formData, about: e.target.value})} />
//           </div>

//           {/* SCHEDULE SLOTS SECTION */}
//           <div className="bg-[#f1fcfb] p-8 rounded-[2.5rem] space-y-6">
//             <div className="flex items-center gap-2 text-[#00a386] font-black uppercase text-xs">
//               <Calendar size={18} /> Add Schedule Slots
//             </div>
//             <div className="flex flex-wrap gap-4">
//               <input type="date" className="bg-white border border-teal-100 rounded-full px-4 py-2 text-sm outline-none" onChange={(e) => setNewSlot({...newSlot, date: e.target.value})} />
//               <div className="flex items-center bg-white border border-teal-100 rounded-full px-4 gap-2">
//                 <select className="text-sm outline-none py-2" onChange={(e) => setNewSlot({...newSlot, hour: e.target.value})}><option>09</option><option>10</option><option>11</option></select>
//                 <span className="text-slate-300">:</span>
//                 <select className="text-sm outline-none py-2" onChange={(e) => setNewSlot({...newSlot, min: e.target.value})}><option>00</option><option>30</option></select>
//                 <select className="text-sm font-black text-[#00a386] outline-none py-2" onChange={(e) => setNewSlot({...newSlot, period: e.target.value})}><option>AM</option><option>PM</option></select>
//               </div>
//               <button type="button" onClick={addSlot} className="bg-[#00a386] text-white px-6 py-2 rounded-full font-black text-xs flex items-center gap-2"><Plus size={16}/> Add Slot</button>
//             </div>
            
//             <div className="flex flex-wrap gap-2 mt-4">
//               {slots.map((s, i) => (
//                 <div key={i} className="bg-white border border-teal-100 px-4 py-2 rounded-full text-[10px] font-bold text-slate-500 flex items-center gap-2">
//                   {s} <button type="button" onClick={() => setSlots(slots.filter((_, idx) => idx !== i))}><Trash2 size={12} className="text-rose-400"/></button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button type="submit" className="w-full bg-[#00a386] text-white py-5 rounded-full font-black uppercase tracking-widest shadow-xl shadow-teal-100 hover:bg-[#008f75] transition-all transform active:scale-95">
//             Add Doctor to Team
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const FormInput = ({ label, placeholder, value, onChange }) => (
//   <div className="space-y-2">
//     <label className="text-[10px] font-black uppercase text-slate-400 ml-4">{label}</label>
//     <input 
//       type="text" 
//       placeholder={placeholder} 
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       className="w-full bg-[#f1fcfb] border border-teal-100 rounded-full py-4 px-6 outline-none text-sm font-bold text-slate-700 focus:ring-2 ring-teal-200" 
//     />
//   </div>
// );

// export default AddDoctor;
import React, { useState } from "react";
import { UserPlus, Calendar, Plus, Trash2 } from "lucide-react";

const AddDoctor = () => {
  const [formData, setFormData] = useState({
    name: "", specialty: "", location: "", experience: "",
    qualifications: "", fees: "", rating: "5.0", patients: "0",
    successRate: "", email: "", password: "", availability: "Available",
    about: "", imageUrl: ""
  });

  const [slots, setSlots] = useState([]);
  const [newSlot, setNewSlot] = useState({ date: "", hour: "09", min: "00", period: "AM" });
  const [imageFile, setImageFile] = useState(null);

  const addSlot = () => {
    if (!newSlot.date) return alert("Please select a date");
    setSlots([...slots, `${newSlot.date} ${newSlot.hour}:${newSlot.min} ${newSlot.period}`]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Append text fields
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    
    // Append the schedule slots array as a string
    data.append("scheduleSlots", JSON.stringify(slots));

    // Append the actual image file captured from state
    if (imageFile) {
      data.append("image", imageFile); 
    }

    try {
      const response = await fetch("http://localhost:4000/api/admin/add-doctor", {
        method: "POST",
        body: data, // Fetch automatically sets the correct headers for FormData
      });

      if (response.ok) {
        alert("Doctor Added to Cloud Successfully!");
        // Reset image state after success
        setImageFile(null);
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to add doctor to cloud.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8 text-[#00a386]">
          <UserPlus size={32} />
          <h1 className="text-3xl font-black uppercase tracking-tight text-slate-800">Add New Doctor</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-[3rem] p-12 shadow-xl shadow-teal-50 border border-slate-50 space-y-8">
          {/* Image Upload Placeholder */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 ml-4">Upload Profile Image</label>
            {/* Added onChange to capture the file object */}
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-black file:bg-teal-50 file:text-[#00a386] hover:file:bg-teal-100" 
            />
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput label="Full Name" placeholder="Dr. Name" value={formData.name} onChange={(v) => setFormData({...formData, name: v})} />
            <FormInput label="Specialization" placeholder="e.g. Cardiology" value={formData.specialty} onChange={(v) => setFormData({...formData, specialty: v})} />
            <FormInput label="Location" placeholder="City, State" value={formData.location} onChange={(v) => setFormData({...formData, location: v})} />
            <FormInput label="Experience" placeholder="Years" value={formData.experience} onChange={(v) => setFormData({...formData, experience: v})} />
            <FormInput label="Qualifications" placeholder="MBBS, MD" value={formData.qualifications} onChange={(v) => setFormData({...formData, qualifications: v})} />
            <FormInput label="Consultation Fee" placeholder="INR" value={formData.fees} onChange={(v) => setFormData({...formData, fees: v})} />
            <FormInput label="Rating (1.0 - 5.0)" value={formData.rating} onChange={(v) => setFormData({...formData, rating: v})} />
            <FormInput label="Patients Served" value={formData.patients} onChange={(v) => setFormData({...formData, patients: v})} />
            <FormInput label="Success Rate" placeholder="98%" value={formData.successRate} onChange={(v) => setFormData({...formData, successRate: v})} />
            <FormInput label="Doctor Email" placeholder="email@hospital.com" value={formData.email} onChange={(v) => setFormData({...formData, email: v})} />
            
            <div className="space-y-2">
               <label className="text-[10px] font-black uppercase text-slate-400 ml-4">Status</label>
               <select className="w-full bg-[#f1fcfb] border border-teal-100 rounded-full py-4 px-6 outline-none font-bold text-slate-700" value={formData.availability} onChange={(e) => setFormData({...formData, availability: e.target.value})}>
                 <option>Available</option>
                 <option>On Leave</option>
               </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 ml-4">About Doctor</label>
            <textarea rows="4" className="w-full bg-[#f1fcfb] border border-teal-100 rounded-[2rem] p-6 outline-none text-sm" placeholder="Professional background..." value={formData.about} onChange={(e) => setFormData({...formData, about: e.target.value})} />
          </div>

          {/* SCHEDULE SLOTS SECTION */}
          <div className="bg-[#f1fcfb] p-8 rounded-[2.5rem] space-y-6">
            <div className="flex items-center gap-2 text-[#00a386] font-black uppercase text-xs">
              <Calendar size={18} /> Add Schedule Slots
            </div>
            <div className="flex flex-wrap gap-4">
              <input type="date" className="bg-white border border-teal-100 rounded-full px-4 py-2 text-sm outline-none" onChange={(e) => setNewSlot({...newSlot, date: e.target.value})} />
              <div className="flex items-center bg-white border border-teal-100 rounded-full px-4 gap-2">
                <select className="text-sm outline-none py-2" onChange={(e) => setNewSlot({...newSlot, hour: e.target.value})}><option>09</option><option>10</option><option>11</option></select>
                <span className="text-slate-300">:</span>
                <select className="text-sm outline-none py-2" onChange={(e) => setNewSlot({...newSlot, min: e.target.value})}><option>00</option><option>30</option></select>
                <select className="text-sm font-black text-[#00a386] outline-none py-2" onChange={(e) => setNewSlot({...newSlot, period: e.target.value})}><option>AM</option><option>PM</option></select>
              </div>
              <button type="button" onClick={addSlot} className="bg-[#00a386] text-white px-6 py-2 rounded-full font-black text-xs flex items-center gap-2"><Plus size={16}/> Add Slot</button>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {slots.map((s, i) => (
                <div key={i} className="bg-white border border-teal-100 px-4 py-2 rounded-full text-[10px] font-bold text-slate-500 flex items-center gap-2">
                  {s} <button type="button" onClick={() => setSlots(slots.filter((_, idx) => idx !== i))}><Trash2 size={12} className="text-rose-400"/></button>
                </div>
              ))}
            </div>
          </div>

          <button type="submit" className="w-full bg-[#00a386] text-white py-5 rounded-full font-black uppercase tracking-widest shadow-xl shadow-teal-100 hover:bg-[#008f75] transition-all transform active:scale-95">
            Add Doctor to Team
          </button>
        </form>
      </div>
    </div>
  );
};

const FormInput = ({ label, placeholder, value, onChange }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black uppercase text-slate-400 ml-4">{label}</label>
    <input 
      type="text" 
      placeholder={placeholder} 
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-[#f1fcfb] border border-teal-100 rounded-full py-4 px-6 outline-none text-sm font-bold text-slate-700 focus:ring-2 ring-teal-200" 
    />
  </div>
);

export default AddDoctor;