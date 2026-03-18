
// import React, { useEffect, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { SignedIn, SignedOut, useUser, useAuth, useClerk } from "@clerk/clerk-react";
// import { Settings, LogOut, ChevronDown, User as UserIcon } from "lucide-react";

// const Navbar = ({ onLoginClick }) => {
//   const { user } = useUser();
//   const { isSignedIn } = useAuth();
//   const { signOut, openUserProfile } = useClerk();
//   const navigate = useNavigate();

//   // State for the custom dropdown
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // 1. DATABASE SYNC TRIGGER
//   useEffect(() => {
//     const syncUserToMongoDB = async () => {
//       if (isSignedIn && user) {
//         try {
//           await fetch("http://localhost:4000/api/users/sync", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               clerkId: user.id,
//               email: user.primaryEmailAddress?.emailAddress,
//               name: user.fullName,
//             }),
//           });
//           console.log("User synced with MongoDB");
//         } catch (err) {
//           console.error("Failed to sync user:", err);
//         }
//       }
//     };

//     syncUserToMongoDB();
//   }, [isSignedIn, user]);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Doctors", path: "/doctors" },
//     { name: "Services", path: "/services" },
//     { name: "Appointments", path: "/appointments" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 lg:px-24 py-4 flex items-center justify-between">
//       {/* Logo Section */}
//       <div className="flex items-center gap-3">
//         <img src="/images/logo.jpeg" alt="Logo" className="w-10 h-10 object-contain" />
//         <div className="flex flex-col justify-center">
//           <h1 className="text-xl font-black text-[#137d6e] leading-none">MediCare+</h1>
//           <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest mt-1">Healthcare Solutions</p>
//         </div>
//       </div>

//       {/* Navigation Links */}
//       <div className="hidden lg:flex items-center gap-2 bg-slate-50 p-1.5 rounded-full border border-slate-100">
//         {navLinks.map((link) => (
//           <NavLink
//             key={link.name}
//             to={link.path}
//             className={({ isActive }) =>
//               `px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
//                 isActive
//                   ? "bg-green-100 text-[#00a386] shadow-sm"
//                   : "text-slate-500 hover:text-[#00a386] hover:bg-white"
//               }`
//             }
//           >
//             {link.name}
//           </NavLink>
//         ))}
//       </div>

//       {/* Action Buttons */}
//       <div className="flex items-center gap-4 relative">
        
//         {/* LOGGED OUT STATE */}
//         <SignedOut>
//           <div className="flex items-center gap-3">
//             <button 
//               onClick={() => navigate("/admin/login")} 
//               className="bg-white text-slate-500 border border-slate-100 px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-tight hover:bg-slate-50 transition-all shadow-sm"
//             >
//               Doctor Admin
//             </button>
//             <button 
//               onClick={onLoginClick} 
//               className="bg-[#00a386] text-white px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#008f75] transition-all shadow-lg shadow-teal-50"
//             >
//               Login 🔑
//             </button>
//           </div>
//         </SignedOut>

//         {/* LOGGED IN STATE: Custom Modern Dropdown */}
//         <SignedIn>
//           <div className="relative">
//             {/* User Pill Button */}
//             <div 
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               className="flex items-center gap-3 bg-slate-50 hover:bg-slate-100 px-4 py-1.5 rounded-full cursor-pointer transition-all border border-slate-100 group shadow-sm"
//             >
//               <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
//                 <img src={user?.imageUrl} alt="profile" className="w-full h-full object-cover" />
//               </div>
//               <span className="text-xs font-black text-slate-700 uppercase tracking-tight hidden sm:block">
//                 {user?.firstName}
//               </span>
//               <ChevronDown size={14} className={`text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
//             </div>

//             {/* Dropdown Popup */}
//             {isDropdownOpen && (
//               <>
//                 <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>
//                 <div className="absolute right-0 mt-4 w-72 bg-white rounded-[2rem] shadow-2xl border border-slate-50 z-50 overflow-hidden animate-in fade-in zoom-in duration-200 origin-top-right">
//                   {/* Header: User Info */}
//                   <div className="p-6 flex items-center gap-4 bg-slate-50/50">
//                     <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
//                       <img src={user?.imageUrl} alt="profile" className="w-full h-full object-cover" />
//                     </div>
//                     <div className="flex flex-col truncate">
//                       <span className="text-sm font-black text-slate-800 truncate">{user?.fullName}</span>
//                       <span className="text-[10px] font-bold text-slate-400 truncate">{user?.primaryEmailAddress?.emailAddress}</span>
//                     </div>
//                   </div>

//                   {/* Actions */}
//                   <div className="p-3 space-y-1">
//                     <button 
//                       onClick={() => { openUserProfile(); setIsDropdownOpen(false); }}
//                       className="w-full flex items-center gap-3 px-5 py-4 rounded-2xl hover:bg-teal-50 text-slate-600 hover:text-[#00a386] transition-all group"
//                     >
//                       <Settings size={18} className="group-hover:rotate-45 transition-transform" />
//                       <span className="text-xs font-black uppercase tracking-widest">Manage Account</span>
//                     </button>

