
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Import hooks for authentication and syncing
import { SignedIn, SignedOut, SignOutButton, useUser, useAuth } from "@clerk/clerk-react";

const Navbar = ({ onLoginClick }) => {
  const { user } = useUser();
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  // 1. DATABASE SYNC TRIGGER: Stores new users in MongoDB
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
          console.log("User synced with MongoDB");
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 lg:px-24 py-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img src="/images/logo.jpeg" alt="Logo" className="w-10 h-10 object-contain" />
        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-black text-[#137d6e] leading-none">MediCare+</h1>
          <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest mt-1">Healthcare Solutions</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-2 bg-slate-50 p-1.5 rounded-full border border-slate-100">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                isActive
                  ? "bg-green-100 text-[#00a386] shadow-sm"
                  : "text-slate-500 hover:text-[#00a386] hover:bg-white"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        
        {/* LOGGED OUT STATE: Shows Admin and Login */}
        <SignedOut>
          {/* In your Home.jsx or Navbar.jsx */}
<button 
  onClick={() => navigate("/admin-dashboard")} // This route will lead to your admin panel
  className="bg-white text-slate-600 border border-slate-200 px-6 py-2 rounded-full font-bold text-sm hover:bg-slate-50 transition-all mr-2"
>
  Doctor Admin
</button>
          <button 
            onClick={onLoginClick} 
            className="bg-[#00a386] text-white px-6 py-2.5 rounded-full text-sm font-black flex items-center gap-2 hover:bg-[#008f75] transition-all shadow-lg shadow-teal-50"
          >
            Login 🔑
          </button>
        </SignedOut>

        {/* LOGGED IN STATE: Hides Admin and shows Green Logout */}
        <SignedIn>
          <div className="flex items-center gap-3 bg-slate-50 pr-2 pl-4 py-1.5 rounded-full border border-slate-100">
            <span className="text-xs font-black text-slate-900 hidden sm:block">
              {user?.firstName}
            </span>
            <SignOutButton>
              <button className="bg-[#00a386] text-white px-6 py-2.5 rounded-full text-xs font-black hover:bg-[#008f75] transition-all shadow-md">
                Logout 👋
              </button>
            </SignOutButton>
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;