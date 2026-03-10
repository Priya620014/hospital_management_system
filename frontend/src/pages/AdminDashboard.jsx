import React, { useState, useEffect } from "react";
import { Users, UserPlus, Calendar, IndianRupee, CheckCircle, XCircle, Search } from "lucide-react"; // Added Search import

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/admin/stats")
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/api/admin/doctors-list")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  const filteredDoctors = doctors.filter(doc => 
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!stats) return <div className="p-10 text-teal-600 font-bold">Loading Admin Panel...</div>;

  return (
    <div className="min-h-screen bg-[#f1fcfb] pt-24 px-10 pb-20">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* HEADER */}
        <div className="space-y-2">
          <h1 className="text-4xl font-black text-slate-900 uppercase">Dashboard</h1>
          <p className="text-slate-500 font-medium italic">Overview of doctors & appointments</p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <StatCard icon={<Users />} label="Total Doctors" value={stats.totalDoctors} />
          <StatCard icon={<UserPlus />} label="Total Registered Users" value={stats.totalUsers} />
          <StatCard icon={<Calendar />} label="Total Appointments" value={stats.totalAppointments} />
          <StatCard icon={<IndianRupee />} label="Total Earnings" value={`₹${stats.totalEarnings.toLocaleString()}`} />
          <StatCard icon={<CheckCircle />} label="Completed" value={stats.completed} />
        </div>

        {/* SEARCH BAR SECTION */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-teal-50 border border-slate-50">
          <h2 className="text-xl font-black text-slate-800 mb-6">Search doctors</h2>
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-teal-500" size={20} />
              <input 
                type="text" 
                placeholder="Search name / specialization / fee" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#f1fcfb] border border-teal-100 rounded-full py-4 px-14 outline-none focus:ring-2 ring-teal-200"
              />
            </div>
            <button onClick={() => setSearchTerm("")} className="bg-[#00a386] text-white px-10 py-4 rounded-full font-black uppercase text-sm">Clear</button>
          </div>
        </div>

        {/* DOCTORS TABLE */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-teal-50 border border-slate-50">
          <div className="p-8 flex justify-between items-center border-b border-slate-50">
            <h2 className="text-2xl font-black text-slate-800 uppercase italic">Doctors</h2>
            <span className="text-slate-400 font-bold text-sm">Showing {filteredDoctors.length} of {doctors.length}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f1fcfb] text-[#137d6e] uppercase text-[10px] font-black tracking-widest">
                  <th className="px-8 py-5">Doctor</th>
                  <th className="px-8 py-5">Specialization</th>
                  <th className="px-8 py-5">Fee</th>
                  <th className="px-8 py-5 text-center">Appointments</th>
                  <th className="px-8 py-5 text-center">Completed</th>
                  <th className="px-8 py-5 text-center">Canceled</th>
                  <th className="px-8 py-5 text-right">Total Earnings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredDoctors.map((doc) => (
                  <tr key={doc._id} className="hover:bg-teal-50/30 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img src={doc.imageUrl || "/images/default-doc.jpg"} className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover" alt="" />
                          <CheckCircle size={14} className="absolute -right-1 -bottom-1 text-teal-500 fill-white" />
                        </div>
                        <div>
                          <p className="font-black text-slate-800 text-sm capitalize">Dr {doc.name}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">ID: {doc._id?.slice(-8)}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-sm font-bold text-slate-600">{doc.specialty}</span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-sm font-black text-slate-800">₹{doc.fees || 1000}</span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className="text-sm font-bold text-slate-500">{doc.appointmentsCount || 0}</span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className="text-sm font-black text-teal-600">{doc.completedCount || 0}</span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className="text-sm font-black text-rose-500">{doc.canceledCount || 0}</span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <span className="text-sm font-black text-slate-900">₹{(doc.totalEarnings || 0).toLocaleString()}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value }) => (
  <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-teal-50 flex items-center gap-4 transition-transform hover:scale-105">
    <div className="bg-[#f1fcfb] p-4 rounded-full text-[#00a386]">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">{label}</p>
      <p className="text-2xl font-black text-slate-900 leading-none">{value}</p>
    </div>
  </div>
);

export default AdminDashboard;