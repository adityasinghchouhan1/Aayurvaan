import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../public/logo-img.png'

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false)

  const ToggleButton = () => {
    setIsopen(!isOpen)
  }

  const CloseButton = () => {
    setIsopen(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-20 flex justify-between items-center pr-2 py-6 bg-black/55 text-white">
        {/* Logo */}
        <div className="bg-gradient-to-r rounded-sm from-green-200 flex justify-center items-center">
          <img
            src={logo}
            className="w-16 bg-center bg-no-repeat object-fit-cover bg-cover"
          />
          <h1 className="text-black font-Yellowtail text-3xl">Aayurvaan</h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-12 font-bold text-white">
          {[
            { name: 'Home', path: '' },
            { name: 'About', path: 'About' },
            { name: 'Therapy', path: 'Services' },
            { name: 'Fasting Therapy', path: 'FastingTherapy' },
            { name: 'Treatments', path: 'Treatments' },
            { name: 'Contact', path: 'Contact' },
          ].map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={CloseButton}
                className="
                  relative w-fit 
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-green-500 
                  after:transition-all after:duration-300 
                  hover:after:w-full
                "
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* HAMBURGER ICON */}
        <div
          onClick={ToggleButton}
          className="md:hidden text-2xl cursor-pointer"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* MOBILE SLIDE MENU */}
        <div
          className={`md:hidden fixed z-[9999] top-0 left-0 text-white h-full bg-black/25 transition-all duration-300 overflow-hidden font-serif border-r-4 border-green-500 ${
            isOpen ? 'w-56 backdrop-blur-sm' : 'w-0'
          }`}
        >
          <ul className="flex flex-col justify-center items-center gap-8 text-xl pt-16 text-center">
            {[
              { name: 'Home', path: '' },
              { name: 'About', path: 'About' },
              { name: 'Therapy', path: 'Services' },
              { name: 'Treatments', path: 'Treatments' },
              { name: 'Contact', path: 'Contact' },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={CloseButton}
                className="
                  relative w-full py-2 
                  transition-all duration-200 text-white text-center
                  hover:bg-black/40
                  after:content-[''] after:absolute after:left-1/2 after:-bottom-0
                  after:h-[2px] after:w-0 after:bg-green-500 
                  after:transition-all after:duration-300 
                  hover:after:w-1/2
                "
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
