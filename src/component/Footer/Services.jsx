import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  const socialLinks = [
    { name: 'Github', url: 'https://github.com/DashginAsgarli', icon: <FaGithub /> },
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/dashgin-asgarli-34b730336/', icon: <FaLinkedinIn /> }
  ];

  return (
    <footer className="bg-[#050505] py-[3vw] px-[8vw] border-t border-white/5">
      <div className="max-w-[90vw] mx-auto flex flex-col md:flex-row justify-between items-center gap-[4vw]">

        <div className="text-[#EAB308] text-[6vw] md:text-[2.5vw] lg:text-[1.8vw] font-black tracking-tighter cursor-default">
          . . <span className="text-white">.</span>
        </div>

        <div className="text-gray-600 text-[2vw] md:text-[0.9vw] font-bold uppercase tracking-[0.1vw]"> © 2026 Dashgin Asgarli</div>

        <div className="flex gap-[5vw] md:gap-[3vw]">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[1.5vw] md:gap-[0.8vw] text-gray-500 hover:text-white transition-all duration-300 group"
            >
              <span className="text-[5vw] md:text-[1.5vw] group-hover:text-[#EAB308] transition-colors duration-300">
                {social.icon}
              </span>
              <span className="text-[2.5vw] md:text-[0.7vw] font-black uppercase tracking-[0.2vw]">
                {social.name}
              </span>
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}

export default Footer;