import { Expressjs, Nextjs, TypeScript, JavaScript , Python, Docker, Git, MongoDB, PostgreSQL, Firebase, Postman, MySQL, TailwindCSS, React, Django, AmazonWebServices  } from "./Icons"
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
                        <div className="md:w-32 md:h-32 w-28 h-28  bg-white rounded-lg text-white flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
                            <JavaScript className="size-8 md:size-12"/>
                            <span className="mt-2 text-black font-medium">JavaScript</span>
                        </div>
                        <div className="md:w-32 md:h-32 w-28 h-28  bg-white rounded-lg text-white flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
                            <TypeScript className="size-8 md:size-12"/>
                            <span className="mt-2 text-black font-medium">TypeScript</span>
                        </div>
                        <div className="md:w-32 md:h-32 w-28 h-28  bg-white rounded-lg text-white flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
                            <Python className="size-8 md:size-12"/>
                            <span className="mt-2 text-black font-medium">Python</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl text-stone-900 font-semibold text-center md:text-start">Frameworks &amp; Libraries</h2>
                    <div className="flex flex-wrap md:gap-5 gap-9 justify-start my-4 p-6 rounded-lg">
                        <div className="md:w-32 md:h-32 w-28 h-28 bg-white rounded-lg text-white flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
                            <React className="size-12"/>
                            <span className="mt-2 text-black font-medium">React.js</span>
                        </div>
                        <div className="md:w-32 md:h-32 w-28 h-28 bg-white rounded-lg text-white flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
                            <Nextjs className="size-12"/>
                            <span className="mt-2 text-black font-medium">Next.js</span>
                        </div>
                        <div className="md:w-32 md:h-32 w-28 h-28 bg-white rounded-lg text-white flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
                            <Expressjs className="size-12"/>
                            <span className="mt-2 text-black font-medium">Express.js</span>
                        </div>
                        <div className="md:w-32 md:h-32 w-28 h-28 bg-white rounded-lg text-white flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
                            <Django className="size-12"/>
                            <span className="mt-2 text-black font-medium">Django</span>
                        </div>
                        <div className="md:w-32 md:h-32 w-28 h-28 bg-white rounded-lg text-white flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
                            <TailwindCSS className="size-12"/>
                            <span className="mt-2 text-black font-medium">Tailwind CSS</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl text-stone-900 font-semibold text-center md:text-start">Databases</h2>
                    <div className="flex flex-wrap md:gap-5 gap-9 justify-start my-4 p-6 rounded-lg">
                        <div className="md:w-32 md:h-32 w-28 h-28 bg-white rounded-lg text-white flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
                            <MongoDB className="size-12"/>
                            <span className="mt-2 text-black font-medium">MongoDB</span>
                        </div>
                        <div className="md:w-32 md:h-32 w-28 h-28 bg-white rounded-lg text-white flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
                            <PostgreSQL className="size-12"/>
                            <span className="mt-2 text-black font-medium">PostgreSQL</span>
                        </div>
                        <div className="md:w-32 md:h-32 w-28 h-28 bg-white rounded-lg text-white flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
                            <MySQL className="size-12"/>
                            <span className="mt-2 text-black font-medium">MySQL</span>
                        </div>
                        <div className="md:w-32 md:h-32 w-28 h-28 bg-white rounded-lg text-white flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
                            <Firebase className="size-12"/>
                            <span className="mt-2 text-black font-medium">Firebase</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl text-stone-900 font-semibold text-center md:text-start">Software &amp; Tools</h2>
                    <div className="flex flex-wrap md:gap-5 gap-9 justify-start my-4 p-6 rounded-lg">
                        <div className="md:w-32 md:h-32 w-28 h-28 bg-white rounded-lg text-white flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
                            <Git className="size-12"/>
                            <span className="mt-2 text-black font-medium">Git</span>
                        </div>
                        <div className="md:w-32 md:h-32 w-28 h-28 bg-white rounded-lg text-white flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
                            <Docker className="size-12"/>
                            <span className="mt-2 text-black font-medium">Docker</span>
                        </div>
                        <div className="md:w-32 md:h-32 w-28 h-28 bg-white rounded-lg text-white flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
                            <Postman className="size-12"/>
                            <span className="mt-2 text-black font-medium">Postman</span>
                        </div>
                        <div className="md:w-32 md:h-32 w-28 h-28 bg-white rounded-lg text-white flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
                            <AmazonWebServices className="size-12"/>
                            <span className="mt-2 text-black font-medium">AWS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}