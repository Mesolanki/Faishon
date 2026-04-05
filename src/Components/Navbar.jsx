import React, { useState, useRef, useEffect } from 'react';
import { motion as Motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ShoppingBag, Search, Menu, X, User, Zap, Sparkles, Orbit, Command, Info, Mail } from 'lucide-react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useCart } from '../Context/CartContext';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);
  const { scrollY } = useScroll();
  const { cartCount } = useCart();
  const navigate = useNavigate();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: <Zap size={16} /> },
    { name: 'Store', path: '/store', icon: <ShoppingBag size={16} /> },
    { name: 'Drops', path: '/drops', icon: <Orbit size={16} /> },
    { name: 'About', path: '/about', icon: <Info size={16} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={16} /> },
  ];

  return (
    <div className="fixed top-6 inset-x-0 z-[100] flex justify-center px-4 pointer-events-none">
      <Motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={cn(
          "flex items-center justify-between py-2 px-3 md:px-6 rounded-full pointer-events-auto transition-all duration-500 ease-in-out",
          "bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]",
          isScrolled ? "w-full max-w-2xl" : "w-full max-w-6xl"
        )}
      >
        <Link to="/" className="flex items-center gap-2 cursor-pointer group shrink-0">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all">
            <Sparkles size={18} className="text-white" />
          </div>
          <span className="text-xl font-black tracking-tighter text-white uppercase italic">NEO.</span>
        </Link>

        {!isSearchOpen && (
          <Motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="hidden md:flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => cn(
                  "relative px-5 py-2 text-[10px] font-bold transition-all rounded-full flex items-center gap-2 uppercase tracking-widest",
                  isActive ? "text-white" : "text-gray-500 hover:text-gray-300"
                )}
              >
                {({ isActive }) => (
                  <>
                    <AnimatePresence>
                      {isActive && (
                        <Motion.div
                          layoutId="nav-glow"
                          className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </AnimatePresence>
                    <span className="relative z-10 flex items-center gap-2">
                      {item.icon} {item.name}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </Motion.div>
        )}

        <div className="flex items-center gap-2">
          <Motion.div 
            ref={searchRef}
            animate={{ width: isSearchOpen ? (isScrolled ? '200px' : '260px') : '100px' }}
            className={cn(
              "hidden lg:flex items-center bg-white/5 rounded-full px-3 py-2 border transition-all duration-300 relative",
              isSearchOpen ? "border-indigo-500/50 bg-white/10" : "border-white/5 hover:border-white/20"
            )}
          >
            <Search 
              size={14} 
              className={cn("transition-colors", isSearchOpen ? "text-indigo-400" : "text-gray-500")} 
            />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchOpen(true)}
              className="bg-transparent border-none outline-none text-[10px] text-white ml-2 w-full placeholder:text-gray-600 font-mono tracking-widest"
            />
          </Motion.div>
          <div className="flex items-center gap-2">
            <NavIcon icon={<User size={18} />} />
            <NavIcon 
              icon={<ShoppingBag size={18} />} 
              badge={cartCount} 
              onClick={() => navigate('/cart')}
            />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </Motion.nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 inset-x-4 p-10 bg-black/95 backdrop-blur-3xl border border-white/10 rounded-[3rem] flex flex-col gap-8 md:hidden shadow-2xl pointer-events-auto"
          >
             <div className="relative flex items-center bg-white/5 rounded-2xl p-4 border border-white/10">
                <Search size={20} className="text-gray-400" />
                <input type="text" placeholder="Search Store" className="bg-transparent border-none outline-none text-white ml-3 w-full font-mono uppercase text-xs" />
             </div>
             <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <NavLink 
                    key={item.name} 
                    to={item.path} 
                    end={item.path === '/'}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) => cn(
                      "text-5xl font-black tracking-tighter transition-all uppercase leading-none",
                      isActive ? "text-indigo-500 italic" : "text-white/40 hover:text-white"
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
             </div>
             <div className="pt-8 border-t border-white/5 flex justify-between items-center">
                <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">System_v2.06</p>
                <div className="flex gap-4">
                   <User className="text-white/40" size={20} />
                   <ShoppingBag className="text-indigo-500" size={20} />
                </div>
             </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavIcon = ({ icon, badge, onClick }) => (
  <Motion.button
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="relative p-2.5 text-white bg-white/5 rounded-full border border-white/5 hover:bg-white/10 transition-colors"
  >
    {icon}
    {badge > 0 && (
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-600 text-white text-[8px] font-black rounded-full flex items-center justify-center border-2 border-black">
        {badge}
      </span>
    )}
  </Motion.button>
);

export default Navbar;