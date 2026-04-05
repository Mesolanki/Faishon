import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { CheckCircle2, CreditCard, Ship, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const [orderSummary, setOrderSummary] = useState({ items: [], total: 0 });

  const handleComplete = () => {
    setIsProcessing(true);
    // Capture data before clearing
    setOrderSummary({ items: [...cart], total: cartTotal });
    
    setTimeout(() => {
      clearCart();
      setIsProcessing(false);
      setStep(3);
    }, 3000);
  };

  if (cart.length === 0 && step !== 3) {
    navigate('/store');
    return null;
  }

  return (
    <Motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-10 mb-16 overflow-x-auto pb-4 no-scrollbar">
            {[
              { id: 1, label: "IDENTIFICATION" },
              { id: 2, label: "ENCRYPTION" },
              { id: 3, label: "CONFIRMED" }
            ].map((s) => (
              <div key={s.id} className="flex items-center gap-4 shrink-0">
                <span className={`w-10 h-10 rounded-full flex items-center justify-center font-black border transition-all ${
                  step >= s.id ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.4)]" : "bg-white/5 text-gray-500 border-white/10"
                }`}>
                  {s.id}
                </span>
                <span className={`font-mono text-[10px] tracking-widest uppercase transition-colors ${
                  step >= s.id ? "text-white" : "text-gray-600"
                }`}>
                  {s.label}
                </span>
                {s.id < 3 && <div className={`w-12 h-[1px] transition-colors ${step > s.id ? "bg-indigo-500" : "bg-white/10"}`} />}
              </div>
            ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            {step === 1 && (
              <Motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-12"
              >
                <div className="space-y-8">
                  <h2 className="text-5xl font-black text-white tracking-tighter uppercase">Operational_Address.</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Operator Name" placeholder="John Doe" />
                    <InputField label="Secure Email" placeholder="john@neo.alt" />
                    <div className="md:col-span-2">
                        <InputField label="Primary Relay Station (Address)" placeholder="Block 04, Sector 7..." />
                    </div>
                    <InputField label="City" placeholder="Neo Tokyo" />
                    <InputField label="Zip Node" placeholder="100-205" />
                  </div>
                </div>
                <button 
                  onClick={() => setStep(2)}
                  className="w-full h-18 bg-white text-black rounded-2xl font-black flex items-center justify-center gap-3 active:scale-95 transition-all"
                >
                  CONTINUE_TO_DECRYPT <ArrowRight size={20} />
                </button>
              </Motion.div>
            )}

            {step === 2 && (
              <Motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-12"
              >
                <div className="space-y-8">
                  <h2 className="text-5xl font-black text-white tracking-tighter uppercase">PAYMENT_SHIELD.</h2>
                  <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 text-indigo-500/20">
                        <ShieldCheck size={120} strokeWidth={1} />
                    </div>
                    <div className="flex items-center gap-4 text-indigo-400">
                        <CreditCard size={24} />
                        <span className="font-mono text-xs tracking-widest uppercase font-bold">Secure Protocol_v5</span>
                    </div>
                    <div className="space-y-6 relative z-10">
                      <InputField label="Card Terminal ID" placeholder="0000 0000 0000 0000" />
                      <div className="grid grid-cols-2 gap-6">
                        <InputField label="Exp Date" placeholder="MM/YY" />
                        <InputField label="CVC" placeholder="***" />
                      </div>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={handleComplete}
                  disabled={isProcessing}
                  className="w-full h-18 bg-indigo-600 text-white rounded-2xl font-black flex items-center justify-center gap-3 active:scale-95 transition-all shadow-[0_0_40px_rgba(79,70,229,0.3)]"
                >
                  {isProcessing ? "ENCRYPTING_DATA..." : "FINALIZE_MISSION"} <ArrowRight size={20} />
                </button>
              </Motion.div>
            )}

            {step === 3 && (
              <Motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 bg-indigo-600/5 border border-indigo-500/10 rounded-[4rem] space-y-10"
              >
                <div className="flex justify-center">
                    <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 border border-green-500/20 shadow-[0_0_40px_rgba(34,197,94,0.3)]">
                        <CheckCircle2 size={48} />
                    </div>
                </div>
                <div>
                    <h2 className="text-6xl font-black text-white tracking-tighter uppercase">MISSION_SUCCESS.</h2>
                    <p className="text-gray-500 font-mono text-xs tracking-widest mt-4 uppercase">Order #NEO-{Math.floor(Math.random()*900000)} is being processed</p>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <button 
                         onClick={() => navigate('/store')}
                         className="px-12 py-5 bg-white text-black rounded-2xl font-black flex items-center gap-3 border border-white/10 hover:bg-white/90 active:scale-95 transition-all"
                    >
                        RETURN_TO_BASE
                    </button>
                    <p className="text-gray-700 font-mono text-[9px] uppercase tracking-widest">Self-destructing log in 30s</p>
                </div>
              </Motion.div>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="p-10 bg-[#111] border border-white/10 rounded-[3rem] space-y-10">
              <h3 className="text-2xl font-black text-white tracking-tighter uppercase border-b border-white/5 pb-6">MANIFEST_SUMMARY</h3>
              <div className="space-y-6 max-h-[400px] overflow-y-auto no-scrollbar">
                {(step === 3 ? orderSummary.items : cart).map((item) => (
                  <div key={item.id} className="flex gap-6 items-center">
                    <div className="w-20 h-20 bg-white/5 rounded-2xl overflow-hidden shrink-0">
                      <img src={item.img} className="w-full h-full object-cover grayscale brightness-75 transition-all" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-500 text-[9px] font-mono tracking-widest uppercase">{item.category}</p>
                      <h4 className="text-white font-black text-sm uppercase">{item.name}</h4>
                      <p className="text-gray-600 font-mono text-[10px] mt-1">QTY: {item.quantity}</p>
                    </div>
                    <p className="text-white font-black font-mono">${item.price * item.quantity}</p>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4 pt-10 border-t border-white/5">
                <div className="flex justify-between font-mono text-xs text-gray-500 uppercase tracking-widest">
                  <span>Subtotal</span>
                  <span>${step === 3 ? orderSummary.total : cartTotal}</span>
                </div>
                <div className="flex justify-between font-mono text-xs text-indigo-400 font-black uppercase tracking-widest">
                  <span>Total</span>
                  <span className="text-xl">${(step === 3 ? orderSummary.total : cartTotal) + 35}</span>
                </div>
              </div>

               <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <Lock className="text-green-500" size={16} />
                  <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest leading-relaxed">
                    All data encrypted using AES-256 quantum-resistant layers.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  );
};

const InputField = ({ label, placeholder }) => (
  <div className="space-y-2">
    <label className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.3em] font-bold">{label}</label>
    <input 
      type="text" 
      placeholder={placeholder}
      className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-6 text-white text-sm font-medium focus:border-indigo-500/50 focus:bg-white/10 outline-none transition-all placeholder:text-gray-700 font-mono"
    />
  </div>
);

export default Checkout;
