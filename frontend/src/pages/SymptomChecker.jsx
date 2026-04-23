import React, { useState } from 'react';
import { Sparkles, Send, Stethoscope, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SymptomChecker = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const analyzeSymptoms = async () => {
    if (!input) return;
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/ai/symptom-checker`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptoms: input }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error("AI Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-[3rem] p-8 shadow-2xl shadow-teal-100 border border-teal-50 max-w-2xl mx-auto my-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-teal-50 p-3 rounded-2xl text-[#00a386]">
          <Sparkles size={24} />
        </div>
        <div>
          <h2 className="text-xl font-black text-slate-800 uppercase">AI Symptom Checker</h2>
          <p className="text-[10px] font-bold text-slate-400 italic">Describe how you feel, and our AI will guide you</p>
        </div>
      </div>

      <div className="space-y-4">
        <textarea 
          className="w-full bg-[#f1fcfb] border border-teal-100 rounded-[2rem] p-6 text-sm outline-none focus:ring-2 ring-teal-200 transition-all"
          rows="3"
          placeholder="Example: I have a persistent headache and feel dizzy since morning..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        
        <button 
          onClick={analyzeSymptoms}
          disabled={loading}
          className="w-full bg-[#00a386] text-white py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-lg shadow-teal-100 flex items-center justify-center gap-2 hover:bg-[#008f75] disabled:opacity-50"
        >
          {loading ? "Analyzing..." : <><Send size={16} /> Analyze Symptoms</>}
        </button>
      </div>

      {result && (
        <div className="mt-8 animate-in fade-in zoom-in duration-500">
          <div className="bg-[#f1fcfb] rounded-[2rem] p-6 border border-teal-100 space-y-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 text-[#137d6e] font-black uppercase text-xs">
                <Stethoscope size={16} /> Suggested Department
              </div>
              <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase border ${
                result.urgency === 'High' ? 'bg-rose-50 text-rose-500 border-rose-100' : 'bg-teal-50 text-teal-600 border-teal-100'
              }`}>
                Urgency: {result.urgency}
              </span>
            </div>

            <h3 className="text-2xl font-black text-slate-800">{result.department}</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium italic">"{result.explanation}"</p>

            <button 
              onClick={() => navigate(`/doctors?department=${encodeURIComponent(result.department)}`)}
              className="w-full bg-white text-[#137d6e] border border-teal-100 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-teal-50 transition-all"
            >
              Book Appointment in {result.department}
            </button>
          </div>
        </div>
      )}
      
      <p className="text-[9px] text-center mt-6 text-slate-300 font-bold uppercase tracking-tighter flex items-center justify-center gap-1">
        <AlertCircle size={10} /> Disclaimer: This is an AI suggestion, not a professional medical diagnosis.
      </p>
    </div>
  );
};

export default SymptomChecker;