// import React, { useState, useEffect } from "react";
// import { Search, RefreshCw, Layers, Calendar, IndianRupee, CheckCircle, XCircle } from "lucide-react";

// const ServiceDashboard = () => {
//   const [data, setData] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   const fetchServiceData = async () => {
//     try {
//       const res = await fetch("http://localhost:4000/api/admin/service-stats");
//       if (!res.ok) throw new Error("Server Error");
//       const result = await res.json();
//       setData(result);
//     } catch (err) {
//       console.error("Dashboard Fetch Error:", err);
//     }
//   };

//   useEffect(() => { fetchServiceData(); }, []);

//   // 1. Loading check MUST come before any logic using 'data'
//   if (!data || !data.serviceList) {
//     return <div className="pt-40 text-center font-black text-teal-600">Loading Dashboard...</div>;
//   }

//   // 2. Now it is safe to filter
//   const filteredServices = data.serviceList.filter(s => 
//     s.name?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-16">
//       <div className="max-w-7xl mx-auto space-y-10">
        
//         {/* HEADER SECTION */}
//         <div className="flex justify-between items-end">
//           <div className="space-y-2">
//             <h1 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Service Dashboard</h1>
//             <p className="text-slate-400 font-bold italic text-sm">Overview of services, appointments and earnings</p>
//           </div>
//           <div className="flex items-center gap-4">
//             <span className="text-slate-400 font-bold text-xs">{data.serviceList.length} services</span>
//             <button onClick={fetchServiceData} className="flex items-center gap-2 text-[#00a386] border border-teal-100 bg-white px-4 py-2 rounded-full font-black text-xs hover:bg-teal-50 transition-all">
//               <RefreshCw size={14} /> Refresh
//             </button>
//           </div>
//         </div>

//         {/* STATS BUBBLES */}
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           <ServiceStat icon={<Layers />} label="Total Services" value={data.stats.totalServices} color="text-teal-600" />
//           <ServiceStat icon={<Calendar />} label="Total Appointments" value={data.stats.totalAppointments} color="text-teal-600" />
//           <ServiceStat icon={<IndianRupee />} label="Total Earning" value={`₹${data.stats.totalEarning}`} color="text-[#00a386]" />
//           <ServiceStat icon={<CheckCircle />} label="Completed" value={data.stats.completed} color="text-teal-600" />
//           <ServiceStat icon={<XCircle />} label="Canceled" value={data.stats.canceled} color="text-teal-600" />
//         </div>

//         {/* SEARCH BAR */}
//         <div className="relative max-w-sm">
//           <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-teal-400" size={18} />
//           <input 
//             type="text" 
//             placeholder="Search service..." 
//             className="w-full bg-white border border-teal-100 rounded-full py-3.5 pl-14 pr-6 outline-none shadow-sm text-sm font-bold"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         {/* SERVICE TABLE */}
//         <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-teal-50 border border-slate-50">
//           <table className="w-full text-left">
//             <thead>
//               <tr className="text-[10px] font-black uppercase text-slate-400 border-b border-slate-50 tracking-widest">
//                 <th className="px-10 py-6">Service</th>
//                 <th className="px-10 py-6">Price</th>
//                 <th className="px-10 py-6 text-center">Appointments</th>
//                 <th className="px-10 py-6 text-center">Completed</th>
//                 <th className="px-10 py-6 text-center">Canceled</th>
//                 <th className="px-10 py-6 text-right">Earning</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-50">
//               {filteredServices.map((service, idx) => (
//                 <tr key={idx} className="hover:bg-teal-50/20 transition-colors">
//                   <td className="px-10 py-6 flex items-center gap-4">
//                     <img src={service.imageUrl || "/images/service-placeholder.jpg"} className="w-12 h-12 rounded-xl object-cover bg-teal-50" />
//                     <span className="font-black text-slate-700 capitalize">{service.name}</span>
//                   </td>
//                   <td className="px-10 py-6 font-black text-slate-600">₹{service.price}</td>
//                   <td className="px-10 py-6 text-center font-bold text-slate-500">{service.appointments}</td>
//                   <td className="px-10 py-6 text-center font-bold text-teal-600">{service.completed}</td>
//                   <td className="px-10 py-6 text-center font-bold text-rose-400">{service.canceled}</td>
//                   <td className="px-10 py-6 text-right font-black text-slate-800">₹{service.earning}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ServiceStat = ({ icon, label, value, color }) => (
//   <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-teal-50 flex items-center gap-4">
//     <div className={`bg-[#f1fcfb] p-4 rounded-full ${color}`}>{icon}</div>
//     <div>
//       <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter leading-none mb-1">{label}</p>
//       <p className={`text-xl font-black ${color} leading-none`}>{value}</p>
//     </div>
//   </div>
// );

