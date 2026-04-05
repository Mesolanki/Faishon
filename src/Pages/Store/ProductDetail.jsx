import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Minus, ArrowLeft, ShoppingBag, 
  ShieldCheck, Zap, Droplets, Info, 
  Cpu, Layers, Wind, ChevronRight,
  Star, Share2, Heart
} from 'lucide-react';
import { PRODUCTS } from '../../Data/products';
import { useCart } from '../../Context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeImg, setActiveImg] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white font-mono uppercase tracking-tighter">
        <h1 className="text-4xl font-black">404 // PRODUCT_NOT_FOUND</h1>
      </div>
    );
  }

  const allImages = [product.img, ...(product.additional_images || [])];
  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity, selectedSize });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }
  };

  return (
    <Motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 selection:bg-indigo-500/30"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Navigation */}
        <Link to="/store" className="group inline-flex items-center gap-3 text-gray-500 hover:text-white transition-all mb-16 font-mono text-[10px] tracking-[0.3em] uppercase">
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-colors">
            <ArrowLeft size={14} />
          </div>
          Back to Collection
        </Link>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          
          {/* Left: Image Gallery (Span 7) */}
          <div className="lg:col-span-7 space-y-8">
            <Motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 bg-white/[0.02]"
            >
              <AnimatePresence mode="wait">
                <Motion.img 
                  key={activeImg}
                  src={allImages[activeImg]} 
                  alt={product.name} 
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Image Tags */}
              <div className="absolute top-8 left-8 flex flex-col gap-3">
                <span className="px-4 py-2 bg-indigo-600/90 backdrop-blur-xl text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-2xl">
                  {product.tech}
                </span>
                <span className="px-4 py-2 bg-black/60 backdrop-blur-xl border border-white/10 text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                  V.02-26
                </span>
              </div>

              {/* Share & Heart */}
              <div className="absolute top-8 right-8 flex flex-col gap-3">
                <button className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <Heart size={18} />
                </button>
                <button className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <Share2 size={18} />
                </button>
              </div>
            </Motion.div>

            {/* Thumbnails */}
            <div className="flex gap-4">
              {allImages.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative w-24 h-24 rounded-2xl overflow-hidden border transition-all ${
                    activeImg === i ? "border-indigo-500 scale-95" : "border-white/5 opacity-50 hover:opacity-100"
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Details (Span 5) */}
          <Motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col"
          >
            <Motion.div variants={itemVariants} className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <span className="text-indigo-400 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">{product.category}</span>
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-gray-500 font-mono text-[10px] uppercase">SKU: NF-039{product.id}</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] uppercase">
                {product.name}
              </h1>
            </Motion.div>

            <Motion.div variants={itemVariants} className="flex items-baseline gap-6 mb-10">
              <p className="text-5xl font-black text-white tracking-tighter">${product.price}</p>
              <div className="flex items-center gap-2 text-indigo-400">
                <Star size={14} fill="currentColor" />
                <span className="font-mono text-xs font-bold">4.9 / 5.0</span>
                <span className="text-gray-600 ml-2">(128 REVIEWS)</span>
              </div>
            </Motion.div>

            <Motion.p variants={itemVariants} className="text-gray-400 text-lg leading-relaxed mb-12 font-light">
              {product.tech_details || product.description}
            </Motion.p>

            {/* Selection Area */}
            <Motion.div variants={itemVariants} className="space-y-12 mb-16">
              {/* Size Select */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold">Select Configuration</p>
                  <button className="text-[9px] font-mono text-indigo-400 hover:text-white transition-colors uppercase tracking-widest border-b border-indigo-400/30">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-4">
                  {['S', 'M', 'L', 'XL'].map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[70px] h-16 rounded-2xl border transition-all font-black flex items-center justify-center text-sm ${
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

              {/* Quantity & CTA */}
              <div className="flex flex-col sm:flex-row items-stretch gap-6">
                <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl p-2 min-w-[140px] justify-between">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-black text-white text-xl">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button 
                  onClick={handleAddToCart}
                  className={`flex-1 h-20 rounded-2xl font-black flex items-center justify-center gap-4 transition-all duration-500 relative overflow-hidden ${
                    isAdded ? "bg-emerald-500 text-white shadow-[0_0_40px_rgba(16,185,129,0.3)]" : "bg-indigo-600 text-white hover:bg-indigo-500 shadow-[0_0_40px_rgba(79,70,229,0.3)] active:scale-95"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {isAdded ? (
                      <Motion.span 
                        key="added"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="flex items-center gap-3"
                      >
                        SUCCESSFULLY_ADDED
                      </Motion.span>
                    ) : (
                      <Motion.span 
                        key="add"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="flex items-center gap-3"
                      >
                        <ShoppingBag size={20} /> INITIALIZE_ORDER
                      </Motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </Motion.div>

            {/* Feature Highlights */}
            <Motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-white/5 pt-12">
               {product.features?.map((feature, i) => (
                 <div key={i} className="flex gap-5 group">
                    <div className="w-12 h-12 shrink-0 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                      {i === 0 ? <Zap size={20} /> : i === 1 ? <ShieldCheck size={20} /> : <Cpu size={20} />}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm tracking-tight">{feature.name}</h4>
                      <p className="text-gray-500 text-xs mt-1 leading-relaxed">{feature.description}</p>
                    </div>
                 </div>
               ))}
            </Motion.div>
          </Motion.div>
        </div>

        {/* Tech Specs Section */}
        <section className="mb-40">
           <div className="bg-[#0f0f0f] rounded-[4rem] border border-white/5 p-12 lg:p-24 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] -mr-64 -mt-64" />
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <div className="space-y-8">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 font-mono text-[9px] uppercase tracking-widest">
                       <Layers size={14} /> Material Engineering
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                       Forged in <br /> The <span className="text-indigo-500">Void Lab.</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                       Our development philosophy prioritizes functional resilience. We combine proprietary synthetic fibers with sustainable production methods to create garments that outperform in any urban environment.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-10 pt-8">
                       <div>
                          <p className="text-[10px] font-mono text-gray-500 uppercase mb-3">Composition</p>
                          <p className="text-white font-bold text-lg">{product.materials || "85% Recycled Nylon"}</p>
                       </div>
                       <div>
                          <p className="text-[10px] font-mono text-gray-500 uppercase mb-3">Weight Class</p>
                          <p className="text-white font-bold text-lg">Lightweight (240g)</p>
                       </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                    {['Waterproof', 'Graphene Lined', 'Magnetic Locks', 'Internal Sling'].map((tech, i) => (
                      <div key={i} className="aspect-square bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between hover:bg-white/10 transition-colors">
                         <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-indigo-400">
                            {i % 2 === 0 ? <Droplets size={20} /> : <Wind size={20} />}
                         </div>
                         <span className="text-white font-bold text-xs uppercase tracking-widest">{tech}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Related Products */}
        <section>
          <div className="flex justify-between items-end mb-16 px-4">
             <div>
                <h3 className="text-4xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-[0.8]">Complete <br /> The <span className="text-indigo-500">System.</span></h3>
             </div>
             <Link to="/store" className="group flex items-center gap-3 text-indigo-400 font-mono text-xs font-bold uppercase tracking-widest">
                Explore All <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
             </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group space-y-6">
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000" />
                  <div className="absolute top-6 left-6">
                     <span className="px-3 py-1 bg-black/60 backdrop-blur-xl border border-white/10 text-white text-[8px] font-black uppercase tracking-widest rounded-full">
                        {p.tech}
                     </span>
                  </div>
                </div>
                <div className="flex justify-between items-end px-2">
                   <div>
                      <p className="text-indigo-500 font-mono text-[9px] uppercase tracking-[0.3em] mb-1">{p.category}</p>
                      <h4 className="text-3xl font-black text-white uppercase tracking-tighter group-hover:text-indigo-400 transition-colors">{p.name}</h4>
                   </div>
                   <p className="text-2xl font-black text-white/20 italic">${p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Motion.div>
  );
};

export default ProductDetail;

