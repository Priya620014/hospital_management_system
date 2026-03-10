
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Calendar, TestTube, LockKeyhole, ArrowRight, 
  User as UserIcon, Clock, MapPin, Edit3, Save, X, CheckCircle, Trash2, AlertTriangle, Phone 
} from "lucide-react";
import { useAuth, useUser } from "@clerk/clerk-react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Appointments = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth(); 
  const { user } = useUser(); 
  
  const [doctorAppointments, setDoctorAppointments] = useState([]);
  const [serviceBookings, setServiceBookings] = useState([]); 
  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [editingServiceId, setEditingServiceId] = useState(null);
  const [serviceEditData, setServiceEditData] = useState({});
  const [cancelModal, setCancelModal] = useState({ show: false, id: null, isLate: false, isService: false });
  const [cancelReason, setCancelReason] = useState("");
  const [successModal, setSuccessModal] = useState({ show: false, message: "" });

  const fetchUserData = async () => {
    if (!isSignedIn || !user) return;
    setLoading(true);
    try {
      const [aptRes, svcRes] = await Promise.all([
        fetch(`http://localhost:4000/api/appointments/user/${user.id}`),
        fetch(`http://localhost:4000/api/services/user/${user.id}`)
      ]);
      const aptData = await aptRes.json();
      const svcData = await svcRes.json();
      setDoctorAppointments(aptData);
      setServiceBookings(svcData);
    } catch (err) {
      console.error("Database fetch failed:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [isSignedIn, user]);

  const startEditing = (apt) => {
    setEditingId(apt._id);
    setEditData({
      patientName: apt.patientName || "",
      patientMobile: apt.patientMobile || "",
      appointmentDate: apt.appointmentDate || "",
      appointmentTime: apt.appointmentTime || ""
    });
  };

  const startServiceEditing = (service) => {
    setEditingServiceId(service._id);
    setServiceEditData({
      patientName: service.patientName || "",
      patientMobile: service.patientMobile || "",
      appointmentDate: service.appointmentDate || "",
      appointmentTime: service.appointmentTime || ""
    });
  };

  const saveChanges = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/appointments/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editData),
      });
      if (response.ok) {
        setEditingId(null);
        await fetchUserData(); 
        setSuccessModal({ show: true, message: "Appointment updated successfully!" });
      }
    } catch (err) { console.error("Update error:", err); }
  };

  const saveServiceChanges = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/services/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(serviceEditData),
      });
      if (response.ok) {
        setEditingServiceId(null);
        await fetchUserData();
        setSuccessModal({ show: true, message: "Service booking updated successfully!" });
      }
    } catch (err) { console.error("Service update error:", err); }
  };

  const initiateCancel = (apt, isService = false) => {
    const aptDate = new Date(apt.appointmentDate);
    const now = new Date();
    const diffInHours = (aptDate - now) / (1000 * 60 * 60);
    setCancelModal({ show: true, id: apt._id, isLate: diffInHours < 24, isService: isService });
  };

  const handleCancel = async () => {
    if (!cancelReason.trim()) return alert("Please provide a reason for cancellation.");
    const endpoint = cancelModal.isService 
      ? `http://localhost:4000/api/services/${cancelModal.id}` 
      : `http://localhost:4000/api/appointments/${cancelModal.id}`;
    try {
      const response = await fetch(endpoint, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reason: cancelReason })
      });
      if (response.ok) {
        const result = await response.json();
        setCancelModal({ show: false, id: null, isLate: false, isService: false });
        setCancelReason("");
        await fetchUserData();
        const msg = result.fineCharged ? "Late cancellation fine applied." : "Cancelled successfully.";
        setSuccessModal({ show: true, message: msg });
      }
    } catch (err) { console.error("Cancellation error:", err); }
  };

  
