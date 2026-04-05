import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Shield, Zap as Pulse } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const categories = [
    { name: "Outerwear", items: "12 Items", img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800" },
    { name: "Tech-Gear", items: "08 Items", img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800" },
    { name: "Footwear", items: "05 Items", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800" }
  ];

  return (
    <section className="bg-[#0a0a0a] text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <Motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden border border-white/10"
            >
              <img src={cat.img} className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <p className="text-indigo-400 font-mono text-[10px] tracking-[0.4em] mb-2">{cat.items}</p>
                <h3 className="text-4xl font-black tracking-tighter mb-6">{cat.name}</h3>
                <Link to="/store" className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-all">
                  <ArrowRight size={24} />
                </Link>
              </div>
            </Motion.div>
          ))}
        </div>

        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <Motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-mono tracking-widest uppercase rounded-full"
            >
              <Target size={14} /> System status: Optimal
            </Motion.div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
              THE <span className="text-indigo-600">SPEC.</span> <br /> RE-DEFINED.
            </h2>
            <p className="text-gray-500 text-xl max-w-md font-light leading-relaxed">
              Every garment is a piece of equipment. Engineered for the urban environment with modular utility and climate-adaptive materials.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <Shield className="text-indigo-500" />
                <h4 className="font-bold">DURABILITY_v2</h4>
                <p className="text-gray-600 text-sm">Ripstop nylon reinforced with liquid-polymer coatings.</p>
              </div>
              <div className="space-y-4">
                <Pulse className="text-indigo-500" />
                <h4 className="font-bold">BIO_METRIC</h4>
                <p className="text-gray-600 text-sm">Smart fibers that react to body temperature shifts.</p>
              </div>
            </div>
          </div>
          <Motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="aspect-square bg-indigo-600/5 border border-indigo-500/10 rounded-[4rem] relative overflow-hidden"
          >
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80%] h-[80%] border border-indigo-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-[60%] h-[60%] border border-indigo-500/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <Pulse size={80} className="text-indigo-500 animate-pulse" />
             </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;