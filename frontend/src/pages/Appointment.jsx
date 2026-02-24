import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const departmentsArray = [
    "Pediatrics", "Orthopedics", "Cardiology", "Neurology", "Oncology", "Radiology", "Physical Therapy", "Dermatology", "ENT",
  ];

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/appointment/post",
        { firstName, lastName, email, phone, nic, dob, gender, appointment_date: appointmentDate, department, doctor_firstName: doctorFirstName, doctor_lastName: doctorLastName, hasVisited: hasVisitedBool, address },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
      toast.success(data.message);
      // Reset Form
      setFirstName(""); setLastName(""); setEmail(""); setPhone(""); setNic(""); setDob(""); setGender(""); setAppointmentDate(""); setDepartment(""); setDoctorFirstName(""); setDoctorLastName(""); setAddress(""); setHasVisited(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Book An Appointment</h2>
      <form onSubmit={handleAppointment} className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-10 rounded-2xl shadow-xl">
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="border p-3 rounded" />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="border p-3 rounded" />
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-3 rounded" />
        <input type="number" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="border p-3 rounded" />
        <input type="number" placeholder="NIC" value={nic} onChange={(e) => setNic(e.target.value)} className="border p-3 rounded" />
        <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} className="border p-3 rounded" />
        <select value={gender} onChange={(e) => setGender(e.target.value)} className="border p-3 rounded">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input type="date" placeholder="Appointment Date" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} className="border p-3 rounded" />
        <select value={department} onChange={(e) => setDepartment(e.target.value)} className="border p-3 rounded">
          {departmentsArray.map((dept, index) => (
            <option value={dept} key={index}>{dept}</option>
          ))}
        </select>
        <div className="flex gap-2">
          <input type="text" placeholder="Doctor First Name" value={doctorFirstName} onChange={(e) => setDoctorFirstName(e.target.value)} className="border p-3 rounded w-1/2" />
          <input type="text" placeholder="Doctor Last Name" value={doctorLastName} onChange={(e) => setDoctorLastName(e.target.value)} className="border p-3 rounded w-1/2" />
        </div>
        <textarea rows="5" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" className="md:col-span-2 border p-3 rounded" />
        <div className="flex items-center gap-2">
          <p>Have you visited before?</p>
          <input type="checkbox" checked={hasVisited} onChange={(e) => setHasVisited(e.target.checked)} className="w-5 h-5" />
        </div>
        <button type="submit" className="md:col-span-2 bg-blue-700 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition">GET APPOINTMENT</button>
      </form>
    </div>
  );
};

export default AppointmentForm;