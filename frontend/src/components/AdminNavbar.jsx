// // // import React from "react";
// // // import { useNavigate, useLocation } from "react-router-dom";
// // // import { 
// // //   LayoutDashboard, UserPlus, Users, Calendar, 
// // //   Grid, List, ListOrdered 
// // // } from "lucide-react";

// // // const AdminNavbar = () => {
// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   // Navigation Items matching your image
// // //   const navItems = [
// // //     { label: "Dashboard", path: "/admin-dashboard", icon: <LayoutDashboard size={18} /> },
// // //     { label: "Add Doctor", path: "/admin/add-doctor", icon: <UserPlus size={18} /> },
// // //     { label: "List Doctors", path: "/admin/list-doctors", icon: <Users size={18} /> },
// // //     { label: "Appointments", path: "/admin/appointments", icon: <Calendar size={18} /> },
// // //     { label: "Service Dashboard", path: "/admin/service-dashboard", icon: <Grid size={18} /> },
// // //     { label: "Add Service", path: "/admin/add-service", icon: <UserPlus size={18} /> },
// // //     { label: "List Services", path: "/admin/list-services", icon: <List size={18} /> },
// // //     { label: "Service Appointments", path: "/admin/service-appointments", icon: <Calendar size={18} /> },
// // //   ];

// // //   return (
// // //     <div className="fixed top-0 left-0 w-full z-[150] bg-[#f1fcfb] px-6 py-4">
// // //       <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
// // //         {/* LOGO */}
// // //         <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
// // //           <img src="/images/logo.jpeg" alt="Medicare+" className="w-12 h-12" />
// // //           <div className="hidden md:block">
// // //             <h1 className="text-xl font-black text-[#137d6e] leading-none uppercase">MediCare+</h1>
// // //             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Healthcare Solutions</p>
// // //           </div>
// // //         </div>

// // //         {/* PILL NAVIGATION */}
// // //         <div className="bg-white/80 backdrop-blur-md px-6 py-2 rounded-full shadow-lg border border-teal-50 flex items-center gap-2 overflow-x-auto scrollbar-hide">
// // //           {navItems.map((item) => (
// // //             <button
// // //               key={item.label}
// // //               onClick={() => navigate(item.path)}
// // //               className={`flex flex-col items-center gap-1 px-4 py-2 rounded-full transition-all group ${
// // //                 location.pathname === item.path 
// // //                 ? "bg-[#f1fcfb] text-[#00a386] shadow-sm" 
// // //                 : "text-slate-400 hover:text-slate-600"
// // //               }`}
// // //             >
// // //               <span className={`${location.pathname === item.path ? "text-[#00a386]" : "text-slate-400 group-hover:text-teal-500"}`}>
// // //                 {item.icon}
// // //               </span>
// // //               <span className="text-[9px] font-black uppercase tracking-tighter whitespace-nowrap">{item.label}</span>
// // //             </button>
// // //           ))}
// // //         </div>

// // //         {/* SIGN OUT */}
// // //         <button 
// // //           onClick={() => navigate("/")}
// // //           className="bg-orange-500 text-white px-8 py-3 rounded-full font-black text-xs uppercase shadow-lg shadow-orange-100 hover:bg-orange-600 transition-all"
// // //         >
// // //           Sign Out
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AdminNavbar;
// // import React, { useState } from "react";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import { 
// //   LayoutDashboard, UserPlus, Users, Calendar, 
// //   Grid, List, LogOut, X 
// // } from "lucide-react";

// // const AdminNavbar = () => {
// //   const navigate = useNavigate();
// //   const location = useLocation();
  
// //   // NEW: State for Logout Confirmation Modal
// //   const [showLogoutModal, setShowLogoutModal] = useState(false);

// //   // Function to handle actual logout
// //   const handleLogout = () => {
// //     localStorage.removeItem("adminToken"); // Clear the session
// //     localStorage.removeItem("adminEmail");
// //     setShowLogoutModal(false);
// //     navigate("/"); // Redirect to login page
// //   };

// //   const navItems = [
// //     { label: "Dashboard", path: "/admin/dashboard", icon: <LayoutDashboard size={18} /> },
// //     { label: "Add Doctor", path: "/admin/add-doctor", icon: <UserPlus size={18} /> },
// //     { label: "List Doctors", path: "/admin/list-doctors", icon: <Users size={18} /> },
// //     { label: "Appointments", path: "/admin/appointments", icon: <Calendar size={18} /> },
// //     { label: "Service Dashboard", path: "/admin/service-dashboard", icon: <Grid size={18} /> },
// //     { label: "Add Service", path: "/admin/add-service", icon: <UserPlus size={18} /> },
// //     { label: "List Services", path: "/admin/list-services", icon: <List size={18} /> },
// //     { label: "Service Appointments", path: "/admin/service-appointments", icon: <Calendar size={18} /> },
// //   ];

// //   return (
// //     <>
// //       {/* MODERN WHITE LOGOUT POPUP */}
// //       {showLogoutModal && (
// //         <div className="fixed inset-0 z-[2000] flex items-center justify-center px-6">
// //           {/* Backdrop */}
// //           <div 
// //             className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm animate-in fade-in duration-300" 
// //             onClick={() => setShowLogoutModal(false)}
// //           ></div>
          
// //           {/* Confirmation Card */}
// //           <div className="bg-white w-full max-w-sm rounded-[3rem] p-10 shadow-2xl relative z-10 text-center space-y-6 border border-slate-50 animate-in zoom-in duration-300">
// //             <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-500 mb-2">
// //               <LogOut size={42} />
// //             </div>
            
