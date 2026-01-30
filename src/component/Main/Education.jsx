import React from 'react';
import educationData from '../../data/education.json';

const Education = () => {
  return (
    <section id="education" className="bg-[#050505] py-12 md:py-20 px-[5%] md:px-[10%] border-t border-white/5 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[400px] bg-yellow-500/[0.01] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-2 w-[1px] h-full bg-gradient-to-b from-yellow-500 via-white/10 to-transparent"></div>
          
          {/* Section Title */}
          <h2 className="text-white text-2xl md:text-5xl font-black mb-8 md:mb-14 uppercase tracking-tighter italic ml-6 md:ml-12">
            My <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 bg-clip-text text-transparent">Journey.</span>
          </h2>

          <div className="space-y-10 md:space-y-14">
            {educationData.map((edu, idx) => (
              <div 
                key={idx} 
                className="relative ml-6 md:ml-12 group skill-card-reveal" 
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[30px] md:-left-[55px] top-1.5 w-2.5 h-2.5 md:w-4 md:h-4 bg-[#050505] border-2 border-yellow-500 rounded-full group-hover:scale-125 transition-all duration-300 z-10 shadow-[0_0_10px_rgba(234,179,8,0.4)]"></div>
                
                {/* Date */}
                <span className="text-yellow-500 font-mono text-[9px] md:text-[11px] font-bold tracking-[0.2em] uppercase opacity-70">
                  {edu.date}
                </span>
                
                {/* University Title */}
                <h4 className="text-white text-lg md:text-2xl font-bold mt-1 group-hover:text-yellow-400 transition-colors duration-300 tracking-tight">
                  {edu.title}
                </h4>

                {/* Major/Degree */}
                <h5 className="text-gray-300 text-xs md:text-base font-medium mt-0.5 italic opacity-80">
                  {edu.degree}
                </h5>
                
                {/* Description - Artıq sona qədər (w-full) uzanır */}
                <p className="text-gray-500 mt-4 text-[13px] md:text-[15px] leading-relaxed w-full antialiased tracking-wide text-left">
                  {edu.desc.split(' ').map((word, i) => (
                    <span key={i} className={/\d/.test(word) ? "text-yellow-500/90 font-bold" : ""}>
                      {word}{' '}
                    </span>
                  ))}
                </p>
                
                {/* Alt ayırıcı xətt */}
                <div className="absolute -bottom-5 left-0 w-0 h-[1px] bg-white/5 group-hover:w-full transition-all duration-1000"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;