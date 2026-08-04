import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import projects from '../../data/projects';

export default function Projects() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="projects" ref={ref} className="py-12 md:py-20 px-6 md:px-12 lg:px-20">
      <div className={`mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            My{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-rose-500 to-red-600">
              Projects
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} visible={visible} />
          ))}
        </div>

        <div className="mt-10 p-5 rounded-2xl border text-center bg-[#050505]   border-white/10">
          <p className="text-xs md:text-sm mb-2.5 text-white/60">
            Check out my GitHub profile for more projects
          </p>
          <a href="https://github.com/DashginAsgarli" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border font-bold text-xs tracking-wider  transition-all duration-300 border-white/15 text-white/80 hover:border-white/40 hover:text-white hover:bg-white/5 cursor-pointer"
          >
            <Github size={15} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, visible }) {
  return (
    <div className="group relative rounded-2xl border overflow-hidden transition-colors duration-300 bg-[#121212] border-white/10 hover:border-white/20 flex flex-col justify-between" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: `opacity 0.5s ease ${index * 70}ms, transform 0.5s ease ${index * 70}ms, border-color 0.3s ease`, }}>
      {project.image && (
        <div className="relative aspect-21/9 w-full overflow-hidden bg-[#1a1a1a] p-1.5 flex items-center justify-center">
          <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
          </div>

          {project.category && (
            <span className="absolute top-3 right-3 z-10 px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-md bg-black/60 text-white/80 border border-white/15 backdrop-blur-md">
              {project.category}
            </span>
          )}

          <div className="absolute inset-0 bg-linear-to-t from-[#121212] via-transparent to-transparent opacity-80 pointer-events-none" />
        </div>
      )}

      <div className="p-4 pt-2 flex-1 flex flex-col justify-between relative z-10">
        <div className="mb-3">
          <h3 className="text-base md:text-lg font-bold text-white mb-1">
            {project.title}
          </h3>

          {project.desc && (
            <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
              {project.desc}
            </p>
          )}
        </div>

        <div className="pt-2.5 border-t border-white/5 flex items-center justify-between gap-2">
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-linear-to-r from-red-500 via-rose-500 to-red-600 hover:from-red-600 hover:to-rose-600 text-white font-bold text-[10px] tracking-wider uppercase rounded-lg transition-all duration-300 active:scale-[0.98] cursor-pointer">
            <ExternalLink size={12} /> Live Demo
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 py-2 border font-bold text-[10px] tracking-wider uppercase rounded-lg transition-all duration-300 border-white/15 text-white/60 hover:border-white/40 hover:text-white hover:bg-white/5 cursor-pointer">
            <Github size={12} /> GitHub
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-red-500" />
    </div>
  );
}