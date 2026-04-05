import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Plus, Search, ChevronDown, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { PRODUCTS, CATEGORIES } from '../../Data/products';
import { useCart } from '../../Context/CartContext';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const SORT_OPTIONS = ["Newest", "Price: Low-High", "Price: High-Low"];

const Store = () => {
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const filteredItems = PRODUCTS.filter(item => filter === "All" || item.category === filter)
    .sort((a, b) => {
      if (sortBy === "Price: Low-High") return a.price - b.price;
      if (sortBy === "Price: High-Low") return b.price - a.price;
      return 0;
    });

  return (
    <Motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 px-6 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          <Motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-12 h-[1px] bg-indigo-500"></span>
              <span className="text-indigo-400 font-mono text-xs tracking-[0.5em] uppercase">Catalog_v2.06</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.8]">
              THE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/10">ARCHIVE.</span>
            </h1>
          </Motion.div>

          <div className="flex flex-col md:flex-row items-center gap-6 w-full lg:w-auto">
            <Motion.div 
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { staggerChildren: 0.05, delayChildren: 0.2 }
                }
              }}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2 p-1.5 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 overflow-x-auto no-scrollbar max-w-full"
              style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
              {CATEGORIES.map((cat) => (
                <Motion.button
                  key={cat}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap shrink-0",
                    filter === cat ? "bg-white text-black shadow-xl" : "text-gray-500 hover:text-white"
                  )}
                >
                  {cat}
                </Motion.button>
              ))}
            </Motion.div>

            <div className="relative shrink-0">
              <button 
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="px-6 py-4 bg-white/5 border border-white/10 rounded-full flex items-center gap-4 text-[10px] font-black text-white tracking-widest uppercase hover:bg-white/10 transition-all whitespace-nowrap"
              >
                Sort: {sortBy} <ChevronDown size={14} className={cn("transition-transform", isSortOpen && "rotate-180")} />
              </button>
              
              <AnimatePresence>
                {isSortOpen && (
                  <Motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-4 w-56 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-3 z-50 shadow-2xl"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => { setSortBy(opt); setIsSortOpen(false); }}
                        className="w-full px-5 py-4 rounded-2xl flex items-center justify-between text-[10px] font-bold text-gray-400 hover:text-white hover:bg-white/5 transition-all uppercase tracking-widest"
                      >
                        {opt}
                        {sortBy === opt && <Check size={14} className="text-indigo-500" />}
                      </button>
                    ))}
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </div>
    </Motion.div>
  );
};

const ProductCard = ({ product }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const { addToCart } = useCart();

  const handleMouse = (e) => {
    const box = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - box.left) / box.width - 0.5;
    const y = (e.clientY - box.top) / box.height - 0.5;
    setRotate({ x: y * -15, y: x * 15 });
  };

  return (
    <Motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      onMouseMove={handleMouse}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)'
      }}
      className="group"
    >
      <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-[#111] border border-white/10 shadow-2xl">
        <Link to={`/product/${product.id}`}>
          <div className="absolute top-6 left-6 z-20">
              <span className="px-4 py-1.5 bg-indigo-600 text-white text-[8px] font-black uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                  {product.tech}
              </span>
          </div>

          <Motion.img 
            src={product.img} 
            alt={product.name}
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-10 transition-opacity" />
        </Link>

        <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
          <div className="flex gap-2 mb-6">
            {['S', 'M', 'L'].map(s => (
              <div key={s} className="w-12 h-12 rounded-2xl border border-white/20 backdrop-blur-md flex items-center justify-center text-[10px] font-black text-white hover:bg-white hover:text-black transition-all cursor-pointer">
                {s}
              </div>
            ))}
          </div>
          <button 
            onClick={() => addToCart(product)}
            className="w-full h-16 bg-white text-black rounded-2xl font-black flex items-center justify-center gap-3 active:scale-95 transition-transform"
          >
            <Plus size={20} /> INITIALIZE_PURCHASE
          </button>
        </div>
      </div>

      <div className="mt-8 flex justify-between items-end px-4">
        <div className="space-y-2">
          <p className="text-indigo-500 font-mono text-[9px] uppercase tracking-[0.4em] font-bold">{product.category}</p>
          <Link to={`/product/${product.id}`}>
            <h3 className="text-4xl font-black text-white tracking-tighter uppercase leading-none hover:text-indigo-400 transition-colors">{product.name}</h3>
          </Link>
        </div>
        <p className="text-3xl font-black text-white/10 italic group-hover:text-indigo-400 transition-colors">${product.price}</p>
      </div>
    </Motion.div>
  );
};

export default Store;

