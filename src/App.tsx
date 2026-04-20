import { BrowserRouter } from 'react-router-dom';
import Aurora from '@/components/animations/Aurora';

import FolderAccordion from '@/features/projects/components/FolderAccordion';
import ContactSection from '@/features/contact/components/ContactSection';
import TeamSection from '@/features/team/components/TeamSection';

function App() {
  return (
    <BrowserRouter>
      {/* Container must be full width and height with a dark background base */}
      <div className="relative h-screen bg-[#111111] font-oswald text-foreground antialiased overflow-x-hidden overflow-y-auto snap-y snap-mandatory selection:bg-emerald-400 selection:text-black scroll-smooth">

        {/* Aurora Background Layer */}
        {/* Adjusted to parameters from ReactBits: #4b4444 & #ffffff */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Aurora
            colorStops={["#4b4444", "#ffffff", "#4b4444"]}
            amplitude={0.3}
            blend={0.8}
          />
        </div>

        {/* --- FOREGROUND CONTENT (HERO SECTION) --- */}
        <div className="snap-start snap-always relative z-10 flex min-h-screen flex-col w-full p-8 md:p-12 text-white" id="home">

          {/* MAIN HERO SECTION */}
          <main className="flex-1 flex items-center justify-center relative w-full h-full">
            <div className="relative flex flex-col items-center justify-center mt-[-5%]">

              {/* Box behind "WE ARE" overlaying */}
              <div className="absolute -left-16 md:-left-32 -top-12 md:-top-24 w-48 md:w-80 h-32 md:h-56 bg-zinc-800/20 backdrop-blur-[2px] z-0 hidden md:block" />

              {/* Title Container */}
              <div className="relative z-20 w-full max-w-full flex flex-col items-center md:block">
                <h2 className="md:absolute md:-top-10 md:-left-12 text-zinc-500 font-oswald uppercase tracking-widest text-lg md:text-3xl font-bold select-none mb-2 md:mb-0 text-center md:text-left">
                  We are
                </h2>

                <h1 className="font-anton uppercase text-[5.5rem] sm:text-7xl md:text-[10rem] lg:text-[15rem] leading-none tracking-normal text-white drop-shadow-2xl select-none text-center">
                  Nibble
                </h1>

                <h3 className="md:absolute md:right-[-100px] md:-bottom-12 text-zinc-500 font-oswald font-semibold uppercase tracking-widest text-sm md:text-xl select-none mt-2 md:mt-0 text-center md:text-right">
                  A developers enterprise
                </h3>
              </div>

            </div>
          </main>

        </div>

        {/* --- PROJECTS SECTION --- */}
        <FolderAccordion />

        {/* --- CONTACT SECTION --- */}
        <ContactSection />

        {/* --- TEAM SECTION --- */}
        <TeamSection />

        {/* --- GLOBAL STICKY HEADER NAV --- */}
        <div className="fixed top-0 left-0 w-full p-8 md:p-12 flex justify-between items-start z-50 pointer-events-none">
          {/* LOGO LINK with Overlapping Micro-interaction */}
          <a href="#home" className="group relative uppercase font-anton text-[20px] md:text-[35px] leading-none select-none tracking-wider pointer-events-auto w-16 h-16 md:w-20 md:h-20 flex items-start justify-start">

            {/* Estado Hover: "La Je" */}
            <div className="absolute top-0 left-0 flex flex-col text-white transition-all duration-500 ease-in-out transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              <span>La</span>
              <span>Je</span>
            </div>

            {/* Estado por defecto: Logo Nuevo (Imagen) */}
            <div className="absolute top-0 left-0 flex items-start justify-start transition-all duration-500 ease-in-out transform group-hover:-translate-y-full group-hover:opacity-0 origin-bottom">
              <img
                src={`${import.meta.env.BASE_URL}logo.svg`}
                alt="Nibble Logo"
                className="w-12 h-12 md:w-14 md:h-14 object-contain transition-all duration-700"
              />
            </div>
          </a>

          {/* NAV LINKS */}
          <nav className="hidden md:flex gap-8 uppercase font-oswald text-sm md:text-base tracking-widest font-semibold text-zinc-500 pointer-events-auto">
            <a href="#projects" className="hover:text-emerald-400 transition-colors duration-300">Projects</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors duration-300">Contact Us</a>
            <a href="#team" className="hover:text-emerald-400 transition-colors duration-300">About Us</a>
          </nav>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
