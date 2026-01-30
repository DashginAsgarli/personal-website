import React, { useState } from 'react';
import * as Icons from 'react-icons/si'; 
import skillData from '../../data/skills.json';

function Skills() {
  const [activeTab, setActiveTab] = useState("Programming");

  return (
    <section id="skills" className="bg-[#050505] py-12 md:py-24 px-[5%] md:px-[10%] border-t border-white/5 relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-yellow-500/[0.02] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        <div className="flex flex-col items-center mb-10 md:mb-16 text-center">
          <h2 className=" text-white text-3xl md:text-6xl font-black tracking-tighter mb-6 md:mb-10 uppercase">
            Technical  <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 bg-clip-text text-transparent italic">skills.</span>
          </h2>

          <div className="flex flex-nowrap w-full border-b border-white/5 justify-between md:justify-center items-end">
            {Object.keys(skillData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 md:pb-4 px-1 md:px-4 transition-all duration-300 relative flex-1 text-center whitespace-nowrap
                  text-[8px] min-[400px]:text-[10px] md:text-xs 
                  font-bold uppercase tracking-tighter md:tracking-[0.2em]
                  ${activeTab === tab ? "text-yellow-500" : "text-gray-500 hover:text-gray-300"}
                `}
              >
                <span className="relative inline-block pb-1">
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 shadow-[0_0_15px_rgba(250,204,21,0.5)]"></div>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {skillData[activeTab].map((skill) => {
            const IconComponent = Icons[skill.icon];

            return (
              <div 
                key={skill.name} 
                className="relative group p-[1px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-white/10 to-transparent"
              >
                <div className="bg-[#0a0a0a]/90 backdrop-blur-xl p-5 md:p-10 h-full rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col items-center justify-center border border-white/5 relative overflow-hidden">
                  
                  <div 
                    className="absolute -top-10 -right-10 w-24 h-24 blur-[40px] opacity-10 transition-opacity duration-500 group-hover:opacity-30"
                    style={{ backgroundColor: skill.color }}
                  ></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="text-4xl md:text-6xl mb-3 md:mb-6 drop-shadow-lg transition-transform duration-500 group-hover:scale-110">
                      {IconComponent && <IconComponent color={skill.color} />}
                    </div>
                    
                    <h3 className="text-white text-[10px] md:text-lg font-black uppercase tracking-tight text-center">
                      {skill.name}
                    </h3>
                  </div>

                  <div 
                    className="absolute bottom-0 left-0 h-[2px] md:h-[4px] w-full opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ backgroundColor: skill.color }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;