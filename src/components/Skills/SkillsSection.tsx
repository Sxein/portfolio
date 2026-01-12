import { Expressjs, Nextjs, TypeScript, JavaScript , Python, Docker, Git, MongoDB, PostgreSQL, Firebase, Postman, MySQL, TailwindCSS, React, Django, AmazonWebServices  } from "../ui/DevIcons"
import SkillCard from "./SkillCard"
import FadeIn from "../ui/FadeIn"

const categories = [
    { 
        title: "Languages", 
        skills: [
            { name: "JavaScript", Icon: JavaScript },
            { name: "TypeScript", Icon: TypeScript },
            { name: "Python", Icon: Python }
        ] 
    },
    { 
        title: "Frameworks & Libraries", 
        skills: [
            { name: "React.js", Icon: React }, 
            { name: "Next.js", Icon: Nextjs }, 
            { name: "Express.js", Icon: Expressjs }, 
            { name: "Django", Icon: Django }, 
            { name: "Tailwind CSS", Icon: TailwindCSS }
        ]  
    },

    {
        title: "Databases",
        skills: [
            { name: "MongoDB", Icon: MongoDB },
            { name: "PostgreSQL", Icon: PostgreSQL },
            { name: "MySQL", Icon: MySQL },
            { name: "Firebase", Icon: Firebase }
        ]
    },
    {
        title: "Tools & Platforms",
        skills: [
            { name: "Docker", Icon: Docker },
            { name: "Git", Icon: Git },
            { name: "Postman", Icon: Postman },
            { name: "AWS", Icon: AmazonWebServices }
        ]
    }
]

export default function Skills() {
    return (
        <section id="skills" className="md:py-20 py-10 w-full bg-background">
            <div className="max-w-6xl mx-auto px-10 ">
                <FadeIn>
                    <div className="text-center mb-16"> 
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">My Tech Stack</h2>
                    </div>
                </FadeIn>
                {categories.map((category, index) => (
                    <div key={index}>
                        <FadeIn delay={index * 0.1}>
                            <h2 className="text-2xl text-foreground font-semibold text-center md:text-start">{category.title}</h2>
                        </FadeIn>
                        <div className="flex flex-wrap md:gap-5 gap-9 justify-start p-6 rounded-lg">
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