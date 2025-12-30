import NavButton from "./NavButton"
export default function NavigationBar() {
    const navItems = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];
  return (
    <>
    <nav className="fixed w-full top-0 flex px-20 py-4 bg-transparent text-black justify-between items-center border-b border-gray-300">
        <div>
            <h1 className="text-3xl font-bold">Z_</h1>
        </div>
        <div>
            <ul className="flex space-x-10">
                {navItems.map((item) => (
                    <li key={item}>
                        <NavButton>{item}</NavButton>
                    </li>
                ))}
            </ul>
        </div>
        
    </nav>
    </>
    
  )
}