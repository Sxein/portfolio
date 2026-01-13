import EducationCard from "../About/EducationCard";
import FadeIn from "../ui/FadeIn";

const educationJourney = [
    {
        year: "2019 — 2020",
        title: "Where It All Began",
        institution: {
            name: "University of Medicine, Mandalay",
            link: "https://www.ummdy.gov.mm/",
            tooltipDescription: "One of the prestigious medical universities in Myanmar, known for producing skilled healthcare professionals."
        },
        degree: "Bachelor of Medicine (M.B.B.S.)",
        description: "I started my journey pursuing medicine in Myanmar — a path I once thought was my calling. But life had different plans."
    },
    {
        year: "2021 — 2022",
        title: "The Interruption",
        degree: "When the pandemic hit and political turmoil swept through Myanmar, my studies came to an abrupt halt.",
        description: "Instead of waiting, I turned uncertainty into opportunity. The military coup changed everything overnight. With universities closed indefinitely, I discovered web development through online courses — teaching myself HTML, CSS, JavaScript, and React one tutorial at a time. What started as a way to stay productive became a genuine passion."
    },
    {
        year: "2023 — Present",
        title: "A New Chapter",
        institution: {
            name: "Temasek Polytechnic",
            link: "https://www.tp.edu.sg/home.html",
            tooltipDescription: "A leading polytechnic in Singapore, renowned for its industry-focused curriculum and strong emphasis on practical skills."
        },
        degree: "Diploma in Information Technology",
        achievements: {
            gpa: "3.79",
            honors: [
                {
                    name: "Director's List",
                    years: "Year 1 & 2",
                    tooltipDescription: "An academic honor awarded to the top 10% of the diploma cohort each year, recognizing students with outstanding academic performance."
                }
            ]
        },
        description: "What started as self-learning became a genuine passion. Now pursuing my diploma, I'm building the skills to create technology that makes a difference.",
        isHighlight: true
    }
];

export default function About() {
  return (
    <section id="about" className="md:py-20 py-10 w-full bg-background">
      <div className="max-w-6xl mx-auto px-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <FadeIn direction="right" delay={0.2}>
            <div className="flex flex-col gap-6 text-left text-foreground">
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
          </FadeIn>
          <FadeIn direction="left" delay={0.4}>
            <div className="flex justify-center">
              <div className=" w-80 h-96 bg-muted rounded-2xl overflow-hidden shadow-lg border border-border">
                <img src="/profile.jpeg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-20 px-4">
        <FadeIn>
          <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">My Journey</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From medical school in Myanmar to software development in Singapore — here's how an unexpected detour led me to discover my true passion.
              </p>
          </div>
        </FadeIn>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-cyan-500/50 to-teal-500/50 transform md:-translate-x-1/2" />
          
          <div className="space-y-8 md:space-y-12">
            {educationJourney.map((edu, index) => (
              <FadeIn 
                key={index} 
                delay={index * 0.2}
                direction={index % 2 === 0 ? "right" : "left"}
              >
                <div className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transform -translate-x-1/2 z-10 shadow-lg shadow-blue-500/30" />
                  
                  {/* Card */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <EducationCard {...edu} />
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  )
}