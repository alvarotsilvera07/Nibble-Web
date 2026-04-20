import { Globe, Github } from 'lucide-react';
import React from 'react';

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    imageUrl: string;
    socials?: {
        portfolio?: string;
        github?: string;
    };
}

interface TeamMemberCardProps {
    member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
    return (
        <div className="group relative w-full aspect-[3/4] overflow-hidden bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 flex flex-col items-center justify-end transition-all duration-500 hover:-translate-y-2 hover:scale-[1.10] hover:z-30 hover:shadow-2xl hover:shadow-emerald-500/10 cursor-pointer">

            {/* Background Image Image */}
            <img
                src={member.imageUrl}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100"
            />

            {/* Overlay Gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

            {/* Content */}
            <div className="relative z-20 w-full p-6 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                <h3 className="font-anton uppercase text-2xl md:text-3xl text-white tracking-wide mb-1">
                    {member.name}
                </h3>
                <p className="font-oswald text-emerald-400 uppercase tracking-widest text-sm mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {member.role}
                </p>

                {/* Social Links */}
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {member.socials?.portfolio && (
                        <a href={member.socials.portfolio} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors duration-300">
                            <Globe size={20} />
                        </a>
                    )}
                    {member.socials?.github && (
                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors duration-300">
                            <Github size={20} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamMemberCard;
