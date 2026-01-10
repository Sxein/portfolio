import ExperienceCard from "./ExperienceCard";

const experiences = [
    {
        role: "Full-Stack Developer Intern",
        company: "Temasek Polytechnic (in collab. with Bizibody Tech)",
        companyLink: "https://www.bizibody.biz/",
        duration: "2025 Sep - Present",
        description: "Developed 'JurisAI', a legal-tech platform enabling workspaces for document management and intelligent querying. Integrated a RAG-based chatbot for workspace-specific Q&A and implemented a high-performance Legal Search engine indexing over 10,000 cases using RAGFlow.",
        technologies: ["Django", "Docker", "PostgreSQL", "RAGFlow", "HTML/CSS", "JavaScript"],
        projectLink: "https://jurisai.tech"
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 w-full bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Experience</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        My professional journey and the technical milestones I've achieved along the way.
                    </p>
                </div>
                
                <div className="relative">
                     {/* Vertical line connecting the cards functionality is inside the card component css but we need a container */}
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-300 before:to-transparent hidden">
                    </div>

                    <div className="">
                        {experiences.map((exp, index) => (
                            <ExperienceCard 
                                key={index}
                                {...exp}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
