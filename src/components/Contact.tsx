import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import emailjs from "emailjs-com";

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      "service_ujww73b",
      "template_3td94am",
      {
        name: formState.name,
        email: formState.email,
        message: formState.message,
      },
      "7GafyXKRDe3YKo62G"
    )
      .then(() => {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch(() => {
        alert("Failed to send message");
      });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-bg-navy/50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-blue font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Let's Connect</span>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-8 tracking-tighter leading-none">
              Start a <br />
              <span className="gradient-text italic">Conversation.</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-lg">
              I'm always open to new opportunities, collaborations, or just a friendly developer chat. Drop me a line!
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Email</p>
                  <p className="text-xl font-medium text-white group-hover:text-accent-blue transition-colors">karaskenith@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Location</p>
                  <p className="text-xl font-medium text-white group-hover:text-accent-blue transition-colors">Mumbai Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Github].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="https://github.com/KenithKaras"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-white transition-all shadow-xl"
                >
                  <Icon size={20} />
                </motion.a>

              ))}

              {[Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="https://www.linkedin.com/in/kenithkaras/"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-white transition-all shadow-xl"
                >
                  <Icon size={20} />
                </motion.a>

              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-blue to-accent-purple" />

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue transition-colors text-white"
                    placeholder="Kenith Karas"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue transition-colors text-white"
                    placeholder="[EMAIL_ADDRESS]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                <textarea
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue transition-colors text-white resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="btn-primary flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
                <Send size={18} className={`${submitted ? 'hidden' : 'group-hover:translate-x-1 group-hover:-translate-y-1'} transition-transform`} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
