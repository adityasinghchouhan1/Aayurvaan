import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logo from '../../public/wleaf.png'
gsap.registerPlugin(ScrollTrigger)

const Heading = ({ title, discrption }) => {
  const headingRef = useRef(null)

  useEffect(() => {
    const element = headingRef.current
    if (!element) return

    const ctx = gsap.context(() => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 70%',
          toggleActions: 'play reverse play reverse',
          markers: false, // set to true if you want to debug
        },
        x: -100, // animate from left to right
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
    }, headingRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={headingRef}
      className="flex items-center justify-center flex-col mt-5 mb-10"
    >
      <h1 className=" text-4xl sm:text-6xl font-bold text-center text-[#0b223d]">
        {title}
      </h1>
      <img src={logo} alt="leaf" className="w-12 h-12 mt-2" />
      <p className="text-gray-500 font-Yellowtail2 text-center sm:w-[50%] w-[80%] mt-3">
        {discrption}
      </p>
    </div>
  )
}

export default Heading
