import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa'
import logo from '../../public/logo-img.png'
import { useSelector } from 'react-redux'
import { FaUser, FaSignInAlt, FaUserPlus } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const cartItems = useSelector((state) => state.cart.items)

  const ToggleButton = () => setIsOpen(!isOpen)
  const CloseButton = () => setIsOpen(false)
  const cartCount = cartItems.reduce((total, item) => total + item.qty, 0)
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Therapy', path: '/Therapy' },
    { name: 'Fasting Therapy', path: '/FastingTherapy' },
    { name: 'Products', path: '/Products' },
    { name: 'Contact', path: '/Contact' },
  ]

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} className="w-14" />
            <h1 className="font-Yellowtail text-3xl text-[#0b223d]">
              Aayurvaan
            </h1>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-12 font-bold text-[#0b223d]">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            {/* AUTH LINKS */}
            <div className="flex items-center gap-6">
              <NavLink
                to="/login"
                className="flex items-center gap-2 hover:text-green-600"
              >
                <FaSignInAlt />
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="flex items-center gap-2 hover:text-green-600"
              >
                <FaUserPlus />
                Register
              </NavLink>
            </div>

            {/* CART ICON */}
            <NavLink
              to="/Cart"
              className="relative text-xl hover:text-green-600"
            >
              <FaShoppingCart />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-xs text-white">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </ul>

          {/* MOBILE ICONS */}
          <div className="flex items-center gap-4 md:hidden">
            <NavLink to="/login">
              <FaSignInAlt className="text-xl text-green-800" />
            </NavLink>

            <NavLink to="/register">
              <FaUserPlus className="text-xl text-green-800" />
            </NavLink>

            <NavLink to="/cart" className="relative"></NavLink>

            <NavLink to="/cart" className="relative">
              <FaShoppingCart className="text-2xl text-green-800" />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </NavLink>

            <button onClick={ToggleButton} className="text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* MOBILE TOP DROPDOWN MENU */}
        <div
          className={`md:hidden overflow-hidden bg-white transition-all duration-300 ${
            isOpen ? 'max-h-[500px] border-t' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col items-center gap-6 py-6 font-semibold text-[#0b223d]">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={CloseButton}
                className="relative after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-1/2"
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
