import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    permission: false
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', message: '', permission: false });
    }, 4000);
  };

  return (
    <section ref={ref} id="contact" className="bg-black w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 border-t border-white/10 font-sans">
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12 select-none opacity-15"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-[#12131a] border-t border-l border-white/20 w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between shadow-2xl backdrop-blur-xl"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 md:mb-16 border-b border-white/20 pb-6">
            <div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase opacity-90 font-mono mb-1 text-zinc-400">
                Reach Shivanjay
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Let's Build Something Great Together
              </h2>
            </div>
            
            <div className="text-xs font-mono font-bold bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 text-white">
              Available for Engineering Roles
            </div>
          </div>

          {submitted ? (
            <div className="bg-black/60 p-12 rounded-3xl border border-white/20 text-center flex flex-col items-center justify-center my-8">
              <CheckCircle2 className="w-16 h-16 text-white mb-4 animate-bounce" />
              <h3 className="text-2xl font-black text-white mb-2">Message Sent!</h3>
              <p className="text-sm font-mono text-zinc-300">Thank you for reaching out. Shivanjay will get back to you promptly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-12 md:gap-16 w-full">
              <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
                
                {/* Left Column */}
                <div className="flex-1 flex flex-col gap-10">
                  <div className="relative">
                    <input 
                      type="text" 
                      id="firstName" 
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="First Name" 
                      className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-zinc-500 font-medium rounded-none text-white"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="lastName" 
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Last Name" 
                      className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-zinc-500 font-medium rounded-none text-white"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email" 
                      className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-zinc-500 font-medium rounded-none text-white"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex-1 flex flex-col">
                  <div className="relative h-full flex flex-col">
                    <textarea 
                      id="message" 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your message here..." 
                      className="w-full h-full min-h-[140px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-zinc-500 font-medium resize-none rounded-none text-white"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex flex-col md:flex-row gap-12 mt-4">
                {/* Left text */}
                <div className="flex-1 flex items-start gap-4 text-sm font-medium text-zinc-300">
                  <input 
                    type="checkbox" 
                    id="permission" 
                    required
                    checked={formData.permission}
                    onChange={(e) => setFormData({ ...formData, permission: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white cursor-pointer" 
                    style={{ accentColor: "white" }}
                  />
                  <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                    I give permission to contact me at this email address.
                  </label>
                </div>

                {/* Right text & button */}
                <div className="flex-1 flex flex-col gap-8 text-xs text-zinc-400 font-medium">
                  <p className="leading-relaxed max-w-[400px]">
                    Direct Email: <a href="mailto:shivanjayprakashbajpai@gmail.com" className="underline font-bold text-white">shivanjayprakashbajpai@gmail.com</a> | Phone: <a href="tel:+917020637824" className="underline font-bold text-white">+91 7020637824</a>
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                    <p className="max-w-[250px] leading-relaxed opacity-80">
                      Based in Nashik, Maharashtra, India. Open to global remote engineering opportunities.
                    </p>
                    
                    <button 
                      type="submit" 
                      className="px-8 py-3 rounded-full bg-white text-black font-black flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all duration-300 group whitespace-nowrap self-start sm:self-auto shadow-lg"
                    >
                      Send
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};

export default Contact;
