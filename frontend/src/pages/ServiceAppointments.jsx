import React, { useState, useEffect } from "react";
import { Search, Calendar, Clock, Phone, IndianRupee, User, RefreshCw, X, CheckCircle } from "lucide-react";

const ServiceAppointments = () => {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const fetchServiceApts = async () => {
    const res = await fetch("http://localhost:4000/api/admin/service-appointments");
    const data = await res.json();
    setBookings(data);
  };

  useEffect(() => { fetchServiceApts(); }, []);

  const filteredApts = bookings.filter(apt => 
    (filterStatus === "All" || apt.status === filterStatus) &&
    (apt.patientName?.toLowerCase().includes(searchTerm.toLowerCase()) || 
     apt.serviceName?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* HEADER & FILTERS */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="text-left w-full">
            <h1 className="text-3xl font-black text-[#137d6e] uppercase tracking-tight">Service Appointments</h1>
            <p className="text-slate-400 font-bold italic text-xs">Manage patient bookings — quick search & status controls</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-400" size={16} />
              <input 
                type="text" 
                placeholder="Search by patient or service..." 
                className="w-full bg-white border border-teal-50 rounded-full py-2.5 pl-12 pr-4 text-xs font-bold outline-none shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select 
              className="bg-white border border-teal-100 rounded-full px-6 py-2.5 text-xs font-black text-slate-500 outline-none shadow-sm cursor-pointer"
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Completed">Completed</option>
              <option value="Canceled">Canceled</option>
            </select>
            <button onClick={fetchServiceApts} className="p-2.5 bg-white border border-teal-50 rounded-full text-teal-500 hover:bg-teal-50 transition-colors">
              <RefreshCw size={16} />
            </button>
          </div>
        </div>

        {/* APPOINTMENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredApts.map((apt) => (
            <div key={apt._id} className="bg-white rounded-[2rem] p-6 shadow-xl shadow-teal-50/40 border border-slate-50 flex flex-col justify-between space-y-5 relative group">
              
              {/* Patient Header */}
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="bg-teal-50 p-2 rounded-xl text-teal-500"><User size={20}/></div>
                  <div>
                    <h3 className="text-sm font-black text-slate-800 capitalize leading-tight">{apt.patientName}</h3>
                    <p className="text-[10px] font-bold text-slate-400">{apt.patientGender || "Male"} • {apt.patientAge} yrs</p>
                  </div>
                </div>
                <StatusBadge status={apt.status} />
              </div>

              {/* Booking Details */}
              <div className="space-y-2.5 border-t border-b border-slate-50 py-4">
                <DetailRow icon={<Phone size={14}/>} value={apt.patientMobile} />
                <DetailRow icon={<IndianRupee size={14}/>} label="Fees" value={`₹${apt.price || 444}`} isBold />
                <DetailRow icon={<Calendar size={14}/>} label="Date" value={apt.appointmentDate} />
                <DetailRow icon={<Clock size={14}/>} label="Time" value={apt.appointmentTime} />
              </div>

              {/* Service Label */}
              <div className="space-y-1">
                <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none">Service</p>
                <p className="text-xs font-black text-teal-600 capitalize italic">{apt.serviceName || "booking"}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-1">
                <button className="flex-1 bg-slate-50 text-slate-400 py-2.5 rounded-xl font-black text-[10px] uppercase hover:bg-slate-100 transition-colors">Reschedule</button>
                <button className="flex-1 bg-rose-50 text-rose-400 py-2.5 rounded-xl font-black text-[10px] uppercase hover:bg-rose-100 hover:text-rose-600 transition-colors">Cancel</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Sub-components for clean code
const StatusBadge = ({ status }) => {
  const styles = {
    Canceled: "bg-rose-50 text-rose-500 border-rose-100",
    Completed: "bg-blue-50 text-blue-500 border-blue-100",
    Confirmed: "bg-teal-50 text-teal-500 border-teal-100",
    Scheduled: "bg-amber-50 text-amber-500 border-amber-100"
  };
  return (
    <span className={`text-[8px] font-black uppercase px-2.5 py-1 rounded-full border ${styles[status] || styles.Scheduled}`}>
      {status}
    </span>
  );
};

const DetailRow = ({ icon, label, value, isBold }) => (
  <div className="flex items-center gap-3">
    <div className="text-teal-400">{icon}</div>
    <div className="flex items-center gap-1.5 overflow-hidden">
      {label && <span className="text-[10px] font-bold text-slate-400 uppercase">{label}:</span>}
      <span className={`text-[11px] truncate ${isBold ? 'font-black text-slate-800' : 'font-bold text-slate-600'}`}>{value}</span>
    </div>
  </div>
);

export default ServiceAppointments;