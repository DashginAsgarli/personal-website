import React from 'react';
import { Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const SOCIALS = [
  { icon: Github, url: 'https://github.com/DashginAsgarli', label: 'GitHub' },
  { icon: Linkedin, url: 'https://www.linkedin.com/in/dashgin-asgarli-34b730336/', label: 'LinkedIn' },
  { icon: Instagram, url: 'https://instagram.com/dashqinaskrv', label: 'Instagram' },
];

function Hero() {
  return (
    <section id="home" className="flex flex-col justify-center px-6 md:px-12 lg:px-20 pb-18 pt-36 overflow-hidden">
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">

        <div className="mb-6 flex flex-col items-center">
          <p className="text-base md:text-lg lg:text-xl font-medium mb-3 text-white/70 tracking-wide">
            Hi, I'm
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-[-0.03em] text-white mb-6">
            Dashgin{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-rose-500 to-red-600">
              Asgarli
            </span>
          </h1>

          <div className="relative inline-flex items-center justify-center p-px rounded-2xl overflow-hidden mb-8 border border-white/10">
            <span aria-hidden="true" className="absolute inset-[-1000%] animate-border-spin bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#0000_70%,#ef4444_100%)]" />
            <div className="relative z-10 px-5 py-2.5 rounded-[15px] bg-[#070707]">
              <p className="text-base md:text-xl font-bold text-white/95 tracking-wide">
                Data Science & Web Developer
              </p>
            </div>
          </div>

          <p className="max-w-4xl text-base md:text-lg lg:text-xl text-white/80 leading-relaxed font-normal mb-1 md:mb-3">
            Having transitioned from Web Development to Data Science, I combine my web development experience with growing expertise in data analysis and machine learning. Currently open to full-time and remote opportunities in both Frontend Development and Data Science.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
          <button type="button"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-2 h-11 md:h-12.5 px-6 md:px-8 bg-linear-to-r from-red-500 via-rose-500 to-red-600 hover:from-red-600 hover:to-rose-600 text-white font-bold text-xs md:text-sm tracking-wider uppercase rounded-xl transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer"
          >
            Explore Projects
            <ArrowUpRight size={18} />
          </button>

          <div className="h-11 md:h-12.5 px-5 flex items-center rounded-xl border border-white/10 bg-[#070707] shadow-[inset_0_0_20px_rgba(255,255,255,0.1),0_5px_5px_rgba(0,0,0,0.2)]">
            <ul className="flex items-center justify-center gap-5 list-none m-0 p-0">
              {SOCIALS.map(({ icon: Icon, url, label }) => (
                <li key={label} className="group relative flex items-center justify-center cursor-pointer">
                  <span aria-hidden="true" className="absolute w-9 h-9 rounded-full bg-red-500/10 border border-red-500/30 opacity-0 group-hover:opacity-20 transition-all duration-300 pointer-events-none" style={{ transform: 'translate(0px, 0px)' }} />
                  <span aria-hidden="true" className="absolute w-9 h-9 rounded-full bg-red-500/10 border border-red-500/30 opacity-0 group-hover:opacity-40 transition-all duration-300 pointer-events-none" style={{ transform: 'translate(3px, -3px)' }} />
                  <span aria-hidden="true" className="absolute w-9 h-9 rounded-full bg-red-500/10 border border-red-500/30 opacity-0 group-hover:opacity-60 transition-all duration-300 pointer-events-none" style={{ transform: 'translate(6px, -6px)' }} />

                  <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full text-red-500 bg-[#070707] border border-white/10 group-hover:transform-[translate(10px,-10px)] group-hover:border-red-500/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                  >
                    <Icon size={18} />
                  </a>

                  <div aria-hidden="true" className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 whitespace-nowrap rounded-md px-2.5 py-1 text-[11px] font-bold tracking-wider text-white bg-red-600/90 backdrop-blur-md shadow-[inset_0_0_10px_rgba(255,255,255,0.3),0_5px_10px_rgba(0,0,0,0.3)] transition-all duration-300 pointer-events-none z-20">
                    {label}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;