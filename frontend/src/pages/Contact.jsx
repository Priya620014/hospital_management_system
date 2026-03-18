
// import React, { useState } from "react";
// // Added MapPin and Map to the imports to fix the error
// import { User, Mail, Phone, Building2, Briefcase, MessageSquare, Send, MapPin, Map } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "", 
//     email: "", 
//     phone: "", 
//     department: "", 
//     service: "", 
//     message: ""
//   });

//   const handleWhatsApp = (e) => {
//     e.preventDefault();
//     // Enhanced message text to include all form fields
//     const text = `*New Inquiry from MediCare+*%0A
// *Name:* ${formData.name}%0A
// *Email:* ${formData.email}%0A
// *Phone:* ${formData.phone}%0A
// *Dept:* ${formData.department}%0A
// *Service:* ${formData.service}%0A
// *Message:* ${formData.message}`;

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
//                   onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                 />
//               </div>
//               {/* Department */}
//               <div className="space-y-2">
//                 <label className="flex items-center gap-2 text-xs font-black text-[#137d6e] uppercase tracking-wider ml-2">
//                   <Building2 size={14} /> Department
//                 </label>
//                 <select 
//                   className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm focus:ring-2 focus:ring-green-400 outline-none appearance-none"
//                   onChange={(e) => setFormData({...formData, department: e.target.value})}
//                 >
//                   <option value="">Select Department</option>
//                   <option value="Cardiology">Cardiology</option>
//                   <option value="Neurology">Neurology</option>
//                   <option value="Pediatrics">Pediatrics</option>
//                 </select>
//               </div>
//             </div>

//             {/* Service */}
//             <div className="space-y-2">
//               <label className="flex items-center gap-2 text-xs font-black text-[#137d6e] uppercase tracking-wider ml-2">
//                 <Briefcase size={14} /> Service
//               </label>
//               <select 
//                 className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm focus:ring-2 focus:ring-green-400 outline-none appearance-none"
//                 onChange={(e) => setFormData({...formData, service: e.target.value})}
//               >
//                 <option value="">Select Service (or choose Department above)</option>
//                 <option value="Consultation">General Consultation</option>
//                 <option value="Checkup">Full Body Checkup</option>
//                 <option value="Emergency">Emergency Care</option>
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

//           {/* Map Placeholder with Map Icon */}
//          {/* Interactive Google Map Integration */}
// <div className="bg-white overflow-hidden h-64 rounded-[2rem] border-2 border-white shadow-xl relative">
//   <iframe
//     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.62912423718!2d80.97825705!3d26.88267245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2931110025f%3A0xe6754b2d32152a55!2sGomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1708800000000!5m2!1sen!2sin"
//     width="100%"
//     height="100%"
//     style={{ border: 0 }}
//     allowFullScreen=""
//     loading="lazy"
//     referrerPolicy="no-referrer-when-downgrade"
//     title="Clinic Location"
//     className="rounded-[2rem]"
//   ></iframe>
// </div>

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
import { User, Mail, Phone, Building2, Briefcase, MessageSquare, Send, MapPin } from "lucide-react";

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
    
    // Constructing the message with clean formatting
    const messageText = `*New Inquiry from MediCare+*
--------------------------
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Dept:* ${formData.department || "General"}
*Service:* ${formData.service || "General Inquiry"}
*Message:* ${formData.message}`;

    // Using encodeURIComponent for reliable character handling
    const whatsappUrl = `https://wa.me/918299431275?text=${encodeURIComponent(messageText)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f1fcfb] via-white to-[#e6fcf5] pt-32 pb-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* LEFT: Contact Form Card */}
        <div className="flex-1 bg-white rounded-[3rem] p-8 lg:p-12 shadow-xl shadow-teal-50 border border-slate-50">
          <div className="mb-10 text-center lg:text-left">
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
                  className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm focus:ring-2 focus:ring-green-400 outline-none appearance-none cursor-pointer"
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
                className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm focus:ring-2 focus:ring-green-400 outline-none appearance-none cursor-pointer"
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              >
                <option value="">Select Service</option>
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

            <button 
              type="submit"
              className="w-full lg:w-fit flex items-center justify-center gap-3 bg-[#00a386] text-white px-10 py-4 rounded-full font-black text-sm hover:bg-[#008f75] transition-all shadow-lg shadow-teal-100"
            >
              <Send size={18} /> Send via WhatsApp
            </button>
          </form>
        </div>

        {/* RIGHT: Info Cards */}
        <div className="lg:w-[400px] space-y-6">
          <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-slate-50">
            <h2 className="text-2xl font-black text-[#137d6e] mb-6 italic">Visit Our Clinic</h2>
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
                <p className="text-sm font-bold text-slate-600">info@medicareplus.com</p>
              </div>
            </div>
          </div>

          {/* Interactive Google Map */}
          <div className="bg-white overflow-hidden h-64 rounded-[2rem] border-2 border-white shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.3323089625!2d80.9329!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710780000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            ></iframe>
          </div>

          <div className="bg-[#00a386] rounded-[2rem] p-8 text-white shadow-xl shadow-teal-100">
            <h2 className="text-2xl font-black mb-2 italic">Clinic Hours</h2>
            <p className="text-sm font-bold opacity-90 italic">Mon - Sat: 9:00 AM - 6:00 PM</p>
            <p className="text-[10px] uppercase font-black tracking-widest mt-4 opacity-60">Sunday: Emergency Only</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;