// import React, { useState } from "react";
// import { Upload, Plus, Trash2, Save, RotateCcw, Calendar, IndianRupee ,X} from "lucide-react";

// const AddService = () => {
//   const [serviceData, setServiceData] = useState({
//     name: "", price: "", availability: "Available", description: ""
//   });
//   const [imageFile, setImageFile] = useState(null);
//   const [instructions, setInstructions] = useState([""]);
//   const [slots, setSlots] = useState([]);
//   const [newSlot, setNewSlot] = useState({ day: "12", month: "Mar", year: "2026", hour: "11", min: "00", period: "AM" });

//   const addInstruction = () => setInstructions([...instructions, ""]);
  
//   const addSlot = () => {
//     const slotStr = `${newSlot.day} ${newSlot.month} ${newSlot.year} - ${newSlot.hour}:${newSlot.min} ${newSlot.period}`;
//     setSlots([...slots, slotStr]);
//   };

//   const handleSave = async () => {
//     // Create FormData for Cloudinary and Backend
//     const data = new FormData();
//     data.append("name", serviceData.name);
//     data.append("price", serviceData.price);
//     data.append("availability", serviceData.availability);
//     data.append("description", serviceData.description);
//     data.append("instructions", JSON.stringify(instructions));
//     data.append("slots", JSON.stringify(slots));
//     if (imageFile) data.append("image", imageFile);

//     const res = await fetch("http://localhost:4000/api/admin/add-service", {
//       method: "POST",
//       body: data,
//     });

//     if (res.ok) alert("Service Saved Successfully!");
//   };

//   return (
//     <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6">
//       <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-12 shadow-xl shadow-teal-50 border border-slate-50">
        
//         {/* Header Actions */}
//         <div className="flex justify-between items-center mb-10">
//           <div>
//             <h1 className="text-3xl font-black text-[#137d6e] uppercase">Add Service</h1>
//             <p className="text-slate-400 text-xs font-bold italic">Create a beautiful service card with unique time slots</p>
//           </div>
//           <div className="flex gap-4">
//             <button className="flex items-center gap-2 bg-slate-50 text-slate-400 px-6 py-2 rounded-full font-black text-xs hover:bg-slate-100"><RotateCcw size={14}/> Reset</button>
//             <button onClick={handleSave} className="flex items-center gap-2 bg-[#00a386] text-white px-6 py-2 rounded-full font-black text-xs shadow-lg shadow-teal-100 hover:bg-[#008f75]"><Save size={14}/> Save Service</button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
//           {/* Left: Image Upload */}
//           <div className="space-y-4">
//             <label className="aspect-square bg-[#f1fcfb] border-2 border-dashed border-teal-100 rounded-[2rem] flex flex-col items-center justify-center p-8 text-center group cursor-pointer hover:bg-teal-50 transition-all">
//               <input type="file" className="hidden" onChange={(e) => setImageFile(e.target.files[0])} />
//               <div className="bg-white p-4 rounded-2xl text-[#00a386] shadow-sm mb-4">
//                 <Upload size={32} />
//               </div>
//               <p className="text-[10px] font-black text-[#00a386] uppercase tracking-widest">
//                 {imageFile ? imageFile.name : "Service Image (required)"}
//               </p>
//               <span className="mt-6 bg-white border border-teal-100 px-6 py-2 rounded-full text-[10px] font-black text-slate-400 hover:text-teal-600">+ Upload Image</span>
//             </label>
//           </div>

//           {/* Right: Form Fields */}
//           <div className="lg:col-span-2 space-y-8">
//             <div className="grid grid-cols-2 gap-6">
//               <InputField label="Service Name" placeholder="e.g. General Consultation" value={serviceData.name} onChange={(v) => setServiceData({...serviceData, name: v})} />
//               <InputField label="Price" placeholder="₹ 499" value={serviceData.price} onChange={(v) => setServiceData({...serviceData, price: v})} />
              
//               <div className="col-span-2 space-y-2">
//                 <label className="text-[10px] font-black uppercase text-slate-300 ml-4">Availability</label>
//                 <select 
//                   className="w-full bg-[#f1fcfb] border border-teal-50 rounded-full py-4 px-6 text-sm font-bold text-slate-600 outline-none"
//                   value={serviceData.availability}
//                   onChange={(e) => setServiceData({...serviceData, availability: e.target.value})}
//                 >
//                   <option>Available</option>
//                   <option>Unavailable</option>
//                 </select>
//               </div>

