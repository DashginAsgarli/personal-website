import React, { useState } from 'react';
import { FaExternalLinkAlt, FaAward, FaTimes } from 'react-icons/fa';
import certData from '../../data/certificates.json';
import cff from '../../Img/certificatesImg/cff.jpg';
import front from '../../Img/certificatesImg/front.jpg';
import gitCert from '../../Img/certificatesImg/git.jpg';
import htmlCssImg from '../../Img/certificatesImg/html_css.jpg';
import jhImg from '../../Img/certificatesImg/jh.jpg';
import reactImg from '../../Img/certificatesImg/react.jpg';

const imageMap = { front, cff, htmlCssImg, reactImg, gitCert, jhImg };

function Certificates() {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <section id="certificates" className="bg-[#050505] py-12 md:py-16 px-[5%] md:px-[10%] border-t border-white/5 relative overflow-hidden">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-yellow-500/[0.02] blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-[1100px] mx-auto relative z-10">

                <div className="flex flex-col  mb-10 ">
                    <h2 className="text-white text-2xl md:text-6xl font-black tracking-tighter uppercase leading-tight">
                        Honors & <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 bg-clip-text text-transparent italic">Certificates.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {certData.map((cert) => (
                        <div
                            key={cert.id}
                            className="group relative p-[1px] rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-opacity duration-500"></div>

                            <div className="relative bg-[#0a0a0a]/90 backdrop-blur-xl p-5 md:p-6 h-full rounded-2xl flex flex-col justify-between border border-white/5 min-h-[160px] md:min-h-[180px]">

                                <div className="flex items-start gap-4">
                                    <div className="relative flex-shrink-0 mt-1">
                                        <FaAward className="text-[#EAB308] text-2xl md:text-3xl transition-transform duration-500 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-yellow-400 blur-md opacity-20"></div>
                                    </div>

                                    <div className="flex flex-col">
                                        <h3 className="text-white text-sm md:text-[18px] font-bold tracking-tight group-hover:text-yellow-400 transition-colors duration-300 leading-snug">
                                            {cert.title}
                                        </h3>
                                        <p className="text-gray-500 text-[9px] md:text-[10px] font-medium uppercase tracking-[0.1em] mt-1 italic">
                                            {cert.issuer}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setSelectedImg(imageMap[cert.imageName])}
                                    className="group/btn flex items-center justify-between bg-white/5 hover:bg-[#EAB308] px-4 py-2.5 rounded-xl transition-all duration-500 mt-6"
                                >
                                    <span className="text-white group-hover/btn:text-black text-[9px] font-black uppercase tracking-widest">
                                        View Certificate
                                    </span>
                                    <FaExternalLinkAlt className="text-white group-hover/btn:text-black text-[9px]" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImg && (
                <div
                    className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
                    onClick={() => setSelectedImg(null)}
                >
                    <div className="relative max-w-4xl w-full flex flex-col items-center animate-in zoom-in duration-300">
                        <button className="absolute -top-10 right-0 text-white/50 hover:text-white text-3xl transition-colors">
                            <FaTimes />
                        </button>
                        <img
                            src={selectedImg}
                            alt="Certificate"
                            className="max-h-[85vh] w-auto rounded-lg shadow-2xl border border-white/10 object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Certificates;