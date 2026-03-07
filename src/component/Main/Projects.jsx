import React, { useEffect, useRef, useState } from 'react';
import * as Icons from 'lucide-react';
import projects from '../../data/projectsData';
import './main.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

function Projects() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseMove = (e, id) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
        setHoveredCard(id);
    };

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
        <section id="portfolio" className="bg-[#050505] py-10 px-5 md:py-10 md:px-20 lg:py-20 lg:px-32  overflow-hidden">
            <div>
                <div className="mb-12 flex justify-between items-end">
                    <h2 className="text-white text-2xl md:text-5xl  font-black uppercase italic tracking-tighter">
                        MY <span className="text-yellow-500">PROJECTS.</span>
                    </h2>
                </div>

                <Swiper slidesPerView={1} spaceBetween={20} freeMode={true} autoplay={{ delay: 3000, disableOnInteraction: false }} pagination={{ clickable: true, dynamicBullets: true }} breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 2.5, spaceBetween: 30 }, }} modules={[Pagination, Autoplay, FreeMode]} className="mySwiper !pb-14">
                    {projects.map((item) => {
                        const IconComponent = Icons[item.iconName];
                        const currentHex = getHexColor(item.iconColor);

                        return (
                            <SwiperSlide key={item.id}>
                                <a href={item.link} target="_blank" rel="noopener noreferrer" onMouseMove={(e) => handleMouseMove(e, item.id)} onMouseLeave={() => setHoveredCard(null)} className={`group relative block bg-[#0f0f0f] rounded-[1.5rem] overflow-hidden border border-white/10 transition-all duration-500 h-full ${item.glow}`} style={{ background: hoveredCard === item.id ? `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 30%)` : '' }}>
                                    <div className="relative h-[230px] overflow-hidden">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
                                    </div>

                                    <div className="p-6 md:p-8 relative">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <span className={`text-[10px] font-bold tracking-[0.3em] uppercase ${item.iconColor} bg-white/5 px-3 py-1 rounded-full`}>
                                                    {item.cat}
                                                </span>
                                                <h3 className="text-white text-2xl font-bold mt-4 tracking-tight group-hover:text-yellow-500 transition-colors">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <div className={`${item.iconColor} p-2 md:p-3 bg-white/5 rounded-xl md:rounded-2xl border border-white/5 group-hover:scale-110 transition-transform`}>
                                                {IconComponent && <IconComponent size={20} />}
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between pt-5 border-t border-white/5">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-white">
                                                View Case Study
                                            </span>
                                            <Icons.ArrowRight size={18} className={`transition-all group-hover:translate-x-2 ${item.iconColor}`} />
                                        </div>
                                    </div>

                                    <div
                                        className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-700"
                                        style={{ backgroundColor: currentHex, boxShadow: `0 0 20px ${currentHex}` }}
                                    ></div>
                                </a>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
}

export default Projects;