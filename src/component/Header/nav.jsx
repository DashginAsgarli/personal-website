import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    let navArr = [
        { name: 'Home', id: 'home' },
        { name: 'Education', id: 'education' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'portfolio' },
        { name: 'Certificates', id: 'certificates' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <header className="fixed top-0 w-full z-[100] flex items-center justify-between px-[6%] py-5 bg-[#050505]/90 backdrop-blur-md border-b border-white/5 text-white">
            <div className="text-xl font-black text-yellow-400 tracking-tighter">
                . . <span className="text-white">.</span>
            </div>

            <nav className="hidden md:flex space-x-8 text-[11px] font-bold tracking-[0.2em] uppercase">
                {navArr.map((item) => (
                    <a 
                        key={item.id} 
                        href={`#${item.id}`} 
                        className="text-white/50 hover:text-white transition-all duration-300 relative group py-1"
                    >
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                ))}
            </nav>

            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden z-[120] flex items-center justify-center text-yellow-400"
            >
                {isOpen ? <X size={24} className="text-black" /> : <Menu size={24} />}
            </button>

            <div className={`fixed top-0 right-0 w-[180px] bg-yellow-400 z-[110] transition-all duration-400 ease-in-out overflow-hidden ${
                isOpen ? 'h-[320px] opacity-100' : 'h-0 opacity-0 pointer-events-none'
            }`}>
                <nav className="flex flex-col p-6 pt-16 space-y-3">
                    {navArr.map((item, index) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => setIsOpen(false)}
                            className={`text-[10px] font-bold uppercase tracking-widest text-black/70 hover:text-black relative group w-fit py-1 transition-all ${
                                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                            }`}
                            style={{ transitionDelay: `${index * 40}ms` }}
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>
            </div>
            
            {isOpen && (
                <div 
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/20 z-[100] md:hidden"
                ></div>
            )}
        </header>
    );
}

export default Header;