import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowLeft, ShoppingBag, ShieldCheck, Zap, Droplets } from 'lucide-react';
import { PRODUCTS } from '../../Data/products';
import { useCart } from '../../Context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h1 className="text-4xl font-black">PRODUCT_NOT_FOUND</h1>
      </div>
    );
  }

  return (
    <Motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <Link to="/store" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 font-mono text-xs tracking-widest uppercase">
          <ArrowLeft size={16} /> Back to Archive
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Image Section */}
          <Motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10"
          >
            <img 
              src={product.img} 
              alt={product.name} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-10 left-10 right-10 flex gap-4">
               {product.specs.slice(0, 2).map((spec, i) => (
                 <div key={i} className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-[10px] font-black text-white uppercase tracking-widest">
                    {spec}
                 </div>
               ))}
            </div>
          </Motion.div>

          {/* Info Section */}
          <div className="flex flex-col justify-center space-y-12">
            <Motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[10px] font-mono tracking-widest uppercase rounded-full">
                  {product.category}
                </span>
                <span className="text-gray-600 font-mono text-[10px] uppercase">ID: 00{product.id}_SYS</span>
              </div>
              <h1 className="text-7xl md:text-8xl font-black text-white tracking-tighter leading-tight uppercase">
                {product.name}
              </h1>
              <p className="text-4xl font-black text-indigo-500 tracking-tighter">${product.price}</p>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg font-light">
                {product.description}
              </p>
            </Motion.div>

            {/* Selection */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Select Size</p>
                <div className="flex gap-3">
                  {['S', 'M', 'L', 'XL'].map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-16 h-16 rounded-2xl border transition-all font-black flex items-center justify-center ${
                        selectedSize === size 
                        ? "bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.2)]" 
                        : "border-white/10 text-white hover:bg-white/5"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl p-2">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center font-black text-white">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button 
                  onClick={() => addToCart({ ...product, quantity })}
                  className="flex-1 h-16 bg-indigo-600 text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-indigo-500 active:scale-95 transition-all shadow-[0_0_40px_rgba(79,70,229,0.3)]"
                >
                  <ShoppingBag size={20} /> INITIALIZE_TRANSACTION
                </button>
              </div>
            </div>

            {/* Utility Specs */}
            <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-12">
               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">PROTECTION</h4>
                    <p className="text-gray-500 text-xs mt-1 uppercase font-mono">Grade Lvl 04</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">AGILITY</h4>
                    <p className="text-gray-500 text-xs mt-1 uppercase font-mono">Low Drag</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  );
};

export default ProductDetail;
