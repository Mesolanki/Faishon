import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Orbit, Timer, Bell } from 'lucide-react';

const Drops = () => {
  const upcomingDrops = [
    { id: 1, name: "ORBIT_BOMBER v2", date: "24.04.2026", time: "18:00 GMT", status: "Coming Soon" },
    { id: 2, name: "PHASE_BOOTS [LTD]", date: "02.05.2026", time: "12:00 GMT", status: "Coming Soon" },
    { id: 3, name: "GHOST_SHELL PARKA", date: "15.05.2026", time: "20:00 GMT", status: "Coming Soon" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-indigo-600/10 border border-indigo-500/20 rounded-3xl flex items-center justify-center">
              <Orbit size={40} className="text-indigo-500 animate-pulse" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 uppercase">System_Drops.</h1>
          <p className="text-gray-500 text-xl font-light">Limited release window for the next generation of gear.</p>
        </Motion.div>

        <div className="space-y-6">
          {upcomingDrops.map((drop, idx) => (
            <Motion.div
              key={drop.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-white/5 border border-white/10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-8">
                <div className="text-indigo-500 font-mono text-2xl font-bold">0{idx + 1}</div>
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">{drop.name}</h3>
                  <div className="flex items-center gap-4 mt-2 text-gray-500 text-sm font-mono uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Timer size={14} /> {drop.date}</span>
                    <span>{drop.time}</span>
                  </div>
                </div>
              </div>
              
              <button className="px-8 py-4 bg-white text-black rounded-2xl font-black flex items-center gap-3 active:scale-95 transition-all group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <Bell size={18} /> REMIND ME
              </button>
            </Motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-indigo-600 rounded-[3rem] text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
            <h2 className="text-4xl font-black text-white mb-4 italic">NEVER MISS A RELEASE.</h2>
            <p className="text-indigo-100 mb-8 max-w-sm mx-auto opacity-80">Join the exclusive network to get early access and priority slots for every major drop.</p>
            <div className="flex bg-white/10 backdrop-blur-md rounded-2xl p-2 max-w-md mx-auto">
                <input type="email" placeholder="ENTER_EMAIL_CORPUS" className="bg-transparent border-none outline-none p-4 text-white w-full placeholder:text-indigo-200/50" />
                <button className="px-8 py-4 bg-white text-black rounded-xl font-black uppercase text-xs tracking-widest whitespace-nowrap">Subscribe</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Drops;