// export default ServiceDashboard;
import React, { useState, useEffect } from "react";
import { Layers, Calendar, IndianRupee, CheckCircle, XCircle, Search, RefreshCw } from "lucide-react";

const ServiceDashboard = () => {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    const res = await fetch("http://localhost:4000/api/admin/service-stats");
    const json = await res.json();
    setData(json);
  };

  useEffect(() => { fetchData(); }, []);

  if (!data) return <div className="pt-40 text-center font-black text-teal-600">Syncing...</div>;

  return (
    <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Service Dashboard</h1>
            <p className="text-slate-400 font-bold italic text-xs">Overview of services, appointments and earnings</p>
          </div>
          <button onClick={fetchData} className="flex items-center gap-2 text-[#00a386] border border-teal-100 bg-white px-5 py-2 rounded-full font-black text-xs hover:shadow-md transition-all">
            <RefreshCw size={14} /> Refresh
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <StatBubble icon={<Layers/>} label="Total Services" value={data.stats.totalServices} />
          <StatBubble icon={<Calendar/>} label="Total Appointments" value={data.stats.totalAppointments} />
          <StatBubble icon={<IndianRupee/>} label="Total Earning" value={`₹${data.stats.totalEarning}`} isGreen />
          <StatBubble icon={<CheckCircle/>} label="Completed" value={data.stats.completed} />
          <StatBubble icon={<XCircle/>} label="Canceled" value={data.stats.canceled} />
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-teal-50/50 border border-slate-50">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 text-[10px] font-black uppercase text-slate-400 tracking-widest">
              <tr>
                <th className="px-10 py-6">Service</th>
                <th className="px-10 py-6">Price</th>
                <th className="px-10 py-6 text-center">Appointments</th>
                <th className="px-10 py-6 text-center">Completed</th>
                <th className="px-10 py-6 text-center">Canceled</th>
                <th className="px-10 py-6 text-right">Earning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {data.serviceList.map((service, i) => (
                <tr key={i} className="hover:bg-teal-50/10 transition-colors">
                  <td className="px-10 py-6 flex items-center gap-4">
                    <img src={service.imageUrl} className="w-12 h-12 rounded-xl object-cover" alt="" />
                    <span className="font-black text-slate-700 text-lg">{service.name}</span>
                  </td>
                  <td className="px-10 py-6 font-black text-slate-500">₹{service.price}</td>
                  <td className="px-10 py-6 text-center font-bold text-slate-400">{service.appointments}</td>
                  <td className="px-10 py-6 text-center font-bold text-teal-600">{service.completed}</td>
                  <td className="px-10 py-6 text-center font-bold text-rose-400">{service.canceled}</td>
                  <td className="px-10 py-6 text-right font-black text-slate-800">₹{service.earning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const StatBubble = ({ icon, label, value, isGreen }) => (
  <div className="bg-white p-5 rounded-[2rem] border border-teal-50 flex items-center gap-4 shadow-sm">
    <div className={`p-3 rounded-full ${isGreen ? 'bg-green-50 text-green-600' : 'bg-teal-50 text-teal-600'}`}>
      {React.cloneElement(icon, { size: 20 })}
    </div>
    <div>
      <p className="text-[9px] font-black text-slate-300 uppercase leading-none mb-1">{label}</p>
      <p className={`text-xl font-black leading-none ${isGreen ? 'text-green-600' : 'text-slate-700'}`}>{value}</p>
    </div>
  </div>
);

export default ServiceDashboard;