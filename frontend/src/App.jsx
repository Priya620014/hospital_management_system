
// // import React, { useState } from "react";
// // import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // Added useLocation
// // import Home from "./pages/Home";
// // import Contact from "./pages/Contact"; 
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";
// // import Services from "./pages/Services";
// // import Doctors from "./pages/Doctors";
// // import DoctorProfile from "./pages/DoctorProfile";
// // import ScrollToTop from "./components/ScrollToTop";
// // import ServiceBooking from "./pages/ServiceBooking";
// // import Appointments from "./pages/Appointments";
// // import { ClerkProvider, ClerkLoaded, ClerkLoading } from '@clerk/clerk-react';
// // import LoginModal from "./components/LoginModal";
// // import AdminDashboard from "./pages/AdminDashboard";
// // import AdminNavbar from "./components/AdminNavbar";
// // import AddDoctor from "./pages/AddDoctor";
// // import ListDoctors from "./pages/ListDoctors";
// // import AdminAppointments from "./pages/AdminAppointment";
// // import ServiceDashboard from "./pages/ServiceDashboard";
// // import AddService from "./pages/AddService";
// // import ListService from "./pages/ListService";
// // import ServiceAppointments from "./pages/ServiceAppointments";
// // import AdminLogin from "./pages/AdminLogin";

// // const PUBLISHABLE_KEY = "pk_test_dmVyaWZpZWQtZ3JpenpseS0xNi5jbGVyay5hY2NvdW50cy5kZXYk";

// // // NEW: Layout wrapper to handle conditional Navbars
// // const AppContent = ({ openLogin, isLoginOpen, setIsLoginOpen }) => {
// //   const location = useLocation();
// //   // Check if current path is an admin path
// //   const isAdminPath = location.pathname.startsWith("/admin");

// //   return (
// //     <>
// //       <ScrollToTop />
// //       {/* Switch Navbars based on the route */}
// //       {isAdminPath ? <AdminNavbar /> : <Navbar onLoginClick={openLogin} />}
      
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/contact" element={<Contact />} /> 
// //         <Route path="/services" element={<Services />} />
// //         <Route path="/doctors" element={<Doctors onLoginClick={openLogin} />} />
// //         <Route path="/doctor/:id" element={<DoctorProfile onLoginClick={openLogin} />} />
// //         <Route path="/services/:serviceName" element={<ServiceBooking />} />
// //         <Route path="/appointments" element={<Appointments />} />
// //         {/* Ensure admin route starts with /admin for the navbar check */}
// //         <Route path="/admin-dashboard" element={<AdminDashboard />} />
// //         <Route path="/admin/add-doctor" element={<AddDoctor />} />
// //         <Route path="/admin/list-doctors" element={<ListDoctors />} />
// //         // Inside AppContent in App.jsx
// // <Route path="/admin/appointments" element={<AdminAppointments />} />
// // <Route path="/admin/service-dashboard" element={<ServiceDashboard />} />
// // <Route path="/admin/add-service" element={<AddService />} />
// // <Route path="/admin/list-services" element={<ListService />} />
// // <Route path="/admin/service-appointments" element={<ServiceAppointments />} />
// // <Route path="/admin/login" element={<AdminLogin />} />




// //       </Routes>

// //       <LoginModal 
// //         isOpen={isLoginOpen} 
// //         onClose={() => setIsLoginOpen(false)} 
// //       />
      
// //       {/* Only show standard footer on user pages */}
// //       {!isAdminPath && <Footer />}
// //     </>
// //   );
// // };

// // const App = () => {
// //   const [isLoginOpen, setIsLoginOpen] = useState(false);
// //   const openLogin = () => setIsLoginOpen(true);

// //   return (
// //     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
// //       <ClerkLoading>
// //         <div className="min-h-screen flex items-center justify-center bg-[#f1fcfb]">
// //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00a386]"></div>
// //         </div>
// //       </ClerkLoading>

// //       <ClerkLoaded>
// //         <Router>
// //           <AppContent 
// //             openLogin={openLogin} 
// //             isLoginOpen={isLoginOpen} 
// //             setIsLoginOpen={setIsLoginOpen} 
// //           />
// //         </Router>
// //       </ClerkLoaded>
// //     </ClerkProvider>
// //   );
// // };

// // export default App;
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact"; 
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Services from "./pages/Services";
// import Doctors from "./pages/Doctors";
// import DoctorProfile from "./pages/DoctorProfile";
// import ScrollToTop from "./components/ScrollToTop";
// import ServiceBooking from "./pages/ServiceBooking";
// import Appointments from "./pages/Appointments";
// import { ClerkProvider, ClerkLoaded, ClerkLoading } from '@clerk/clerk-react';
// import LoginModal from "./components/LoginModal";
// import AdminDashboard from "./pages/AdminDashboard";
// import AdminNavbar from "./components/AdminNavbar";
// import AddDoctor from "./pages/AddDoctor";
// import ListDoctors from "./pages/ListDoctors";
// import AdminAppointments from "./pages/AdminAppointment";
// import ServiceDashboard from "./pages/ServiceDashboard";
// import AddService from "./pages/AddService";
// import ListService from "./pages/ListService";
// import ServiceAppointments from "./pages/ServiceAppointments";
// import AdminLogin from "./pages/AdminLogin";

// const PUBLISHABLE_KEY = "pk_test_dmVyaWZpZWQtZ3JpenpseS0xNi5jbGVyay5hY2NvdW50cy5kZXYk";

// const AppContent = ({ openLogin, isLoginOpen, setIsLoginOpen }) => {
//   const location = useLocation();
  
