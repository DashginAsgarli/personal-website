import React, { useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';
import projects from '../../data/projectsData.json';
import './main.css';
function Projects() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-active');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = sectionRef.current.querySelectorAll('.reveal-card');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    const getHexColor = (tailwindClass) => {
        const colors = {
            'text-blue-500': '#3b82f6',
            'text-green-500': '#22c55e',
            'text-purple-500': '#a855f7',
            'text-orange-500': '#f97316'
        };
        return colors[tailwindClass] || '#eab308';
    };

    return (
        <section
            id="portfolio"
            ref={sectionRef}
            className="bg-[#050505] py-20 md:py-32 px-[5%] md:px-[10%] border-t border-white/5 relative overflow-hidden"
        >

            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="flex flex-col mb-16 text-left">
                    <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                        MY <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 bg-clip-text text-transparent italic tracking-tight">PROJECTS.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    {projects.map((item) => {
                        const IconComponent = Icons[item.iconName];
                        const currentHex = getHexColor(item.iconColor);

                        return (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`reveal-card relative group p-[1px] rounded-[2.2rem] overflow-hidden bg-gradient-to-br from-white/10 to-transparent block transition-all duration-500 hover:-translate-y-2 ${item.glow}`}
                            >
                                <div className="bg-[#0a0a0a]/95 backdrop-blur-xl h-[280px] md:h-[300px] rounded-[2.2rem] p-8 md:p-10 flex flex-col justify-between border border-white/5 relative overflow-hidden text-left">

                                    <div
                                        className="absolute -top-10 -right-10 w-32 h-32 blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                                        style={{ backgroundColor: currentHex }}
                                    ></div>

                                    <div className="relative z-10 flex justify-between items-start">
                                        <div className={`transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${item.iconColor}`}>
                                            {IconComponent && <IconComponent strokeWidth={1.2} size={48} />}
                                        </div>
                                    </div>

                                    <div className="relative z-10">
                                        <p className={`text-[10px] font-bold tracking-[0.3em]  mb-2 ${item.iconColor}`}>
                                            {item.cat}
                                        </p>
                                        <h3 className="text-white text-3xl md:text-4xl font-black  tracking-tighter leading-none group-hover:tracking-normal transition-all duration-500">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <div className="relative z-10 flex items-center justify-between pt-5 border-t border-white/5">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors">View Project</span>
                                        <Icons.ArrowUpRight size={20} className={`transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ${item.iconColor}`} />
                                    </div>

                                    <div
                                        className="absolute bottom-0 left-0 h-[4px] w-0 transition-all duration-700 group-hover:w-full"
                                        style={{
                                            backgroundColor: currentHex,
                                            boxShadow: `0 0 20px ${currentHex}`
                                        }}
                                    ></div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projects;