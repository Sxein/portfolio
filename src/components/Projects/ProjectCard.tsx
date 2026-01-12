
import { FaFolder } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";

interface ProjectProps {
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    liveLink?: string;
    image?: string;
}

export default function ProjectCard({ title, description, technologies, githubLink, liveLink, image }: ProjectProps) {
    return (
        <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-sky-500/50 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="relative h-48 overflow-hidden bg-muted">
                {image ? (
                    <img 
                        src={image} 
                        alt={title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        <FaFolder size={40} />
                    </div>
                )}
                
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    {githubLink && (
                        <a 
                            href={githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 bg-white/10 text-white rounded-full hover:bg-white hover:text-slate-900 transition-colors backdrop-blur-md border border-white/20"
                            title="View Code"
                        >
                            <FaGithub size={20} />
                        </a>
                    )}
                    {liveLink && (
                        <a 
                            href={liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 bg-white/10 text-white rounded-full hover:bg-white hover:text-sky-600 transition-colors backdrop-blur-md border border-white/20"
                            title="View Live Site"
                        >
                            <FiExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>

            <div className="flex flex-col grow p-6">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-sky-600 transition-colors">
                        {title}
                    </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 grow">
                    {description}
                </p>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span 
                                key={index} 
                                className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-secondary border border-border rounded-md group-hover:border-sky-200 group-hover:bg-sky-50 dark:group-hover:bg-sky-900/20 group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
