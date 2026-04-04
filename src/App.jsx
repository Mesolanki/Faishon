import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Pages/Home/Hero';
import Home from './Pages/Home/Home';
import Store from './Pages/Store/Store';
import Drops from './Pages/Drops/Drops';
import './app.css';

const App = () => {
  return (
    <>
      <main className="bg-[#0a0a0a] min-h-screen antialiased selection:bg-indigo-500/30">
        <div 
          className="fixed inset-0 pointer-events-none z-[999] opacity-20 contrast-150 brightness-100" 
          style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Home />
            </>
          } />
          <Route path="/store" element={<Store />} />
          <Route path="/drops" element={<Drops />} />
        </Routes>
      </main>
    </>
  );
};

export default App;