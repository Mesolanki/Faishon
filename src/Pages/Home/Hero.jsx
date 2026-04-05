import React from 'react';
import { motion as Motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, Play, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center justify-center perspective-1000 overflow-hidden pt-20"
    >
      <Motion.div 
        style={{ y: yText }}
        className="absolute top-1/4 left-0 w-full text-center pointer-events-none opacity-[0.03]"
      >
        <h1 className="text-[30vw] font-black tracking-tighter leading-none">NEO26</h1>
      </Motion.div>

      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-12 items-center z-10">
        <div className="col-span-12 lg:col-span-6 space-y-12">
          <Motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono tracking-widest uppercase"
          >
            <Zap size={14} fill="currentColor" className="animate-pulse" />
            Stock Limited: Winter Phase 01
          </Motion.div>

          <Motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter"
          >
            BEYOND <br /> <span className="text-indigo-600 italic">FABRIC.</span>
          </Motion.h1>

          <p className="text-gray-400 text-xl max-w-md font-light leading-relaxed">
            Engineered silhouettes for the high-performance lifestyle. 
            Integrated with <span className="text-white font-medium italic">Graphene-Lite</span> tech.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link to="/store">
              <Motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99,102,241,0.4)" }}
                className="px-12 py-6 bg-indigo-600 text-white rounded-2xl font-black flex items-center gap-3 group"
              >
                SHOP NOW <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
              </Motion.button>
            </Link>
            <button className="flex items-center gap-4 text-white group">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <Play fill="currentColor" size={20} />
              </div>
              <span className="font-bold tracking-widest text-xs uppercase">View Film</span>
            </button>
          </div>
        </div>

        <Motion.div 
          style={{ rotateX, rotateY }}
          className="col-span-12 lg:col-span-6 relative flex justify-center mt-20 lg:mt-0 preserve-3d"
        >
          <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          </div>

          <Motion.div 
            style={{ translateZ: 50 }}
            className="absolute -top-10 -right-4 md:-right-10 p-8 bg-black/60 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl space-y-4"
          >
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center"><ShieldCheck className="text-white" /></div>
            <div>
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Protection</p>
              <p className="text-lg font-black text-white leading-none">LEVEL 04</p>
            </div>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;