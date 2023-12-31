import { useState } from "react"

const LINKS = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '#about',
  },
  {
    name: 'Skillset',
    link: '#skillset',
  },
  {
    name: 'Works',
    link: '#works',
  },
  {
    name: 'Contact',
    link: '#contact',
  },
]
const Nav = () => {
  const [menu, setMenu] = useState(false)

  const handleClickMenu = () => {
    setMenu(!menu)
  }

  return (
    <nav className="shadow-md w-full fixed top-0 left-0 z-20">
      <div className="md:flex items-center justify-between bg-black md:py-6 py-4 px-6">
        <div className="font-extrabold text-2xl cursor-pointer flex items-center">
          <h2 className="lg:hover:translate-x-2 ease-in-out transition-transform">Kevin Cifuentes</h2>
        </div>
        <div onClick={handleClickMenu} className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden">
          <ion-icon name={menu ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-[-1] left-0 bg-black/90 w-full md:w-auto transition-all duration-[350ms] ease-in pl-6 md:pl-0 ${menu ? 'top-16 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
          {LINKS.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a onClick={handleClickMenu} href={link.link} className="text-gray-400 duration-500 md:text-gray-300 lg:hover:bg-[#7510f7] lg:duration-200 ease-in-out lg:rounded-md md:p-1 lg:p-4">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
export default Nav