const handleDownloadReceipt = (item) => {
    const doc = new jsPDF();
    const primaryColor = [0, 163, 134]; // Medicare+ Teal
    const secondaryColor = [51, 65, 85]; // Dark Slate for text

    // --- 1. Header Section ---
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    doc.text("Private Hospital Bill Receipt", 105, 40, { align: "center" });
    
    doc.setFontSize(12);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text("Medicare+ Healthcare Solutions", 14, 15);
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(120);
    doc.text("123 Health Ave, Medical District", 14, 20);
    doc.text("Contact: +91 9876543210", 14, 24);
    doc.text("Website: www.medicareplus.com", 14, 28);

    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    doc.text(`Date of Issue: ${new Date().toLocaleDateString()}`, 150, 20);
    doc.text(`Receipt No: MED-${Math.floor(100000 + Math.random() * 900000)}`, 150, 24);

    // --- 2. Patient Information Section ---
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("Patient Information", 14, 55);
    doc.line(14, 57, 196, 57); 

    doc.setFont("helvetica", "normal");
    const patientInfoStart = 65;

    // CHANGED: Matching keys used in your .map() and editData state
    doc.text(`Patient Name: ${item.patientName || "N/A"}`, 14, patientInfoStart);
    doc.text(`Patient ID: ${item.userId?.slice(-6).toUpperCase() || "TEMP-01"}`, 14, patientInfoStart + 7);
    doc.text(`Mobile Number: ${item.patientMobile || "N/A"}`, 14, patientInfoStart + 14); // Corrected from mobile
    
    doc.text(`Booking Date: ${item.appointmentDate || "N/A"}`, 110, patientInfoStart);
    doc.text(`Booking Time: ${item.appointmentTime || "N/A"}`, 110, patientInfoStart + 7); // Corrected from undefined
    doc.text(`Doctor/Provider: ${item.doctorName ? "Dr. " + item.doctorName : (item.serviceName || "Medical Staff")}`, 110, patientInfoStart + 14);

    // --- 3. Bill Details Table ---
    doc.setFont("helvetica", "bold");
    doc.text("Bill Details", 14, 95);

    const tableData = [
      [
        "1", 
        item.serviceName || `Consultation with Dr. ${item.doctorName}`, 
        "1", 
        `INR ${item.fees || 1000}.00`, 
        `INR ${item.fees || 1000}.00`
      ]
    ];

    autoTable(doc, {
      startY: 100,
      head: [['No.', 'Description', 'Quantity', 'Unit Price', 'Amount']],
      body: tableData,
      theme: 'striped',
      headStyles: { fillColor: primaryColor, textColor: 255, fontStyle: 'bold' },
      styles: { fontSize: 10, cellPadding: 5 },
      columnStyles: {
        0: { cellWidth: 15 },
        1: { cellWidth: 80 },
        2: { cellWidth: 25, halign: 'center' },
        3: { cellWidth: 35 },
        4: { cellWidth: 35 },
      }
    });

    // --- 4. Totals & Signature ---
    const finalY = doc.lastAutoTable.finalY + 10;
    doc.setFont("helvetica", "bold");
    doc.text(`Total Amount: INR ${item.fees || 1000}.00`, 145, finalY);
    
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.text("Amount in words: One Thousand Rupees Only", 14, finalY);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("__________________________", 150, finalY + 30);
    doc.text("Authorized Signature", 155, finalY + 35);

    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text("This is a computer-generated receipt. For any discrepancies, please visit the hospital reception.", 105, 285, { align: "center" });

    doc.save(`Medicare_Invoice_${item.patientName || "Receipt"}.pdf`);
  };
  return (
    <div className="min-h-screen bg-[#f1fcfb] pt-32 pb-20 px-6 lg:px-24">
      {successModal.show && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setSuccessModal({ show: false, message: "" })}></div>
          <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl relative z-10 text-center space-y-6 border border-teal-50">
            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto text-[#00a386]"><CheckCircle size={40} /></div>
            <h3 className="text-xl font-black text-slate-900">Action Complete!</h3>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">{successModal.message}</p>
            <button onClick={() => setSuccessModal({ show: false, message: "" })} className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-sm">OK</button>
          </div>
        </div>
      )}

      {cancelModal.show && (
        <div className="fixed inset-0 z-[160] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setCancelModal({ show: false, id: null })}></div>
          <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl relative z-10 space-y-6 border border-rose-50">
            <button onClick={() => setCancelModal({ show: false, id: null })} className="absolute top-8 right-8 text-slate-400 hover:text-rose-500"><X size={24} /></button>
            <div className="flex items-center gap-4 text-rose-500"><AlertTriangle size={32} /><h3 className="text-2xl font-black text-slate-900">Cancel Booking?</h3></div>
            {cancelModal.isLate && <div className="bg-rose-50 p-4 rounded-2xl border border-rose-100"><p className="text-rose-600 text-sm font-bold">⚠️ Less than 24 hours: ₹200 fine will apply.</p></div>}
            <textarea className="w-full bg-slate-50 border border-slate-100 rounded-3xl p-5 text-sm outline-none h-32" placeholder="Reason for cancellation..." value={cancelReason} onChange={(e) => setCancelReason(e.target.value)} />
            <div className="flex gap-4">
              <button onClick={handleCancel} className="flex-1 bg-rose-500 text-white py-4 rounded-full font-black text-xs uppercase hover:bg-rose-600">Confirm Cancel</button>
              <button onClick={() => setCancelModal({ show: false, id: null })} className="flex-1 bg-slate-100 text-slate-500 py-4 rounded-full font-black text-xs uppercase">Keep Booking</button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        {!isSignedIn ? (
          <div className="bg-white rounded-[3rem] p-12 text-center shadow-xl">
            <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-500 mb-6"><LockKeyhole size={48} /></div>
            <h2 className="text-3xl font-black text-slate-900">Login Required</h2>
            <button onClick={() => navigate("/")} className="mt-6 bg-[#00a386] text-white px-10 py-4 rounded-full font-black">Return Home</button>
          </div>
        ) : (
          <div className="space-y-16">
            {/* DOCTOR SECTION */}
            <div className="space-y-8 text-center">
              <h2 className="text-4xl font-black text-[#137d6e] flex items-center justify-center gap-3"><UserIcon className="text-teal-600" size={32} /> Doctor Appointments</h2>
              <div className="grid gap-6">
                {doctorAppointments.map((apt) => (
                  <div key={apt._id} className="bg-white p-8 rounded-[2rem] shadow-md border border-teal-50 flex flex-col gap-4 text-left relative">
                    {editingId === apt._id ? (
                      <div className="space-y-4">
                        <div className="flex justify-between items-center"><h3 className="font-black text-teal-700 uppercase text-xs tracking-widest">Editing Appointment</h3><button onClick={() => setEditingId(null)} className="text-slate-400 hover:text-rose-500"><X size={20}/></button></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input type="text" value={editData.patientName} onChange={(e) => setEditData({...editData, patientName: e.target.value})} className="bg-[#f1fcfb] border border-teal-100 rounded-full py-3 px-6 text-sm outline-none" placeholder="Patient Name" />
                          <input type="tel" value={editData.patientMobile} onChange={(e) => setEditData({...editData, patientMobile: e.target.value})} className="bg-[#f1fcfb] border border-teal-100 rounded-full py-3 px-6 text-sm outline-none" placeholder="Phone Number" />
                          <input type="date" value={editData.appointmentDate} onChange={(e) => setEditData({...editData, appointmentDate: e.target.value})} className="bg-[#f1fcfb] border border-teal-100 rounded-full py-3 px-6 text-sm outline-none" />
                          <input type="time" value={editData.appointmentTime} onChange={(e) => setEditData({...editData, appointmentTime: e.target.value})} className="bg-[#f1fcfb] border border-teal-100 rounded-full py-3 px-6 text-sm outline-none" />
                        </div>
                        <button onClick={() => saveChanges(apt._id)} className="w-full bg-[#00a386] text-white py-3 rounded-full font-black text-xs flex items-center justify-center gap-2 hover:bg-[#008f75]"><Save size={16}/> Save Changes</button>
                      </div>
                    ) : (
                      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 font-black text-xl">{apt.doctorName?.charAt(0)}</div>
                          <div>
                            <h3 className="font-black text-slate-900 text-lg">Dr. {apt.doctorName}</h3>
                            <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500 mt-1">
                              <span className="flex items-center gap-1"><Calendar size={14}/> {apt.appointmentDate}</span>
                              <span className="flex items-center gap-1"><Clock size={14}/> {apt.appointmentTime}</span>
                              <span className="flex items-center gap-1 text-teal-600 font-bold bg-teal-50 px-2 rounded">👤 {apt.patientName}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button onClick={() => handleDownloadReceipt(apt)} className="text-[#f87171] font-bold text-sm hover:underline">Download Receipt</button>
                          <button onClick={() => startEditing(apt)} className="p-3 bg-slate-50 text-slate-400 rounded-full hover:bg-teal-50 hover:text-[#00a386]"><Edit3 size={18} /></button>
                          <button onClick={() => initiateCancel(apt)} className="p-3 bg-rose-50 text-rose-400 rounded-full hover:bg-rose-100 hover:text-rose-600"><Trash2 size={18} /></button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* SERVICES SECTION */}
            <div className="space-y-8 text-center">
              <h2 className="text-4xl font-black text-[#137d6e] flex items-center justify-center gap-3"><TestTube className="text-[#00a386]" size={32} /> Your Booked Services</h2>
              <div className="grid gap-6">
                {serviceBookings.map((service) => (
                  <div key={service._id} className="bg-white p-8 rounded-[2rem] shadow-md border border-rose-50 flex flex-col gap-4 text-left relative">
                    {editingServiceId === service._id ? (
                      <div className="space-y-4">
                        <div className="flex justify-between items-center"><h3 className="font-black text-rose-700 uppercase text-xs tracking-widest">Editing Service</h3><button onClick={() => setEditingServiceId(null)} className="text-slate-400 hover:text-rose-500"><X size={20}/></button></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input type="text" value={serviceEditData.patientName} onChange={(e) => setServiceEditData({...serviceEditData, patientName: e.target.value})} className="bg-rose-50/30 border border-rose-100 rounded-full py-3 px-6 text-sm outline-none" placeholder="Patient Name" />
                          <input type="tel" value={serviceEditData.patientMobile} onChange={(e) => setServiceEditData({...serviceEditData, patientMobile: e.target.value})} className="bg-rose-50/30 border border-rose-100 rounded-full py-3 px-6 text-sm outline-none" placeholder="Phone Number" />
                          <input type="date" value={serviceEditData.appointmentDate} onChange={(e) => setServiceEditData({...serviceEditData, appointmentDate: e.target.value})} className="bg-rose-50/30 border border-rose-100 rounded-full py-3 px-6 text-sm outline-none" />
                          <input type="time" value={serviceEditData.appointmentTime} onChange={(e) => setServiceEditData({...serviceEditData, appointmentTime: e.target.value})} className="bg-rose-50/30 border border-rose-100 rounded-full py-3 px-6 text-sm outline-none" />
                        </div>
                        <button onClick={() => saveServiceChanges(service._id)} className="w-full bg-rose-500 text-white py-3 rounded-full font-black text-xs hover:bg-rose-600">Save Changes</button>
                      </div>
                    ) : (
                      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500"><TestTube size={24}/></div>
                          <div className="text-left">
                            <h3 className="font-black text-slate-900 text-lg">{service.serviceName}</h3>
                            <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500 mt-1">
                              <span className="flex items-center gap-1"><Calendar size={14}/> {service.appointmentDate}</span>
                              <span className="flex items-center gap-1"><Clock size={14}/> {service.appointmentTime}</span>
                              <span className="flex items-center gap-1 text-rose-600 font-bold bg-rose-50 px-2 rounded">👤 {service.patientName}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <button onClick={() => handleDownloadReceipt(service)} className="text-[#f87171] font-bold text-sm hover:underline">Download Receipt</button>
                          <button onClick={() => startServiceEditing(service)} className="p-3 bg-slate-50 text-slate-400 rounded-full hover:bg-rose-50 hover:text-rose-500"><Edit3 size={18} /></button>
                          <button onClick={() => initiateCancel(service, true)} className="p-3 bg-rose-50 text-rose-400 rounded-full hover:bg-rose-100 hover:text-rose-600"><Trash2 size={18} /></button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointments;