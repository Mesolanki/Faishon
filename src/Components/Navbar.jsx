import React, { useState, useRef, useEffect } from 'react';
import { motion as Motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ShoppingBag, Search, Menu, X, User, Zap, Sparkles, Orbit, Command } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

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
          isScrolled ? "w-full max-w-2xl" : "w-full max-w-5xl"
        )}
      >
        <Link to="/" className="flex items-center gap-2 cursor-pointer group shrink-0">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all">
            <Sparkles size={18} className="text-white" />
          </div>
          <span className="text-xl font-black tracking-tighter text-white">NEO.</span>
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
                className={({ isActive }) => cn(
                  "relative px-5 py-2 text-xs font-bold transition-all rounded-full flex items-center gap-2 uppercase tracking-widest",
                  isActive ? "text-white" : "text-gray-500 hover:text-gray-300"
                )}
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <Motion.div
                        layoutId="nav-glow"
                        className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                      />
                    )}
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
            animate={{ width: isSearchOpen ? (isScrolled ? '240px' : '320px') : '130px' }}
            className={cn(
              "hidden lg:flex items-center bg-white/5 rounded-full px-3 py-2 border transition-all duration-300 relative",
              isSearchOpen ? "border-indigo-500/50 bg-white/10" : "border-white/5 hover:border-white/20"
            )}
          >
            <Search 
              size={16} 
              className={cn("transition-colors", isSearchOpen ? "text-indigo-400" : "text-gray-500")} 
            />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchOpen(true)}
              className="bg-transparent border-none outline-none text-xs text-white ml-2 w-full placeholder:text-gray-600"
            />
            <AnimatePresence>
              {!isSearchOpen ? (
                <Motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="flex gap-1 absolute right-3 pointer-events-none"
                >
                  <span className="px-1.5 py-0.5 bg-white/10 rounded text-[9px] text-gray-400 font-mono border border-white/5 flex items-center gap-0.5">
                    <Command size={8} />K
                  </span>
                </Motion.div>
              ) : (
                searchQuery && (
                  <Motion.button
                    initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 text-gray-400 hover:text-white"
                  >
                    <X size={14} />
                  </Motion.button>
                )
              )}
            </AnimatePresence>
          </Motion.div>
          <div className="flex items-center gap-2">
            <NavIcon icon={<User size={18} />} />
            <NavIcon icon={<ShoppingBag size={18} />} badge={3} />
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
            className="fixed top-24 inset-x-4 p-8 bg-black/95 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] flex flex-col gap-6 md:hidden shadow-2xl pointer-events-auto"
          >
             <div className="relative flex items-center bg-white/5 rounded-2xl p-4 border border-white/10">
                <Search size={20} className="text-gray-400" />
                <input type="text" placeholder="Search Store" className="bg-transparent border-none outline-none text-white ml-3 w-full" />
             </div>
             {navItems.map((item) => (
               <NavLink 
                key={item.name} 
                to={item.path} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-black text-white tracking-tighter hover:text-indigo-500 transition-colors"
               >
                {item.name}
               </NavLink>
             ))}
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavIcon = ({ icon, badge }) => (
  <Motion.button
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="relative p-2.5 text-white bg-white/5 rounded-full border border-white/5 hover:bg-white/10 transition-colors"
  >
    {icon}
    {badge && (
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-600 text-white text-[8px] font-black rounded-full flex items-center justify-center border-2 border-black">
        {badge}
      </span>
    )}
  </Motion.button>
);

export default Navbar;