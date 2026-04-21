import EducationCard from "../About/EducationCard";
import FadeIn from "../ui/FadeIn";

const educationJourney = [
    {
        year: "2019 — 2020",
        title: "Medicine in Myanmar",
        institution: {
            name: "University of Medicine, Mandalay",
            link: "https://www.ummdy.gov.mm/",
            tooltipDescription: "One of the prestigious medical universities in Myanmar, known for producing skilled healthcare professionals."
        },
        degree: "Bachelor of Medicine (M.B.B.S.)",
        description: "Began pursuing medicine, a path I thought was my calling."
    },
    {
        year: "2021 — 2022",
        title: "Self-Taught Developer",
        degree: "The Pivot: From Medicine to Code",
        description: "When the pandemic and political turmoil halted my studies, I taught myself web development through online courses — mastering HTML, CSS, JavaScript, and React."
    },
    {
        year: "2023 — 2026",
        title: "Information Technology",
        institution: {
            name: "Temasek Polytechnic",
            link: "https://www.tp.edu.sg/home.html",
            tooltipDescription: "A leading polytechnic in Singapore, renowned for its industry-focused curriculum and strong emphasis on practical skills."
        },
        degree: "Diploma in Information Technology",
        achievements: {
            gpa: "3.75",
            honors: [
                {
                    name: "Diploma with Merit",
                    years: "Graduating Class",
                    tooltipDescription: "An institutional honor awarded to the top 10% of the graduating cohort, recognizing exceptional academic excellence and outstanding performance throughout the diploma program."
                },
                {
                    name: "Director's List",
                    years: "Year 1 & 2",
                    tooltipDescription: "An academic honor awarded to the top 10% of the diploma cohort each year, recognizing students with outstanding academic performance."
                }
            ]
        },
        description: "Built a strong foundation in software engineering while consistently ranking among the top students.",
        isHighlight: true
    }
];

const quickStats = [
    { value: "3.75", label: "cGPA", accent: "text-amber-500" },
    { value: "3×", label: "Academic Honors", accent: "text-cyan-500" },
    { value: "4+", label: "Years Coding", accent: "text-emerald-500" },
];

export default function About() {
  return (
    <section id="about" className="md:py-20 py-10 w-full bg-background">
      {/* About Me Section */}
      <div className="max-w-6xl mx-auto px-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <FadeIn direction="right" delay={0.2}>
            <div className="flex flex-col gap-5 text-left text-foreground">
              <p className="text-lg leading-relaxed">
                Full-Stack Developer specializing in <span className="text-cyan-500 dark:text-cyan-400 font-semibold">React, Next.js, and Django</span>. I turn ideas into scalable, production-ready web applications.
              </p>
              <p className="text-lg leading-relaxed">
                From medical school in Myanmar to self-taught developer to Singapore's top IT students — I thrive on learning, building, and shipping.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-4 pt-6 border-t border-border">
                {quickStats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className={`text-3xl md:text-4xl font-bold ${stat.accent}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.4}>
            <div className="flex justify-center">
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl border border-border group">
                <img src="/profile.jpeg" alt="Profile" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Education Journey Section */}
      <div className="max-w-4xl mx-auto mt-24 px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-4">
              My Journey
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-4">Education & Growth</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              An unconventional path — from medicine to code, shaped by resilience and curiosity.
            </p>
          </div>
        </FadeIn>
        
        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-cyan-500/50 to-teal-500/50 transform md:-translate-x-1/2" />
          
          <div className="space-y-8 md:space-y-12">
            {educationJourney.map((edu, index) => (
              <FadeIn 
                key={index} 
                delay={index * 0.2}
                direction={index % 2 === 0 ? "right" : "left"}
              >
                <div className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transform -translate-x-1/2 z-10 shadow-lg shadow-blue-500/30" />
                  
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <EducationCard {...edu} />
                  </div>
                  
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
