import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DecoImg from '../../public/580b585b2edbce24c47b26d3.png'
import Star from '../../public/wleaf.png'

gsap.registerPlugin(ScrollTrigger)
const Wrapper = ({ title, description, image }) => {
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const imageRef = useRef(null)
  const wrapperRef = useRef(null)
  const starContainer = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640) // Tailwind sm breakpoint
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Heading + description animation
    gsap.fromTo(
      [titleRef.current, descRef.current],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // Image scroll animation
    gsap.to(imageRef.current, {
      y: 150,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    // const leaves = starContainer.current.querySelectorAll('.leaf')

    // leaves.forEach((leaf) => {
    //   const duration = gsap.utils.random(8, 14)
    //   const delay = gsap.utils.random(0, 4)
    //   const verticalSway = gsap.utils.random(15, 35)

    //   // Start leaves slightly off screen (left-bottom)
    //   gsap.set(leaf, {
    //     x: -150,
    //     y: gsap.utils.random(50, 200), // lower area
    //   })

    //   // Main diagonal wind movement
    //   gsap.to(leaf, {
    //     x: '120vw', // go far right
    //     y: '-40vh', // go up
    //     duration,
    //     delay,
    //     repeat: -1,
    //     ease: 'none',
    //   })

    //   // Floating sway effect (up/down)
    //   gsap.to(leaf, {
    //     y: `+=${verticalSway}`,
    //     yoyo: true,
    //     repeat: -1,
    //     duration: duration / 2,
    //     ease: 'sine.inOut',
    //   })

    //   // Light rotation
    //   gsap.to(leaf, {
    //     rotate: gsap.utils.random(-25, 25),
    //     yoyo: true,
    //     repeat: -1,
    //     duration: gsap.utils.random(2, 5),
    //     ease: 'sine.inOut',
    //   })
    // })
  }, [])
  // const renderLeaves = () => {
  //   const leafCount = isMobile ? 6 : 15
  //   const leaves = []

  //   for (let i = 0; i < leafCount; i++) {
  //     const size = isMobile ? Math.random() * 25 + 20 : Math.random() * 40 + 35

  //     // Leaves spawn randomly in bottom-left zone
  //     const initialTop = Math.random() * 20 + 25 // 60–90% from top
  //     const initialLeft = Math.random() * 15 - 15 // -15% to 0%

  //     leaves.push(
  //       <img
  //         key={i}
  //         src={Star}
  //         alt="leaf"
  //         className="leaf absolute opacity-90 pointer-events-none"
  //         style={{
  //           top: `${initialTop}%`,
  //           left: `${initialLeft}%`,
  //           width: `${size}px`,
  //         }}
  //       />
  //     )
  //   }
  //   return leaves
  // }

  return (
    <section
      ref={wrapperRef}
      className="bg-gradient-to-t from-[#008000]  text-white overflow-hidden relative pt-6"
      data-theme="dark"
    >
      <img src={DecoImg} className="absolute z-0 w-96" />
      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 relative z-10">
        <div className="w-full lg:w-1/2 text-left">
          <h1 ref={titleRef} className="text-6xl font-bold mb-4 leading-snug">
            {title}
          </h1>
          <p
            ref={descRef}
            className="text-gray-100 text-lg font-semibold leading-relaxed mb-6"
          >
            {description}
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          {image && (
            <img
              ref={imageRef}
              src={image}
              alt="Hero"
              className="max-w-[450px] w-full object-contain"
            />
          )}
        </div>
      </div>
      {/* ⭐ GSAP Stars
      <div ref={starContainer} className="absolute inset-0 overflow-hidden">
        {renderLeaves()}
      </div> */}
    </section>
  )
}

export default Wrapper
