import ProjectCard from "./ProjectCard";
import FadeIn from "../ui/FadeIn";

const projects = [
    {
        title: "JurisAI",
        description: "A legal-tech platform enabling workspaces for document management and intelligent querying. Features a RAG-based chatbot and a high-performance search engine indexing 10k+ cases.",
        technologies: ["React", "Django", "PostgreSQL", "RAGFlow", "Docker"],
        liveLink: "https://jurisai.tech",
        image: "/JurisAI.tech.png"
    },
    {
        title: "Portfolio Website",
        description: "A modern, developer-centric portfolio website built with React and Tailwind CSS. Features a clean UI, component-based architecture, and responsive design.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        githubLink: "https://github.com/Sxein/portfolio",
        liveLink: "https://zayarshein.com", // Placeholder
        image: "/Portfolio.png" 
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 w-full">
             <div className="max-w-6xl mx-auto px-6 sm:px-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A selection of projects where I've turned complex problems into elegant solutions.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <FadeIn key={index} delay={index * 0.2}>
                            <ProjectCard 
                                {...project}
                            />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
