import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Heading from '../../Reuse/Heading'
import ld from '../../../public/Ld2.png'

import Img from '../../../public/GG3.jpg'

gsap.registerPlugin(ScrollTrigger)

const Welcome = () => {
  const textRefs = useRef([])

  useEffect(() => {
    textRefs.current.forEach((el) => {
      if (!el) return

      // Scroll Text Fill Animation
      gsap.fromTo(
        el,
        {
          opacity: 0,
          clipPath: 'inset(0 100% 0 0)',
        },
        {
          opacity: 1,
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, [])

  const paragraphs = [
    'Life feels easy when we have all the facilities we need, but none of them matter if our body is sick.',
    'AAYURVAAN’s main purpose is to help us create healthy families and a healthy society by living closer to nature.',
    'This is possible only when we eat and live in a natural way, in harmony with nature.',
    'Health is wealth is not just a saying—it is true in real life. We understand its meaning when we enjoy good health, stay fit, and live a balanced life.',
  ]

  return (
    <div className="px-4 md:px-10 lg:px-20">
      <Heading
        title={'WELCOME TO AAYURVAAN'}
        discrption={
          'A change in your life from Ayurvan, where you get a healthy body, happy life, good thoughts and a chance to know nature closely.'
        }
      />

      {/* Responsive Layout */}
      <div
        className="
        flex flex-col 
        md:flex-row 
        justify-center 
        items-center 
        md:space-x-6 
        mt-10
        space-y-6 md:space-y-0
      "
      >
        {/* Image Section */}
        <div className="w-full md:w-[350px] lg:w-[500px]">
          <img
            src={Img}
            className="w-full rounded-xl shadow-md object-cover"
            alt="image"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-xl text-gray-700 font-serif leading-7">
          {paragraphs.map((text, i) => (
            <div key={i} className="flex items-center justify-center gap-2">
              <img src={ld} className="h-4 w-4 mb-11" alt="image" />
              <p
                ref={(el) => (textRefs.current[i] = el)}
                className="mb-4 text-base md:text-lg"
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Welcome
