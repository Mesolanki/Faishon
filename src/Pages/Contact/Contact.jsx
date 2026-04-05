import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, Send, Instagram, Twitter, Github, Headphones } from 'lucide-react';

const Contact = () => {
  return (
    <Motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 px-6 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-32">
          <div className="space-y-16 lg:w-1/2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-mono tracking-widest uppercase rounded-full">
                COMMUNICATION_LINK_ACTIVE
              </div>
              <h1 className="text-8xl md:text-[10rem] font-black text-white tracking-tighter leading-[0.8] uppercase">
                GET_ <br /> <span className="text-indigo-500 italic">IN_TOUCH.</span>
              </h1>
              <p className="text-gray-500 text-xl font-light leading-relaxed max-w-md italic">
                Direct relay for operations, deployments, and tactical support. 
                Average response time: 0.2ms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <ContactInfo icon={<Mail />} title="Secure Relay" detail="ops@neo26.alt" />
               <ContactInfo icon={<MapPin />} title="Deployment Hub" detail="Sector 7, Neo Tokyo" />
               <ContactInfo icon={<MessageSquare />} title="Neural Link" detail="Channel 404-X" />
               <ContactInfo icon={<Headphones />} title="Tactical Support" detail="Available 24/7" />
            </div>

            <div className="flex gap-8 pt-8 border-t border-white/5">
                <SocialLink icon={<Instagram />} />
                <SocialLink icon={<Twitter />} />
                <SocialLink icon={<Github />} />
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <Motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-12 md:p-16 bg-white/5 border border-white/10 rounded-[4rem] relative overflow-hidden backdrop-blur-3xl shadow-2xl"
            >
                <div className="absolute top-0 right-0 p-12 text-indigo-500/10 scale-150">
                    <Send size={150} strokeWidth={1} />
                </div>
                
                <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold ml-1">Operator Alias</label>
                    <input 
                      type="text" 
                      placeholder="Ghost_23" 
                      className="w-full h-18 bg-black/40 border border-white/10 rounded-2xl px-8 text-white focus:border-indigo-500/50 focus:bg-black/60 outline-none transition-all placeholder:text-gray-800 font-mono" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold ml-1">Encryption Protocol (Email)</label>
                    <input 
                      type="email" 
                      placeholder="relayer@host.net" 
                      className="w-full h-18 bg-black/40 border border-white/10 rounded-2xl px-8 text-white focus:border-indigo-500/50 focus:bg-black/60 outline-none transition-all placeholder:text-gray-800 font-mono" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold ml-1">Transmission Data</label>
                    <textarea 
                      rows="6"
                      placeholder="Initiate communication logs..." 
                      className="w-full bg-black/40 border border-white/10 rounded-3xl px-8 py-6 text-white focus:border-indigo-500/50 focus:bg-black/60 outline-none transition-all placeholder:text-gray-800 font-mono resize-none" 
                    />
                  </div>
                  
                  <button className="w-full h-18 bg-indigo-600 text-white rounded-2xl font-black flex items-center justify-center gap-3 active:scale-95 transition-all shadow-[0_0_40px_rgba(79,70,229,0.3)] hover:bg-indigo-500">
                    TRANSMIT_DATA <Send size={20} />
                  </button>
                </form>
            </Motion.div>
          </div>
        </div>
      </div>
    </Motion.div>
  );
};

const ContactInfo = ({ icon, title, detail }) => (
  <div className="flex gap-6 items-center">
    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400 shrink-0">
        {icon}
    </div>
    <div className="space-y-1">
        <h4 className="text-white font-black text-xs uppercase tracking-widest">{title}</h4>
        <p className="text-gray-500 font-mono text-sm">{detail}</p>
    </div>
  </div>
);

const SocialLink = ({ icon }) => (
  <a href="#" className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all">
    {icon}
  </a>
);

export default Contact;