//               <div className="col-span-2 space-y-2">
//                 <label className="text-[10px] font-black uppercase text-slate-300 ml-4">About this service</label>
//                 <textarea 
//                   rows="3" 
//                   className="w-full bg-[#f1fcfb] border border-teal-50 rounded-[2rem] p-6 text-sm outline-none" 
//                   placeholder="Short description..." 
//                   value={serviceData.description}
//                   onChange={(e) => setServiceData({...serviceData, description: e.target.value})}
//                 />
//               </div>
//             </div>

//             {/* Instructions Section */}
//             <div className="space-y-4">
//               <div className="flex justify-between items-center px-4">
//                 <label className="text-[10px] font-black uppercase text-slate-300">Instructions (point wise)</label>
//                 <button onClick={addInstruction} className="text-[#00a386] bg-teal-50 p-1.5 rounded-full hover:bg-teal-100"><Plus size={14}/></button>
//               </div>
//               {instructions.map((text, i) => (
//                 <div key={i} className="flex gap-4 items-center">
//                   <span className="font-black text-[#00a386] text-xs">{i+1}.</span>
//                   <input 
//                     type="text" 
//                     value={text}
//                     onChange={(e) => {
//                       const newIns = [...instructions];
//                       newIns[i] = e.target.value;
//                       setInstructions(newIns);
//                     }}
//                     className="flex-1 bg-white border border-slate-100 rounded-full py-3 px-6 text-xs outline-none focus:border-teal-200" 
//                     placeholder="Instruction text..." 
//                   />
//                   {i > 0 && <button onClick={() => setInstructions(instructions.filter((_, idx) => idx !== i))}><Trash2 size={14} className="text-rose-300"/></button>}
//                 </div>
//               ))}
//             </div>

