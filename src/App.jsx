import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Main/Hero';
import Skills from './components/Main/Skills';
import Projects from './components/Main/Projects';
import Education from './components/Main/Education';
import Certificates from './components/Main/Certificates';
import Contact from './components/Main/Contact';

export default function App() {

  return (
    <div>
      <Header />
      <main className='relative bg-[#070707] text-white'>
        <div className="absolute inset-0 pointer-events-none bg-size-[30px_30px] md:bg-size-[45px_45px] lg:bg-size-[60px_60px]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', }} />

        <Hero />
        <Education />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}