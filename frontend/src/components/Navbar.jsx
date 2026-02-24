
import React from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for active states

const Navbar = () => {
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
    {/* Logo Section */}
<div className="flex items-center gap-3">
  <img src="/images/logo.jpeg" alt="Logo" className="w-10 h-10 object-contain" />
  <div className="flex flex-col justify-center">
    <h1 className="text-xl font-black text-[#137d6e] leading-none">MediCare+</h1>
    <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest mt-1">Healthcare Solutions</p>
  </div>
</div>

      {/* Navigation Links with Highlight */}
      <div className="hidden lg:flex items-center gap-2 bg-slate-50 p-1.5 rounded-full border border-slate-100">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                isActive
                  ? "bg-green-100 text-[#00a386] shadow-sm" // The transparent green highlight
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
        <button className="hidden md:block text-slate-600 font-bold text-sm border border-slate-200 px-5 py-2.5 rounded-full hover:bg-slate-50 transition">
          Doctor Admin
        </button>
        <button className="bg-[#00a386] text-white px-6 py-2.5 rounded-full text-sm font-black flex items-center gap-2 hover:bg-[#008f75] transition-all">
          Login 🔑
        </button>
      </div>
    </nav>
  );
};

export default Navbar;