//                     <button 
//                       onClick={() => signOut()}
//                       className="w-full flex items-center gap-3 px-5 py-4 rounded-2xl hover:bg-rose-50 text-slate-600 hover:text-rose-500 transition-all border-t border-slate-50"
//                     >
//                       <LogOut size={18} />
//                       <span className="text-xs font-black uppercase tracking-widest">Sign Out</span>
//                     </button>
//                   </div>

//                   {/* Footer */}
//                   <div className="py-3 px-6 bg-slate-50/30 flex justify-center">
//                     <p className="text-[8px] font-bold text-slate-300 uppercase tracking-tighter italic">Secured by Clerk • Medicare+ Portal</p>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </SignedIn>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, useUser, useAuth, useClerk } from "@clerk/clerk-react";
import { Settings, LogOut, ChevronDown, X, AlertCircle } from "lucide-react";

const Navbar = ({ onLoginClick }) => {
  const { user } = useUser();
  const { isSignedIn } = useAuth();
  const { signOut, openUserProfile } = useClerk();
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // NEW: State for Logout Confirmation
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  // DATABASE SYNC TRIGGER
  useEffect(() => {
    const syncUserToMongoDB = async () => {
      if (isSignedIn && user) {
        try {
          await fetch("http://localhost:4000/api/users/sync", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              clerkId: user.id,
              email: user.primaryEmailAddress?.emailAddress,
              name: user.fullName,
            }),
          });
        } catch (err) {
          console.error("Failed to sync user:", err);
        }
      }
    };
    syncUserToMongoDB();
  }, [isSignedIn, user]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Doctors", path: "/doctors" },
    { name: "Services", path: "/services" },
    { name: "Appointments", path: "/appointments" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* 1. LOGOUT CONFIRMATION POPUP (Middle of Screen) */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300" 
            onClick={() => setShowLogoutConfirm(false)}
          ></div>

          {/* White Modal Card */}
          <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-10 shadow-2xl relative z-10 text-center space-y-6 animate-in zoom-in duration-200">
            <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-500">
              <LogOut size={40} />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-slate-900">Confirm Exit</h2>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">
                Are you sure you want to exit your account?
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button 
                onClick={() => signOut()} 
                className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-lg shadow-teal-100 hover:bg-[#008f75] transition-all"
              >
                Yes, Logout 👋
              </button>
              <button 
                onClick={() => setShowLogoutConfirm(false)} 
                className="w-full bg-slate-100 text-slate-500 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-slate-200 transition-all"
              >
                No, Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. MAIN NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 lg:px-24 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/logo.jpeg" alt="Logo" className="w-10 h-10 object-contain" />
          <div className="flex flex-col">
            <h1 className="text-xl font-black text-[#137d6e] leading-none">MediCare+</h1>
            <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest mt-1">Healthcare Solutions</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-2 bg-slate-50 p-1.5 rounded-full border border-slate-100">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  isActive ? "bg-green-100 text-[#00a386] shadow-sm" : "text-slate-500 hover:text-[#00a386] hover:bg-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4 relative">
          <SignedOut>
            <div className="flex items-center gap-3">
              <button onClick={() => navigate("/admin/login")} className="bg-white text-slate-500 border border-slate-100 px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-tight hover:bg-slate-50 shadow-sm transition-all">Doctor Admin</button>
              <button onClick={onLoginClick} className="bg-[#00a386] text-white px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#008f75] transition-all shadow-lg shadow-teal-50">Login 🔑</button>
            </div>
          </SignedOut>

          <SignedIn>
            <div className="relative">
              <div 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-3 bg-slate-50 hover:bg-slate-100 px-4 py-1.5 rounded-full cursor-pointer transition-all border border-slate-100 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <img src={user?.imageUrl} alt="profile" className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-black text-slate-700 uppercase tracking-tight hidden sm:block">{user?.firstName}</span>
                <ChevronDown size={14} className={`text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </div>

              {isDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>
                  <div className="absolute right-0 mt-4 w-72 bg-white rounded-[2rem] shadow-2xl border border-slate-50 z-50 overflow-hidden animate-in fade-in zoom-in duration-200 origin-top-right">
                    <div className="p-6 flex items-center gap-4 bg-slate-50/50">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                        <img src={user?.imageUrl} alt="profile" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col truncate">
                        <span className="text-sm font-black text-slate-800 truncate">{user?.fullName}</span>
                        <span className="text-[10px] font-bold text-slate-400 truncate">{user?.primaryEmailAddress?.emailAddress}</span>
                      </div>
                    </div>

                    <div className="p-3 space-y-1">
                      <button onClick={() => { openUserProfile(); setIsDropdownOpen(false); }} className="w-full flex items-center gap-3 px-5 py-4 rounded-2xl hover:bg-teal-50 text-slate-600 hover:text-[#00a386] transition-all group">
                        <Settings size={18} className="group-hover:rotate-45 transition-transform" />
                        <span className="text-xs font-black uppercase tracking-widest">Manage Account</span>
                      </button>

                      <button 
                        onClick={() => { setShowLogoutConfirm(true); setIsDropdownOpen(false); }} 
                        className="w-full flex items-center gap-3 px-5 py-4 rounded-2xl hover:bg-rose-50 text-slate-600 hover:text-rose-500 transition-all border-t border-slate-50"
                      >
                        <LogOut size={18} />
                        <span className="text-xs font-black uppercase tracking-widest">Sign Out</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </SignedIn>
        </div>
      </nav>
    </>
  );
};

export default Navbar;