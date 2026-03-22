import { Expressjs, Nextjs, TypeScript, JavaScript, Python, 
    Docker, Git, MongoDB, PostgreSQL, Postman, MySQL, TailwindCSS, 
    React, Django, AmazonWebServices, Prisma, Supabase, Nodejs, Firebase, 
    Shadcnui, OpenRouter, OpenClaw, GitHub, HTML5, CSS } from "../ui/DevIcons"
import SkillCard from "./SkillCard"
import FadeIn from "../ui/FadeIn"

const categories = [
    { 
        title: "Language", 
        skills: [
            { name: "JavaScript", Icon: JavaScript },
            { name: "TypeScript", Icon: TypeScript },
            { name: "Python", Icon: Python }
        ] 
    },
    { 
        title: "Frontend", 
        skills: [
            { name: "HTML5", Icon: HTML5 },
            { name: "CSS", Icon: CSS },
            { name: "React.js", Icon: React }, 
            { name: "Next.js", Icon: Nextjs }, 
            { name: "Tailwind CSS", Icon: TailwindCSS },
            { name: "Shadcn UI", Icon: Shadcnui }
        ]  
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", Icon: Nodejs },
            { name: "Express.js", Icon: Expressjs },
            { name: "Django", Icon: Django },
            { name: "Prisma", Icon: Prisma },
            { name: "Supabase", Icon: Supabase },
            { name: "Firebase", Icon: Firebase }
        ]
    },
    {
        title: "Database",
        skills: [
            { name: "PostgreSQL", Icon: PostgreSQL },
            { name: "MongoDB", Icon: MongoDB },
            { name: "MySQL", Icon: MySQL },
        ]
    },
    {
        title: "AI & Tools",
        skills: [
            { name: "OpenClaw", Icon: OpenClaw },
            { name: "OpenRouter", Icon: OpenRouter },
            { name: "Docker", Icon: Docker },
            { name: "Git", Icon: Git },
            { name: "GitHub", Icon: GitHub },
            { name: "Postman", Icon: Postman },
            { name: "AWS", Icon: AmazonWebServices }

        ]
    }
]

export default function Skills() {
    return (
        <section id="skills" className="md:py-20 py-10 w-full bg-background">
            <div className="max-w-6xl mx-auto px-10">
                <FadeIn>
                    <div className="text-center mb-16"> 
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">My Tech Stack</h2>
                        <p className="text-muted-foreground text-lg mt-4">Technical tools which bring my idea to life.</p>
                    </div>
                </FadeIn>
                {categories.map((category, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-2 mb-10">
                        <div className="w-full md:w-1/5 md:pt-2 shrink-0">
                            <FadeIn delay={index * 0.1}>
                                <h2 className="text-2xl text-foreground font-semibold text-center md:text-start">{category.title}</h2>
                            </FadeIn>
                        </div>
                        <div className="grid grid-cols-2 w-full md:w-3/4 md:flex md:flex-wrap md:gap-5 gap-4 justify-center md:justify-start rounded-lg">
                            {category.skills.map((skill, idx) => (
                                <FadeIn key={idx} delay={(index * 0.1) + (idx * 0.05)}>
                                    <SkillCard {...skill} />
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}