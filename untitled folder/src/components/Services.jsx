import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const TagCard = ({ number, title, text, className, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;

    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;

    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;

    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div
      ref={ref}
      data-aos={aosType || "fade-up"}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${
        isActive
          ? 'bg-[#ff2a2a] border-2 border-red-400 shadow-[0_20px_50px_rgba(255,42,42,0.4)]'
          : 'bg-[#121318] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:border-white/20'
      }`}
    >
      {/* Hole punch */}
      <div className="w-5 h-5 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] absolute top-4 border border-zinc-700 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-[#ff2a2a] rounded-full opacity-80" />
      </div>

      {/* Inner card container */}
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-6 sm:p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${
        isActive ? 'bg-red-950/60 text-white' : 'bg-[#161720] text-gray-200'
      }`}>
        <span className={`text-xl font-bold mb-2 font-mono transition-colors duration-700 ${
          isActive ? 'text-red-200' : 'text-gray-500'
        }`}>{number}</span>

        <h3 className={`text-2xl font-black mb-3 tracking-tight transition-colors duration-700 ${
          isActive ? 'text-white' : 'text-gray-100'
        }`}>{title}</h3>

        <p className={`text-sm leading-relaxed font-normal transition-colors duration-700 ${
          isActive ? 'text-red-100' : 'text-gray-400'
        }`}>
          {text}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section
      id="services"
      ref={containerRef}
      className="bg-[#09090b] pt-28 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px] border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto relative">

        {/* Header Content - Positioned cleanly on top to prevent text collisions */}
        <div data-aos="fade-up" className="max-w-3xl mb-16 md:mb-24 relative z-20">
          <div className="inline-block border border-red-500/30 rounded-full px-5 py-1.5 text-xs text-red-400 font-mono font-extrabold uppercase tracking-widest mb-6 shadow-sm bg-red-500/10">
            Engineering Methodology
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            From algorithmic vision to production code
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            We follow a structured, creative, and highly technical approach to turn complex engineering problems into robust full-stack applications.
          </p>
        </div>

        {/* Path & Cards Area */}
        <div className="relative md:h-[1350px]">

          {/* Desktop SVG Animated Dashed Line */}
          <svg
            className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
            viewBox="0 0 1000 1350"
            preserveAspectRatio="none"
          >
            <path
              d="M 650,50 C 400,150 200,250 300,450 C 400,650 750,600 700,800 C 650,1000 400,1000 300,1150"
              fill="none"
              stroke="#27272a"
              strokeWidth="2"
              strokeDasharray="8 10"
            />

            <mask id="path-mask">
              <motion.path
                d="M 650,50 C 400,150 200,250 300,450 C 400,650 750,600 700,800 C 650,1000 400,1000 300,1150"
                fill="none"
                stroke="white"
                strokeWidth="20"
                style={{ pathLength }}
              />
            </mask>

            <path
              d="M 650,50 C 400,150 200,250 300,450 C 400,650 750,600 700,800 C 650,1000 400,1000 300,1150"
              fill="none"
              stroke="#ff2a2a"
              strokeWidth="3"
              strokeDasharray="8 10"
              mask="url(#path-mask)"
              className="drop-shadow-sm"
            />
          </svg>

          {/* Mobile Animated Line */}
          <svg
            className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0"
            viewBox="0 0 4 100"
            preserveAspectRatio="none"
          >
            <path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="#27272a"
              strokeWidth="4"
              strokeDasharray="4 6"
              vectorEffect="non-scaling-stroke"
            />
            <mask id="path-mask-mobile">
              <motion.path
                d="M 2,0 L 2,100"
                fill="none"
                stroke="white"
                strokeWidth="4"
                style={{ pathLength }}
                vectorEffect="non-scaling-stroke"
              />
            </mask>
            <path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="#ff2a2a"
              strokeWidth="4"
              strokeDasharray="4 6"
              mask="url(#path-mask-mobile)"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Tag Cards Container */}
          <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">

            <TagCard
              number="01"
              title="Define & Research"
              text="Gathering technical specs, studying domain research papers, and designing patent-safe licensing architectures."
              className="md:absolute md:top-[0px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6"
              aosType="fade-left"
              aosDelay="100"
              pathLength={pathLength}
              containerRef={containerRef}
            />

            <TagCard
              number="02"
              title="Architect AI & DB"
              text="Modeling PostgreSQL/MongoDB schemas, designing TensorFlow pose estimation or RAG/LLM document parsing pipelines."
              className="md:absolute md:top-[320px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6"
              aosType="fade-right"
              aosDelay="200"
              pathLength={pathLength}
              containerRef={containerRef}
            />

            <TagCard
              number="03"
              title="Build & Integrate"
              text="Engineering full-stack React/Next.js frontends connected to high-speed FastAPI, Flask, or Node.js backend services."
              className="md:absolute md:top-[640px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3"
              aosType="fade-left"
              aosDelay="300"
              pathLength={pathLength}
              containerRef={containerRef}
            />

            <TagCard
              number="04"
              title="Test & Deploy"
              text="Docker containerization, unit & regression testing, AWS cloud optimization, and continuous delivery deployment."
              className="md:absolute md:top-[960px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3"
              aosType="fade-right"
              aosDelay="400"
              pathLength={pathLength}
              containerRef={containerRef}
            />

            {/* Hand-drawn end text */}
            <div
              data-aos="fade-in"
              data-aos-delay="600"
              className="hidden md:block absolute top-[1200px] left-[55%] font-caveat text-3xl font-bold text-red-400 rotate-6"
            >
              Ready to be delivered! 🚀
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;
