import ExperienceCard from "./ExperienceCard";
import FadeIn from "../ui/FadeIn";

const experiences = [
    {
        role: "Full-Stack Developer (Contract)",
        company: "Temasek Polytechnic",
        duration: "2026 April - Present",
        description: "Building an AI-powered agent that automates legal onboarding for migrant workers. The agent conducts dynamic AI-powered interviews to gather necessary information and automatically generates affidavits, streamlining the onboarding process and reducing manual effort.",
        technologies: ["OpenClaw", "Ollama"],
    },
    {
        role: "Full-Stack Developer Intern",
        company: "Temasek Polytechnic (in collab. with Bizibody Tech)",
        duration: "2025 Sep - 2026 March",
        description: "Developed 'JurisAI', a legal-tech platform enabling workspaces for document management and intelligent querying. Integrated a RAG-based chatbot for workspace-specific Q&A and implemented a high-performance Legal Search engine indexing over 10,000 cases using RAGFlow.",
        technologies: ["Django", "Docker", "PostgreSQL", "RAGFlow", "HTML/CSS", "JavaScript", "Python"],
        projectLink: "https://jurisai.tech"
    },
];

export default function Experience() {
    return (
        <section id="experience" className="md:py-20 py-10 w-full bg-secondary/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            My professional journey and the technical milestones I've achieved along the way.
                        </p>
                    </div>
                </FadeIn>
                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <FadeIn key={index} delay={index * 0.2}>
                            <ExperienceCard 
                                {...exp}
                            />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