//   // REQUIRED CHANGES: Specific path checks
//   const isAdminPath = location.pathname.startsWith("/admin");
//   const isAdminLoginPage = location.pathname === "/admin/login";

//   return (
//     <>
//       <ScrollToTop />
      
//       {/* LOGIC UPDATE: 
//         1. If it's the Admin Login Page, show NOTHING (no navbar at all).
//         2. If it's any other Admin path, show AdminNavbar.
//         3. Otherwise, show the standard user Navbar.
//       */}
//       {!isAdminLoginPage && (
//         isAdminPath ? <AdminNavbar /> : <Navbar onLoginClick={openLogin} />
//       )}
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} /> 
//         <Route path="/services" element={<Services />} />
//         <Route path="/doctors" element={<Doctors onLoginClick={openLogin} />} />
//         <Route path="/doctor/:id" element={<DoctorProfile onLoginClick={openLogin} />} />
//         <Route path="/services/:serviceName" element={<ServiceBooking />} />
//         <Route path="/appointments" element={<Appointments />} />

//         {/* Admin Routes */}
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />
//         <Route path="/admin/add-doctor" element={<AddDoctor />} />
//         <Route path="/admin/list-doctors" element={<ListDoctors />} />
//         <Route path="/admin/appointments" element={<AdminAppointments />} />
//         <Route path="/admin/service-dashboard" element={<ServiceDashboard />} />
//         <Route path="/admin/add-service" element={<AddService />} />
//         <Route path="/admin/list-services" element={<ListService />} />
//         <Route path="/admin/service-appointments" element={<ServiceAppointments />} />
//         <Route path="/admin/login" element={<AdminLogin />} />
//       </Routes>

//       <LoginModal 
//         isOpen={isLoginOpen} 
//         onClose={() => setIsLoginOpen(false)} 
//       />
      
//       {/* Hide footer on all admin paths including login */}
//       {!isAdminPath && <Footer />}
//     </>
//   );
// };

// const App = () => {
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const openLogin = () => setIsLoginOpen(true);

//   return (
//     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
//       <ClerkLoading>
//         <div className="min-h-screen flex items-center justify-center bg-[#f1fcfb]">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00a386]"></div>
//         </div>
//       </ClerkLoading>

//       <ClerkLoaded>
//         <Router>
//           <AppContent 
//             openLogin={openLogin} 
//             isLoginOpen={isLoginOpen} 
//             setIsLoginOpen={setIsLoginOpen} 
//           />
//         </Router>
//       </ClerkLoaded>
//     </ClerkProvider>
//   );
// };

// export default App;
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import DoctorProfile from "./pages/DoctorProfile";
import ScrollToTop from "./components/ScrollToTop";
import ServiceBooking from "./pages/ServiceBooking";
import Appointments from "./pages/Appointments";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from '@clerk/clerk-react';
import LoginModal from "./components/LoginModal";
import AdminDashboard from "./pages/AdminDashboard";
import AdminNavbar from "./components/AdminNavbar";
import AddDoctor from "./pages/AddDoctor";
import ListDoctors from "./pages/ListDoctors";
import AdminAppointments from "./pages/AdminAppointment";
import ServiceDashboard from "./pages/ServiceDashboard";
import AddService from "./pages/AddService";
import ListService from "./pages/ListService";
import ServiceAppointments from "./pages/ServiceAppointments";
import AdminLogin from "./pages/AdminLogin";
import SymptomChecker from "./pages/SymptomChecker";


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const AppContent = ({ openLogin, isLoginOpen, setIsLoginOpen }) => {
  const location = useLocation();
  
  // REQUIRED CHANGES: Specific path checks
  const isAdminPath = location.pathname.startsWith("/admin");
  const isAdminLoginPage = location.pathname === "/admin/login";

  return (
    <>
      <ScrollToTop />
      
      {/* LOGIC UPDATE: 
        1. If it's the Admin Login Page, show NOTHING (no navbar at all).
        2. If it's any other Admin path, show AdminNavbar.
        3. Otherwise, show the standard user Navbar.
      */}
      {!isAdminLoginPage && (
        isAdminPath ? <AdminNavbar /> : <Navbar onLoginClick={openLogin} />
      )}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors onLoginClick={openLogin} />} />
        <Route path="/doctor/:id" element={<DoctorProfile onLoginClick={openLogin} />} />
        <Route path="/services/:serviceName" element={<ServiceBooking />} />
        <Route path="/appointments" element={<Appointments />} />

        {/* Admin Routes - CORRECTED PATH BELOW */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-doctor" element={<AddDoctor />} />
        <Route path="/admin/list-doctors" element={<ListDoctors />} />
        <Route path="/admin/appointments" element={<AdminAppointments />} />
        <Route path="/admin/service-dashboard" element={<ServiceDashboard />} />
        <Route path="/admin/add-service" element={<AddService />} />
        <Route path="/admin/list-services" element={<ListService />} />
        <Route path="/admin/service-appointments" element={<ServiceAppointments />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/symptom-checker" element={<SymptomChecker />} />
      </Routes>
    
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />
      
      {/* Hide footer on all admin paths including login */}
      {!isAdminPath && <Footer />}
    </>
  );
};

const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const openLogin = () => setIsLoginOpen(true);

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <ClerkLoading>
        <div className="min-h-screen flex items-center justify-center bg-[#f1fcfb]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00a386]"></div>
        </div>
      </ClerkLoading>
    
      <ClerkLoaded>
        <Router>
          <AppContent 
            openLogin={openLogin} 
            isLoginOpen={isLoginOpen} 
            setIsLoginOpen={setIsLoginOpen} 
          />
        </Router>
      </ClerkLoaded>
    </ClerkProvider>
  );
};

export default App;