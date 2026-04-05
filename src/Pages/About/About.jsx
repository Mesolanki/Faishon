import React from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { Target, Shield, Globe, Award, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <Motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="relative h-[60vh] flex flex-col justify-center items-center text-center space-y-12">
            <Motion.div 
              style={{ y }}
              className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-full text-[40vw] font-black text-white/[0.02] tracking-tighter pointer-events-none select-none leading-none"
            >
              LEGACY
            </Motion.div>
            
            <Motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6 z-10"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-mono tracking-widest uppercase rounded-full">
                ESTABLISHED_2026
              </div>
              <h1 className="text-8xl md:text-[10rem] font-black text-white tracking-tighter leading-[0.8] uppercase">
                THE_MISSION.
              </h1>
            </Motion.div>

            <Motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-xl max-w-2xl font-light leading-relaxed mx-auto italic"
            >
              "Engineering the next evolution of human mobility. Modular, adaptive, and unapologetically high-performance."
            </Motion.p>
        </div>

        {/* Content Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mt-32">
             <Motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
             >
                <div className="absolute inset-0 bg-indigo-600/20 blur-[100px] rounded-full group-hover:bg-indigo-600/30 transition-all" />
                <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1200" 
                      className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                      alt="Neo26 Tech"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
             </Motion.div>

             <div className="space-y-16">
                <div className="space-y-8">
                  <h2 className="text-6xl font-black text-white tracking-tighter uppercase whitespace-nowrap leading-none">
                    ENGINEERING_ <br /> <span className="text-indigo-500 italic">LIMITLESS.</span>
                  </h2>
                  <p className="text-gray-500 text-xl font-light leading-relaxed">
                    At Neo26, we don't just design garments; we build equipment. Every stitch is calculated for maximum durability and climate integration. Our philosophy is rooted in the intersection of high-fashion and tactical utility.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="space-y-4">
                      <Target className="text-indigo-500" size={32} />
                      <h4 className="text-white font-black text-lg uppercase tracking-tight">PRECISION</h4>
                      <p className="text-gray-600 text-sm font-mono uppercase tracking-widest">Laser-cut precision for ergonomic movement</p>
                   </div>
                   <div className="space-y-4">
                      <Shield className="text-indigo-500" size={32} />
                      <h4 className="text-white font-black text-lg uppercase tracking-tight">PROTECTION</h4>
                      <p className="text-gray-600 text-sm font-mono uppercase tracking-widest">Quantum-level fabric fortification</p>
                   </div>
                   <div className="space-y-4">
                      <Globe className="text-indigo-500" size={32} />
                      <h4 className="text-white font-black text-lg uppercase tracking-tight">ADAPTABILITY</h4>
                      <p className="text-gray-600 text-sm font-mono uppercase tracking-widest">Thermal-reactive fibers for any climate</p>
                   </div>
                   <div className="space-y-4">
                      <Award className="text-indigo-500" size={32} />
                      <h4 className="text-white font-black text-lg uppercase tracking-tight">QUALIFICATIONS</h4>
                      <p className="text-gray-600 text-sm font-mono uppercase tracking-widest">ISO-900X Certified Exploration Gear</p>
                   </div>
                </div>

                <Link 
                  to="/store" 
                  className="inline-flex h-16 px-12 bg-white text-black rounded-2xl font-black items-center justify-center gap-3 active:scale-95 transition-all group shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                >
                  JOIN_THEDEPOT <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
             </div>
        </div>

        {/* Milestone Bar */}
        <div className="mt-64 relative py-32 border-y border-white/5 overflow-hidden">
            <Motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-20 whitespace-nowrap"
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex gap-20 items-center">
                    <span className="text-9xl font-black text-transparent stroke-text tracking-tighter opacity-20 hover:opacity-100 transition-opacity">FUTURECORE</span>
                    <Zap className="text-indigo-500" size={64} fill="currentColor" />
                    <span className="text-9xl font-black text-white tracking-tighter opacity-20 hover:opacity-100 transition-opacity">V2.06_UPDATE</span>
                    <Globe className="text-indigo-500" size={64} />
                </div>
              ))}
            </Motion.div>
        </div>
      </div>
      
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.5);
        }
      `}</style>
    </Motion.div>
  );
};

export default About;
