
// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { 
//   ArrowLeft, FileText, IndianRupee, Clock, 
//   ShieldCheck, Send, Calendar, X, LockKeyhole, AlertCircle, CheckCircle 
// } from "lucide-react";
// import { useAuth, useUser } from "@clerk/clerk-react";

// const ServiceBooking = () => {
//   const { serviceName } = useParams();
//   const navigate = useNavigate();
  
//   const { isSignedIn } = useAuth();
//   const { user } = useUser(); 

//   const [formData, setFormData] = useState({ fullName: "", mobile: "", age: "", gender: "", email: "" });
//   const [paymentMethod, setPaymentMethod] = useState("Online");
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTime, setSelectedTime] = useState("");

//   const [showLoginPopup, setShowLoginPopup] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false); 
//   const [errorModal, setErrorModal] = useState({ show: false, message: "" });

//   const serviceData = {
//     "heart-rating": { img: "/images/heart.webp", price: 599, about: "Advanced ECG monitoring." },
//     "general-consultation": { img: "/images/gn.webp", price: 499, about: "Expert medical advice." },
//     "blood-sugar-test": { img: "/images/bloodsugar.jpg", price: 299, about: "Glucose monitoring." },
//     "lab-analysis": { img: "/images/lab.webp", price: 899, about: "State-of-the-art pathology." }
//   };

//   const currentService = serviceData[serviceName] || { img: "/images/shipchain-placeholder.jpg", price: 599, about: "Specialized service." };
//   const title = serviceName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

//   const handleBookingAttempt = async () => {
//     const { fullName, mobile } = formData;

//     if (!/^[a-zA-Z\s]+$/.test(fullName)) { setErrorModal({ show: true, message: "Please enter a valid Name." }); return; }
//     if (!/^\d{10}$/.test(mobile)) { setErrorModal({ show: true, message: "Mobile Number must be 10 digits." }); return; }
//     if (!selectedDate || !selectedTime) { setErrorModal({ show: true, message: "Please select both Date and Time." }); return; }
//     if (!isSignedIn) { setShowLoginPopup(true); return; }

//     try {
//       // 1. Create Razorpay Order
//       const orderRes = await fetch("http://localhost:4000/api/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: currentService.price }),
//       });
//       const order = await orderRes.json();

//       // 2. Configure Razorpay Options
//       const options = {
//         key: "rzp_test_eWbSbu5AuEM5Ey", 
//         amount: order.amount,
//         currency: "INR",
//         name: "Medicare+",
//         description: `Lab Test: ${title}`,
//         order_id: order.id,
//         handler: async (response) => {
//           // 3. Verify Payment Signature
//           const verifyRes = await fetch("http://localhost:4000/api/verify-payment", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(response),
//           });
//           const verifyData = await verifyRes.json();

//           if (verifyData.status === "success") {
//             // 4. Save to Database only if verified
//             const saveRes = await fetch("http://localhost:4000/api/services/book", {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify({
//                 userId: user.id,
//                 serviceName: title, 
//                 patientName: formData.fullName,
//                 patientAge: formData.age,
//                 patientMobile: formData.mobile,
//                 appointmentDate: selectedDate,
//                 appointmentTime: selectedTime,
//                 paymentId: response.razorpay_payment_id // Tracking info
//               }),
//             });

//             if (saveRes.ok) setShowSuccess(true);
//           }
//         },
//         prefill: { name: formData.fullName, email: user.primaryEmailAddress?.emailAddress, contact: formData.mobile },
//         theme: { color: "#00a386" },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       setErrorModal({ show: true, message: "Payment initialization failed." });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-24 relative">
      
//       {showSuccess && (
//         <div className="fixed inset-0 z-[150] flex items-center justify-center px-6">
//           <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>
//           <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl relative z-10 text-center space-y-6">
//             <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto text-[#00a386]">
//               <CheckCircle size={40} />
//             </div>
//             <h3 className="text-xl font-black text-slate-900">Booking Confirmed!</h3>
//             <p className="text-slate-500 text-sm leading-relaxed">Your payment was successful and your service has been scheduled. View details in Appointments.</p>
//             <button 
//               onClick={() => navigate("/appointments")} 
//               className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm shadow-md"
//             >
//               Go to Appointments
//             </button>
//           </div>
//         </div>
//       )}

//       {showLoginPopup && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
//           <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setShowLoginPopup(false)}></div>
//           <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl relative z-10 text-center space-y-6">
//             <button onClick={() => setShowLoginPopup(false)} className="absolute top-6 right-6 text-slate-400 hover:text-rose-500"><X size={24} /></button>
//             <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-500"><LockKeyhole size={40} /></div>
//             <h2 className="text-2xl font-black text-slate-900">Authentication Required</h2>
//             <button onClick={() => { setShowLoginPopup(false); navigate("/"); }} className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm">LOGIN NOW 🔑</button>
//           </div>
//         </div>
//       )}

