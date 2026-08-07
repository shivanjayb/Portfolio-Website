import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Layers, Play, CheckCircle2, FileText, Activity, Brain } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 'fitzen',
      title: 'FITZEN – Verified Remote Sports Fitness Assessment',
      category: 'AI & Computer Vision',
      timeline: 'July 2026 – Present',
      subtitle: 'Computer Vision & Physics Anti-Tamper Platform',
      description: 'Building a full-stack computer vision platform measuring athletic performance from video using TensorFlow pose estimation and React. Features a novel physics-based fraud-detection algorithm for codec-independent video tamper detection.',
      highlights: [
        'TensorFlow pose estimation measuring joint angles & movement speed',
        'Codec-independent video tamper detection algorithm based on motion physics',
        'Architected from 61 research papers & 38 patents for production scalability',
        'PostgreSQL schema designed to resolve deployment-blocking licensing conflicts'
      ],
      tags: ['TensorFlow', 'React', 'PostgreSQL', 'Computer Vision', 'Physics Engine', 'Python'],
      github: 'https://github.com/shivanjayb',
      live: '#',
      icon: Activity,
      gradient: 'from-amber-600 to-amber-700'
    },
    {
      id: 'term-sheet',
      title: 'Structured Product Term Sheet Parser & Explainer',
      category: 'LLM & RAG',
      timeline: 'Jan 2026 – July 2026',
      subtitle: 'LLM, OCR & RAG Document Intelligence System',
      description: 'Developed a full-stack application to extract structured product data from complex financial PDFs using LLMs and OCR with RAG-based document chat and confidence scoring.',
      highlights: [
        'RAG-based document chat with interactive context reference',
        'Scalable FastAPI, React/Next.js, PostgreSQL, and Docker architecture',
        'AI summaries, confidence scoring, and JSON/CSV/Excel export pipeline',
        'Automated table & text extraction handling non-standard PDF formats'
      ],
      tags: ['FastAPI', 'React / Next.js', 'PostgreSQL', 'Docker', 'RAG', 'LLMs', 'OCR'],
      github: 'https://github.com/shivanjayb',
      live: '#',
      icon: FileText,
      gradient: 'from-[#1a1917] to-stone-900'
    },
    {
      id: 'nashik-skills',
      title: 'Nashik Skills Live: AI Skill Intelligence Platform',
      category: 'Full Stack',
      timeline: 'March 2026',
      subtitle: 'AI Employability & Internship Matching Engine',
      description: 'AI-powered platform for student profiling, skill-gap analysis, and internship/job matching with automated interview evaluations and analytics dashboards.',
      highlights: [
        'AI-driven student profiling and automated skill-gap analysis engine',
        'Backend workflows for automated interview evaluation & recommendation',
        'Real-time analytics dashboards for tracking placement readiness',
        'Scaled system design supporting multi-tenant institutional onboarding'
      ],
      tags: ['React', 'Node.js', 'Express', 'AI Matching', 'MongoDB', 'Analytics'],
      github: 'https://github.com/shivanjayb',
      live: '#',
      icon: Brain,
      gradient: 'from-stone-700 to-stone-900'
    }
  ];

  const filterCategories = ['All', 'AI & Computer Vision', 'LLM & RAG', 'Full Stack'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="bg-[#f7f4ef] py-32 px-6 md:px-12 w-full relative overflow-hidden border-t border-[#e8e4dc] font-sans">
      
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-bold uppercase tracking-widest text-amber-900 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" /> Selected Works
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1a1917] tracking-tight">
              Featured Systems & Applications
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div data-aos="fade-left" className="flex flex-wrap gap-2 bg-white p-1.5 rounded-full border border-[#e8e4dc] shadow-sm self-start md:self-auto">
            {filterCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-[#1a1917] text-white shadow-md'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="group relative bg-white border border-[#e8e4dc] rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-xl flex flex-col justify-between"
              >
                {/* Top Media Header Area */}
                <div>
                  <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} p-6 relative flex flex-col justify-between overflow-hidden border-b border-[#e8e4dc]`}>
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
                    
                    {/* Top Badges */}
                    <div className="relative z-10 flex justify-between items-center">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-stone-900 text-[11px] font-mono font-bold border border-white/40 shadow-sm">
                        {project.category}
                      </span>
                      <span className="text-[11px] font-mono text-white/90 font-bold bg-black/30 px-2.5 py-1 rounded-md border border-white/10">
                        {project.timeline}
                      </span>
                    </div>

                    {/* Center Icon Graphic */}
                    <div className="relative z-10 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-stone-900 border border-white/40 group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <IconComponent className="w-6 h-6 text-amber-700" />
                      </div>
                      <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">System Architecture</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-black text-[#1a1917] mb-2 group-hover:text-amber-700 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs font-mono text-amber-800 mb-4 font-bold">
                      {project.subtitle}
                    </p>

                    <p className="text-stone-600 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlights Bullet List */}
                    <div className="space-y-2 mb-6">
                      {project.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Tags & Links */}
                <div className="p-6 md:p-8 pt-0">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-stone-100 text-[11px] font-mono font-semibold text-stone-700 border border-stone-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-xs font-bold text-stone-700 hover:text-[#1a1917] transition-colors"
                    >
                      <Github className="w-4 h-4 text-amber-700" />
                      <span>Source Repo</span>
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1a1917] text-white hover:bg-amber-600 text-xs font-extrabold transition-all duration-300 shadow-sm"
                    >
                      <span>Details</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
