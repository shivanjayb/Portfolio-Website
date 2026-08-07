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
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black font-sans">
      
      {/* Background Hero Canvas Photo with Grayscale & Motion Styling */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80 z-10" />
        <img
          src="/assets/photos/tedx_leader1.jpg"
          alt="Shivanjay P. Bajpai Leadership"
          className={`w-full h-full object-cover scale-105 transition-all duration-1000 ${
            isPlaying ? 'grayscale contrast-125 hover:grayscale-0' : 'grayscale-0 contrast-110'
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
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-white/20 text-xs font-mono font-bold tracking-wider text-white uppercase backdrop-blur-md mb-6 shadow-xl"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute" />
            <span className="ml-2 font-bold text-red-400">Shivanjay P. Bajpai</span>
            <span className="text-white/40">|</span>
            <span className="text-gray-300">2x TEDx Licensee & AI Engineer</span>
          </div>

          {/* Main Heading with Dual Tone Outline Stroke */}
          <h1 
            data-aos="fade-up"
            className="text-white text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-[1.1]"
          >
            Hi, I’m a <br />
            <span className="text-transparent [-webkit-text-stroke:1.5px_#ff2a2a] md:[-webkit-text-stroke:2px_#ff2a2a]">
              Full Stack & AI Engineer
            </span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-md leading-relaxed"
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
              className="px-6 py-3 rounded-full bg-white text-black font-extrabold text-xs md:text-sm hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center gap-2"
            >
              <Code className="w-4 h-4" />
              <span>Explore My Work</span>
            </a>
            
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-black/40 border border-white text-white font-extrabold text-xs md:text-sm hover:bg-black/60 transition-all duration-300 backdrop-blur-md flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-red-400" />
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
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.6)]">
            {isPlaying ? (
              <Pause className="w-5 h-5 md:w-8 md:h-8 text-white" />
            ) : (
              <Play className="w-5 h-5 md:w-8 md:h-8 text-white ml-0.5 md:ml-1" />
            )}
          </div>
          <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
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
        <a href="#about" className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors">
          <div className="animate-bounce p-1 rounded-full border border-white/20 bg-black/50 backdrop-blur-md">
            <ArrowDown className="w-4 h-4 text-red-400" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
