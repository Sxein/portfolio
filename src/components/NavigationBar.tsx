import {useState} from "react";
import { CgMenu } from "react-icons/cg";
import NavButton from "./NavButton"

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
        const navItems = [
            {name: "Home", linkTo: "home"},
            {name: "About", linkTo: "about"},
            {name: "Skills", linkTo: "skills"},
            {name: "Projects", linkTo: "projects"},
            {name: "Contact", linkTo: "contact"},
        ]
  return (
    <>
    <nav className="fixed w-full top-0 flex px-8 md:px-20 h-16 bg-white text-black justify-between items-center border-b border-gray-300">
        <div>
            <h1 className="text-3xl font-bold">Z_</h1>
        </div>
        <div>
            <ul className="hidden md:flex space-x-10">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <NavButton linkTo={item.linkTo}>{item.name}</NavButton>
                    </li>
                ))}
            </ul>
        </div>
        <button onClick={toggleMenu}className="md:hidden hover:cursor-pointer hover:bg-gray-700 rounded px-3 py-2 hover:text-white">
            <CgMenu size={30}/>
        </button>

        {isOpen && (
            <div className="absolute top-18 left-0 w-full bg-white md:hidden flex flex-col items-center py-4 space-y-4 z-10">
                {navItems.map((item) => (
                    <NavButton onClick={toggleMenu} key={item.name} linkTo={item.linkTo}>{item.name}</NavButton>
                ))}
            </div>
        )}
    </nav>
    </>
    
  )
}