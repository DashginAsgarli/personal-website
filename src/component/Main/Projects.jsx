import React, { useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';
import projects from '../../data/projectsData';
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

        if (sectionRef.current) {
            const cards = sectionRef.current.querySelectorAll('.reveal-card');
            cards.forEach((card) => observer.observe(card));
        }

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
        <section id="portfolio" ref={sectionRef} className="bg-[#050505] py-14 px-[5%] md:px-[10%]">
            <div className="max-w-[1100px] mx-auto">
                <div className="mb-10 md:mb-12">
                    <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter">
                        MY <span className="text-yellow-500">PROJECTS.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
                    {projects.map((item) => {
                        const IconComponent = Icons[item.iconName];
                        const currentHex = getHexColor(item.iconColor);

                        return (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`reveal-card group relative bg-[#0f0f0f] rounded-[1rem] md:rounded-[1.3rem] overflow-hidden border border-white/5 transition-all duration-500 hover:-translate-y-2 ${item.glow}`}
                            >
                                <div className="relative h-[150px] md:h-[165px] lg:h-[210px] overflow-hidden border-b border-white/5">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                </div>

                                <div className="p-4 md:p-5 lg:p-7 relative">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className={`text-[9px] font-bold tracking-[0.2em] uppercase mb-1 ${item.iconColor}`}>
                                                {item.cat}
                                            </p>
                                            <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold tracking-tight">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <div className={`${item.iconColor} p-2 bg-white/5 rounded-lg`}>
                                            {IconComponent && <IconComponent size={20} strokeWidth={2} />}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-3">
                                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                                            Live Preview
                                        </span>
                                        <Icons.ArrowUpRight size={14} className={`transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ${item.iconColor}`} />
                                    </div>
                                </div>

                                <div
                                    className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                                    style={{ backgroundColor: currentHex, boxShadow: `0 0 10px ${currentHex}` }}
                                ></div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projects;