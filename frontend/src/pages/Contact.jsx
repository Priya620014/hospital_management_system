// import React, { useState } from "react";
// import { User, Mail, Phone, Building2, Briefcase, MessageSquare, Send } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "", email: "", phone: "", department: "", service: "", message: ""
//   });

//   const handleWhatsApp = (e) => {
//     e.preventDefault();
//     const text = `Hello, I am ${formData.name}. %0AEmail: ${formData.email} %0AMessage: ${formData.message}`;
//     window.open(`https://wa.me/918299431275?text=${text}`, "_blank");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f1fcfb] via-white to-[#e6fcf5] py-16 px-6 lg:px-24">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
//         {/* LEFT: Contact Form Card */}
//         <div className="flex-1 bg-white rounded-[3rem] p-8 lg:p-12 shadow-xl shadow-teal-50 border border-slate-50">
//           <div className="mb-10">
//             <h1 className="text-4xl font-black text-[#137d6e] mb-2 italic">Contact Our Clinic</h1>
//             <p className="text-green-600 font-bold italic text-sm">
//               Fill the form — we'll open WhatsApp so you can connect with us instantly.
//             </p>
//           </div>

//           <form onSubmit={handleWhatsApp} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Name */}
//               <div className="space-y-2">
//                 <label className="flex items-center gap-2 text-xs font-black text-[#137d6e] uppercase tracking-wider ml-2">
//                   <User size={14} /> Full Name
//                 </label>
//                 <input 
//                   type="text" placeholder="Full name" required
//                   className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm focus:ring-2 focus:ring-green-400 outline-none"
//                   onChange={(e) => setFormData({...formData, name: e.target.value})}
//                 />
//               </div>
//               {/* Email */}
//               <div className="space-y-2">
//                 <label className="flex items-center gap-2 text-xs font-black text-[#137d6e] uppercase tracking-wider ml-2">
//                   <Mail size={14} /> Email
//                 </label>
//                 <input 
//                   type="email" placeholder="example@domain.com" required
//                   className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm focus:ring-2 focus:ring-green-400 outline-none"
//                   onChange={(e) => setFormData({...formData, email: e.target.value})}
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Phone */}
//               <div className="space-y-2">
//                 <label className="flex items-center gap-2 text-xs font-black text-[#137d6e] uppercase tracking-wider ml-2">
//                   <Phone size={14} /> Phone
//                 </label>
//                 <input 
//                   type="tel" placeholder="1234567890" required
//                   className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm focus:ring-2 focus:ring-green-400 outline-none"
//                 />
//               </div>
//               {/* Department */}
//               <div className="space-y-2">
//                 <label className="flex items-center gap-2 text-xs font-black text-[#137d6e] uppercase tracking-wider ml-2">
//                   <Building2 size={14} /> Department
//                 </label>
//                 <select className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm focus:ring-2 focus:ring-green-400 outline-none appearance-none">
//                   <option>Select Department</option>
//                   <option>Cardiology</option>
//                   <option>Neurology</option>
//                   <option>Pediatrics</option>
//                 </select>
//               </div>
//             </div>

//             {/* Service */}
//             <div className="space-y-2">
//               <label className="flex items-center gap-2 text-xs font-black text-[#137d6e] uppercase tracking-wider ml-2">
//                 <Briefcase size={14} /> Service
//               </label>
//               <select className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm focus:ring-2 focus:ring-green-400 outline-none appearance-none">
//                 <option>Select Service (or choose Department above)</option>
//               </select>
//             </div>

//             {/* Message */}
//             <div className="space-y-2">
//               <label className="flex items-center gap-2 text-xs font-black text-[#137d6e] uppercase tracking-wider ml-2">
//                 <MessageSquare size={14} /> Message
//               </label>
//               <textarea 
//                 rows="4" placeholder="Describe your concern briefly..."
//                 className="w-full bg-[#f1fcfb] border border-green-100 rounded-[2rem] py-4 px-6 text-sm focus:ring-2 focus:ring-green-400 outline-none resize-none"
//                 onChange={(e) => setFormData({...formData, message: e.target.value})}
//               ></textarea>
//             </div>

//             <button className="flex items-center gap-3 bg-[#00a386] text-white px-10 py-4 rounded-full font-black text-sm hover:bg-[#008f75] transition-all shadow-lg shadow-teal-100">
//               <Send size={18} /> Send via WhatsApp
//             </button>
//           </form>
//         </div>

//         {/* RIGHT: Info Cards */}
//         <div className="lg:w-[400px] space-y-6">
//           {/* Visit Card */}
//           <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-slate-50">
//             <h2 className="text-2xl font-black text-[#137d6e] mb-4 italic">Visit Our Clinic</h2>
//             <div className="space-y-4">
//               <div className="flex items-start gap-3">
//                 <div className="bg-green-100 p-2 rounded-lg text-[#137d6e]"><MapPin size={18} /></div>
//                 <p className="text-sm font-bold text-slate-600">Gomtinagar, Lucknow, Uttar Pradesh</p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="bg-green-100 p-2 rounded-lg text-[#137d6e]"><Phone size={18} /></div>
//                 <p className="text-sm font-bold text-slate-600">8299431275</p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="bg-green-100 p-2 rounded-lg text-[#137d6e]"><Mail size={18} /></div>
//                 <p className="text-sm font-bold text-slate-600">info@yourclinic.com</p>
//               </div>
//             </div>
//           </div>

//           {/* Map Placeholder */}
//           <div className="bg-[#e6fcf5] h-64 rounded-[2rem] border-2 border-white shadow-inner flex items-center justify-center">
//             <p className="text-teal-600 font-black uppercase text-xs tracking-widest">Map View Coming Soon</p>
//           </div>

