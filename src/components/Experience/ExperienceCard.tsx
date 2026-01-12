interface ExperienceProps {
    role: string;
    company: string;
    companyLink?: string;
    duration: string;
    description: string;
    technologies: string[];
    projectLink?: string;
}

export default function ExperienceCard({ role, company, companyLink, duration, description, technologies, projectLink }: ExperienceProps) {
    return (
        <div className="relative pl-8 sm:pl-48 py-2 group">
            <div className={`flex flex-col sm:flex-row items-center mb-1 
                before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-border sm:before:ml-38 before:self-start before:-translate-x-1/2 before:translate-y-3 
                after:absolute after:left-2 sm:after:left-0 after:size-3 after:bg-sky-500 after:ring-4 after:ring-sky-100 dark:after:ring-sky-900/30 after:rounded-full sm:after:ml-38 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:z-10 group-hover:after:scale-125 transition-transform duration-300`
            }>
                <time className="sm:absolute left-0 top-1/2 -translate-y-1/2 inline-flex items-center justify-center sm:justify-end mb-8 sm:mb-0 sm:pr-6 sm:w-36">
                    <span className="text-xs font-semibold uppercase px-4 py-1 text-sky-600 bg-sky-50 dark:bg-sky-900/20 border border-sky-100 dark:border-sky-800 rounded-full sm:text-sm sm:font-medium">
                        {duration}
                    </span>
                </time>
                <div className="sr-only">{role}</div>
            </div>

            <div className="relative bg-card p-6 rounded-2xl shadow-sm border border-border hover:shadow-md hover:border-sky-500/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold text-card-foreground group-hover:text-sky-500 transition-colors">
                                {role} 
                            </h3>
                            {projectLink && (
                                <a 
                                    href={projectLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-slate-400 hover:text-sky-500 transition-colors"
                                    title="View Project"
                                >
                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                                </a>
                            )}
                        </div>
                        <div className="text-muted-foreground font-medium text-sm">
                            {companyLink ? (
                                <a href={companyLink} target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 hover:underline transition-colors">
                                    {company}
                                </a>
                            ) : (
                                company
                            )}
                        </div>
                    </div>
                </div>
                
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
                    {description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span 
                            key={index} 
                            className="px-2.5 py-1 text-xs font-semibold text-muted-foreground bg-secondary border border-border rounded-md hover:text-sky-600 hover:bg-sky-50 dark:hover:bg-sky-900/20 hover:border-sky-200 transition-all"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
