
// import React from "react";
// import { MoveRight, PhoneCall, CheckCircle2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Hero = ({ title }) => {
//   const features = ["Certified Specialists", "24/7 Availability", "Safe & Secure", "500+ Doctors"];
//   const navigate = useNavigate();

//   return (
//     <div className="moving-border-container rounded-4xl mx-4 mt-6 mb-10 shadow-sm relative overflow-hidden">
//       <div className="moving-border-line"></div>

//       <div className="moving-border-content p-6 lg:p-20 flex flex-col lg:flex-row items-center justify-between">
        
//         {/* LEFT CONTENT */}
// <div className="flex-1 space-y-6 z-20">
//   <div className="space-y-2">
//     {/* Heading with "MEDI" in green and "CARE+" in black, both CAPITALIZED */}
//     <h1 className="text-3xl lg:text-5xl font-black leading-tight tracking-tighter">
//       <span className="text-green-500 uppercase">MEDI</span>
//       <span className="text-black uppercase">Care+</span>
//     </h1>
    
//     <div className="space-y-1">
//       <p className="text-slate-500 text-xl lg:text-2xl font-semibold">
//         Premium Healthcare
//       </p>
//       <p className="text-green-500 text-2xl lg:text-4xl font-bold italic">
//         At Your Fingerprints
//       </p>
//     </div>
//   </div>

//           {/* Restored Features Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//             {features.map((item) => (
//               <div key={item} className="flex items-center gap-2 bg-green-50/50 p-2 rounded-full border border-green-100">
//                 <CheckCircle2 size={16} className="text-green-500" />
//                 <span className="text-slate-600 font-semibold text-xs lg:text-sm">{item}</span>
//               </div>
//             ))}
//           </div>

//           {/* Restored Buttons */}
//           <div className="flex flex-wrap gap-4 pt-2">
//             <button onClick={() => navigate("/doctors")} className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg shadow-green-200 text-sm">
//               Book Appointment Now <MoveRight size={18} />
//             </button>
//             <button className="flex items-center gap-2 bg-rose-50 text-rose-500 border border-rose-100 px-6 py-3 rounded-full font-bold hover:bg-rose-100 transition text-sm">
//               <PhoneCall size={18} /> Emergency Call
//             </button>
            
//           </div>
//         </div> {/* <--- THIS WAS THE MISSING TAG CAUSING THE ERROR */}

//         {/* RIGHT IMAGE */}
//         <div className="flex-1 flex justify-end mt-10 lg:mt-0 z-20">
//           <div className="relative">
//             <img 
//               src="/images/hero.avif" 
//               alt="Doctors Team" 
//               className="w-full max-w-md h-auto rounded-3xl object-cover shadow-2xl shadow-slate-200" 
//             />
//             <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-2">
//               <span className="text-yellow-400 font-bold text-lg">★★★★★</span>
//               <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">5.0 Rating</span>
//             </div>
//           </div>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React from "react";
import { MoveRight, PhoneCall, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = ({ title }) => {
  const features = ["Certified Specialists", "24/7 Availability", "Safe & Secure", "500+ Doctors"];
  const navigate = useNavigate();

  return (
    <div className="moving-border-container rounded-4xl mx-4 mt-6 mb-10 shadow-sm relative overflow-hidden">
      <div className="moving-border-line"></div>

      <div className="moving-border-content p-6 lg:p-20 flex flex-col lg:flex-row items-center justify-between">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6 z-20">
          <div className="space-y-2">
            {/* Heading with "MEDI" in green and "CARE+" in black, both CAPITALIZED */}
            <h1 className="text-3xl lg:text-5xl font-black leading-tight tracking-tighter">
              <span className="text-green-500 uppercase">MEDI</span>
              <span className="text-black uppercase">Care+</span>
            </h1>
            
            <div className="space-y-1">
              <p className="text-slate-500 text-xl lg:text-2xl font-semibold">
                Premium Healthcare
              </p>
              <p className="text-green-500 text-2xl lg:text-4xl font-bold italic">
                At Your Fingerprints
              </p>
            </div>
          </div>

          {/* Restored Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((item) => (
              <div key={item} className="flex items-center gap-2 bg-green-50/50 p-2 rounded-full border border-green-100">
                <CheckCircle2 size={16} className="text-green-500" />
                <span className="text-slate-600 font-semibold text-xs lg:text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* Restored Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            {/* Navigates to /doctors on click */}
            <button 
              onClick={() => navigate("/doctors")} 
              className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg shadow-green-200 text-sm"
            >
              Book Appointment Now <MoveRight size={18} />
            </button>

            {/* Functional Emergency Call Button */}
            <a 
              href="tel:+918299431275" 
              className="flex items-center gap-2 bg-rose-50 text-rose-500 border border-rose-100 px-6 py-3 rounded-full font-bold hover:bg-rose-100 transition text-sm"
            >
              <PhoneCall size={18} /> Emergency Call
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-end mt-10 lg:mt-0 z-20">
          <div className="relative">
            <img 
              src="/images/hero.avif" 
              alt="Doctors Team" 
              className="w-full max-w-md h-auto rounded-3xl object-cover shadow-2xl shadow-slate-200" 
            />
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-2">
              <span className="text-yellow-400 font-bold text-lg">★★★★★</span>
              <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">5.0 Rating</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;