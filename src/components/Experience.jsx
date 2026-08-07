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
    <section id="experience" className="bg-[#060709] py-32 px-6 md:px-12 w-full relative overflow-hidden border-t border-white/10">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-xs font-mono font-bold uppercase tracking-widest text-rose-400 mb-4">
            <Trophy className="w-3.5 h-3.5" /> Career & Credentials
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Leadership, Education & Certifications
          </h2>
          <p className="text-gray-400 text-base">
            Proven track record in engineering, leadership of TEDx events, and continuous learning.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div data-aos="fade-up" className="flex justify-center mb-16">
          <div className="flex bg-white/5 p-1.5 rounded-full border border-white/10">
            <button
              onClick={() => setActiveTab('leadership')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'leadership'
                  ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Leadership & Roles</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>

            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'certifications'
                  ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                  : 'text-gray-400 hover:text-white'
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
                className="bg-[#121318] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-rose-500/50 transition-all duration-300 shadow-xl flex flex-col lg:flex-row gap-8 items-center"
              >
                {/* Text Info */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white">{item.title}</h3>
                      <p className="text-sm font-mono text-rose-400 font-bold">{item.organization}</p>
                    </div>
                    <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 font-bold">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 rounded-md bg-white/5 text-xs font-mono text-gray-300 border border-white/5">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Photo Highlight Thumbnail */}
                {item.image && (
                  <div className="w-full lg:w-72 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 relative group shrink-0 bg-black">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-mono text-white/90 font-bold bg-black/60 px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1">
                      <ImageIcon className="w-3 h-3 text-rose-400" /> {item.imageCaption}
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
                className="bg-[#121318] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-rose-500/50 transition-all duration-300 shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white">{item.institution}</h3>
                    <p className="text-sm font-mono text-rose-400 font-bold">{item.degree}</p>
                  </div>
                  <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 font-bold">
                    {item.period}
                  </span>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {item.details}
                </p>

                {/* Score Cards */}
                <div className="flex flex-wrap gap-3">
                  {item.scores.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-xs text-gray-400 font-mono">{s.label}:</span>
                      <span className="text-sm font-black text-white">{s.score}</span>
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
                className="bg-[#121318] border border-white/10 rounded-3xl overflow-hidden hover:border-rose-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                {item.image && (
                  <div className="w-full h-44 bg-black overflow-hidden relative group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121318] via-transparent to-transparent" />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-rose-500/15 border border-rose-500/30 text-rose-400 text-[10px] font-mono font-bold uppercase">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-gray-400 font-bold">{item.date}</span>
                  </div>

                  <h3 className="text-lg font-black text-white mb-2 leading-snug">{item.title}</h3>
                  <p className="text-xs font-mono text-gray-400 mb-3">{item.issuer}</p>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">{item.desc}</p>
                </div>

                <div className="p-6 pt-0 flex items-center gap-1.5 text-xs text-rose-400 font-bold font-mono border-t border-white/5 mt-auto">
                  <ShieldCheck className="w-4 h-4" /> Verified Credential
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
