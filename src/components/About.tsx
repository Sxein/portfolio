export default function About() {
  return (
    <section id="about" className="py-20 w-full bg-white">
      <div className="max-w-6xl mx-auto px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
          <p className="text-gray-500 mt-2">Get to know the person behind the code</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col gap-6 text-left">
            <p className="text-gray-600 text-lg">
              I'm Full-Stack Developer with a passion for creating efficient and scalable web applications. Specialized in React.js, Next.js and modern web technologies, I transform ideas into applications.
            </p>
            <p>
                When I'm not coding, I'm usually researching the latest tech trends or finding ways to improve my development process. I believe that good software is born from constant iteration and learning.
            </p>
            <p>
                As a fresh graduate, I'm eager to contribute my skills and enthusiasm to a dynamic team. I'm excited about the opportunity to work on impactful projects and continue growing as a developer.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
               <img src="/profile.jpeg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}