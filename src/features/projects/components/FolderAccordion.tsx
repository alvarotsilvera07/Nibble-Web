import { useState } from "react";
import { motion } from "framer-motion";

type ProjectItem = {
    id: string;
    tabTitle: string;
    title: string;
    category: string;
    bgStyle: string;
    textStyle: string;
    image: string;
    description: string;
    url?: string;
};

const PROJECTS: ProjectItem[] = [
    {
        id: "01",
        tabTitle: "CODE_001 // ALP",
        title: "A La Pelotita!",
        category: "Web Application",
        bgStyle: "bg-[#e5e5e5]",
        textStyle: "text-zinc-900",
        image: "/logoAppcorregido.png",
        description: "Sistema de gestión de turnos deportivos especializado en fútbol y pádel.",
        url: "https://app.alapelotita.com.ar/"
    },
    {
        id: "02",
        tabTitle: "CODE_002 // FALLING",
        title: "FALLING ARCH",
        category: "System Design",
        bgStyle: "bg-[#737373]",
        textStyle: "text-zinc-100",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
        description: "Architecting the unseen structures that power modern enterprises."
    },
    {
        id: "03",
        tabTitle: "CODE_003 // SIGNAL",
        title: "THE SIGNAL",
        category: "Mobile App",
        bgStyle: "bg-[#d4d4d8]",
        textStyle: "text-zinc-900",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
        description: "Intercepting the noise over the wire. Crystal clear communication."
    },
    {
        id: "04",
        tabTitle: "CODE_004 // NEST",
        title: "NIGHT NEST",
        category: "Cybersecurity",
        bgStyle: "bg-[#171717]",
        textStyle: "text-zinc-100",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
        description: "Securing the perimeter and reinforcing the core logic."
    },
    {
        id: "05",
        tabTitle: "CODE_005 // WORK",
        title: "AFTER WORK",
        category: "Open Source",
        bgStyle: "bg-[#3f3f46]",
        textStyle: "text-zinc-100",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop",
        description: "Where passion meets code. Pushing limits after hours."
    }
];

export default function FolderAccordion() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="snap-start snap-always w-full min-h-screen py-24 flex items-center justify-center relative z-10 px-4 md:px-12" id="projects">
            <div className="max-w-[95vw] w-full h-[65vh] md:h-[75vh] min-h-[500px] max-h-[800px] flex shadow-2xl bg-[#0a0a0a] p-2 md:p-3 rounded-xl border border-white/5">

                {/* Left 'Spine' of the folder system */}
                <div className="w-10 sm:w-16 md:w-24 bg-[#e5e5e5] h-full flex flex-col items-center justify-end pb-8 rounded-sm border-r border-zinc-400 z-10 shrink-0">
                    <h2 className="transform rotate-180 text-xl sm:text-3xl md:text-5xl font-[Outfit] text-zinc-900 tracking-wider whitespace-nowrap select-none" style={{ writingMode: 'vertical-rl' }}>
                        GRID DAILY_01-05
                    </h2>
                    <p className="transform rotate-180 text-[8px] sm:text-[10px] md:text-xs font-oswald text-zinc-600 tracking-widest whitespace-nowrap select-none mt-8" style={{ writingMode: 'vertical-rl' }}>
                        Visual Studies / Images / Log
                    </p>
                </div>

                {/* Accordion Folders */}
                <div className="flex-1 flex overflow-hidden rounded-r-sm bg-zinc-900">
                    {PROJECTS.map((project, idx) => {
                        const isActive = activeTab === idx;

                        return (
                            <motion.div
                                key={project.id}
                                layout
                                onClick={() => setActiveTab(idx)}
                                initial={false}
                                animate={{
                                    flex: isActive ? 10 : 1,
                                }}
                                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                                className={`relative h-full flex flex-col cursor-pointer border-r border-black/50 overflow-hidden ${project.bgStyle} ${project.textStyle}`}
                            >

                                {/* Visual top folder tab */}
                                <div className="h-16 md:h-20 w-full shrink-0 relative flex items-start overflow-hidden pt-2 pl-1">
                                    {/* Background cutout to simulate tab protruding */}
                                    <div className="absolute top-2 left-0 w-full h-full bg-black/5 rounded-tl-xl border-l border-t border-white/5" />

                                    {/* Tab Mini Title */}
                                    <div className="w-[32px] sm:w-[40px] md:w-[60px] h-full flex items-start justify-center pt-2 z-10 relative">
                                        <span className="transform rotate-90 whitespace-nowrap text-[8px] sm:text-[10px] md:text-[11px] uppercase font-oswald font-semibold tracking-widest origin-left translate-x-4">
                                            {project.tabTitle}
                                        </span>
                                    </div>
                                </div>

                                {/* Main Body */}
                                <div className="flex-1 relative w-full h-full bg-black/5">
                                    {/* Vertical title (spine of the individual folder) */}
                                    <div className="absolute top-0 left-0 w-[32px] sm:w-[40px] md:w-[60px] h-full flex flex-col items-center pt-8 border-r border-black/10 z-20">
                                        <span style={{ writingMode: 'vertical-rl' }} className="font-[Outfit] text-lg sm:text-2xl md:text-3xl tracking-widest transform rotate-180 opacity-90 whitespace-nowrap">
                                            {project.title}
                                        </span>
                                    </div>

                                    {/* Expanded Content View */}
                                    <div className="absolute inset-0 left-[32px] sm:left-[40px] md:left-[60px] overflow-hidden">
                                        <motion.div
                                            initial={false}
                                            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 20 }}
                                            transition={{ duration: 0.4, delay: isActive ? 0.2 : 0 }}
                                            className="absolute inset-0 p-3 sm:p-6 md:p-10 flex flex-col min-w-[180px] sm:min-w-[250px] md:min-w-[300px] h-full"
                                        >
                                            <div className="flex flex-col mt-4">
                                                <p className="font-oswald tracking-widest text-[10px] sm:text-sm mb-1 opacity-70">FILE_{project.id} // {project.category}</p>
                                                {project.url ? (
                                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity w-fit cursor-pointer">
                                                        <h3 className="font-[Outfit] text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-tight md:leading-none mb-2 md:mb-4">{project.title}</h3>
                                                    </a>
                                                ) : (
                                                    <h3 className="font-[Outfit] text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-tight md:leading-none mb-2 md:mb-4">{project.title}</h3>
                                                )}
                                                <p className="font-sans text-[11px] sm:text-sm md:text-base opacity-80 max-w-[200px] sm:max-w-[280px] lg:max-w-sm">{project.description}</p>
                                            </div>

                                            {project.url ? (
                                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-auto mb-8 h-48 md:h-64 lg:h-72 w-full max-w-lg overflow-hidden relative block cursor-pointer group">
                                                    {/* Design accents for the folder insert */}
                                                    <div className="absolute inset-0 border border-white/20 rounded-sm z-10 pointer-events-none" />
                                                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/30 z-10" />
                                                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/30 z-10" />

                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out select-none"
                                                    />
                                                </a>
                                            ) : (
                                                <div className="mt-auto mb-8 h-48 md:h-64 lg:h-72 w-full max-w-lg overflow-hidden relative">
                                                    {/* Design accents for the folder insert */}
                                                    <div className="absolute inset-0 border border-white/20 rounded-sm z-10 pointer-events-none" />
                                                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/30 z-10" />
                                                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/30 z-10" />

                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out select-none"
                                                    />
                                                </div>
                                            )}
                                        </motion.div>
                                    </div>
                                </div>

                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
