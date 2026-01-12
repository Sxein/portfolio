import {Button} from "@/components/ui/Button";
import { Link } from "react-scroll";
import { HiDownload } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

export default function Home() {

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-background">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-muted-foreground text-xl sm:text-2xl md:text-3xl mb-2">Hi, my name is</h3>
            <h1 className="text-amber-600 dark:text-amber-500 text-5xl sm:text-6xl md:text-8xl font-bold mb-5">Zayar&nbsp;Shein .</h1>
              <h2 className="text-foreground/80 font-semibold text-3xl sm:text-4xl md:text-5xl min-h-20 sm:min-h-24 mb-4">
              I {' '}
              <TypeAnimation
                sequence={['am a Full-Stack Developer.', 2000, 'love building web applications.', 2000, 'enjoy learning new technologies.', 2000]}
                speed={50}
                style={{ display: 'inline' }}
                repeat={Infinity}
              />
            </h2>            
            <p className="text-muted-foreground text-md mb-6 sm:text-lg md:text-xl max-w-2xl mx-auto">Innovative Full-Stack Developer passionate about writing clean, maintainable code and leveraging modern technologies to streamline the transition from idea to production.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4 sm:px-0">
              <Button asChild size="xl" >
                <Link
                  to="projects"
                  smooth={true}
                  duration={600}
                  offset ={-64}
                  className="cursor-pointer">
                    View My Projects
                </Link>
              </Button>
              <Button asChild size="xl" variant="primary">
                <a href="/Zayar_Shein_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <HiDownload className="size-6"/>Download CV
                </a>
              </Button>
            </div>
            <div className="flex space-x-5 justify-center mt-10 text-muted-foreground">
              <a href="https://github.com/Sxein" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                <AiFillGithub className="size-10"/>
              </a>
              <a href="https://www.linkedin.com/in/zayar-shein-980bb6286/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700">
                <FaLinkedin className="size-10"/>
              </a>
              <a href="mailto:zayarshein.mmdev@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                <MdEmail className="size-10"/>
              </a>
            </div>
          </div>
        </section>
    )
}