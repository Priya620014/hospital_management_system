
// import React, { useState, useEffect } from "react"; // Added useEffect here
// import { useNavigate } from "react-router-dom";
// import Hero from "../components/Hero";
// import Certification from "../components/Certification";
// import DoctorCard from "../components/DoctorCard";
// import Testimonials from "../components/Testimonials";
// // Added ArrowRight to the imports
// import { CheckCircle, X, ArrowRight } from "lucide-react"; 

// const Home = () => {
//   const navigate = useNavigate();

//   const [showSuccess, setShowSuccess] = useState(false);
//   const [showScrollButton, setShowScrollButton] = useState(false);

//   const doctors = [
//     { name: "Mri", specialty: "Pediatrics", experience: 5, imageUrl: "/images/doctor1.jpg" },
//     { name: "Kevin", specialty: "Brain", experience: 12, imageUrl: "/images/doc2.jpg" },
//     { name: "Sarah", specialty: "Cardiology", experience: 8, imageUrl: "/images/doc3.jpeg" },
//   ];

//   // Logic for Scroll to Top
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 300) {
//         setShowScrollButton(true);
//       } else {
//         setShowScrollButton(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="bg-white min-h-screen pt-24 overflow-x-hidden relative">
      
//       {/* SUCCESS POPUP MODAL */}
//       {showSuccess && (
//         <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
//           <div 
//             className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" 
//             onClick={() => setShowSuccess(false)}
//           ></div>
//           <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl relative z-10 text-center space-y-6 animate-in zoom-in duration-300 border border-teal-50">
//             <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto text-[#00a386]">
//               <CheckCircle size={40} />
//             </div>
//             <div className="space-y-2">
//               <h3 className="text-xl font-black text-slate-900">Booking Confirmed!</h3>
//               <p className="text-slate-500 text-sm leading-relaxed">
//                 Your appointment has been successfully scheduled.
//               </p>
//             </div>
//             <button 
//               onClick={() => {
//                 setShowSuccess(false);
//                 navigate("/appointments");
//               }}
//               className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm shadow-md hover:bg-[#008f75] transition-all"
//             >
//               Go to Appointments
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="max-w-screen-2xl mx-auto">
//         <Hero title="Premium Healthcare At Your Fingerprints" />
//         <Certification />
//       </div>

//       <section className="py-24 px-6 lg:px-24 bg-[#f1fcfb]">
//         <div className="max-w-screen-2xl mx-auto text-center mb-16">
//           <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
//             Our <span className="text-[#00a386] italic">Medical Team</span>
//           </h2>
//           <p className="text-slate-500 mt-4 text-lg font-medium">
//             Book appointments quickly with our verified specialists.
//           </p>
//         </div>

//         <div className="flex flex-nowrap lg:flex-row justify-center gap-6 lg:gap-10 max-w-7xl mx-auto overflow-x-auto pb-8 scrollbar-hide px-4">
//           {doctors.map((doc, index) => (
//             <div key={index} className="flex-shrink-0">
//               <div onClick={() => navigate(`/doctor/${doc.name.toLowerCase()}`)} className="cursor-pointer">
//                 <DoctorCard doctor={doc} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <div className="max-w-screen-2xl mx-auto">
//         <Testimonials />
//       </div>

//       <section className="py-20 text-center bg-white border-t border-slate-100 max-w-screen-2xl mx-auto">
//         <h2 className="text-3xl font-black text-[#137d6e] uppercase tracking-tight">
//           Our Medical Services
//         </h2>
//         <p className="text-slate-400 mt-3 font-medium">
//           Expert care for your family's health.
//         </p>
//       </section>

//       {/* Floating Scroll to Top Button */}
//       {showScrollButton && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-10 right-10 z-[100] bg-[#00a386] text-white p-4 rounded-full shadow-2xl hover:bg-[#008f75] transition-all transform hover:scale-110 active:scale-95 animate-in fade-in slide-in-from-bottom-5 duration-300"
//           aria-label="Scroll to top"
//         >
//           <ArrowRight className="-rotate-90" size={24} /> 
//         </button>
//       )}
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Certification from "../components/Certification";
import DoctorCard from "../components/DoctorCard";
import Testimonials from "../components/Testimonials";
import SymptomChecker from "../pages/SymptomChecker"; // IMPORTED NEW COMPONENT
import { CheckCircle, X, ArrowRight, Sparkles } from "lucide-react"; 

const Home = () => {
  const navigate = useNavigate();

  const [showSuccess, setShowSuccess] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const doctors = [
    { name: "Mri", specialty: "Pediatrics", experience: 5, imageUrl: "/images/doctor1.jpg" },
    { name: "Kevin", specialty: "Brain", experience: 12, imageUrl: "/images/doc2.jpg" },
    { name: "Sarah", specialty: "Cardiology", experience: 8, imageUrl: "/images/doc3.jpeg" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white min-h-screen pt-24 overflow-x-hidden relative">
      
      {/* SUCCESS POPUP MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" 
            onClick={() => setShowSuccess(false)}
          ></div>
          <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl relative z-10 text-center space-y-6 animate-in zoom-in duration-300 border border-teal-50">
            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto text-[#00a386]">
              <CheckCircle size={40} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-slate-900">Booking Confirmed!</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Your appointment has been successfully scheduled.
              </p>
            </div>
            <button 
              onClick={() => {
                setShowSuccess(false);
                navigate("/appointments");
              }}
              className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm shadow-md hover:bg-[#008f75] transition-all"
            >
              Go to Appointments
            </button>
          </div>
        </div>
      )}

      <div className="max-w-screen-2xl mx-auto">
        <Hero title="Premium Healthcare At Your Fingerprints" />
        <Certification />
      </div>

      {/* AI SYMPTOM CHECKER SECTION */}
      <section className="py-20 px-6 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full text-[#137d6e] font-black text-[10px] uppercase tracking-widest mx-auto">
              <Sparkles size={14} /> AI Powered Assistant
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight">
              Not Sure Which <span className="text-[#00a386] italic">Specialist</span> To See?
            </h2>
            <p className="text-slate-500 font-medium text-lg">
              Describe your symptoms and let our AI guide you to the right care.
            </p>
          </div>
          <SymptomChecker />
        </div>
      </section>

      <section className="py-24 px-6 lg:px-24 bg-[#f1fcfb]">
        <div className="max-w-screen-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
            Our <span className="text-[#00a386] italic">Medical Team</span>
          </h2>
          <p className="text-slate-500 mt-4 text-lg font-medium">
            Book appointments quickly with our verified specialists.
          </p>
        </div>

        <div className="flex flex-nowrap lg:flex-row justify-center gap-6 lg:gap-10 max-w-7xl mx-auto overflow-x-auto pb-8 scrollbar-hide px-4">
          {doctors.map((doc, index) => (
            <div key={index} className="flex-shrink-0">
              <div onClick={() => navigate(`/doctor/${doc.name.toLowerCase()}`)} className="cursor-pointer">
                <DoctorCard doctor={doc} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-screen-2xl mx-auto">
        <Testimonials />
      </div>

      <section className="py-20 text-center bg-white border-t border-slate-100 max-w-screen-2xl mx-auto">
        <h2 className="text-3xl font-black text-[#137d6e] uppercase tracking-tight">
          Our Medical Services
        </h2>
        <p className="text-slate-400 mt-3 font-medium">
          Expert care for your family's health.
        </p>
      </section>

      {/* Floating Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[100] bg-[#00a386] text-white p-4 rounded-full shadow-2xl hover:bg-[#008f75] transition-all transform hover:scale-110 active:scale-95 animate-in fade-in slide-in-from-bottom-5 duration-300"
          aria-label="Scroll to top"
        >
          <ArrowRight className="-rotate-90" size={24} /> 
        </button>
      )}
    </div>
  );
};

export default Home;