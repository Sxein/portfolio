import NavigationBar from "./components/NavBar/NavigationBar";

import Home from "./components/Home/HomeSection";
import About from "./components/About/AboutSection";
import Skills from "./components/Skills/SkillsSection";
import Experience from "./components/Experience/ExperienceSection";
import Projects from "./components/Projects/ProjectSection";

function App() {

  return (
    <>
      <NavigationBar />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <section id="contact" className="min-h-screen flex items-center justify-center bg-white">
          <h2 className="text-4xl font-bold">Contact Section</h2>
        </section>
      </main>
    </>
  )
}

export default App
