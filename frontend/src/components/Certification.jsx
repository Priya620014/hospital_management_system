
// import React from "react";

// const Certification = () => {
//   const certifications = [
//     { name: "NABH Accredited", img: "/images/nabh.webp" },
//     { name: "Medical Council", img: "/images/medicalcouncil.svg" },
//     { name: "Quality Healthcare", img: "/images/qualityHealthcare.webp" },
//     { name: "Paramedical Council", img: "/images/icon3.webp" },
//     { name: "Ministry of Health", img: "/images/icon2.webp" },
//     { name: "Medical Commission", img: "/images/medicalCommision.webp" },
//   ];

//   // Double the array to create a seamless loop for the marquee
//   const scrollingItems = [...certifications, ...certifications];

//   return (
//     <div className="bg-white py-20 border-t border-slate-50 overflow-hidden">
//       {/* Section Header */}
//       <div className="text-center mb-16 space-y-4 px-6">
//         <div className="flex items-center justify-center gap-6">
//           <div className="h-[1px] w-12 lg:w-24 bg-teal-200"></div>
//           <h2 className="text-3xl lg:text-5xl font-black text-[#137d6e] tracking-tight uppercase">
//             Certified & Excellence
//           </h2>
//           <div className="h-[1px] w-12 lg:w-24 bg-teal-200"></div>
//         </div>
        
//         <p className="text-slate-400 font-medium text-sm lg:text-base">
//           Government recognized and internationally accredited healthcare standards
//         </p>

//         <div className="flex justify-center pt-2">
//           {/* Increased size of "Officially Certified" badge */}
//           <div className="flex items-center gap-3 bg-green-50 border border-green-100 px-6 py-2.5 rounded-full shadow-sm">
//             <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
//             <span className="text-xs font-black text-green-600 uppercase tracking-widest">
//               Officially Certified
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Horizontal Scrolling Logo Marquee */}
//       <div className="relative flex overflow-x-hidden group">
//         <div className="flex animate-marquee whitespace-nowrap items-center py-4">
//           {scrollingItems.map((item, index) => (
//             <div key={index} className="flex flex-col items-center gap-4 px-10 lg:px-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
//               {/* Reduced size of certification images */}
//               <div className="h-12 lg:h-14 w-auto">
//                 <img 
//                   src={item.img} 
//                   alt={item.name} 
//                   className="h-full w-full object-contain"
//                 />
//               </div>
//               <p className="text-[9px] lg:text-[10px] font-bold text-slate-400 uppercase tracking-tighter text-center max-w-[70px] whitespace-normal">
//                 {item.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Certification;
import React from "react";

const Certification = () => {
  const certifications = [
    { name: "NABH Accredited", img: "/images/nabh.webp" },
    { name: "Medical Council", img: "/images/medicalcouncil.svg" },
    { name: "Quality Healthcare", img: "/images/qualityHealthcare.webp" },
    { name: "Paramedical Council", img: "/images/icon3.webp" },
    { name: "Ministry of Health", img: "/images/icon2.webp" },
    { name: "Medical Commission", img: "/images/medicalCommision.webp" },
  ];

  // Double the array for a seamless infinite loop
  const scrollingItems = [...certifications, ...certifications];

  return (
    <div className="bg-white py-20 border-t border-slate-50 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-16 space-y-4 px-6">
        <div className="flex items-center justify-center gap-6">
          <div className="h-[1px] w-12 lg:w-24 bg-teal-200"></div>
          <h2 className="text-3xl lg:text-5xl font-black text-[#137d6e] tracking-tight uppercase">
            Certified & Excellence
          </h2>
          <div className="h-[1px] w-12 lg:w-24 bg-teal-200"></div>
        </div>
        
        <p className="text-slate-400 font-medium text-sm lg:text-base">
          Government recognized and internationally accredited healthcare standards
        </p>

        <div className="flex justify-center pt-2">
          {/* Maintained the larger "Officially Certified" badge */}
          <div className="flex items-center gap-3 bg-green-50 border border-green-100 px-6 py-2.5 rounded-full shadow-sm">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-black text-green-600 uppercase tracking-widest">
              Officially Certified
            </span>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Logo Marquee */}
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap items-center py-4">
          {scrollingItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-4 px-10 lg:px-16 transition-all duration-500 cursor-pointer">
              {/* Size adjusted to h-16 (64px) - smaller than original h-20, larger than previous h-14 */}
              <div className="h-14 lg:h-16 w-auto">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="h-full w-full object-contain" // Removed grayscale classes
                />
              </div>
              <p className="text-[10px] lg:text-xs font-bold text-slate-500 uppercase tracking-tighter text-center max-w-[90px] whitespace-normal">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;