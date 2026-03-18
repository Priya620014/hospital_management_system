
// // // import { SignIn } from "@clerk/clerk-react";
// // // import { X } from "lucide-react";

// // // const LoginModal = ({ isOpen, onClose }) => {
// // //   if (!isOpen) return null;

// // //   return (
// // //     <div className="fixed inset-0 z-[150] flex items-center justify-center px-6">
// // //       {/* Backdrop */}
// // //       <div 
// // //         className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" 
// // //         onClick={onClose}
// // //       ></div>
      
// // //       {/* Modal Container */}
// // //       <div className="relative z-10 w-full max-w-md animate-in fade-in zoom-in duration-300">
// // //         <button 
// // //           onClick={onClose} 
// // //           className="absolute -top-12 right-0 text-white hover:text-rose-400 transition-colors"
// // //         >
// // //           <X size={32} />
// // //         </button>

// // //         {/* Clerk Sign-In Component */}
// // //         <SignIn 
// // //           appearance={{
// // //             elements: {
// // //               rootBox: "w-full",
// // //               card: "rounded-[2.5rem] shadow-2xl border-none p-8",
// // //               headerTitle: "text-2xl font-black text-slate-900",
// // //               socialButtonsBlockButton: "rounded-full border-slate-200 hover:bg-slate-50 transition-all",
// // //               formButtonPrimary: "bg-[#00a386] hover:bg-[#008f75] rounded-full py-4 text-sm font-black transition-all",
// // //               formFieldInput: "bg-[#f1fcfb] border-green-100 rounded-full py-4 px-6 focus:ring-2 focus:ring-[#00a386]",
// // //               footerActionLink: "text-[#00a386] font-bold hover:text-[#008f75]"
// // //             }
// // //           }}
// // //           routing="virtual"
// // //           forceRedirectUrl="/appointments"
// // //           /* Added to handle redirection after the "Create Account" flow */
// // //           signUpForceRedirectUrl="/appointments"
// // //           initialValues={{
// // //             emailAddress: ""
// // //           }}
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LoginModal;
// // import React, { useState } from "react"; // Added useState
// // import { SignIn, SignUp } from "@clerk/clerk-react"; // Added SignUp import
// // import { X } from "lucide-react";

// // const LoginModal = ({ isOpen, onClose }) => {
// //   // 1. State to toggle between Sign In and Sign Up views
// //   const [authMode, setAuthMode] = useState("signin");

// //   if (!isOpen) return null;

// //   // Shared appearance settings to keep both forms white and consistent
// //   const appearanceSettings = {
// //     elements: {
// //       rootBox: "w-full",
// //       card: "rounded-[2.5rem] shadow-2xl border-none p-8",
// //       headerTitle: "text-2xl font-black text-slate-900",
// //       socialButtonsBlockButton: "rounded-full border-slate-200 hover:bg-slate-50 transition-all",
// //       formButtonPrimary: "bg-[#00a386] hover:bg-[#008f75] rounded-full py-4 text-sm font-black transition-all",
// //       formFieldInput: "bg-[#f1fcfb] border-green-100 rounded-full py-4 px-6 focus:ring-2 focus:ring-[#00a386]",
// //       footerActionLink: "text-[#00a386] font-bold hover:text-[#008f75]"
// //     }
// //   };

// //   return (
// //     <div className="fixed inset-0 z-[150] flex items-center justify-center px-6">
// //       <div 
// //         className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" 
// //         onClick={onClose}
// //       ></div>
      
// //       <div className="relative z-10 w-full max-w-md animate-in fade-in zoom-in duration-300">
// //         <button 
// //           onClick={onClose} 
// //           className="absolute -top-12 right-0 text-white hover:text-rose-400 transition-colors"
// //         >
// //           <X size={32} />
// //         </button>

// //         {/* 2. Conditional Rendering for White Popup Sign-Up */}
// //         {authMode === "signin" ? (
// //           <SignIn 
// //             appearance={appearanceSettings}
// //             routing="virtual"
// //             forceRedirectUrl="/appointments"
// //             signUpForceRedirectUrl="/appointments"
// //             initialValues={{ emailAddress: "" }}
// //           />
// //         ) : (
// //           <SignUp 
// //             appearance={appearanceSettings}
// //             routing="virtual"
// //             forceRedirectUrl="/appointments"
// //             signInForceRedirectUrl="/appointments"
// //           />
// //         )}

// //         {/* 3. Custom Toggle Button below the Clerk components */}
// //         <div className="absolute -bottom-10 left-0 right-0 text-center">
// //           <button 
// //             onClick={() => setAuthMode(authMode === "signin" ? "signup" : "signin")}
// //             className="text-white text-sm font-bold hover:text-green-400 transition-colors"
// //           >
// //             {authMode === "signin" 
// //               ? "Don't have an account? Sign Up" 
// //               : "Already have an account? Sign In"}
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginModal;
// import React, { useState } from "react";
// import { SignIn, SignUp } from "@clerk/clerk-react";
// import { X } from "lucide-react";