//       {errorModal.show && (
//         <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
//           <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setErrorModal({ show: false, message: "" })}></div>
//           <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl relative z-10 text-center space-y-6">
//             <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-500"><AlertCircle size={32} /></div>
//             <div className="space-y-2">
//               <h3 className="text-xl font-black text-slate-900">Information Required</h3>
//               <p className="text-slate-500 font-medium text-sm leading-relaxed">{errorModal.message}</p>
//             </div>
//             <button onClick={() => setErrorModal({ show: false, message: "" })} className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm shadow-md">OK</button>
//           </div>
//         </div>
//       )}

//       <button onClick={() => navigate(-1)} className="flex items-center gap-2 bg-white text-[#00a386] px-4 py-2 rounded-full font-bold shadow-sm mb-8 border border-slate-50"><ArrowLeft size={18} /> Back</button>

//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
//         <div className="flex-1 space-y-8">
//           <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-50">
//              <img src={currentService.img} alt={title} className="w-full h-80 object-cover" />
//              <div className="p-8 space-y-6">
//                 <h1 className="text-4xl font-black text-slate-900">{title}</h1>
//                 <div className="bg-[#f1fcfb] p-6 rounded-2xl border border-teal-50">
//                    <h3 className="flex items-center gap-2 text-[#137d6e] font-black uppercase text-xs tracking-widest mb-2"><FileText size={14}/> About This Service</h3>
//                    <p className="text-slate-500 text-sm font-medium">{currentService.about}</p>
//                 </div>
//                 <div className="flex items-center gap-2 bg-teal-50 text-[#00a386] w-fit px-6 py-3 rounded-full font-black"><IndianRupee size={20}/> {currentService.price}</div>
//              </div>
//           </div>

//           <div className="bg-white rounded-[2rem] p-8 shadow-xl space-y-10 border border-slate-50">
//              <div className="space-y-6">
//                 <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest flex items-center gap-2"><ShieldCheck size={16}/> Your Details</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <input type="text" placeholder="Full Name *" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
//                     <input type="number" placeholder="Mobile (10 digits) *" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, mobile: e.target.value})} />
//                     <input type="number" placeholder="Age *" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, age: e.target.value})} />
//                     <select className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none appearance-none" onChange={(e) => setFormData({...formData, gender: e.target.value})}>
//                       <option>Select Gender *</option><option>Male</option><option>Female</option>
//                     </select>
//                 </div>
//                 <input type="email" placeholder="Email" className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, email: e.target.value})} />
//              </div>

//              <div className="space-y-4 pt-6 border-t border-slate-50">
//                 <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest flex items-center gap-2"><Calendar size={16}/> Select Date *</h3>
//                 <input 
//                   type="date" 
//                   className={`w-full max-w-xs border rounded-full py-4 px-6 text-sm outline-none cursor-pointer font-bold ${selectedDate ? "bg-[#00a386] text-white border-transparent" : "bg-[#f1fcfb] border-green-100 text-slate-600"}`}
//                   min={new Date().toISOString().split("T")[0]} 
//                   onChange={(e) => setSelectedDate(e.target.value)} 
//                 />
//              </div>

//              <div className="space-y-4 pt-6 border-t border-slate-50">
//                 <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest flex items-center gap-2"><Clock size={16}/> Select Time *</h3>
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//                    {["09:00 AM", "10:30 AM", "11:00 AM", "01:30 PM", "04:00 PM", "06:30 PM"].map((time) => (
//                      <button key={time} onClick={() => setSelectedTime(time)} className={`py-3 px-4 rounded-full text-xs font-bold transition-all border ${selectedTime === time ? "bg-teal-50 border-[#00a386] text-[#00a386] shadow-sm" : "bg-white border-slate-100 text-slate-400"}`}>{time}</button>
//                    ))}
//                 </div>
//              </div>
//           </div>
//         </div>

//         <div className="lg:w-96">
//            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-50 space-y-6 sticky top-32">
//               <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest">Booking Summary</h3>
//               <div className="space-y-3">
//                  <SummaryRow label="Date" value={selectedDate || "Not selected"} color={selectedDate ? "text-slate-700" : "text-rose-400"} />
//                  <SummaryRow label="Time" value={selectedTime || "Not selected"} color={selectedTime ? "text-slate-700" : "text-rose-400"} />
//                  <SummaryRow label="Price" value={`₹${currentService.price}`} color="text-[#137d6e]" />
//               </div>
//               <button 
//                 onClick={handleBookingAttempt}
//                 className="w-full py-5 rounded-full font-black flex items-center justify-center gap-3 transition-all bg-[#00a386] text-white shadow-xl hover:bg-[#008f75]"
//               >
//                  <Send size={18} /> Confirm Booking
//               </button>
//            </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const SummaryRow = ({ label, value, color = "text-slate-500" }) => (
//   <div className="flex justify-between text-sm font-bold">
//     <span className="text-[#00a386]">{label}:</span>
//     <span className={color}>{value}</span>
//   </div>
// );

