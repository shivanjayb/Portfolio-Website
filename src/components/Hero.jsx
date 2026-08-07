import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Play, Pause, ArrowDown, Code, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-[#faf8f5] font-sans">
      
      {/* Background Hero Canvas Photo with Soft Light Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-[#faf8f5]/70 to-[#faf8f5]/85 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.12)_0,transparent_70%)] z-10" />
        <img
          src="/assets/photos/tedx_leader1.jpg"
          alt="Shivanjay P. Bajpai Leadership"
          className={`w-full h-full object-cover scale-105 transition-all duration-1000 ${
            isPlaying ? 'grayscale contrast-110 brightness-105 hover:grayscale-0' : 'grayscale-0 contrast-105'
          }`}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full h-full">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          
          {/* Status Badge */}
          <div 
            data-aos="fade-down"
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-bold tracking-wider text-amber-900 uppercase backdrop-blur-md mb-6 shadow-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600 absolute" />
            <span className="ml-2 font-bold text-amber-900">Shivanjay P. Bajpai</span>
            <span className="text-stone-400">|</span>
            <span className="text-stone-700">2x TEDx Licensee & AI Engineer</span>
          </div>

          {/* Main Heading with Warm Stroke */}
          <h1 
            data-aos="fade-up"
            className="text-[#1a1917] text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-[1.1]"
          >
            Hi, I’m a <br />
            <span className="text-transparent [-webkit-text-stroke:1.5px_#1a1917] md:[-webkit-text-stroke:2px_#1a1917]">
              Full Stack & AI Engineer
            </span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-stone-600 text-sm md:text-lg font-medium mb-8 max-w-md leading-relaxed"
          >
            I build fast, scalable AI systems, computer vision platforms, and modern web applications using React, Python, FastAPI, and PostgreSQL.
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-full bg-[#1a1917] text-white font-extrabold text-xs md:text-sm hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <Code className="w-4 h-4" />
              <span>Explore My Work</span>
            </a>
            
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-full bg-white border border-[#e8e4dc] text-stone-800 font-extrabold text-xs md:text-sm hover:bg-stone-100 transition-all duration-300 shadow-sm backdrop-blur-md flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Right Side: Play/Pause Button */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group self-start md:self-auto"
          onClick={togglePlay}
        >
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-[#e8e4dc] bg-white backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-amber-600 group-hover:border-amber-600 group-hover:text-white transition-all duration-500 shadow-md">
            {isPlaying ? (
              <Pause className="w-5 h-5 md:w-8 md:h-8 text-stone-800 group-hover:text-white" />
            ) : (
              <Play className="w-5 h-5 md:w-8 md:h-8 text-stone-800 group-hover:text-white ml-0.5 md:ml-1" />
            )}
          </div>
          <span className="text-stone-700 text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity font-mono">
            {isPlaying ? "Monochrome" : "Color Reel"}
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <a href="#about" className="flex flex-col items-center gap-1 text-stone-400 hover:text-stone-900 transition-colors">
          <div className="animate-bounce p-1 rounded-full border border-[#e8e4dc] bg-white shadow-sm">
            <ArrowDown className="w-4 h-4 text-amber-600" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
