import { Expressjs, Nextjs, TypeScript, JavaScript , Python, Docker, Git, MongoDB, PostgreSQL, Firebase, Postman, MySQL, TailwindCSS, React, Django, AmazonWebServices  } from "./Icons"
import SkillCard from "./SkillCard"

const languages = [
    { name: "JavaScript", Icon: JavaScript },
    { name: "TypeScript", Icon: TypeScript },
    { name: "Python", Icon: Python },
]

const frameworksAndLibraries = [
    { name: "React.js", Icon: React },
    { name: "Next.js", Icon: Nextjs },
    { name: "Express.js", Icon: Expressjs },
    { name: "Django", Icon: Django },
    { name: "Tailwind CSS", Icon: TailwindCSS },
]

const databases = [
    { name: "MongoDB", Icon: MongoDB },
    { name: "PostgreSQL", Icon: PostgreSQL },
    { name: "MySQL", Icon: MySQL },
    { name: "Firebase", Icon: Firebase },
]

const tools = [
    { name: "Git", Icon: Git },
    { name: "Docker", Icon: Docker },
    { name: "Postman", Icon: Postman },
    { name: "AWS", Icon: AmazonWebServices },
]

export default function Skills() {
    return (
        <section id="skills" className="py-20 w-full bg-white">
            <div className="max-w-6xl mx-auto px-10 ">
                <div className="text-center mb-16"> 
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">My Tech Stack</h2>
                </div>
                <div>
                    <h2 className="text-2xl text-stone-900 font-semibold text-center md:text-start">Languages</h2>
                    <div className="flex flex-wrap md:gap-5 gap-9 justify-start my-4 p-6 rounded-lg">
                        {languages.map((skill, index) => (
                            <SkillCard key={index} {...skill} />
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl text-stone-900 font-semibold text-center md:text-start">Frameworks &amp; Libraries</h2>
                    <div className="flex flex-wrap md:gap-5 gap-9 justify-start my-4 p-6 rounded-lg">
                        {frameworksAndLibraries.map((skill, index) => (
                            <SkillCard key={index} {...skill} />
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl text-stone-900 font-semibold text-center md:text-start">Databases</h2>
                    <div className="flex flex-wrap md:gap-5 gap-9 justify-start my-4 p-6 rounded-lg">
                        {databases.map((skill, index) => (
                            <SkillCard key={index} {...skill} />
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl text-stone-900 font-semibold text-center md:text-start">Software &amp; Tools</h2>
                    <div className="flex flex-wrap md:gap-5 gap-9 justify-start my-4 p-6 rounded-lg">
                        {tools.map((skill, index) => (
                            <SkillCard key={index} {...skill} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}