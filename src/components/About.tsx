import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group lg:px-12"
        >
          {/* Subtle Glow Background */}
          <div className="absolute inset-0 bg-accent-blue/5 blur-[100px] -z-10 group-hover:bg-accent-blue/10 transition-all duration-700" />
          
          <div className="glass-card p-10 md:p-14 relative border-white/5 overflow-hidden">
            {/* Gradient Border Accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent-blue to-accent-purple" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Side: Short Intro */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <span className="text-accent-blue font-bold tracking-[0.3em] uppercase text-xs mb-2 block">ABOUT ME</span>
                <p className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                  I’m a Diploma student exploring web development and AI, building practical projects that solve <span className="gradient-text">real-world problems.</span>
                </p>
                <p className="text-slate-400 text-lg leading-relaxed font-light">
                  I prioritize clean UI, performance, and practical functionality in my work. I’m currently improving my skills in <span className="text-white font-medium">React, TypeScript, and AI Development</span> through real-world projects.
                </p>
              </div>
              {/* Right Side: Highlights Badges */}
              <div className="lg:col-span-5 flex flex-wrap gap-4 items-center justify-center lg:justify-end">
                {[
                  "React & Frontend Focus",
                  "AI-Based Projects",
                  "Clean UI & Performance"
                ].map((badge, i) => (
                  <motion.div
                    key={badge}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="px-6 py-4 glass-card bg-white/[0.03] border-white/10 flex items-center gap-3 group/badge hover:bg-white/[0.06] hover:border-accent-blue/50 transition-all cursor-default"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    <span className="text-sm font-bold text-slate-300 group-hover/badge:text-white transition-colors">{badge}</span>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
