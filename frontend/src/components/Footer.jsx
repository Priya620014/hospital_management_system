import React from "react";
import { Link } from "react-router-dom";
import { 
  Phone, Mail, MapPin, Send, 
  Facebook, Twitter, Instagram, Linkedin, Youtube 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f1fcfb] pt-20 pb-10 px-6 lg:px-24 border-t border-green-100 relative overflow-hidden">
      {/* Decorative background icons like the pulse and stethoscope */}
      <div className="absolute left-4 top-1/2 text-green-200 opacity-50 hidden lg:block">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* Column 1: Branding & Contact */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img src="/images/logo.jpeg" alt="Logo" className="w-12 h-12" />
            <div>
              <h2 className="text-2xl font-black text-[#137d6e] leading-none">MediCare</h2>
              <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest mt-1">Healthcare Solutions</p>
            </div>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Your trusted partner in healthcare innovation. We're committed to providing exceptional medical care with cutting-edge technology and compassionate service.
          </p>
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3 text-slate-600 text-sm font-semibold">
              <div className="bg-green-100 p-2 rounded-full text-[#137d6e]"><Phone size={16} /></div>
              +91 8299431275
            </div>
            <div className="flex items-center gap-3 text-slate-600 text-sm font-semibold">
              <div className="bg-green-100 p-2 rounded-full text-[#137d6e]"><Mail size={16} /></div>
              hexagonservices@gmail.com
            </div>
            <div className="flex items-center gap-3 text-slate-600 text-sm font-semibold">
              <div className="bg-green-100 p-2 rounded-full text-[#137d6e]"><MapPin size={16} /></div>
              Lucknow, India
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:pl-10">
          <h3 className="text-xl font-black text-[#137d6e] mb-8">Quick Links</h3>
          <ul className="space-y-4">
            {['Home', 'Doctors', 'Services', 'Contact', 'Appointments'].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase()}`} className="text-slate-500 hover:text-[#137d6e] transition-colors flex items-center gap-2 font-bold text-sm">
                  <span className="text-[#00a386]">➔</span> {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div>
          <h3 className="text-xl font-black text-[#137d6e] mb-8">Our Services</h3>
          <ul className="space-y-4">
            {['Blood Pressure Check', 'Blood Sugar Test', 'Full Blood Count', 'X-Ray Scan', 'Blood Sugar Test'].map((service, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-500 font-bold text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span> {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Stay Connected */}
        <div className="space-y-6">
          <h3 className="text-xl font-black text-[#137d6e] mb-2">Stay Connected</h3>
          <p className="text-sm text-slate-500 font-medium leading-relaxed">
            Subscribe for health tips, medical updates, and wellness insights delivered to your inbox.
          </p>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-white border border-green-100 rounded-full py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 pr-32 shadow-sm"
            />
            <button className="absolute right-1.5 top-1.5 bg-[#00a386] text-white px-5 py-2.5 rounded-full text-xs font-black flex items-center gap-2 hover:bg-[#008f75] transition-all">
              Subscribe <Send size={14} />
            </button>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 pt-4">
            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 bg-white border border-green-100 rounded-full flex items-center justify-center text-[#137d6e] hover:bg-[#00a386] hover:text-white transition-all shadow-sm">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-20 pt-8 border-t border-green-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-[#137d6e]">
        <p>© 2026 MediCare Healthcare.</p>
        <p>Designed by <span className="text-green-600">Hexagon Digital Services</span></p>
      </div>
    </footer>
  );
};

export default Footer;