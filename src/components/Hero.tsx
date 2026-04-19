import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = ["Web Developer", "Frontend Developer", "Problem Solver"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-12 h-px bg-accent-blue" />
            <span className="text-accent-blue font-bold tracking-widest uppercase text-sm">
              Available for projects
            </span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-display font-extrabold mb-4 tracking-tighter leading-tight">
            Hi, I'm <br />
            <span className="gradient-text">Kenith Karas</span>
          </h1>
          <div className="h-12 overflow-hidden mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-medium text-slate-400"
              >
                {roles[roleIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
          <p className="text-slate-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
            Creating responsive, high-performance web applications with a focus on user experience and real-world functionality.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="btn-primary group flex items-center gap-2">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
          <div className="flex items-center gap-6 text-slate-500">
            <a href="https://github.com/KenithKaras" className="hover:text-white hover:scale-110 transition-all"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/kenith-karas/" className="hover:text-white hover:scale-110 transition-all"><Linkedin size={24} /></a>
            <a href="mailto:[karaskenith@gmail.com]" className="hover:text-white hover:scale-110 transition-all"><Mail size={24} /></a>
          </div>
        </motion.div>
        {/* Right Side: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Main Container with Floating Animation */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-80 h-80 md:w-[450px] md:h-[450px]"
          >
            {/* Background Glows */}
            <div className="absolute inset-0 bg-accent-blue/20 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute -inset-4 border border-white/5 rounded-[40px] rotate-6" />
            <div className="absolute -inset-4 border border-white/5 rounded-[40px] -rotate-3" />
            {/* Profile Frame */}
            <div className="relative w-full h-full glass-card border-none p-4 shadow-2xl overflow-hidden rounded-[40px]">
              <img
                src="/Profile.JPG"
                alt="Kenith Karas - Web Developer Profile"
                className="w-full h-full object-cover rounded-[32px] brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-navy/80 via-transparent to-transparent" />
              {/* Badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-8 left-8 right-8 glass-card p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Building AI Tools</p>
                  <p className="text-slate-400 text-xs tracking-tighter">Diploma Student @ Web Development</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* Decorative Text */}
      <div className="absolute left-0 bottom-10 -rotate-90 origin-left opacity-5 select-none pointer-events-none text-9xl font-display font-black tracking-widest whitespace-nowrap">
        REVOLUTION
      </div>
    </section>
  );
}
