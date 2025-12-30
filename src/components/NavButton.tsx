import type { ReactNode } from "react"
import { Link } from "react-scroll";
interface NavButtonProps {
    children: ReactNode
}
// use Link instead of a tag for client side routing
export default function NavButton({children}: NavButtonProps) {
    return (
        <Link to={children!.toString().toLowerCase()} smooth={true} duration={600} spy={true} offset={-30} className="font-medium px-4 py-2 rounded hover:cursor-pointer hover:bg-gray-200 hover:text-black" activeClass="!bg-amber-300">{children}</Link>
    )
}