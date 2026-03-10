import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, UserPlus, Users, Calendar, 
  Grid, List, ListOrdered 
} from "lucide-react";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Navigation Items matching your image
  const navItems = [
    { label: "Dashboard", path: "/admin-dashboard", icon: <LayoutDashboard size={18} /> },
    { label: "Add Doctor", path: "/admin/add-doctor", icon: <UserPlus size={18} /> },
    { label: "List Doctors", path: "/admin/list-doctors", icon: <Users size={18} /> },
    { label: "Appointments", path: "/admin/appointments", icon: <Calendar size={18} /> },
    { label: "Service Dashboard", path: "/admin/service-dashboard", icon: <Grid size={18} /> },
    { label: "Add Service", path: "/admin/add-service", icon: <UserPlus size={18} /> },
    { label: "List Services", path: "/admin/list-services", icon: <List size={18} /> },
    { label: "Service Appointments", path: "/admin/service-appointments", icon: <Calendar size={18} /> },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[150] bg-[#f1fcfb] px-6 py-4">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
          <img src="images/logo.jpeg" alt="Medicare+" className="w-12 h-12" />
          <div className="hidden md:block">
            <h1 className="text-xl font-black text-[#137d6e] leading-none uppercase">MediCare+</h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Healthcare Solutions</p>
          </div>
        </div>

        {/* PILL NAVIGATION */}
        <div className="bg-white/80 backdrop-blur-md px-6 py-2 rounded-full shadow-lg border border-teal-50 flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-full transition-all group ${
                location.pathname === item.path 
                ? "bg-[#f1fcfb] text-[#00a386] shadow-sm" 
                : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <span className={`${location.pathname === item.path ? "text-[#00a386]" : "text-slate-400 group-hover:text-teal-500"}`}>
                {item.icon}
              </span>
              <span className="text-[9px] font-black uppercase tracking-tighter whitespace-nowrap">{item.label}</span>
            </button>
          ))}
        </div>

        {/* SIGN OUT */}
        <button 
          onClick={() => navigate("/")}
          className="bg-orange-500 text-white px-8 py-3 rounded-full font-black text-xs uppercase shadow-lg shadow-orange-100 hover:bg-orange-600 transition-all"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default AdminNavbar;