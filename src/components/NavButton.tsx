import type { ReactNode } from "react"
import { Link } from "react-scroll";
interface NavButtonProps {
    children: ReactNode
    onClick?: () => void
}

export default function NavButton({children, onClick}: NavButtonProps) {
    return (
        <Link to={children!.toString().toLowerCase()} smooth={true} duration={600} spy={true} offset={-64} className="font-medium px-4 py-2 rounded hover:cursor-pointer hover:bg-gray-200 hover:text-black" activeClass="!bg-gray-700 !text-white" onClick={onClick}>{children}</Link>
    )
}