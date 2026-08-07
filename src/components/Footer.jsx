import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#050507] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] border-t border-white/10">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p className="text-white font-bold mb-1">Engineering Specialties</p>
          <p className="text-zinc-400">AI & Computer Vision Systems</p>
          <p className="text-zinc-400">LLM & RAG Document Intelligence</p>
          <p className="text-zinc-400">Full-Stack React & FastAPI Architectures</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p className="text-white font-bold mb-1">Academic & Leadership</p>
          <p className="text-zinc-400">B.Tech CS & Design (K.K. Wagh)</p>
          <p className="text-white font-bold">2x TEDx Licensee & Organizer</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1 font-bold">
            View Projects
          </a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p className="text-white font-bold mb-1">Availability</p>
          <p className="text-zinc-400">Nashik, India (Open to Remote)</p>
          <p className="text-white font-bold">{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Lowercase Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-black tracking-tighter lowercase select-none text-white w-full text-center hover:text-zinc-400 transition-colors duration-700">
          shivanjay
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium border-t border-white/10 pt-8">
        <div className="flex flex-col gap-4">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold text-sm">
            Contact
          </a>
          <p className="text-zinc-500 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Shivanjay P. Bajpai | Built with React & Vite
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:shivanjayprakashbajpai@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">
            shivanjayprakashbajpai@gmail.com
          </a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <a href="#home" className="underline text-zinc-400 hover:text-white transition-colors underline-offset-4 decoration-1">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
