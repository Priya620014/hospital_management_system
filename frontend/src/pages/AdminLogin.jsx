// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Lock, Mail, ArrowLeft, ShieldCheck } from "lucide-react";

// const DoctorAdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await fetch("http://localhost:4000/api/admin/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (data.success) {
//         localStorage.setItem("adminToken", data.token);
//         navigate("/admin-dashboard"); // Redirect to your actual admin panel
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError("Server connection failed.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f1fcfb] flex flex-col items-center justify-center p-6 relative">
//       <button 
//         onClick={() => navigate("/")} 
//         className="absolute top-10 left-10 flex items-center gap-2 text-[#00a386] font-bold hover:gap-3 transition-all"
//       >
//         <ArrowLeft size={18} /> Back to Home
//       </button>

//       {/* Login Card */}
//       <div className="bg-white w-full max-w-md rounded-[3rem] p-12 shadow-2xl shadow-teal-100/50 border border-slate-50 text-center space-y-8 animate-in fade-in zoom-in duration-500">
//         <div className="space-y-4">
//           <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto text-[#00a386] border-4 border-white shadow-inner">
//             <ShieldCheck size={40} />
//           </div>
//           <div>
//             <h1 className="text-3xl font-black text-[#137d6e] uppercase tracking-tight">Doctor Admin</h1>
//             <p className="text-slate-400 font-bold text-xs italic">Sign in to manage your profile & schedule</p>
//           </div>
//         </div>

//         <form onSubmit={handleLogin} className="space-y-4">
//           <div className="relative">
//             <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-teal-300" size={18} />
//             <input 
//               type="email" 
//               placeholder="Email Address" 
//               required
//               className="w-full bg-[#f1fcfb] border border-teal-50 rounded-full py-4 pl-14 pr-6 text-sm font-bold outline-none focus:border-teal-200 transition-all"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="relative">
//             <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-teal-300" size={18} />
//             <input 
//               type="password" 
//               placeholder="Password" 
//               required
//               className="w-full bg-[#f1fcfb] border border-teal-50 rounded-full py-4 pl-14 pr-6 text-sm font-bold outline-none focus:border-teal-200 transition-all"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           {error && <p className="text-rose-500 text-[10px] font-black uppercase tracking-widest">{error}</p>}

//           <button 
//             type="submit"
//             className="w-full bg-[#00a386] text-white py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl shadow-teal-100 hover:bg-[#008f75] transition-all active:scale-95"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DoctorAdminLogin;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, ArrowLeft, ShieldCheck } from "lucide-react";

const DoctorAdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // 1. FRONTEND GUARD: Restrict to your specific admin email
    if (email !== "priyanshi@medicare.com") {
      setError("Unauthorized: Access restricted to authorized admin only.");
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        // 2. SESSION STORAGE: Store token for protected routes
        localStorage.setItem("adminToken", data.token);
        localStorage.setItem("adminEmail", email);
        
        // Redirecting to the main service dashboard as requested in previous steps
        navigate("/admin-dashboard"); 
      } else {
        setError(data.message || "Invalid credentials.");
      }
    } catch (err) {
      setError("Server connection failed. Please check your backend.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f1fcfb] flex flex-col items-center justify-center p-6 relative font-sans">
      
      {/* BACK TO HOME BUTTON */}
      <button 
        onClick={() => navigate("/")} 
        className="absolute top-10 left-10 flex items-center gap-2 text-[#00a386] font-bold hover:gap-3 transition-all cursor-pointer z-10"
      >
        <ArrowLeft size={18} /> Back to Home
      </button>

      {/* LOGIN CARD */}
      <div className="bg-white w-full max-w-md rounded-[3.5rem] p-12 shadow-2xl shadow-teal-100/40 border border-slate-50 text-center space-y-8 animate-in fade-in zoom-in duration-500">
        
        <div className="space-y-4">
          {/* Logo/Icon Area */}
          <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto text-[#00a386] border-4 border-white shadow-inner">
            <ShieldCheck size={40} />
          </div>
          <div>
            <h1 className="text-3xl font-black text-[#137d6e] uppercase tracking-tight">Doctor Admin</h1>
            <p className="text-slate-400 font-bold text-xs italic">Sign in to manage your profile & schedule</p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Input */}
          <div className="relative group">
            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-teal-300 group-focus-within:text-[#00a386] transition-colors" size={18} />
            <input 
              type="email" 
              placeholder="Email Address" 
              required
              className="w-full bg-[#f1fcfb] border border-teal-50 rounded-full py-4.5 pl-14 pr-6 text-sm font-bold outline-none focus:border-teal-200 focus:bg-white transition-all shadow-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="relative group">
            <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-teal-300 group-focus-within:text-[#00a386] transition-colors" size={18} />
            <input 
              type="password" 
              placeholder="Password" 
              required
              className="w-full bg-[#f1fcfb] border border-teal-50 rounded-full py-4.5 pl-14 pr-6 text-sm font-bold outline-none focus:border-teal-200 focus:bg-white transition-all shadow-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Error Message Display */}
          {error && (
            <div className="bg-rose-50 border border-rose-100 py-2 px-4 rounded-xl">
              <p className="text-rose-500 text-[10px] font-black uppercase tracking-widest leading-tight">
                {error}
              </p>
            </div>
          )}

          {/* Login Button */}
          <button 
            type="submit"
            className="w-full bg-[#00a386] text-white py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl shadow-teal-100/50 hover:bg-[#008f75] transition-all active:scale-95 cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Footer Info */}
        <p className="text-[10px] text-slate-300 font-bold uppercase tracking-tighter">
          MediCare+ Administration Portal v2.0
        </p>
      </div>
    </div>
  );
};

export default DoctorAdminLogin;