// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { 
//   LayoutDashboard, UserPlus, Users, Calendar, 
//   Grid, List, ListOrdered 
// } from "lucide-react";

// const AdminNavbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Navigation Items matching your image
//   const navItems = [
//     { label: "Dashboard", path: "/admin-dashboard", icon: <LayoutDashboard size={18} /> },
//     { label: "Add Doctor", path: "/admin/add-doctor", icon: <UserPlus size={18} /> },
//     { label: "List Doctors", path: "/admin/list-doctors", icon: <Users size={18} /> },
//     { label: "Appointments", path: "/admin/appointments", icon: <Calendar size={18} /> },
//     { label: "Service Dashboard", path: "/admin/service-dashboard", icon: <Grid size={18} /> },
//     { label: "Add Service", path: "/admin/add-service", icon: <UserPlus size={18} /> },
//     { label: "List Services", path: "/admin/list-services", icon: <List size={18} /> },
//     { label: "Service Appointments", path: "/admin/service-appointments", icon: <Calendar size={18} /> },
//   ];

//   return (
//     <div className="fixed top-0 left-0 w-full z-[150] bg-[#f1fcfb] px-6 py-4">
//       <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
//         {/* LOGO */}
//         <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
//           <img src="/images/logo.jpeg" alt="Medicare+" className="w-12 h-12" />
//           <div className="hidden md:block">
//             <h1 className="text-xl font-black text-[#137d6e] leading-none uppercase">MediCare+</h1>
//             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Healthcare Solutions</p>
//           </div>
//         </div>

//         {/* PILL NAVIGATION */}
//         <div className="bg-white/80 backdrop-blur-md px-6 py-2 rounded-full shadow-lg border border-teal-50 flex items-center gap-2 overflow-x-auto scrollbar-hide">
//           {navItems.map((item) => (
//             <button
//               key={item.label}
//               onClick={() => navigate(item.path)}
//               className={`flex flex-col items-center gap-1 px-4 py-2 rounded-full transition-all group ${
//                 location.pathname === item.path 
//                 ? "bg-[#f1fcfb] text-[#00a386] shadow-sm" 
//                 : "text-slate-400 hover:text-slate-600"
//               }`}
//             >
//               <span className={`${location.pathname === item.path ? "text-[#00a386]" : "text-slate-400 group-hover:text-teal-500"}`}>
//                 {item.icon}
//               </span>
//               <span className="text-[9px] font-black uppercase tracking-tighter whitespace-nowrap">{item.label}</span>
//             </button>
//           ))}
//         </div>

//         {/* SIGN OUT */}
//         <button 
//           onClick={() => navigate("/")}
//           className="bg-orange-500 text-white px-8 py-3 rounded-full font-black text-xs uppercase shadow-lg shadow-orange-100 hover:bg-orange-600 transition-all"
//         >
//           Sign Out
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminNavbar;
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, UserPlus, Users, Calendar, 
  Grid, List, LogOut, X 
} from "lucide-react";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // NEW: State for Logout Confirmation Modal
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Function to handle actual logout
  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // Clear the session
    localStorage.removeItem("adminEmail");
    setShowLogoutModal(false);
    navigate("/"); // Redirect to login page
  };

  const navItems = [
    { label: "Dashboard", path: "/admin/dashboard", icon: <LayoutDashboard size={18} /> },
    { label: "Add Doctor", path: "/admin/add-doctor", icon: <UserPlus size={18} /> },
    { label: "List Doctors", path: "/admin/list-doctors", icon: <Users size={18} /> },
    { label: "Appointments", path: "/admin/appointments", icon: <Calendar size={18} /> },
    { label: "Service Dashboard", path: "/admin/service-dashboard", icon: <Grid size={18} /> },
    { label: "Add Service", path: "/admin/add-service", icon: <UserPlus size={18} /> },
    { label: "List Services", path: "/admin/list-services", icon: <List size={18} /> },
    { label: "Service Appointments", path: "/admin/service-appointments", icon: <Calendar size={18} /> },
  ];

  return (
    <>
      {/* MODERN WHITE LOGOUT POPUP */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center px-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm animate-in fade-in duration-300" 
            onClick={() => setShowLogoutModal(false)}
          ></div>
          
          {/* Confirmation Card */}
          <div className="bg-white w-full max-w-sm rounded-[3rem] p-10 shadow-2xl relative z-10 text-center space-y-6 border border-slate-50 animate-in zoom-in duration-300">
            <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-500 mb-2">
              <LogOut size={42} />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-slate-900 leading-tight">Confirm Logout</h3>
              <p className="text-slate-400 font-bold text-sm leading-relaxed px-4">
                Are you sure you want to logout? You will need to login again to access the admin panel.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <button 
                onClick={handleLogout}
                className="w-full bg-rose-500 text-white py-4 rounded-full font-black text-sm shadow-xl shadow-rose-100 hover:bg-rose-600 transition-all active:scale-95"
              >
                YES, LOGOUT
              </button>
              <button 
                onClick={() => setShowLogoutModal(false)}
                className="w-full bg-white text-slate-400 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:text-slate-600 transition-colors"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-[150] bg-[#f1fcfb] px-6 py-4">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <img src="/images/logo.jpeg" alt="Medicare+" className="w-12 h-12" />
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

          {/* SIGN OUT BUTTON TRIGGERS MODAL */}
          <button 
            onClick={() => setShowLogoutModal(true)}
            className="bg-orange-500 text-white px-8 py-3 rounded-full font-black text-xs uppercase shadow-lg shadow-orange-100 hover:bg-orange-600 transition-all active:scale-95"
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;