const BookingCalendar = () => {
  const dates = [
    { day: "Mon", date: "16", month: "Feb" },
    { day: "Tue", date: "17", month: "Feb" },
    { day: "Wed", date: "18", month: "Feb" },
  ];

  return (
    <div className="bg-white rounded-4xl p-8 border border-slate-100 shadow-sm">
      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        🗓️ Book Your Appointment
      </h3>
      
      <p className="text-slate-400 font-bold text-xs uppercase mb-4">Select Date</p>
      <div className="flex gap-4 mb-8">
        {dates.map((item, idx) => (
          <div key={idx} className={`flex flex-col items-center p-4 rounded-3xl border-2 transition cursor-pointer ${idx === 0 ? 'border-green-500 bg-green-50' : 'border-slate-50'}`}>
            <span className="text-xs font-bold text-slate-400">{item.day}</span>
            <span className="text-xl font-black text-slate-800">{item.date}</span>
            <span className="text-xs font-bold text-slate-400">{item.month}</span>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 rounded-2xl p-6 border border-dashed border-slate-200 text-center">
         <p className="text-slate-500 text-sm">No time slots available for this date.</p>
      </div>
    </div>
  );
};