import React from 'react';
import './main.css';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import ImgMe from '../../img/img2.jpg';

function HomePage() {
    const socialLinks = [
        { icon: <FaLinkedinIn size={20} />, url: "https://www.linkedin.com/in/dashgin-asgarli-34b730336/" },
        { icon: <FaInstagram size={20} />, url: "https://instagram.com/dashqinaskrv" },
        { icon: <FaGithub size={20} />, url: "https://github.com/DashginAsgarli" },
    ];

    return (
        <section id="home" className="relative flex flex-col lg:flex-row items-center justify-between px-[5%] md:px-[10%] py-[10vh] bg-[#050505] min-h-screen overflow-hidden">
            <div className="w-full lg:w-[60%] z-10 text-center lg:text-left order-2 lg:order-1 mt-[5vh] lg:mt-0 flex flex-col items-center lg:items-start">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-yellow-500/20 rounded-full bg-yellow-500/5 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                    </span>
                    <span className="text-yellow-500 text-[0.6rem] font-bold tracking-[0.2em] uppercase">
                        Available for New Challenges
                    </span>
                </div>

                <h2 className="text-gray-400 text-2xl md:text-3xl font-medium mb-4 animate-fade-up delay-1">
                    Hi, I'm <span className="text-white font-bold">Dashgin Asgarli</span>
                </h2>

                <h1 className="text-white text-[clamp(2.5rem,7vw,4.5rem)] font-black mb-6 leading-[1.1] tracking-tighter animate-fade-up delay-2">
                    FULL-STACK WEB <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600">DEVELOPER</span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light animate-fade-up delay-3">
                    I architect and build performant web applications where robust backend systems meet intuitive, pixel-perfect interfaces. Currently specializing in high-performance <strong>React</strong> ecosystems.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-8 animate-fade-up delay-3">
                    <div className="flex space-x-4">
                        {socialLinks.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-yellow-500/20 via-yellow-300/10 to-yellow-600/20 hover:from-yellow-500/40 hover:via-yellow-300/30 hover:to-yellow-600/40 hover:shadow-lg hover:shadow-yellow-500/20 hover:scale-105 group border border-yellow-500/10"
                            >
                                <div className="w-full h-full rounded-xl flex items-center justify-center bg-[#050505]/80 group-hover:bg-[#050505]/60 transition-all duration-500">
                                    <div className="text-yellow-500/70 group-hover:text-yellow-300 group-hover:scale-110 transition-all duration-500">
                                        {item.icon}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative z-10 order-1 lg:order-2">
                <div className="relative w-[48vw] h-[50vw] lg:w-[29vw] lg:h-[33vw] max-w-[450px] max-h-[450px]">
                    <div className="absolute inset-0 border-2 border-yellow-500/20 rounded-[40px] animate-float"></div>

                    <div className="cursor-pointer w-full h-full bg-[#111] rounded-[30px] overflow-hidden border border-white/10 shadow-2xl relative group">
                        <img
                            src={ImgMe}
                            alt="Dashgin Asgarli - Full Stack Web Developer"
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-2 grayscale-[40%] group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePage;