import NavigationBar from "./components/NavBar/NavigationBar";

import Home from "./components/Home/HomeSection";
import About from "./components/About/AboutSection";
import Skills from "./components/Skills/SkillsSection";

function App() {

  return (
    <>
      <NavigationBar />
      <main>
        <Home />
        <About />
        <Skills />
        <section id="experience" className="min-h-screen flex items-center justify-center bg-white">
          <h2 className="text-4xl font-bold">Experience Section</h2>
        </section>
        <section id="projects" className="min-h-screen flex items-center justify-center bg-white">
          <h2 className="text-4xl font-bold">Projects Section</h2>
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center bg-white">
          <h2 className="text-4xl font-bold">Contact Section</h2>
        </section>
      </main>
    </>
  )
}

export default App
