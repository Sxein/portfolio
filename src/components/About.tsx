import EducationCard from "./EducationCard";

export default function About() {
  return (
    <section id="about" className="py-20 w-full bg-white">
      <div className="max-w-6xl mx-auto px-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">About Me</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-6 text-left">
            <p className="text-lg">
              I'm Full-Stack Developer with a passion for creating efficient and scalable web applications. Specialized in React.js, Next.js and modern web technologies, I transform ideas into applications.
            </p>
            <p className="text-lg">
                When I'm not coding, I'm usually researching the latest tech trends or finding ways to improve my development process. I believe that good software is born from constant iteration and learning.
            </p>
            <p className="text-lg">
                As a fresh graduate, I'm eager to contribute my skills and enthusiasm to a dynamic team. I'm excited about the opportunity to work on impactful projects and continue growing as a developer.
            </p >
          </div>
          <div className="flex justify-center">
            <div className=" w-80 h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
               <img src="/profile.jpeg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-20 px-4">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Education</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EducationCard 
            schoolName="Temasek Polytechnic" 
            degree="Diploma in Information Technology" 
            graduationYear="2023 April - Present" 
            grade="cGPA: 3.79 / 4.0" 
            link="https://www.tp.edu.sg/home.html"
            />
            <EducationCard 
            schoolName="University of Medicine, Mandalay" 
            degree="Bachelor of Medicine and Bachelor of Surgery (M.B., B.S.)" 
            graduationYear="2019 - 2020" 
            grade="Dropout" 
            link="https://www.ummdy.gov.mm/"
            />
            <EducationCard 
            schoolName="Conqueror Academy of Education" 
            degree="Basic Education High School Certificate" 
            graduationYear="2016 - 2019" 
            grade="All Subjects with Distinction"
            link="https://www.caemyanmar.com/"
            />
        </div>
      </div>
      
    </section>
  )
}