import React from "react";
import { Activity, Thermometer, Droplets, FlaskConical, HeartPulse, Microscope } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Services = () => {
  const navigate = useNavigate();
  const diagnosticServices = [
    {
      title: "Heart Rating",
      description: "Advanced ECG and cardiovascular monitoring for heart health.",
      icon: <HeartPulse className="text-teal-600" size={32} />,
      img: "/images/heart.webp"
    },
    {
      title: "General Consultation",
      description: "Comprehensive health screenings and expert medical advice.",
      icon: <Activity className="text-teal-600" size={32} />,
      img: "/images/gn.webp"
    },
    {
      title: "Blood Sugar Test",
      description: "Precise glucose monitoring and diabetes management support.",
      icon: <Droplets className="text-teal-600" size={32} />,
      img: "/images/bloodsugar.jpg"
    },
    {
      title: "Lab Analysis",
      description: "State-of-the-art pathology for accurate diagnostic results.",
      icon: <FlaskConical className="text-teal-600" size={32} />,
      img: "/images/lab.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f1fcfb] py-20 px-6 lg:px-24">
      {/* Header */}
      <div className="text-center mb-20 space-y-4">
        <h1 className="text-5xl lg:text-6xl font-black text-[#137d6e] leading-tight">
          Our <span className="text-slate-900">Diagnostic Services</span>
        </h1>
        <p className="text-teal-600 font-bold text-lg italic max-w-2xl mx-auto">
          Safe, accurate & reliable testing for you and your family.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {diagnosticServices.map((service, index) => (
          <div key={index} className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-50 hover:shadow-2xl transition-all duration-300 group">
            
            {/* Image/Icon Container */}
            {/* Image/Icon Container */}
<div className="relative mb-6 overflow-hidden rounded-[2rem] h-56 bg-teal-50 flex items-center justify-center">
  {service.img ? (
    // Render the actual image if the path exists
    <img 
      src={service.img} 
      alt={service.title} 
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
    />
  ) : (
    // Fallback to icon if no image is found
    <div className="bg-white p-6 rounded-full shadow-md group-hover:scale-110 transition-transform duration-500">
      {service.icon}
    </div>
  )}
  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/10 to-transparent"></div>
</div>
            {/* Content */}
            <div className="text-center px-4">
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm font-medium mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Primary Button style matching Doctor Cards */}
              <button onClick={() => navigate(`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`)} className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#10b981] to-[#34d399] text-white py-4 rounded-full font-black text-lg hover:shadow-lg hover:opacity-90 transition-all">
                <span className="text-xl">»</span> Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
