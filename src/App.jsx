import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CartProvider } from './Context/CartContext';
import Navbar from './Components/Navbar';
import Hero from './Pages/Home/Hero';
import Home from './Pages/Home/Home';
import Store from './Pages/Store/Store';
import ProductDetail from './Pages/Store/ProductDetail';
import Drops from './Pages/Drops/Drops';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import './app.css';

const App = () => {
  const location = useLocation();

  return (
    <CartProvider>
      <main className="bg-[#0a0a0a] min-h-screen antialiased selection:bg-indigo-500/30 overflow-x-hidden">
        <div 
          className="fixed inset-0 pointer-events-none z-[999] opacity-20 contrast-150 brightness-100" 
          style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}
        />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Home />
              </>
            } />
            <Route path="/store" element={<Store />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/drops" element={<Drops />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={
              <>
                <Hero />
                <Home />
              </>
            } />
          </Routes>
        </AnimatePresence>
      </main>
    </CartProvider>
  );
};

export default App;