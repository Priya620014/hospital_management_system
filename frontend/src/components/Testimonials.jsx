
// import React from "react";

// const Testimonials = () => {
//   // Data for Medical Professionals Column
//   const doctors = [
//     { name: "Dr. Robert Martinez", role: "Pediatrician", text: "The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care.", img: "/images/doc1.png" },
//     { name: "Dr. Amanda Lee", role: "Dermatologist", text: "Excellent platform for managing appointments. Automated reminders reduce no-shows dramatically.", img: "/images/doc2.png" },
//     { name: "Dr. James Wilson", role: "Neurologist", text: "Patient management is much more organized. Highly recommend this for any clinic.", img: "/images/doc3.png" },
//   ];

//   // Data for Patients Column
//   const patients = [
//     { name: "Emily Williams", text: "Booking appointments online 24/7 is a game-changer. The confirmation system gives me peace of mind.", img: "/images/p1.png" },
//     { name: "David Thompson", text: "The wait time has reduced significantly since using this platform. Very convenient and user-friendly!", img: "/images/p2.png" },
//     { name: "Jessica Reed", text: "Scheduling appointments has never been easier. The interface is intuitive and reminders are very helpful!", img: "/images/p3.png" },
//   ];

//   // Double arrays to create a seamless infinite vertical loop
//   const verticalDoctors = [...doctors, ...doctors];
//   const verticalPatients = [...patients, ...patients];

//   return (
//     <section className="py-24 bg-[#f1fcfb] px-6 lg:px-24">
//       {/* Header with dual-color branding */}
//       <div className="text-center mb-16 space-y-4">
//         <h2 className="text-5xl font-black text-[#137d6e] leading-tight">
//           Voices of <span className="text-slate-900">Trust</span>
//         </h2>
//         <p className="text-slate-500 max-w-2xl mx-auto font-medium">
//           Real stories from doctors and patients sharing their positive experiences with our healthcare platform.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto h-[550px] overflow-hidden relative">
        
//         {/* MEDICAL PROFESSIONALS COLUMN (Blue Theme) */}
//         <div className="bg-[#ebf5ff] rounded-[2.5rem] border border-blue-100 p-8 relative overflow-hidden">
//           <h3 className="text-center font-black text-blue-700 mb-8 flex items-center justify-center gap-2 text-lg">
//             🩺 Medical Professionals
//           </h3>
//           {/* Vertical Marquee Container */}
//           <div className="flex flex-col animate-marquee-vertical gap-6">
//             {verticalDoctors.map((item, i) => (
//               <TestimonialCard key={i} item={item} color="blue" />
//             ))}
//           </div>
//         </div>

//         {/* PATIENTS COLUMN (Green Theme) */}
//         <div className="bg-[#e6fcf5] rounded-[2.5rem] border border-green-100 p-8 relative overflow-hidden">
//           <h3 className="text-center font-black text-green-700 mb-8 flex items-center justify-center gap-2 text-lg">
//             👤 Patients
//           </h3>
//           <div className="flex flex-col animate-marquee-vertical gap-6">
//             {verticalPatients.map((item, i) => (
//               <TestimonialCard key={i} item={item} color="green" />
//             ))}
//           </div>
//         </div>
        
//       </div>
//     </section>
//   );
// };

// const TestimonialCard = ({ item, color }) => (
//   <div className="bg-white p-6 rounded-[2rem] shadow-md border border-slate-50 flex gap-4 items-start transition-transform hover:scale-[1.02]">
//     <img 
//       src="/images/reviewimage.avif" 
//       alt={item.name} 
//       className="w-14 h-14 rounded-full object-cover border-2 border-slate-100 flex-shrink-0" 
//     />
//     <div className="space-y-2">
//       <div className="flex justify-between items-center gap-4">
//         <h4 className={`font-black text-base ${color === 'blue' ? 'text-blue-900' : 'text-green-900'}`}>
//           {item.name}
//         </h4>
//         <span className="text-yellow-400 text-xs flex">★★★★★</span>
//       </div>
//       {item.role && (
//         <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
//           {item.role}
//         </p>
//       )}
//       <p className="text-sm text-slate-600 italic leading-relaxed">
//         "{item.text}"
//       </p>
//     </div>
//   </div>
// );

