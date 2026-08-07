import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, CheckCircle2, ChevronRight, Trophy, Users, ShieldCheck, Image as ImageIcon } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('leadership');

  const leadership = [
    {
      title: 'Organizer & Licensee — TEDxKKWIEER',
      period: 'Oct 2024 – Present',
      organization: 'TEDxKKWIEER',
      description: 'Two-time Licensee & Primary Organizer of TEDxKKWIEER (2025 & 2026). Spearheaded event licensing, speaker curation, sponsorships, marketing, and led a 40+ cross-functional student execution team for large-scale events.',
      skills: ['Event Licensing', 'Team Leadership', 'Sponsorship Strategy', 'Public Relations'],
      image: '/assets/photos/tedx_leader1.jpg',
      imageCaption: 'TEDxKKWIEER Licensee & Organizing Team'
    },
    {
      title: 'Finance & Logistics Head — NYMUN',
      period: '2024 – 2025',
      organization: 'Nashik Youth Model United Nations',
      description: 'Head of Finance & Logistics for one of Nashik’s largest non-institutional Model United Nations conferences, managing venue logistics, delegate housing, and financial accounts.',
      skills: ['Financial Planning', 'Logistics Operations', 'Stakeholder Management'],
      image: '/assets/photos/mun.jpg',
      imageCaption: 'NYMUN Organising Committee'
    },
    {
      title: 'Co-Treasurer — DESOC',
      period: 'Sep 2024 – Sep 2025',
      organization: 'Department of Computer Science & Design Society',
      description: 'Managed financial budgets, resource allocations, and operational audits for departmental technical events, workshops, and student hackathons.',
      skills: ['Budget Management', 'Financial Auditing', 'Event Operations'],
      image: '/assets/photos/project_discussion.jpg',
      imageCaption: 'Departmental Tech Execution'
    }
  ];

  const education = [
    {
      institution: 'K.K. Wagh Institute of Engineering Education & Research, Nashik',
      degree: 'B.Tech in Computer Science & Design Engineering',
      period: '2023 – 2027',
      details: 'Current 3rd Year Undergraduate with coursework in DSA, OOPs, DBMS, Operating Systems, Computer Vision, and Software Engineering.',
      scores: [
        { label: '1st Year CGPA', score: '8.25' },
        { label: '2nd Year CGPA', score: '7.88' },
        { label: '3rd Year CGPA', score: '7.64' }
      ]
    },
    {
      institution: 'Sukhdev Jr. College, Nashik',
      degree: 'Higher Secondary Certificate (12th HSC)',
      period: '2020 – 2022',
      details: 'Focus on Science, Mathematics, and Physics foundation.',
      scores: [{ label: 'HSC Boards', score: '71.83%' }]
    },
    {
      institution: 'Ryan International School, Nashik',
      degree: 'Indian Certificate of Secondary Education (10th ICSE)',
      period: '2009 – 2020',
      details: 'Strong foundational academics with distinction in Mathematics & Computer Applications.',
      scores: [{ label: 'ICSE Board', score: '85.80%' }]
    }
  ];

  const certifications = [
    {
      title: 'Smart India Hackathon (SIH) 2026 Institute Winner',
      issuer: 'Ministry of Education Innovation Cell',
      date: '2026',
      badge: 'Hackathon Winner',
      desc: 'Cleared SIH 2026 Institute-Level Round with AI/ML sports analytics platform.',
      image: '/assets/photos/award_shantam_shukla.jpg'
    },
    {
      title: 'Felicitation & Leadership Recognition Award',
      issuer: 'K.K. Wagh Engineering Faculty & Trustees',
      date: '2025',
      badge: 'Institutional Honor',
      desc: 'Awarded for extraordinary contributions to campus leadership and technical events.',
      image: '/assets/photos/award_munje_sir.jpg'
    },
    {
      title: 'The Complete Web Development Bootcamp',
      issuer: 'Udemy — Dr. Angela Yu',
      date: 'May 2026',
      badge: 'Full Stack Web',
      desc: 'Comprehensive training in HTML5, CSS3, JS, React, Node.js, Express, PostgreSQL, and REST APIs.',
      image: null
    },
    {
      title: 'Google Cloud Arcade Program – Milestone Achiever',
      issuer: 'Google Cloud',
      date: 'Sep 2023',
      badge: 'Cloud Computing',
      desc: 'Hands-on completion of Google Cloud infrastructure, BigQuery, and IAM milestones.',
      image: null
    },
    {
      title: 'ChatGPT Prompt Engineering for Developers',
      issuer: 'DeepLearning.AI',
      date: 'July 2023',
      badge: 'Generative AI',
      desc: 'Prompt engineering techniques, LLM API integration, and AI workflow automation.',
      image: null
    }
  ];

  return (
    <section id="experience" className="bg-[#faf8f5] py-32 px-6 md:px-12 w-full relative overflow-hidden border-t border-[#e8e4dc] font-sans">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-bold uppercase tracking-widest text-amber-900 mb-4">
            <Trophy className="w-3.5 h-3.5 text-amber-700" /> Career & Credentials
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#1a1917] tracking-tight mb-4">
            Leadership, Education & Certifications
          </h2>
          <p className="text-stone-600 text-base">
            Proven track record in engineering, leadership of TEDx events, and continuous learning.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div data-aos="fade-up" className="flex justify-center mb-16">
          <div className="flex bg-white p-1.5 rounded-full border border-[#e8e4dc] shadow-sm">
            <button
              onClick={() => setActiveTab('leadership')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'leadership'
                  ? 'bg-[#1a1917] text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Leadership & Roles</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-[#1a1917] text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>

            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'certifications'
                  ? 'bg-[#1a1917] text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Certifications & Awards</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Leadership & Roles */}
        {activeTab === 'leadership' && (
          <div className="space-y-8">
            {leadership.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-[#e8e4dc] rounded-3xl p-6 sm:p-8 hover:border-amber-500/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-xl flex flex-col lg:flex-row gap-8 items-center"
              >
                {/* Text Info */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#1a1917]">{item.title}</h3>
                      <p className="text-sm font-mono text-amber-800 font-bold">{item.organization}</p>
                    </div>
                    <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-mono text-stone-700 font-bold">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 rounded-md bg-stone-100 text-xs font-mono text-stone-700 border border-stone-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Photo Highlight Thumbnail */}
                {item.image && (
                  <div className="w-full lg:w-72 aspect-[4/3] rounded-2xl overflow-hidden border border-[#e8e4dc] relative group shrink-0 bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-mono text-white font-bold bg-black/60 px-2.5 py-1 rounded-md border border-white/20 flex items-center gap-1">
                      <ImageIcon className="w-3 h-3 text-amber-400" /> {item.imageCaption}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: Education */}
        {activeTab === 'education' && (
          <div className="space-y-6">
            {education.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-[#e8e4dc] rounded-3xl p-6 sm:p-8 hover:border-amber-500/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#1a1917]">{item.institution}</h3>
                    <p className="text-sm font-mono text-amber-800 font-bold">{item.degree}</p>
                  </div>
                  <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-mono text-stone-700 font-bold">
                    {item.period}
                  </span>
                </div>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                  {item.details}
                </p>

                {/* Score Cards */}
                <div className="flex flex-wrap gap-3">
                  {item.scores.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-100 border border-stone-200">
                      <span className="text-xs text-stone-500 font-mono">{s.label}:</span>
                      <span className="text-sm font-black text-[#1a1917]">{s.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: Certifications & Awards */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-[#e8e4dc] rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-xl flex flex-col justify-between"
              >
                {item.image && (
                  <div className="w-full h-44 bg-stone-100 overflow-hidden relative group border-b border-[#e8e4dc]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-900 text-[10px] font-mono font-bold uppercase">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-stone-500 font-bold">{item.date}</span>
                  </div>

                  <h3 className="text-lg font-black text-[#1a1917] mb-2 leading-snug">{item.title}</h3>
                  <p className="text-xs font-mono text-stone-500 mb-3">{item.issuer}</p>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">{item.desc}</p>
                </div>

                <div className="p-6 pt-0 flex items-center gap-1.5 text-xs text-amber-800 font-bold font-mono border-t border-stone-100 mt-auto">
                  <ShieldCheck className="w-4 h-4 text-amber-700" /> Verified Credential
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Experience;
