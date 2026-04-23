import React, { useState, useEffect } from "react";
import { Search, Calendar, Clock, Phone, IndianRupee, User, RefreshCw, X, CheckCircle, AlertTriangle } from "lucide-react";

const ServiceAppointments = () => {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // Default to Pending (Scheduled/Confirmed) view
  const [viewStatus, setViewStatus] = useState("Pending"); 
  const [cancelModal, setCancelModal] = useState({ show: false, id: null });

  const fetchServiceApts = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/service-appointments`);
      const data = await res.json();
      setBookings(data);
    } catch (err) { console.error("Fetch error:", err); }
  };

  useEffect(() => { fetchServiceApts(); }, []);

  // Logic to mark service as Completed
  const handleComplete = async (id) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/services/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "Completed" }),
      });
      if (res.ok) fetchServiceApts(); 
    } catch (err) { console.error("Update failed:", err); }
  };

  // Logic to mark service as Cancelled
  const confirmCancellation = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/services/${cancelModal.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "Cancelled" }),
      });
      if (res.ok) {
        setCancelModal({ show: false, id: null });
        fetchServiceApts();
      }
    } catch (err) { console.error("Cancellation failed:", err); }
  };

  const filteredApts = bookings.filter(apt => {
    const status = apt.status || "Scheduled";
    
    // Tab filtering logic
    let matchesTab = false;
    if (viewStatus === "Pending") matchesTab = (status === "Scheduled" || status === "Confirmed");
    else if (viewStatus === "Completed") matchesTab = (status === "Completed");
    else if (viewStatus === "Cancelled") matchesTab = (status === "Cancelled" || status === "Canceled");

    const matchesSearch = apt.patientName?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          apt.serviceName?.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-12 relative">
      
      {/* CANCELLATION MODAL */}
      {cancelModal.show && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm transition-opacity" onClick={() => setCancelModal({ show: false, id: null })}></div>
          <div className="bg-white w-full max-w-sm rounded-[3rem] p-10 shadow-2xl relative z-10 text-center space-y-6 border border-slate-50 animate-in zoom-in duration-300">
            <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-500 mb-2">
              <AlertTriangle size={42} />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-slate-900 leading-tight">Cancel Booking?</h3>
              <p className="text-slate-400 font-bold text-sm leading-relaxed px-4 text-center">This action will remove the service from the active schedule.</p>
            </div>
            <div className="flex flex-col gap-3 pt-4">
              <button onClick={confirmCancellation} className="w-full bg-rose-500 text-white py-4 rounded-full font-black text-sm shadow-xl hover:bg-rose-600 transition-all active:scale-95 uppercase">Confirm Cancel</button>
              <button onClick={() => setCancelModal({ show: false, id: null })} className="w-full bg-white text-slate-400 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:text-slate-600">Go Back</button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* HEADER & FILTERS */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="text-left w-full">
            <h1 className="text-3xl font-black text-[#137d6e] uppercase tracking-tight">Service Appointments</h1>
            <p className="text-slate-400 font-bold italic text-xs mb-6">Manage patient bookings — quick search & status controls</p>
            
            {/* STATUS TABS */}
            <div className="flex gap-2 bg-white/50 p-1.5 rounded-2xl w-fit border border-teal-100/50">
              {["Pending", "Completed", "Cancelled"].map((status) => (
                <button
                  key={status}
                  onClick={() => setViewStatus(status)}
                  className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    viewStatus === status 
                      ? "bg-[#137d6e] text-white shadow-lg shadow-teal-100" 
                      : "text-slate-400 hover:text-[#137d6e]"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-400" size={16} />
              <input 
                type="text" 
                placeholder="Search patient or service..." 
                className="w-full bg-white border border-teal-50 rounded-full py-2.5 pl-12 pr-4 text-xs font-bold outline-none shadow-sm shadow-teal-50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button onClick={fetchServiceApts} className="p-2.5 bg-white border border-teal-50 rounded-full text-teal-500 hover:bg-teal-50 transition-all active:rotate-180">
              <RefreshCw size={16} />
            </button>
          </div>
        </div>

        {/* APPOINTMENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredApts.length > 0 ? filteredApts.map((apt) => (
            <div key={apt._id} className="bg-white rounded-[2rem] p-6 shadow-xl shadow-teal-50/40 border border-slate-50 flex flex-col justify-between space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
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

              <div className="space-y-2.5 border-t border-b border-slate-50 py-4">
                <DetailRow icon={<Phone size={14}/>} value={apt.patientMobile} />
                <DetailRow icon={<IndianRupee size={14}/>} label="Fees" value={`₹${apt.price || 444}`} isBold />
                <DetailRow icon={<Calendar size={14}/>} label="Date" value={apt.appointmentDate} />
                <DetailRow icon={<Clock size={14}/>} label="Time" value={apt.appointmentTime} />
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none">Service</p>
                  <p className="text-xs font-black text-[#137d6e] capitalize italic truncate">{apt.serviceName || "Booking"}</p>
                </div>

                {viewStatus === "Pending" && (
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleComplete(apt._id)}
                      className="w-full flex items-center justify-center gap-2 bg-[#137d6e] text-white py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#0e5e53] transition-all shadow-lg shadow-teal-100"
                    >
                      <CheckCircle size={14} />
                      Mark Completed
                    </button>
                    <button 
                      onClick={() => setCancelModal({ show: true, id: apt._id })}
                      className="w-full text-rose-300 hover:text-rose-500 font-black text-[10px] uppercase tracking-tighter transition-colors"
                    >
                      Cancel Booking
                    </button>
                  </div>
                )}
              </div>
            </div>
          )) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-slate-300 font-black uppercase tracking-widest text-sm">No {viewStatus} Service Bookings</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Sub-components
const StatusBadge = ({ status }) => {
  const styles = {
    Cancelled: "bg-rose-50 text-rose-500 border-rose-100",
    Canceled: "bg-rose-50 text-rose-500 border-rose-100",
    Completed: "bg-green-50 text-green-500 border-green-100",
    Confirmed: "bg-teal-50 text-teal-500 border-teal-100",
    Scheduled: "bg-amber-50 text-amber-500 border-amber-100"
  };
  return (
    <span className={`text-[8px] font-black uppercase px-2.5 py-1 rounded-full border ${styles[status] || styles.Scheduled}`}>
      {status || "Scheduled"}
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