// const LoginModal = ({ isOpen, onClose }) => {
//   const [authMode, setAuthMode] = useState("signin");

//   if (!isOpen) return null;

//   const appearanceSettings = {
//     elements: {
//       rootBox: "w-full",
//       card: "rounded-[2.5rem] shadow-2xl border-none p-8",
//       headerTitle: "text-2xl font-black text-slate-900",
//       socialButtonsBlockButton: "rounded-full border-slate-200 hover:bg-slate-50 transition-all",
//       formButtonPrimary: "bg-[#00a386] hover:bg-[#008f75] rounded-full py-4 text-sm font-black transition-all",
//       formFieldInput: "bg-[#f1fcfb] border-green-100 rounded-full py-4 px-6 focus:ring-2 focus:ring-[#00a386]",
//       footerActionLink: "text-[#00a386] font-bold hover:text-[#008f75]"
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-[150] flex items-center justify-center px-6">
//       <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose}></div>
      
//       <div className="relative z-10 w-full max-w-md animate-in fade-in zoom-in duration-300">
//         <button onClick={onClose} className="absolute -top-12 right-0 text-white hover:text-rose-400 transition-colors">
//           <X size={32} />
//         </button>

//         {authMode === "signin" ? (
//           <SignIn 
//             appearance={appearanceSettings}
//             routing="virtual"
//             forceRedirectUrl="/appointments"
//             signUpUrl="/sign-up" 
//           />
//         ) : (
//           <SignUp 
//             appearance={appearanceSettings}
//             routing="virtual"
//             forceRedirectUrl="/appointments"
//             signInUrl="/sign-in"
//           />
//         )}

//         <div className="absolute -bottom-10 left-0 right-0 text-center">
//           <button 
//             onClick={() => setAuthMode(authMode === "signin" ? "signup" : "signin")}
//             className="text-white text-sm font-bold hover:text-green-400 transition-colors"
//           >
//             {authMode === "signin" ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;
import React, { useState, useEffect } from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";
import { X } from "lucide-react";

const LoginModal = ({ isOpen, onClose }) => {
  const [authMode, setAuthMode] = useState("signin");

  // Reset to signin mode whenever the modal is reopened
  useEffect(() => {
    if (isOpen) setAuthMode("signin");
  }, [isOpen]);

  if (!isOpen) return null;

  const appearanceSettings = {
    elements: {
      rootBox: "w-full",
      card: "rounded-[2.5rem] shadow-2xl border-none p-8",
      headerTitle: "text-2xl font-black text-slate-900",
      socialButtonsBlockButton: "rounded-full border-slate-200 hover:bg-slate-50 transition-all",
      formButtonPrimary: "bg-[#00a386] hover:bg-[#008f75] rounded-full py-4 text-sm font-black transition-all",
      formFieldInput: "bg-[#f1fcfb] border-green-100 rounded-full py-4 px-6 focus:ring-2 focus:ring-[#00a386]",
      footerActionLink: "text-[#00a386] font-bold hover:text-[#008f75]",
      footerActionText: "text-slate-500 font-medium"
    }
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center px-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" 
        onClick={onClose}
      ></div>
      
      <div className="relative z-10 w-full max-w-md animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose} 
          className="absolute -top-12 right-0 text-white hover:text-rose-400 transition-colors"
        >
          <X size={32} />
        </button>

        {/* Manual component swap with virtual routing to stay in white modal */}
        {authMode === "signin" ? (
          <div className="relative w-full">
            <SignIn 
              appearance={appearanceSettings}
              routing="virtual"
              forceRedirectUrl="/"
              /* Clears existing sessions to force Account Chooser */
              initialValues={{
                emailAddress: "",
              }}
            />
            {/* Transparent overlay specifically for "Sign up" link */}
            <button 
              onClick={() => setAuthMode("signup")}
              className="absolute bottom-8 left-0 right-0 h-10 w-full z-20 cursor-pointer opacity-0"
            >
              Go to Sign Up
            </button>
          </div>
        ) : (
          <div className="relative w-full">
            <SignUp 
              appearance={appearanceSettings}
              routing="virtual"
              forceRedirectUrl="/appointments"
            />
            {/* Transparent overlay specifically for "Sign in" link */}
            <button 
              onClick={() => setAuthMode("signin")}
              className="absolute bottom-8 left-0 right-0 h-10 w-full z-20 cursor-pointer opacity-0"
            >
              Go to Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginModal;