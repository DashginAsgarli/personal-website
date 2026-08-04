import React, { useState, useEffect } from 'react';
import { Home, Code2, FolderGit2, GraduationCap, Award, Mail } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', id: 'home', icon: Home },
  { label: 'Education', id: 'education', icon: GraduationCap },
  { label: 'Skills', id: 'skills', icon: Code2 },
  { label: 'Projects', id: 'projects', icon: FolderGit2 },
  { label: 'Certificates', id: 'certificates', icon: Award },
  { label: 'Contact', id: 'contact', icon: Mail },
];

function Header() {
  const [activeSection, setActiveSection] = useState('home');

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); }
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.4 });

    NAV_LINKS.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => { observer.disconnect(); };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#070707]/80 backdrop-blur-md border-b border-white/10">

      <div className="hidden md:flex w-full mx-auto px-6 md:px-12 lg:px-24 h-20 items-center justify-center">
        <nav className="flex items-center gap-1.5 p-2.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg">
          {NAV_LINKS.map(({ label, id }) => {
            const isActive = activeSection === id;

            return (
              <button
                key={id}
                onClick={() => handleScrollTo(id)}
                className={`px-4 py-2 rounded-[10px] text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 relative cursor-pointer ${isActive ? 'bg-linear-to-r from-red-500 via-rose-500 to-red-600 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
              >
                {label}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="md:hidden flex justify-center items-center py-4 px-4 w-full">
        <nav className="flex items-center justify-between p-2.5 rounded-2xl border border-white/15 bg-[#070707]/90 backdrop-blur-xl w-[95%] max-w-sm">
          {NAV_LINKS.map(({ label, id, icon: Icon }) => {
            const isActive = activeSection === id;

            return (
              <button
                key={id}
                onClick={() => handleScrollTo(id)}
                aria-label={label}
                className={`p-2.5 rounded-[10px] transition-all duration-300 relative flex items-center justify-center cursor-pointer ${isActive ? 'bg-linear-to-r from-red-500 via-rose-500 to-red-600 text-white scale-105' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
              >
                <Icon size={18} strokeWidth={isActive ? 2.2 : 1.8} />
              </button>
            );
          })}
        </nav>
      </div>

    </header>
  );
}

export default Header;