// export default Testimonials;
import React from "react";

const Testimonials = () => {
  const doctors = [
    { name: "Dr. Amanda Lee", role: "Dermatologist", text: "Excellent platform for managing appointments. Automated reminders reduce no-shows dramatically.", img: "/images/doc2.png" },
    { name: "Dr. Sarah Johnson", role: "Cardiologist", text: "The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care.", img: "/images/doc3.png" },
    { name: "Dr. Robert Martinez", role: "Pediatrician", text: "This platform has streamlined our clinic operations significantly. Patient management is much more organized.", img: "/images/doc1.png" },
  ];

  const patients = [
    { name: "Emily Williams", text: "Booking appointments online 24/7 is a game-changer. The confirmation system gives me peace of mind.", img: "/images/p1.png" },
    { name: "David Thompson", text: "The wait time has reduced significantly since using this platform. Very convenient and user-friendly!", img: "/images/p2.png" },
    { name: "Michael Chen", text: "Scheduling appointments has never been easier. The interface is intuitive and reminders are very helpful!", img: "/images/p3.png" },
  ];

  const verticalDoctors = [...doctors, ...doctors];
  const verticalPatients = [...patients, ...patients];

  return (
    <section className="py-24 bg-white px-6 lg:px-24">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-6xl font-black text-[#137d6e] leading-tight">
          Voices of <span className="text-slate-900">Trust</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium">
          Real stories from doctors and patients sharing their positive experiences with our healthcare platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto h-[600px] overflow-hidden relative">
        
        {/* MEDICAL PROFESSIONALS COLUMN */}
        <div className="group relative bg-[#ebf5ff] rounded-[2.5rem] border border-blue-100 p-8 pt-0 overflow-hidden">
          {/* Specific Header with Border */}
          <div className="sticky top-0 z-30 bg-[#ebf5ff] py-6 mb-4">
            <h3 className="text-center font-black text-blue-700 flex items-center justify-center gap-2 text-xl py-3 px-6 border-2 border-blue-200 rounded-2xl bg-white/50 shadow-sm">
              👨‍⚕️ Medical Professionals
            </h3>
          </div>
          
          {/* Column that pauses on hover */}
          <div className="flex flex-col animate-marquee-vertical gap-6 group-hover:[animation-play-state:paused]">
            {verticalDoctors.map((item, i) => (
              <TestimonialCard key={i} item={item} color="blue" />
            ))}
          </div>
        </div>

        {/* PATIENTS COLUMN */}
        <div className="group relative bg-[#e6fcf5] rounded-[2.5rem] border border-green-100 p-8 pt-0 overflow-hidden">
          {/* Specific Header with Border */}
          <div className="sticky top-0 z-30 bg-[#e6fcf5] py-6 mb-4">
            <h3 className="text-center font-black text-green-700 flex items-center justify-center gap-2 text-xl py-3 px-6 border-2 border-green-200 rounded-2xl bg-white/50 shadow-sm">
              👤 Patients
            </h3>
          </div>

          {/* Column that pauses on hover */}
          <div className="flex flex-col animate-marquee-vertical gap-6 group-hover:[animation-play-state:paused]">
            {verticalPatients.map((item, i) => (
              <TestimonialCard key={i} item={item} color="green" />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

const TestimonialCard = ({ item, color }) => (
  <div className="bg-white p-6 rounded-[2rem] shadow-md border border-slate-50 flex gap-5 items-start">
    <img src="/images/reviewimage2.avif" alt="review" className="w-14 h-14 rounded-full object-cover border-2 border-slate-100 flex-shrink-0" />
    <div className="space-y-2 flex-1">
      <div className="flex justify-between items-start">
        <div>
          <h4 className={`font-black text-lg ${color === 'blue' ? 'text-blue-900' : 'text-green-900'}`}>
            {item.name}
          </h4>
          {item.role && <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{item.role}</p>}
        </div>
        <span className="text-yellow-400 text-sm">★★★★★</span>
      </div>
      <p className="text-sm text-slate-600 italic leading-relaxed">
        "{item.text}"
      </p>
    </div>
  </div>
);

export default Testimonials;