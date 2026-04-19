import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
           <a href="#" className="text-2xl font-display font-bold tracking-tighter">
             K<span className="gradient-text">K.</span>
           </a>
           <p className="text-slate-500 text-sm max-w-md text-center">
             Crafting modern digital architectures with a focus on impact, scalability, and polished user experiences.
           </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map(item => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-xs uppercase tracking-widest font-bold text-slate-400 hover:text-white transition-colors"
                >
                    {item}
                </a>
            ))}
        </nav>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="flex flex-col items-center gap-2">
          <p className="text-slate-500 text-xs flex items-center gap-2">
            © {currentYear} Kenith Karas. Built with <Heart size={14} className="text-red-500 fill-red-500" /> & React.
          </p>
          <div className="flex items-center gap-4 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
            <span>Clean Code</span>
            <div className="w-1 h-1 rounded-full bg-slate-800" />
            <span>SEO Optimized</span>
            <div className="w-1 h-1 rounded-full bg-slate-800" />
            <span>Responsive</span>
          </div>
        </div>
      </div>
      {/* Scroll to top decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1.5 bg-bg-navy border border-white/5 rounded-full flex items-center justify-center">
         <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-bounce" />
      </div>
    </footer>
  );
}
