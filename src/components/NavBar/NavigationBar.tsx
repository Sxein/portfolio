import {useState} from "react";
import { CgMenu } from "react-icons/cg";
import NavButton from "./NavButton"
import { ModeToggle } from "@/components/mode-toggle";

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
        const navItems = [
            {name: "Home", linkTo: "home"},
            {name: "About", linkTo: "about"},
            {name: "Skills", linkTo: "skills"},
            {name: "Experience", linkTo: "experience"},
            {name: "Projects", linkTo: "projects"},
            {name: "Contact", linkTo: "contact"},
        ]
  return (
    <>
    <nav className="fixed w-full top-0 flex px-8 md:px-20 h-16 bg-background text-foreground justify-between items-center border-b border-border z-50 transition-colors duration-300">
        <div>
            <h1 className="text-3xl font-bold">Z_</h1>
        </div>
        <div className="flex items-center gap-4">
            <ul className="hidden lg:flex space-x-8 items-center">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <NavButton linkTo={item.linkTo}>{item.name}</NavButton>
                    </li>
                ))}
            </ul>
            <div className="hidden lg:block">
                <ModeToggle />
            </div>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
             <ModeToggle />
            <button onClick={toggleMenu} className="hover:cursor-pointer hover:bg-muted rounded px-3 py-2 hover:text-foreground">
                <CgMenu size={30}/>
            </button>
        </div>
        {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-background border-b border-border md:hidden flex flex-col items-center py-4 space-y-4 z-10 transition-colors duration-300">
                {navItems.map((item) => (
                    <NavButton onClick={toggleMenu} key={item.name} linkTo={item.linkTo}>{item.name}</NavButton>
                ))}
            </div>
        )}
    </nav>
    </>
    
  )
}