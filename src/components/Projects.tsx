import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Sparkles } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: "Elder Care Ai Companian",
    desc: "The world's most compassionate platform connecting seniors with their loved ones through AI-driven care and real-time monitoring.",
    image: "https://img.freepik.com/premium-vector/elderly-care-logo-design-vector-templet_1070930-166.jpg",
    tags: ["React", "Node.js", "Supabase", "Gemini"],
    link: "https://elder-care-ai-care-companion.vercel.app/",
    github: "https://github.com/KenithKaras/ElderCare---AI-Care-Companion"
  },
  {
    title: "Skill Gap Analyzer AI",
    desc: "AI-powered system that analyzes resumes and job descriptions to identify skill gaps and generate personalized learning roadmaps with reasoning and time estimation.",
    image: "https://asktraining.edu.sg/wp-content/uploads/2025/04/Skill-Gap-Analysis-Header.png",
    tags: ["React", "Node.js", "Gemini", "Tailwind"],
    link: "https://skill-gap-analyzer-ai.vercel.app/",
    github: "https://github.com/KenithKaras/skill-gap-analyzer-ai"
  },
  {
    title: "GameZone Online Library",
    desc: "A full-stack web application where users can explore, rate, and review video games. Features user authentication, personalized favorites, game search, and a sleek dark mode UI for an engaging gaming experience.",
    image: "data:image/jpeg;base64,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",
    tags: ["TypeScript", "React", "Gemini"],
    link: "https://kenithkaras.github.io/gamezone-online-library/",
    github: "https://github.com/KenithKaras/gamezone-online-library"
  },
  {
    title: "BidForge Auction Platform",
    desc: "BidForge is a full-stack real-time auction platform built to deliver a fast, interactive, and intelligent bidding experience.It enables users to participate in live auctions with instant bid updates using WebSockets, ensuring real-time synchronization without page refreshes.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6zR6BOVZCd7mLNHOFzcz5quUgLLLpD49n6g&s",
    tags: ["React", "Supabase", "Gemini"],
    link: "https://bid-forge-a-scalable-real-time-auct.vercel.app/",
    github: "https://github.com/KenithKaras/BidForge-Auction-Platform"
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div>
            <span className="text-accent-blue font-bold tracking-[0.3em] uppercase text-sm mb-4 block">My Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-none">
              Creative <span className="gradient-text italic">Showcase.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-accent-blue/20 hover:border-accent-blue transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-accent-blue/20 hover:border-accent-blue transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden h-fit md:h-[600px] flex items-center">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="w-full flex flex-col md:flex-row gap-12 items-center"
            >
              {/* Left: Project Image */}
              <div className="w-full md:w-1/2 group relative">
                <div className="absolute -inset-4 bg-accent-blue/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative glass-card border-none overflow-hidden rounded-[32px] aspect-[16/10] shadow-2xl">
                  <img
                    src={projects[currentIndex].image}
                    alt={`${projects[currentIndex].title} - Web Development Project`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-navy/60 to-transparent" />
                </div>

                {/* Indicators dots */}
                <div className="flex items-center gap-2 mt-6 justify-center md:justify-start">
                  {projects.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-accent-blue' : 'w-2 bg-white/10'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Right: Project Details */}
              <div className="w-full md:w-1/2 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <Sparkles size={20} className="text-accent-blue" />
                  <span className="text-sm font-bold tracking-[0.2em] text-accent-blue uppercase">Featured Project</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-display font-extrabold text-white leading-tight">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
                  {projects[currentIndex].desc}
                </p>

                <div className="flex flex-wrap gap-3 my-4">
                  {projects[currentIndex].tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-full glass-card border-white/5 bg-white/5 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-8 pt-6">
                  <a href={projects[currentIndex].link} className="flex items-center gap-2 text-white font-bold hover:text-accent-blue transition-colors group">
                    Live Preview <ExternalLink size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href={projects[currentIndex].github} className="flex items-center gap-2 text-slate-500 font-bold hover:text-white transition-colors group">
                    View Code <Github size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-purple/5 blur-[150px] -z-10 rounded-full" />
    </section>
  );
}
