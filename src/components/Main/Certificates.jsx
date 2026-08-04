import React, { useState, useEffect } from 'react';
import { Award, X } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { certificates } from '../../data/certificates';

function Certificates() {
  const [ref, visible] = useScrollReveal();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="certificates" ref={ref} className="py-10 md:py-20 px-6 md:px-16 lg:px-24">
      <div className={` mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-col items-center text-center mb-14">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Certificates &{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-rose-500 to-red-600">
              Awards.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, i) => (
            <div key={cert.id} role={cert.image ? 'button' : undefined} tabIndex={cert.image ? 0 : undefined}
              onClick={() => cert.image && setSelectedImage(cert.image)}
              onKeyDown={(e) => { if (cert.image && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); setSelectedImage(cert.image); } }}
              className="group relative p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 bg-[#050505]   border-white/8 hover:border-white/18 cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)', transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms, border-color 0.3s ease`, borderLeftColor: '#ef4444', borderLeftWidth: '2px', }}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}>
                  <Award size={18} className="text-red-500" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm leading-snug mb-1 text-white group-hover:text-red-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-white/40">
                    {cert.issuer}
                  </p>
                  {cert.score && (
                    <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded-md" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>
                      {cert.score}
                    </span>
                  )}
                </div>

                <span className="text-[10px] font-bold shrink-0 text-white/25">
                  {cert.year}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-red-500" />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div role="dialog" aria-modal="true" aria-label="Certificate Preview"
          className="fixed inset-0 z-50 flex items-center justify-center  bg-black/85 backdrop-blur-md p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative inline-block max-w-4xl w-auto max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-30 text-white bg-black/70 hover:bg-red-600 p-2 rounded-full transition-all duration-300 cursor-pointer shadow-lg border border-white/20 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400" aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <img src={selectedImage} alt="Certificate Preview"
              className="max-w-full max-h-[82vh] object-contain rounded-xl border border-white/15 shadow-2xl bg-[#0c0c0c] block"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates