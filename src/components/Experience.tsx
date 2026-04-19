import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: "Web Developer Intern",
    company: "Enats",
    period: "Jun 2025 - Aug 2025",
    description: [
      "Assisted in developing and maintaining client-facing web applications.",
      "Collaborated with the frontend team to implement responsive design patterns.",
      "Optimized codebase for better site performance and SEO rankings.",
      "Participated in weekly code reviews and structural planning."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent-blue font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Professional Journey</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Career <span className="gradient-text">Timeline</span></h2>
        </motion.div>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group glass-card p-10 relative overflow-hidden border-white/5 bg-white/[0.03] transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-24 bg-accent-blue/5 rounded-full blur-3xl -z-10 group-hover:bg-accent-blue/10 transition-all duration-500" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue shadow-xl group-hover:scale-110 transition-transform">
                    <Briefcase size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white">{exp.role}</h3>
                    <p className="text-accent-blue font-medium text-lg italic">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-5 py-2 glass-card rounded-full text-sm font-bold text-slate-400 bg-white/5">
                  <Calendar size={18} />
                  {exp.period}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exp.description.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1 bg-accent-blue/20 p-1 rounded-full text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all">
                      <CheckCircle2 size={16} />
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              {/* Decorative side accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-blue transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
