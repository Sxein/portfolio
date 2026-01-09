import type { ReactNode } from "react"
import { Link } from "react-scroll";
interface NavButtonProps {
    children: ReactNode
    linkTo: string
    onClick?: () => void
}

export default function NavButton({children, linkTo, onClick}: NavButtonProps) {
    return (
        <Link to={linkTo} 
        smooth={true} 
        duration={600} 
        spy={true} offset={-64} 
        className="font-medium px-4 py-2 rounded hover:cursor-pointer hover:bg-gray-100 hover:text-black" 
        activeClass="!bg-stone-800 !text-white" 
        onClick={onClick}>{children}</Link>
    )
}