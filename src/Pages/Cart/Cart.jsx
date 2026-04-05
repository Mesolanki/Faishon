import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShoppingCart } from 'lucide-react';
import { useCart } from '../../Context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 px-6 flex flex-col items-center justify-center space-y-8">
        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-indigo-500">
          <ShoppingCart size={32} />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">CART_EMPTY</h1>
          <p className="text-gray-500 font-mono text-xs tracking-widest mt-2 uppercase">No active operations detected</p>
        </div>
        <Link 
          to="/store" 
          className="px-12 py-5 bg-white text-black rounded-2xl font-black flex items-center gap-3 border border-white/10 hover:bg-white/90 active:scale-95 transition-all"
        >
          EXPLORE_ARCHIVE <ArrowRight size={20} />
        </Link>
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
        <div className="flex items-center justify-between mb-12">
           <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase">
            YOUR_BAG.
          </h1>
          <div className="text-right">
              <p className="text-gray-500 font-mono text-xs tracking-[0.5em] uppercase">SYSTEM_STATE</p>
              <p className="text-indigo-400 font-black text-lg uppercase">{cartCount} ACTIVE_ITEMS</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="popLayout">
              {cart.map((item) => (
                <Motion.div 
                  key={item.id}
                  layout 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="flex flex-col md:flex-row gap-8 p-8 bg-white/5 border border-white/10 rounded-[2.5rem] relative group"
                >
                  <div className="w-full md:w-48 aspect-square rounded-3xl overflow-hidden border border-white/10 shrink-0">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between py-2">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <p className="text-indigo-500 font-mono text-[10px] uppercase tracking-widest">{item.category}</p>
                        <h3 className="text-3xl font-black text-white tracking-tighter uppercase">{item.name}</h3>
                      </div>
                      <p className="text-2xl font-black text-white/40 italic">${item.price}</p>
                    </div>

                    <div className="flex items-center justify-between mt-8 md:mt-0">
                      <div className="flex items-center bg-black/40 border border-white/10 rounded-xl p-1.5 focus-within:border-indigo-500/50 transition-colors">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-white"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-10 text-center font-black text-white text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-white"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="w-12 h-12 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </Motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-4">
            <div className="p-10 bg-indigo-600/5 border border-indigo-500/20 rounded-[3rem] sticky top-32 space-y-10">
              <div className="space-y-6 pb-12 border-b border-indigo-500/10">
                <div className="flex justify-between items-center text-gray-400 font-mono text-xs tracking-widest uppercase">
                  <span>Subtotal</span>
                  <span>${cartTotal}</span>
                </div>
                <div className="flex justify-between items-center text-gray-400 font-mono text-xs tracking-widest uppercase">
                  <span>Duty_Estimate</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between items-center text-gray-400 font-mono text-xs tracking-widest uppercase">
                  <span>Security_Tax</span>
                  <span>$35.00</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                   <div>
                    <p className="text-gray-500 font-mono text-[9px] uppercase tracking-widest mb-1">Final_Quote</p>
                    <p className="text-5xl font-black text-white tracking-tighter italic leading-none">TOTAL</p>
                   </div>
                   <p className="text-5xl font-black text-indigo-400 tracking-tighter italic whitespace-nowrap">${cartTotal + 35}</p>
                </div>
                <p className="text-indigo-400/50 font-mono text-[8px] text-right uppercase tracking-widest">Pricing secure via SSL_v3</p>
              </div>

              <Link 
                to="/checkout" 
                className="w-full h-18 bg-white text-black rounded-3xl font-black flex items-center justify-center gap-3 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] group text-lg py-6"
              >
                INITIALIZE_CHECKOUT <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <div className="pt-4 text-center">
                 <Link to="/store" className="text-gray-600 hover:text-white transition-colors uppercase font-mono text-[10px] tracking-widest border-b border-transparent hover:border-white">
                    Modify Allocation
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  );
};

export default Cart;
