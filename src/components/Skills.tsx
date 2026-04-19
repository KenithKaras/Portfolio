import { motion } from 'framer-motion';

const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Tailwind CSS", "Framer Motion"],
  aiTools: ["OpenAI API", "HuggingFace", "Prompt Engineering", "Google Gemini"],
  core: ["Node.js", "Supabase", "Firebase", "Database Management", "Git & GitHub"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-accent-blue font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Powerhouse</span>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tighter">My <span className="gradient-text italic">Toolbox.</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Frontend */}
          <SkillCard
            title="Frontend Mastery"
            skills={skills.frontend}
            color="from-blue-500/20 to-cyan-500/20"
            delay={0}
          />
          {/* AI & Tools */}
          <SkillCard
            title="AI & Intelligent Systems"
            skills={skills.aiTools}
            color="from-purple-500/20 to-pink-500/20"
            delay={0.1}
          />
          {/* Core Stack */}
          <SkillCard
            title="Core Architecture"
            skills={skills.core}
            color="from-emerald-500/20 to-blue-500/20"
            delay={0.2}
          />
        </div>
      </div>
      {/* Visual background text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] text-[20vw] font-display font-black tracking-tighter select-none pointer-events-none rotate-6">
        CAPABILITIES
      </div>
    </section>
  );
}

function SkillCard({ title, skills, color, delay }: { title: string, skills: string[], color: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`glass-card p-10 relative group overflow-hidden bg-gradient-to-br ${color} transition-all duration-500 hover:scale-[1.02]`}
    >
      <div className="absolute top-0 right-0 p-12 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

      <h3 className="text-xl font-display font-bold text-white mb-8 tracking-wide border-b border-white/10 pb-4">{title}</h3>

      <div className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <div
            key={skill}
            className="px-4 py-2 glass-card bg-bg-navy/40 border-white/5 group-hover:border-accent-blue/30 transition-all cursor-default"
          >
            <span className="text-sm font-medium text-slate-300 group-hover:text-white">{skill}</span>
          </div>
        ))}
      </div>

      {/* Animated underline */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent-blue to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
