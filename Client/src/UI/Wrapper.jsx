// import React, { useRef, useEffect, useState } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import DecoImg from '../../public/wleaf.png'
// import Star from '../../public/wleaf.png'

// gsap.registerPlugin(ScrollTrigger)
// const Wrapper = ({ title, description, image }) => {
//   const titleRef = useRef(null)
//   const descRef = useRef(null)
//   const imageRef = useRef(null)
//   const wrapperRef = useRef(null)
//   const starContainer = useRef(null)
//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 640) // Tailwind sm breakpoint
//     checkMobile()
//     window.addEventListener('resize', checkMobile)
//     return () => window.removeEventListener('resize', checkMobile)
//   }, [])

//   useEffect(() => {
//     // Heading + description animation
//     gsap.fromTo(
//       [titleRef.current, descRef.current],
//       { opacity: 0, y: 40 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.2,
//         ease: 'power3.out',
//         stagger: 0.2,
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: 'top 85%',
//           toggleActions: 'play none none reverse',
//         },
//       }
//     )

//     // Image scroll animation
//     gsap.to(imageRef.current, {
//       y: 150,
//       ease: 'power1.out',
//       scrollTrigger: {
//         trigger: wrapperRef.current,
//         start: 'top top',
//         end: 'bottom top',
//         scrub: true,
//       },
//     })

//     // GSAP stars
//     const stars = starContainer.current.querySelectorAll('.star')
//     stars.forEach((star) => {
//       const duration = gsap.utils.random(2, 4)
//       const delay = gsap.utils.random(0, 3)

//       // spin
//       gsap.to(star, {
//         rotate: 360,
//         duration: gsap.utils.random(1, 2), // fast spin
//         repeat: -1,
//         ease: 'linear',
//       })

//       // twinkle
//       gsap
//         .timeline({ repeat: -1, delay })
//         .to(star, {
//           opacity: 1,
//           scale: 1.5,
//           duration: duration / 2,
//           ease: 'sine.inOut',
//         })
//         .to(star, {
//           opacity: 0,
//           scale: 0,
//           duration: duration / 2,
//           ease: 'sine.inOut',
//         })
//     })
//   }, [])

//   // Generate stars (responsive)
//   const renderStars = () => {
//     const starCount = isMobile ? 10 : 20 // fewer on mobile
//     const stars = []
//     for (let i = 0; i < starCount; i++) {
//       const size = isMobile
//         ? Math.random() * 20 + 16 // 8–18px small
//         : Math.random() * 30 + 30 // 20–40px big
//       const top = Math.random() * 100
//       const left = Math.random() * 100

//       stars.push(
//         <img
//           key={i}
//           src={Star}
//           alt="star"
//           className="star absolute opacity-0 pointer-events-none"
//           style={{
//             top: `${top}%`,
//             left: `${left}%`,
//             width: `${size}px`,
//             height: `${size * 0.75}px`,
//             transform: 'translate(-50%, -50%)',
//             zIndex: 0,
//           }}
//         />
//       )
//     }
//     return stars
//   }

//   return (
//     <section
//       ref={wrapperRef}
//       className="bg-[#0c3f86] text-white overflow-hidden relative pt-14"
//       data-theme="dark"
//     >
//       {/* Content */}
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 relative z-10">
//         <div className="w-full lg:w-1/2 text-left">
//           <h1
//             ref={titleRef}
//             className="text-6xl font-semibold mb-4 leading-snug"
//           >
//             {title}
//           </h1>
//           <p
//             ref={descRef}
//             className="text-gray-400 text-lg font-semibold leading-relaxed mb-6"
//           >
//             {description}
//           </p>
//           <img
//             src={DecoImg}
//             alt="Decorative Icon"
//             className="sm:w-16 w-8 inline-block relative bottom-5 left-7"
//           />
//         </div>

//         <div className="w-full lg:w-1/2 flex justify-center">
//           {image && (
//             <img
//               ref={imageRef}
//               src={image}
//               alt="Hero"
//               className="max-w-[500px] w-full object-contain"
//             />
//           )}
//         </div>
//       </div>

//       {/* ⭐ GSAP Stars */}
//       <div ref={starContainer} className="absolute inset-0">
//         {renderStars()}
//       </div>
//     </section>
//   )
// }

// export default Wrapper

import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DecoImg from '../../public/wleaf.png'
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

    const leaves = starContainer.current.querySelectorAll('.leaf')

    leaves.forEach((leaf) => {
      const duration = gsap.utils.random(8, 14)
      const delay = gsap.utils.random(0, 4)
      const verticalSway = gsap.utils.random(15, 35)

      // Start leaves slightly off screen (left-bottom)
      gsap.set(leaf, {
        x: -150,
        y: gsap.utils.random(50, 200), // lower area
      })

      // Main diagonal wind movement
      gsap.to(leaf, {
        x: '120vw', // go far right
        y: '-40vh', // go up
        duration,
        delay,
        repeat: -1,
        ease: 'none',
      })

      // Floating sway effect (up/down)
      gsap.to(leaf, {
        y: `+=${verticalSway}`,
        yoyo: true,
        repeat: -1,
        duration: duration / 2,
        ease: 'sine.inOut',
      })

      // Light rotation
      gsap.to(leaf, {
        rotate: gsap.utils.random(-25, 25),
        yoyo: true,
        repeat: -1,
        duration: gsap.utils.random(2, 5),
        ease: 'sine.inOut',
      })
    })
  }, [])
  const renderLeaves = () => {
    const leafCount = isMobile ? 6 : 15
    const leaves = []

    for (let i = 0; i < leafCount; i++) {
      const size = isMobile ? Math.random() * 25 + 20 : Math.random() * 40 + 35

      // Leaves spawn randomly in bottom-left zone
      const initialTop = Math.random() * 20 + 40 // 60–90% from top
      const initialLeft = Math.random() * 15 - 15 // -15% to 0%

      leaves.push(
        <img
          key={i}
          src={Star}
          alt="leaf"
          className="leaf absolute opacity-90 pointer-events-none"
          style={{
            top: `${initialTop}%`,
            left: `${initialLeft}%`,
            width: `${size}px`,
          }}
        />
      )
    }
    return leaves
  }

  return (
    <section
      ref={wrapperRef}
      className="bg-[#0c3f86] text-white overflow-hidden relative pt-14"
      data-theme="dark"
    >
      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 relative z-10">
        <div className="w-full lg:w-1/2 text-left">
          <h1
            ref={titleRef}
            className="text-6xl font-semibold mb-4 leading-snug"
          >
            {title}
          </h1>
          <p
            ref={descRef}
            className="text-gray-400 text-lg font-semibold leading-relaxed mb-6"
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

      {/* ⭐ GSAP Stars */}
      <div ref={starContainer} className="absolute inset-0 overflow-hidden">
        {renderLeaves()}
      </div>
    </section>
  )
}

export default Wrapper