//           {/* Hours Card */}
//           <div className="bg-[#00a386] rounded-[2rem] p-8 text-white shadow-xl shadow-teal-100">
//             <h2 className="text-2xl font-black mb-2 italic">Clinic Hours</h2>
//             <p className="text-sm font-bold opacity-90">Mon - Sat: 9:00 AM - 6:00 PM</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from "react";
// Added MapPin and Map to the imports to fix the error
import { User, Mail, Phone, Building2, Briefcase, MessageSquare, Send, MapPin, Map } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", 
    email: "", 
    phone: "", 
    department: "", 
    service: "", 
    message: ""
  });

  const handleWhatsApp = (e) => {
    e.preventDefault();
    // Enhanced message text to include all form fields
    const text = `*New Inquiry from MediCare+*%0A
*Name:* ${formData.name}%0A
*Email:* ${formData.email}%0A
*Phone:* ${formData.phone}%0A
*Dept:* ${formData.department}%0A
*Service:* ${formData.service}%0A
*Message:* ${formData.message}`;

    window.open(`https://wa.me/918299431275?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f1fcfb] via-white to-[#e6fcf5] py-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* LEFT: Contact Form Card */}
        <div className="flex-1 bg-white rounded-[3rem] p-8 lg:p-12 shadow-xl shadow-teal-50 border border-slate-50">
          <div className="mb-10">
            <h1 className="text-4xl font-black text-[#137d6e] mb-2 italic">Contact Our Clinic</h1>
            <p className="text-green-600 font-bold italic text-sm">
              Fill the form — we'll open WhatsApp so you can connect with us instantly.
            </p>
          </div>

          <form onSubmit={handleWhatsApp} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-black text-[#137d6e] uppercase tracking-wider ml-2">
                  <User size={14} /> Full Name
                </label>
                <input 
                  type="text" placeholder="Full name" required
                  className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm focus:ring-2 focus:ring-green-400 outline-none"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              {/* Email */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-black text-[#137d6e] uppercase tracking-wider ml-2">
                  <Mail size={14} /> Email
                </label>
                <input 
                  type="email" placeholder="example@domain.com" required
                  className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm focus:ring-2 focus:ring-green-400 outline-none"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-black text-[#137d6e] uppercase tracking-wider ml-2">
                  <Phone size={14} /> Phone
                </label>
                <input 
                  type="tel" placeholder="1234567890" required
                  className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm focus:ring-2 focus:ring-green-400 outline-none"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              {/* Department */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-black text-[#137d6e] uppercase tracking-wider ml-2">
                  <Building2 size={14} /> Department
                </label>
                <select 
                  className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm focus:ring-2 focus:ring-green-400 outline-none appearance-none"
                  onChange={(e) => setFormData({...formData, department: e.target.value})}
                >
                  <option value="">Select Department</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Pediatrics">Pediatrics</option>
                </select>
              </div>
            </div>

            {/* Service */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-black text-[#137d6e] uppercase tracking-wider ml-2">
                <Briefcase size={14} /> Service
              </label>
              <select 
                className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm focus:ring-2 focus:ring-green-400 outline-none appearance-none"
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              >
                <option value="">Select Service (or choose Department above)</option>
                <option value="Consultation">General Consultation</option>
                <option value="Checkup">Full Body Checkup</option>
                <option value="Emergency">Emergency Care</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-black text-[#137d6e] uppercase tracking-wider ml-2">
                <MessageSquare size={14} /> Message
              </label>
              <textarea 
                rows="4" placeholder="Describe your concern briefly..."
                className="w-full bg-[#f1fcfb] border border-green-100 rounded-[2rem] py-4 px-6 text-sm focus:ring-2 focus:ring-green-400 outline-none resize-none"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button className="flex items-center gap-3 bg-[#00a386] text-white px-10 py-4 rounded-full font-black text-sm hover:bg-[#008f75] transition-all shadow-lg shadow-teal-100">
              <Send size={18} /> Send via WhatsApp
            </button>
          </form>
        </div>

        {/* RIGHT: Info Cards */}
        <div className="lg:w-[400px] space-y-6">
          {/* Visit Card */}
          <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-slate-50">
            <h2 className="text-2xl font-black text-[#137d6e] mb-4 italic">Visit Our Clinic</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-lg text-[#137d6e]"><MapPin size={18} /></div>
                <p className="text-sm font-bold text-slate-600">Gomtinagar, Lucknow, Uttar Pradesh</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg text-[#137d6e]"><Phone size={18} /></div>
                <p className="text-sm font-bold text-slate-600">8299431275</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg text-[#137d6e]"><Mail size={18} /></div>
                <p className="text-sm font-bold text-slate-600">info@yourclinic.com</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder with Map Icon */}
          <div className="bg-[#e6fcf5] h-64 rounded-[2rem] border-2 border-white shadow-inner flex flex-col items-center justify-center gap-3">
            <div className="bg-white/50 p-4 rounded-full text-teal-600 shadow-sm">
                <Map size={32} />
            </div>
            <p className="text-teal-600 font-black uppercase text-xs tracking-widest">Map View Coming Soon</p>
          </div>

          {/* Hours Card */}
          <div className="bg-[#00a386] rounded-[2rem] p-8 text-white shadow-xl shadow-teal-100">
            <h2 className="text-2xl font-black mb-2 italic">Clinic Hours</h2>
            <p className="text-sm font-bold opacity-90">Mon - Sat: 9:00 AM - 6:00 PM</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;