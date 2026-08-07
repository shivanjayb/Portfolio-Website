import React from 'react';
import { Sparkles, Code2, Terminal, Server, Database, Cpu } from 'lucide-react';

const About = () => {
  const techStack = [
    { name: 'React / Next.js', icon: Code2 },
    { name: 'Python / FastAPI', icon: Terminal },
    { name: 'Node.js / Express', icon: Server },
    { name: 'PostgreSQL / Mongo', icon: Database },
    { name: 'TensorFlow / AI', icon: Cpu },
  ];

  return (
    <section id="about" className="bg-[#f4efe6] pt-24 pb-36 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-[#e8e4dc] bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-[#1a1917] transform -translate-x-1/2 shadow-inner z-0 border-x border-stone-700"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-stone-300 rounded border border-stone-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.15)] flex justify-center items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-stone-700 shadow-inner"></div>
            </div>
            
            {/* Badge Card */}
            <div className="bg-white border border-[#e8e4dc] w-full max-w-[280px] rounded-2xl p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-white rounded-t-xl transform -translate-x-1/2 flex justify-center items-center border-t border-x border-[#e8e4dc]">
                <div className="w-8 h-2 bg-stone-200 rounded-full shadow-inner"></div>
              </div>

              {/* Header Info Bar */}
              <div className="flex justify-between items-center mb-2.5 pt-2 px-1 text-[10px] font-mono text-stone-500">
                <span>#CSD-SHIVANJAY</span>
                <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
              </div>

              {/* Photo Box with Shivanjay's Real Front Portrait */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-stone-100 border border-stone-200 relative group">
                <img 
                  src="/assets/photos/profile_main.png" 
                  alt="Shivanjay P. Bajpai" 
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1a1917] via-[#1a1917]/80 to-transparent p-2.5 text-center">
                  <p className="text-white font-black text-sm">Shivanjay P. Bajpai</p>
                  <p className="text-[10px] text-amber-400 font-mono">B.Tech CS & Design</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-[#1a1917] mt-8 md:mt-0 relative z-20">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" /> About Me
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-[#1a1917] mb-6 tracking-tight">
            Hello! I’m Shivanjay.
          </h2>
          
          <p className="text-lg font-bold mb-6 leading-relaxed max-w-3xl text-stone-800">
            I am a Computer Science & Design undergraduate at <span className="text-[#1a1917] font-black underline decoration-amber-600/40 decoration-2">K.K. Wagh Institute of Engineering Education & Research, Nashik</span>.
          </p>

          <p className="text-base font-normal mb-8 leading-relaxed max-w-3xl text-stone-700">
            I specialize in building computer vision systems, LLM/RAG document intelligence parsers, and scalable full-stack web applications. Alongside engineering, I serve as a 2-time <span className="text-[#1a1917] font-extrabold uppercase border-b border-stone-400">TEDx Licensee & Primary Organizer</span>, leading cross-functional teams for large-scale technical and institutional events.
          </p>

          {/* Horizontal Skills Row */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            {techStack.map((tech, idx) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={tech.name}
                  data-aos="zoom-in"
                  data-aos-delay={300 + idx * 100}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-stone-800 font-bold text-xs sm:text-sm hover:bg-[#1a1917] hover:text-white transition-all duration-300 shadow-sm cursor-pointer border border-[#e8e4dc] group"
                >
                  <IconComponent className="w-4 h-4 text-amber-600 group-hover:text-amber-400 transition-colors" />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#faf8f5]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-stone-400 opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-stone-400 opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
