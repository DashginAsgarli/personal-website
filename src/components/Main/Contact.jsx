import React from 'react';
import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const socials = [
  {
    icon: Mail,
    label: 'Email',
    value: 'dashqinasgarli@gmail.com',
    url: 'mailto:dashqinasgarli@gmail.com'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'dashgin-asgarli',
    url: 'https://www.linkedin.com/in/dashgin-asgarli-34b730336/'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'DashginAsgarli',
    url: 'https://github.com/DashginAsgarli'
  },
];

function Contact() {
  const [ref, visible] = useScrollReveal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" ref={ref} className="relative pt-20 pb-10 px-6 md:px-16 lg:px-24 bg-[#050505] border-t border-white/10 overflow-hidden">
      <div className={`mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Let's Work{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-rose-500 to-red-600">
              Together
            </span>
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8">
            I'm currently open to new opportunities and collaborations. Feel free to reach out through any of the platforms below!
          </p>

          <div className="inline-flex items-center justify-center h-15 px-8 rounded-2xl border border-white/10 bg-[#070707] shadow-[inset_0_0_20px_rgba(255,255,255,0.05),0_5px_15px_rgba(0,0,0,0.5)]">
            <ul className="flex items-center justify-center gap-8 list-none m-0 p-0">
              {socials.map(({ icon: Icon, url, label, value }) => (
                <li key={label} className="group relative flex items-center justify-center cursor-pointer">

                  {[0.2, 0.4, 0.6].map((op, i) => (
                    <span key={i} aria-hidden="true" style={{ transform: `translate(${(i + 1) * 3}px, ${-(i + 1) * 3}px)`, opacity: 0 }} className="absolute w-10 h-10 rounded-full bg-red-500/10 border border-red-500/30 group-hover:opacity-100! transition-all duration-300 pointer-events-none" />
                  ))}

                  <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full text-red-500 bg-[#0a0a0a] border border-white/10 group-hover:transform-[translate(10px,-10px)] group-hover:border-red-500/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400">
                    <Icon size={20} />
                  </a>

                  <div aria-hidden="true" className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 whitespace-nowrap rounded-lg px-3 py-1.5 text-[11px] font-bold tracking-wider text-white bg-red-600/90 backdrop-blur-md shadow-[inset_0_0_10px_rgba(255,255,255,0.2),0_5px_10px_rgba(0,0,0,0.4)] transition-all duration-300 pointer-events-none z-20 flex flex-col items-center gap-0.5">
                    <span className="uppercase text-[9px] text-white/80">{label}</span>
                    <span>{value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Dashgin Asgarli. All rights reserved.</p>

          <button type="button" onClick={scrollToTop} className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer">
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Contact