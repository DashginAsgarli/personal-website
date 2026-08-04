import React, { useState } from 'react';
import * as SiIcons from 'react-icons/si';
import { skillCategories } from '../../data/skills';

function Skills() {
  const [active, setActive] = useState('frontend');

  const current = skillCategories.find(c => c.id === active);

  return (
    <section id="skills" className=" bg-[#050505] relative py-10 md:py-15 px-6 md:px-12 lg:px-20 overflow-hidden z-10">
      <div className="mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-rose-500 to-red-600">
              Skills
            </span>
          </h2>
        </div>

        <div className="rounded-[15px] border border-white/10 bg-[#0c0c0c] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-[#111] border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]/70" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]/70" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]/70" />
            </div>
            <span className="text-[10px] font-mono text-white/30 tracking-wide">
              ~/skills
            </span>
          </div>

          <div role="tablist" className="flex items-center justify-center gap-1 px-2 pt-2 bg-[#0c0c0c] border-b border-white/10">
            {skillCategories.map(cat => {
              const isActive = active === cat.id;
              return (
                <button key={cat.id} type="button" role="tab" aria-selected={isActive} onClick={() => setActive(cat.id)} className={`relative px-5 py-2.5 text-xs font-mono tracking-tight rounded-t-lg transition-all duration-300 cursor-pointer ${isActive ? 'bg-[#111] text-red-500 font-bold' : 'text-white/40 hover:text-white/70'}`}>
                  {cat.fileName || cat.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-red-500 via-rose-500 to-red-600" />
                  )}
                </button>
              );
            })}
          </div>

          <div role="tabpanel" className="bg-[#111] p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {current?.skills.map(skill => {
                const Icon = SiIcons[skill.icon];
                return (
                  <div key={skill.name} className="group relative py-4 md:py-6 px-6 rounded-[10px] bg-[#0c0c0c] border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-1 cursor-pointer flex flex-col items-center justify-center gap-3 text-center">
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-linear-to-r from-red-500 via-rose-500 to-red-600" />

                    <div className="text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110 relative z-10">
                      {Icon ? (
                        <Icon color={skill.color || '#ef4444'} />
                      ) : (
                        <span className="text-xl font-bold text-red-500">
                          {skill.name[0]}
                        </span>
                      )}
                    </div>

                    <p className="text-xs font-bold tracking-wide text-white/80 group-hover:text-white transition-colors duration-300 relative z-10">
                      {skill.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills