import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { educationData } from '../../data/education';

function Education() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="education" ref={ref} className="bg-[#050505] py-12 md:py-20 px-6 md:px-16 lg:px-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-125 h-100 bg-red-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className={`mx-auto relative z-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            My{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-rose-500 to-red-600">
              Education
            </span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-2 w-px h-full bg-linear-to-b from-red-500 via-white/10 to-transparent"></div>

          <div className="space-y-10 md:space-y-14">
            {educationData.map((edu, idx) => (
              <div key={idx} className="relative ml-6 md:ml-12 group skill-card-reveal" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="absolute -left-7.75 md:-left-13.75 top-1.5 w-3 h-3 md:w-4 md:h-4 bg-[#050505] border-2 border-red-500 rounded-full group-hover:scale-125 transition-all duration-300 z-10 shadow-[0_0_10px_rgba(239,68,68,0.4)]"></div>

                <span className="text-red-500 font-mono text-[9px] md:text-[11px] font-bold tracking-[0.2em] uppercase opacity-95">
                  {edu.date}
                </span>

                <h4 className="text-white text-lg md:text-2xl font-bold mt-1 group-hover:text-red-400 transition-colors duration-300 tracking-tight">
                  {edu.title}
                </h4>

                <h5 className="text-gray-300 text-xs md:text-base font-medium mt-0.5 italic opacity-85">
                  {edu.degree}
                </h5>

                <p className="text-gray-400 mt-4 text-[13px] md:text-[15px] leading-relaxed w-full antialiased tracking-wide text-left">
                  {edu.desc}
                </p>

                <div className="absolute -bottom-5 left-0 w-0 h-px bg-white/5 group-hover:w-full transition-all duration-1000"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education