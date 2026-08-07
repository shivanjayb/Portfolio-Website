import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Methodology', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Moments', href: '#gallery' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen 
          ? 'bg-black py-4 border-b border-white/20'
          : isScrolled 
            ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' 
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a href="#home" className="text-white text-2xl font-black tracking-tight flex items-center gap-1 group">
            Shivanjay<span className="text-white group-hover:scale-150 transition-transform duration-300">.</span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden md:flex space-x-7 items-center bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-zinc-300 hover:text-white text-xs lg:text-sm font-semibold relative group transition-colors duration-300"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Side: CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="px-6 py-2.5 rounded-full bg-white text-black font-extrabold text-xs lg:text-sm hover:bg-zinc-200 transition-all duration-300 flex items-center gap-1.5 shadow-lg"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2 rounded-lg bg-white/10"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[550px] py-6 opacity-100 bg-black border-b border-white/20 shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-zinc-400 font-extrabold text-xl border-b border-white/10 pb-2.5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
             <a 
               href="#contact" 
               onClick={() => setIsOpen(false)} 
               className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-black hover:bg-zinc-200 transition-colors w-full text-center shadow-lg"
             >
               Get In Touch <ArrowUpRight className="w-4 h-4" />
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
