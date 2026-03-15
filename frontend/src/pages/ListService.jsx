import React, { useState, useEffect } from "react";
import { Search, RefreshCw, Calendar, IndianRupee, Trash2, ChevronDown } from "lucide-react";

const ListServices = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const fetchServices = async () => {
    const res = await fetch("http://localhost:4000/api/admin/all-services");
    const data = await res.json();
    setServices(data);
  };

  useEffect(() => { fetchServices(); }, []);

  const filteredServices = services.filter(s => 
    (filter === "All" || s.availability === filter) &&
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header and Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-[#137d6e] uppercase tracking-tight">Services</h1>
            <p className="text-slate-400 font-bold italic text-xs">Manage your services - edit, schedule slots or remove</p>
          </div>
          
          <div className="flex flex-col items-end gap-4">
            <div className="flex bg-white p-1 rounded-full border border-teal-50 shadow-sm">
              {["All", "Available", "Unavailable"].map((f) => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2 rounded-full text-[10px] font-black uppercase transition-all ${filter === f ? "bg-[#00a386] text-white shadow-md" : "text-slate-400 hover:text-teal-500"}`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="relative w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-400" size={16} />
              <input 
                type="text" 
                placeholder="Search services..." 
                className="w-full bg-white border border-teal-50 rounded-full py-2.5 pl-12 pr-4 text-xs font-bold outline-none shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-6">
          {filteredServices.map((service) => (
            <div key={service._id} className="bg-white rounded-[2.5rem] p-6 shadow-xl shadow-teal-50/50 border border-slate-50 flex items-center justify-between group transition-transform hover:scale-[1.01]">
              <div className="flex items-center gap-6">
                <img 
                  src={service.imageUrl || "/placeholder-service.jpg"} 
                  className="w-20 h-20 rounded-[1.5rem] object-cover bg-teal-50" 
                  alt={service.name} 
                />
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-slate-800 capitalize leading-none">{service.name}</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{service.description || "Medical Service"}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Calendar size={12} className="text-teal-500" />
                    <span className="text-[10px] font-black text-teal-600 uppercase">{service.slots?.length || 0} slots</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-10">
                <div className="text-right space-y-1">
                  <p className="text-[10px] font-black text-slate-300 uppercase leading-none">Price</p>
                  <p className="text-xl font-black text-[#00a386] flex items-center justify-end gap-1">
                    <IndianRupee size={16} strokeWidth={3} /> {service.price}
                  </p>
                  <span className={`text-[9px] font-black uppercase px-3 py-1 rounded-full ${service.availability === "Available" ? "bg-teal-50 text-teal-600" : "bg-rose-50 text-rose-500"}`}>
                    {service.availability}
                  </span>
                </div>
                
                <div className="flex flex-col gap-2">
                  <button className="bg-teal-50 text-teal-600 p-2.5 rounded-2xl hover:bg-teal-100 transition-colors">
                    <ChevronDown size={18} />
                  </button>
                  <button className="bg-rose-50 text-rose-400 p-2.5 rounded-2xl hover:bg-rose-100 hover:text-rose-600 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-teal-50 text-slate-300 font-black uppercase tracking-widest">
            No services found
          </div>
        )}
      </div>
    </div>
  );
};

export default ListServices;