// //             <div className="space-y-2">
// //               <h3 className="text-2xl font-black text-slate-900 leading-tight">Confirm Logout</h3>
// //               <p className="text-slate-400 font-bold text-sm leading-relaxed px-4">
// //                 Are you sure you want to logout? You will need to login again to access the admin panel.
// //               </p>
// //             </div>

// //             <div className="flex flex-col gap-3 pt-4">
// //               <button 
// //                 onClick={handleLogout}
// //                 className="w-full bg-rose-500 text-white py-4 rounded-full font-black text-sm shadow-xl shadow-rose-100 hover:bg-rose-600 transition-all active:scale-95"
// //               >
// //                 YES, LOGOUT
// //               </button>
// //               <button 
// //                 onClick={() => setShowLogoutModal(false)}
// //                 className="w-full bg-white text-slate-400 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:text-slate-600 transition-colors"
// //               >
// //                 Go Back
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* NAVBAR */}
// //       <div className="fixed top-0 left-0 w-full z-[150] bg-[#f1fcfb] px-6 py-4">
// //         <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
// //           {/* LOGO */}
// //           <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
// //             <img src="/images/logo.jpeg" alt="Medicare+" className="w-12 h-12" />
// //             <div className="hidden md:block">
// //               <h1 className="text-xl font-black text-[#137d6e] leading-none uppercase">MediCare+</h1>
// //               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Healthcare Solutions</p>
// //             </div>
// //           </div>

// //           {/* PILL NAVIGATION */}
// //           <div className="bg-white/80 backdrop-blur-md px-6 py-2 rounded-full shadow-lg border border-teal-50 flex items-center gap-2 overflow-x-auto scrollbar-hide">
// //             {navItems.map((item) => (
// //               <button
// //                 key={item.label}
// //                 onClick={() => navigate(item.path)}
// //                 className={`flex flex-col items-center gap-1 px-4 py-2 rounded-full transition-all group ${
// //                   location.pathname === item.path 
// //                   ? "bg-[#f1fcfb] text-[#00a386] shadow-sm" 
// //                   : "text-slate-400 hover:text-slate-600"
// //                 }`}
// //               >
// //                 <span className={`${location.pathname === item.path ? "text-[#00a386]" : "text-slate-400 group-hover:text-teal-500"}`}>
// //                   {item.icon}
// //                 </span>
// //                 <span className="text-[9px] font-black uppercase tracking-tighter whitespace-nowrap">{item.label}</span>
// //               </button>
// //             ))}
// //           </div>

// //           {/* SIGN OUT BUTTON TRIGGERS MODAL */}
// //           <button 
// //             onClick={() => setShowLogoutModal(true)}
// //             className="bg-orange-500 text-white px-8 py-3 rounded-full font-black text-xs uppercase shadow-lg shadow-orange-100 hover:bg-orange-600 transition-all active:scale-95"
// //           >
// //             Sign Out
// //           </button>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default AdminNavbar;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Menu, X, LayoutDashboard, LogIn } from "lucide-react";

// const Navbar = ({ onLoginClick }) => {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-[500] bg-white border-b border-slate-100 px-4 py-4 md:px-8">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
        
//         {/* LOGO - flex-nowrap prevents the name from wrapping or overlapping */}
//         <div 
//           className="flex items-center gap-2 md:gap-3 cursor-pointer shrink-0 flex-nowrap" 
//           onClick={() => navigate("/")}
//         >
//           <img src="/images/logo.jpeg" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
//           <div className="flex flex-col min-w-max">
//             <h1 className="text-base md:text-xl font-black text-[#137d6e] leading-none uppercase">MediCare+</h1>
//             <p className="text-[8px] md:text-[10px] text-[#00a386] font-bold uppercase tracking-widest">Healthcare Solutions</p>
//           </div>
//         </div>

//         {/* DESKTOP BUTTONS - Now hidden on all small screens (md and below) */}
//         <div className="hidden md:flex items-center gap-3 lg:gap-4 ml-4">
//           <button 
//             onClick={() => navigate("/admin/login")} 
//             className="bg-white text-slate-500 border border-slate-200 px-4 lg:px-6 py-2 rounded-full font-black text-[10px] lg:text-xs uppercase tracking-tight hover:bg-slate-50 transition-all whitespace-nowrap"
//           >
//             Doctor Admin
//           </button>
//           <button 
//             onClick={onLoginClick} 
//             className="bg-[#00a386] text-white px-6 lg:px-8 py-2 rounded-full text-[10px] lg:text-xs font-black uppercase tracking-widest hover:bg-[#008f75] transition-all flex items-center gap-2 whitespace-nowrap"
//           >
//             Login 🔑
//           </button>
//         </div>

//         {/* HAMBURGER BUTTON - Shows up as soon as screen gets narrow */}
//         <button 
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="md:hidden p-2 text-[#00a386] hover:bg-teal-50 rounded-xl transition-colors"
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* MOBILE DROPDOWN MENU */}
//       {isMenuOpen && (
//         <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl animate-in slide-in-from-top duration-300">
//           <div className="p-6 flex flex-col gap-3">
//             <button 
//               onClick={() => { navigate("/admin/login"); setIsMenuOpen(false); }}
//               className="w-full flex items-center justify-center gap-3 bg-slate-50 text-slate-600 py-4 rounded-2xl font-black text-xs uppercase tracking-widest"
//             >
//               <LayoutDashboard size={18} /> Doctor Admin
//             </button>
//             <button 
//               onClick={() => { onLoginClick(); setIsMenuOpen(false); }}
//               className="w-full flex items-center justify-center gap-3 bg-[#00a386] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-teal-100"
//             >
//               <LogIn size={18} /> Login 🔑
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

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