// export default ServiceBooking;
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, FileText, IndianRupee, Clock, 
  ShieldCheck, Send, Calendar, X, LockKeyhole, AlertCircle, CheckCircle 
} from "lucide-react";
import { useAuth, useUser } from "@clerk/clerk-react";

const ServiceBooking = () => {
  const { serviceName } = useParams();
  const navigate = useNavigate();
  
  const { isSignedIn } = useAuth();
  const { user } = useUser(); 

  const [formData, setFormData] = useState({ fullName: "", mobile: "", age: "", gender: "", email: "" });
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); 
  const [errorModal, setErrorModal] = useState({ show: false, message: "" });

  const serviceData = {
    "heart-rating": { img: "/images/heart.webp", price: 599, about: "Advanced ECG monitoring." },
    "general-consultation": { img: "/images/gn.webp", price: 499, about: "Expert medical advice." },
    "blood-sugar-test": { img: "/images/bloodsugar.jpg", price: 299, about: "Glucose monitoring." },
    "lab-analysis": { img: "/images/lab.webp", price: 899, about: "State-of-the-art pathology." }
  };

  const currentService = serviceData[serviceName] || { img: "/images/shipchain-placeholder.jpg", price: 599, about: "Specialized service." };
  const title = serviceName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const handleBookingAttempt = async () => {
    const { fullName, mobile, age, gender } = formData;

    if (!/^[a-zA-Z\s]+$/.test(fullName)) { setErrorModal({ show: true, message: "Please enter a valid Name." }); return; }
    if (!/^\d{10}$/.test(mobile)) { setErrorModal({ show: true, message: "Mobile Number must be 10 digits." }); return; }
    if (!age || gender === "" || gender === "Select Gender *") { setErrorModal({ show: true, message: "Please fill in Age and Gender." }); return; }
    if (!selectedDate || !selectedTime) { setErrorModal({ show: true, message: "Please select both Date and Time." }); return; }
    if (!isSignedIn) { setShowLoginPopup(true); return; }

    try {
      const orderRes = await fetch("http://localhost:4000/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: currentService.price }),
      });
      const order = await orderRes.json();

      const options = {
        key: "rzp_test_eWbSbu5AuEM5Ey", 
        amount: order.amount,
        currency: "INR",
        name: "Medicare+",
        description: `Lab Test: ${title}`,
        order_id: order.id,
        handler: async (response) => {
          const verifyRes = await fetch("http://localhost:4000/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const verifyData = await verifyRes.json();

          if (verifyData.status === "success") {
            // UPDATED: Sending data to the ServiceBooking schema endpoint
            const saveRes = await fetch("http://localhost:4000/api/service-bookings", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                userId: user.id,
                serviceName: title, 
                price: currentService.price, // Required for Dashboard
                imageUrl: currentService.img, // Required for Dashboard
                patientName: formData.fullName,
                patientAge: formData.age,
                patientMobile: formData.mobile,
                appointmentDate: selectedDate,
                appointmentTime: selectedTime,
                status: "Scheduled" 
              }),
            });

            if (saveRes.ok) setShowSuccess(true);
          }
        },
        prefill: { name: formData.fullName, email: user.primaryEmailAddress?.emailAddress, contact: formData.mobile },
        theme: { color: "#00a386" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      setErrorModal({ show: true, message: "Payment initialization failed." });
    }
  };

  return (
    <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-24 relative">
      
      {showSuccess && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>
          <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl relative z-10 text-center space-y-6">
            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto text-[#00a386]">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-xl font-black text-slate-900">Booking Confirmed!</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Your payment was successful and your lab service has been scheduled.</p>
            <button 
              onClick={() => navigate("/appointments")} 
              className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm shadow-md"
            >
              Go to Appointments
            </button>
          </div>
        </div>
      )}

      {showLoginPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setShowLoginPopup(false)}></div>
          <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl relative z-10 text-center space-y-6">
            <button onClick={() => setShowLoginPopup(false)} className="absolute top-6 right-6 text-slate-400 hover:text-rose-500"><X size={24} /></button>
            <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-500"><LockKeyhole size={40} /></div>
            <h2 className="text-2xl font-black text-slate-900">Authentication Required</h2>
            <button onClick={() => { setShowLoginPopup(false); navigate("/"); }} className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm">LOGIN NOW 🔑</button>
          </div>
        </div>
      )}

      {errorModal.show && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setErrorModal({ show: false, message: "" })}></div>
          <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl relative z-10 text-center space-y-6">
            <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-500"><AlertCircle size={32} /></div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-slate-900">Information Required</h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">{errorModal.message}</p>
            </div>
            <button onClick={() => setErrorModal({ show: false, message: "" })} className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm shadow-md">OK</button>
          </div>
        </div>
      )}

      <button onClick={() => navigate(-1)} className="flex items-center gap-2 bg-white text-[#00a386] px-4 py-2 rounded-full font-bold shadow-sm mb-8 border border-slate-50"><ArrowLeft size={18} /> Back</button>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-8">
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-50">
             <img src={currentService.img} alt={title} className="w-full h-80 object-cover" />
             <div className="p-8 space-y-6">
                <h1 className="text-4xl font-black text-slate-900">{title}</h1>
                <div className="bg-[#f1fcfb] p-6 rounded-2xl border border-teal-50">
                   <h3 className="flex items-center gap-2 text-[#137d6e] font-black uppercase text-xs tracking-widest mb-2"><FileText size={14}/> About This Service</h3>
                   <p className="text-slate-500 text-sm font-medium">{currentService.about}</p>
                </div>
                <div className="flex items-center gap-2 bg-teal-50 text-[#00a386] w-fit px-6 py-3 rounded-full font-black"><IndianRupee size={20}/> {currentService.price}</div>
             </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-xl space-y-10 border border-slate-50">
             <div className="space-y-6">
                <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest flex items-center gap-2"><ShieldCheck size={16}/> Your Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name *" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
                    <input type="number" placeholder="Mobile (10 digits) *" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, mobile: e.target.value})} />
                    <input type="number" placeholder="Age *" className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, age: e.target.value})} />
                    <select className="bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none appearance-none cursor-pointer" onChange={(e) => setFormData({...formData, gender: e.target.value})}>
                      <option>Select Gender *</option><option>Male</option><option>Female</option>
                    </select>
                </div>
                <input type="email" placeholder="Email" className="w-full bg-[#f1fcfb] border border-green-100 rounded-full py-4 px-6 text-sm outline-none" onChange={(e) => setFormData({...formData, email: e.target.value})} />
             </div>

             <div className="space-y-4 pt-6 border-t border-slate-50">
                <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest flex items-center gap-2"><Calendar size={16}/> Select Date *</h3>
                <input 
                  type="date" 
                  className={`w-full max-w-xs border rounded-full py-4 px-6 text-sm outline-none cursor-pointer font-bold ${selectedDate ? "bg-[#00a386] text-white border-transparent" : "bg-[#f1fcfb] border-green-100 text-slate-600"}`}
                  min={new Date().toISOString().split("T")[0]} 
                  onChange={(e) => setSelectedDate(e.target.value)} 
                />
             </div>

             <div className="space-y-4 pt-6 border-t border-slate-50">
                <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest flex items-center gap-2"><Clock size={16}/> Select Time *</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                   {["09:00 AM", "10:30 AM", "11:00 AM", "01:30 PM", "04:00 PM", "06:30 PM"].map((time) => (
                     <button key={time} onClick={() => setSelectedTime(time)} className={`py-3 px-4 rounded-full text-xs font-bold transition-all border ${selectedTime === time ? "bg-teal-50 border-[#00a386] text-[#00a386] shadow-sm" : "bg-white border-slate-100 text-slate-400"}`}>{time}</button>
                   ))}
                </div>
             </div>
          </div>
        </div>

        <div className="lg:w-96">
           <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-50 space-y-6 sticky top-32">
              <h3 className="text-[#137d6e] font-black uppercase text-xs tracking-widest">Booking Summary</h3>
              <div className="space-y-3">
                 <SummaryRow label="Date" value={selectedDate || "Not selected"} color={selectedDate ? "text-slate-700" : "text-rose-400"} />
                 <SummaryRow label="Time" value={selectedTime || "Not selected"} color={selectedTime ? "text-slate-700" : "text-rose-400"} />
                 <SummaryRow label="Price" value={`₹${currentService.price}`} color="text-[#137d6e]" />
              </div>
              <button 
                onClick={handleBookingAttempt}
                className="w-full py-5 rounded-full font-black flex items-center justify-center gap-3 transition-all bg-[#00a386] text-white shadow-xl hover:bg-[#008f75]"
              >
                 <Send size={18} /> Confirm Booking
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

const SummaryRow = ({ label, value, color = "text-slate-500" }) => (
  <div className="flex justify-between text-sm font-bold">
    <span className="text-[#00a386]">{label}:</span>
    <span className={color}>{value}</span>
  </div>
);

export default ServiceBooking;