//             {/* Slots & Schedule */}
//             <div className="bg-[#f1fcfb] p-8 rounded-[2.5rem] space-y-6">
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center gap-2 text-[#00a386] font-black uppercase text-[10px] tracking-widest">
//                   <Calendar size={16}/> Slots & Schedule
//                 </div>
//                 <span className="text-[10px] font-bold text-slate-400">{slots.length} slots added</span>
//               </div>
              
//               <div className="flex flex-wrap gap-4 items-end">
//                 <ScheduleSelect label="Day" value={newSlot.day} />
//                 <ScheduleSelect label="Month" value={newSlot.month} />
//                 <ScheduleSelect label="Year" value={newSlot.year} />
//                 <div className="flex items-center bg-white border border-teal-50 rounded-full px-4 h-11 gap-2">
//                    <select className="text-xs font-bold outline-none"><option>11</option></select>
//                    <span className="text-slate-200">:</span>
//                    <select className="text-xs font-bold outline-none"><option>00</option></select>
//                    <select className="text-xs font-black text-[#00a386] outline-none"><option>AM</option></select>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-2">
//                 {slots.map((s, i) => (
//                   <span key={i} className="bg-white px-3 py-1 rounded-full text-[10px] font-bold text-slate-400 border border-teal-50 flex items-center gap-2">
//                     {s} <button onClick={() => setSlots(slots.filter((_, idx) => idx !== i))}><X size={10}/></button>
//                   </span>
//                 ))}
//               </div>

//               <button onClick={addSlot} className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-lg shadow-teal-100/50 flex items-center justify-center gap-2">
//                 <Plus size={16}/> Add This Time Slot
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const InputField = ({ label, placeholder, value, onChange }) => (
//   <div className="space-y-2">
//     <label className="text-[10px] font-black uppercase text-slate-300 ml-4">{label}</label>
//     <input 
//       type="text" 
//       placeholder={placeholder} 
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       className="w-full bg-[#f1fcfb] border border-teal-50 rounded-full py-4 px-6 text-sm font-bold text-slate-600 outline-none focus:border-teal-200" 
//     />
//   </div>
// );

// const ScheduleSelect = ({ label, value }) => (
//   <div className="space-y-1">
//     <p className="text-[8px] font-black uppercase text-slate-300 ml-3">{label}</p>
//     <select className="bg-white border border-teal-50 rounded-full px-5 py-2.5 text-xs font-bold outline-none min-w-[80px]">
//       <option>{value}</option>
//     </select>
//   </div>
// );

// export default AddService;
import React, { useState } from "react";
import { Upload, Plus, Trash2, Save, RotateCcw, Calendar, IndianRupee, X } from "lucide-react";

// Helper ranges for dropdowns
const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const years = ["2026", "2027", "2028"];
const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
const minutes = ["00", "15", "30", "45"];

const AddService = () => {
  const [serviceData, setServiceData] = useState({
    name: "", price: "", availability: "Available", description: ""
  });
  const [imageFile, setImageFile] = useState(null);
  const [instructions, setInstructions] = useState([""]);
  const [slots, setSlots] = useState([]);
  const [newSlot, setNewSlot] = useState({ day: "12", month: "Mar", year: "2026", hour: "11", min: "00", period: "AM" });

  const addInstruction = () => setInstructions([...instructions, ""]);
  
  const addSlot = () => {
    const slotStr = `${newSlot.day} ${newSlot.month} ${newSlot.year} - ${newSlot.hour}:${newSlot.min} ${newSlot.period}`;
    setSlots([...slots, slotStr]);
  };

  const handleSave = async () => {
    const data = new FormData();
    data.append("name", serviceData.name);
    data.append("price", serviceData.price);
    data.append("availability", serviceData.availability);
    data.append("description", serviceData.description);
    data.append("instructions", JSON.stringify(instructions));
    data.append("slots", JSON.stringify(slots));
    if (imageFile) data.append("image", imageFile);

    const res = await fetch("http://localhost:4000/api/admin/add-service", {
      method: "POST",
      body: data,
    });

    if (res.ok) alert("Service Saved Successfully!");
  };

  return (
    <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-12 shadow-xl shadow-teal-50 border border-slate-50">
        
        {/* Header Actions */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black text-[#137d6e] uppercase">Add Service</h1>
            <p className="text-slate-400 text-xs font-bold italic">Create a beautiful service card with unique time slots</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-slate-50 text-slate-400 px-6 py-2 rounded-full font-black text-xs hover:bg-slate-100"><RotateCcw size={14}/> Reset</button>
            <button onClick={handleSave} className="flex items-center gap-2 bg-[#00a386] text-white px-6 py-2 rounded-full font-black text-xs shadow-lg shadow-teal-100 hover:bg-[#008f75]"><Save size={14}/> Save Service</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left: Image Upload */}
          <div className="space-y-4">
            <label className="aspect-square bg-[#f1fcfb] border-2 border-dashed border-teal-100 rounded-[2rem] flex flex-col items-center justify-center p-8 text-center group cursor-pointer hover:bg-teal-50 transition-all">
              <input type="file" className="hidden" onChange={(e) => setImageFile(e.target.files[0])} />
              <div className="bg-white p-4 rounded-2xl text-[#00a386] shadow-sm mb-4">
                <Upload size={32} />
              </div>
              <p className="text-[10px] font-black text-[#00a386] uppercase tracking-widest">
                {imageFile ? imageFile.name : "Service Image (required)"}
              </p>
              <span className="mt-6 bg-white border border-teal-100 px-6 py-2 rounded-full text-[10px] font-black text-slate-400 hover:text-teal-600">+ Upload Image</span>
            </label>
          </div>

          {/* Right: Form Fields */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <InputField label="Service Name" placeholder="e.g. General Consultation" value={serviceData.name} onChange={(v) => setServiceData({...serviceData, name: v})} />
              <InputField label="Price" placeholder="₹ 499" value={serviceData.price} onChange={(v) => setServiceData({...serviceData, price: v})} />
              
              <div className="col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-300 ml-4">Availability</label>
                <select 
                  className="w-full bg-[#f1fcfb] border border-teal-50 rounded-full py-4 px-6 text-sm font-bold text-slate-600 outline-none"
                  value={serviceData.availability}
                  onChange={(e) => setServiceData({...serviceData, availability: e.target.value})}
                >
                  <option>Available</option>
                  <option>Unavailable</option>
                </select>
              </div>

              <div className="col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-300 ml-4">About this service</label>
                <textarea 
                  rows="3" 
                  className="w-full bg-[#f1fcfb] border border-teal-50 rounded-[2rem] p-6 text-sm outline-none" 
                  placeholder="Short description..." 
                  value={serviceData.description}
                  onChange={(e) => setServiceData({...serviceData, description: e.target.value})}
                />
              </div>
            </div>

            {/* Instructions Section */}
            <div className="space-y-4">
              <div className="flex justify-between items-center px-4">
                <label className="text-[10px] font-black uppercase text-slate-300">Instructions (point wise)</label>
                <button onClick={addInstruction} className="text-[#00a386] bg-teal-50 p-1.5 rounded-full hover:bg-teal-100"><Plus size={14}/></button>
              </div>
              {instructions.map((text, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <span className="font-black text-[#00a386] text-xs">{i+1}.</span>
                  <input 
                    type="text" 
                    value={text}
                    onChange={(e) => {
                      const newIns = [...instructions];
                      newIns[i] = e.target.value;
                      setInstructions(newIns);
                    }}
                    className="flex-1 bg-white border border-slate-100 rounded-full py-3 px-6 text-xs outline-none focus:border-teal-200" 
                    placeholder="Instruction text..." 
                  />
                  {i > 0 && <button onClick={() => setInstructions(instructions.filter((_, idx) => idx !== i))}><Trash2 size={14} className="text-rose-300"/></button>}
                </div>
              ))}
            </div>

            {/* Slots & Schedule */}
            <div className="bg-[#f1fcfb] p-8 rounded-[2.5rem] space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-[#00a386] font-black uppercase text-[10px] tracking-widest">
                  <Calendar size={16}/> Slots & Schedule
                </div>
                <span className="text-[10px] font-bold text-slate-400">{slots.length} slots added</span>
              </div>
              
              <div className="flex flex-wrap gap-4 items-end">
                <ScheduleSelect 
                  label="Day" 
                  options={days} 
                  value={newSlot.day} 
                  onChange={(v) => setNewSlot({...newSlot, day: v})} 
                />
                <ScheduleSelect 
                  label="Month" 
                  options={months} 
                  value={newSlot.month} 
                  onChange={(v) => setNewSlot({...newSlot, month: v})} 
                />
                <ScheduleSelect 
                  label="Year" 
                  options={years} 
                  value={newSlot.year} 
                  onChange={(v) => setNewSlot({...newSlot, year: v})} 
                />
                
                {/* Time Selection Row */}
                <div className="flex items-center bg-white border border-teal-50 rounded-full px-4 h-11 gap-2 shadow-sm">
                   <select 
                     value={newSlot.hour} 
                     onChange={(e) => setNewSlot({...newSlot, hour: e.target.value})}
                     className="text-xs font-bold outline-none cursor-pointer"
                   >
                     {hours.map(h => <option key={h} value={h}>{h}</option>)}
                   </select>
                   <span className="text-slate-200">:</span>
                   <select 
                     value={newSlot.min} 
                     onChange={(e) => setNewSlot({...newSlot, min: e.target.value})}
                     className="text-xs font-bold outline-none cursor-pointer"
                   >
                     {minutes.map(m => <option key={m} value={m}>{m}</option>)}
                   </select>
                   <select 
                     value={newSlot.period} 
                     onChange={(e) => setNewSlot({...newSlot, period: e.target.value})}
                     className="text-xs font-black text-[#00a386] outline-none cursor-pointer"
                   >
                     <option value="AM">AM</option>
                     <option value="PM">PM</option>
                   </select>
                </div>
              </div>

              {/* Displaying Added Slots */}
              <div className="flex flex-wrap gap-2">
                {slots.map((s, i) => (
                  <span key={i} className="bg-white px-3 py-1 rounded-full text-[10px] font-bold text-slate-500 border border-teal-50 flex items-center gap-2 shadow-sm">
                    {s} <button onClick={() => setSlots(slots.filter((_, idx) => idx !== i))}><X size={10} className="text-rose-400"/></button>
                  </span>
                ))}
              </div>

              <button onClick={addSlot} className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-lg shadow-teal-100/50 flex items-center justify-center gap-2 hover:bg-[#008f75] transition-colors">
                <Plus size={16}/> Add This Time Slot
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, placeholder, value, onChange }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black uppercase text-slate-300 ml-4">{label}</label>
    <input 
      type="text" 
      placeholder={placeholder} 
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-[#f1fcfb] border border-teal-50 rounded-full py-4 px-6 text-sm font-bold text-slate-600 outline-none focus:border-teal-200" 
    />
  </div>
);

const ScheduleSelect = ({ label, options, value, onChange }) => (
  <div className="space-y-1">
    <p className="text-[8px] font-black uppercase text-slate-300 ml-3">{label}</p>
    <select 
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-white border border-teal-50 rounded-full px-5 py-2.5 text-xs font-bold outline-none min-w-[80px] cursor-pointer shadow-sm hover:border-teal-200 transition-all"
    >
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default AddService;