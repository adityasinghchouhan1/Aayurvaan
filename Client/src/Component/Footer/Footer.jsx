import React from 'react'
import logo from '../../../public/logo-img.png'
import { Link } from 'react-router-dom'
import SideL from '../../../public/Side1-removebg-preview.png'
import SideR from '../../../public/Leaf-PNG-HD-Quality.png'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <div className="bg-[#0b223d] px-6 pt-8 w-full flex flex-col justify-center items-center text-white font-Roboto overflow-hidden relative">
        <img
          src={SideL}
          className=" absolute z-0 left-0 sm:w-[300px] w-[150px] top-0"
        />
        <img
          src={SideR}
          className=" absolute z-0 right-0 sm:w-[500px] w-[370px] top-0"
        />
        <div className="flex flex-col sm:flex-row justify-around items-center w-full gap-7 sm:gap-0">
          {/* Address */}
          <div className="flex flex-col justify-start text-start items-center sm:items-start text-lg font-bold z-10">
            <p> Address :-123 dfg ghjhij hgftykjendjnewcfij</p>
            <p>State :- mp hhjiu</p>
            <p>2345678</p>
          </div>

          {/* Navigation Links with Green Underline Hover */}
          <div className="flex flex-col justify-start text-start items-start text-lg font-bold space-y-1">
            {[
              { name: 'About', path: '/About' },
              { name: 'Services', path: '/Services' },
              { name: 'Treatment', path: '/Treatment' },
              { name: 'Fasting Therapy', path: '/FastingTherapy' },
              { name: 'Therapy', path: '/Therapy' },
              { name: 'Vision & Mission', path: '/Vision' },
              { name: 'Contact', path: '/Contect' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="
                  relative w-fit 
                  after:content-[''] after:absolute after:left-0 after:bottom-0 
                  after:h-[2px] after:w-0 after:bg-green-500 
                  after:transition-all after:duration-300 
                  hover:after:w-full
                "
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social Media */}
          <div className="flex flex-col justify-center items-center gap-4 z-10">
            <img
              src={logo}
              className="object-fit-cover bg-center bg-no-repeat w-36"
            />
            <div className="text-sm font-serif font-bold mb-2">
              Our Social Media Handle
            </div>

            <div className="flex gap-5 text-xl">
              <a href="#" className="hover:text-[#3b5998] transition-all">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-[#1DA1F2] transition-all">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-[#E1306C] transition-all">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-[#0077B5] transition-all">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full m-5 flex justify-center items-center bg-white text-gray-500 py-2 rounded-sm border-x-4 border-green-600">
          All Rights @EventManagment Pvt Lmt
        </div>
      </div>
    </>
  )
}

export default Footer
