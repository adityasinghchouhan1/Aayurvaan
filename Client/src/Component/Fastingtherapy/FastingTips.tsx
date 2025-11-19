import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Bg2 from '../../../public/FT1.jpg'
import Leaf from '../../../public/Ld2.png'

gsap.registerPlugin(ScrollTrigger)

const FastingTips = () => {
  const bannerRef = useRef(null)
  const overlayRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    // Zoom effect on background
    gsap.fromTo(
      bannerRef.current,
      { scale: 1 },
      {
        scale: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: bannerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    )

    // Overlay fade-in
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      {
        opacity: 0.45,
        ease: 'none',
        scrollTrigger: {
          trigger: bannerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    )

    // Heading slide + fade
    gsap.from(titleRef.current, {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: bannerRef.current,
        start: 'top 80%',
      },
    })
  }, [])

  return (
    <>
      <div className="flex flex-col px-5 justify-center items-center my-10 overflow-hidden">
        {/* ⭐ Banner Section with GSAP */}
        <div
          ref={bannerRef}
          className="relative w-full h-[50vh] sm:h-[70vh]  flex bg-cover bg-center bg-no-repeat justify-center items-center mb-10"
          style={{ backgroundImage: `url(${Bg2})` }}
        >
          {/* Dynamic Overlay */}
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-black pointer-events-none"
            style={{ opacity: 0 }}
          ></div>

          {/* Title */}
          <h3
            ref={titleRef}
            className="relative text-3xl sm:text-6xl font-bold text-center text-white"
          >
            Key Aspects of Fasting Therapy:
          </h3>
        </div>

        {/* Content Below */}
        <div className="list-disc list-inside ml-4 space-y-4 text-lg mt-8">
          <div className="flex flex-col text-gray-700 text-justify font-semibold">
            <div className="flex items-center">
              <img src={Leaf} alt="Leaf" className="w-5 h-5 mb-1 me-1" />
              <h4 className="font-bold text-xl text-[#0b223d] mb-2">
                Objective:
              </h4>
            </div>
            To rest the digestive organs, perform body cleansing
            (**detoxification**), promote cell repair (**autophagy**), and
            strengthen the body's immunity.
          </div>

          <div className="flex flex-col text-gray-700 text-justify font-semibold">
            <div className="flex items-center">
              <img src={Leaf} alt="Leaf" className="w-5 h-5 mb-1 me-1" />
              <h4 className="font-bold text-xl text-[#0b223d] mb-2">Types:</h4>
            </div>
            Various fasting types like **water fasting**, **juice fasting**, and
            **mono-diets**. Lemon-honey juice fasting is considered very
            effective.
          </div>

          <div className="flex flex-col text-gray-700 text-justify font-semibold">
            <div className="flex items-center">
              <img src={Leaf} alt="Leaf" className="w-5 h-5 mb-1 me-1" />
              <h4 className="font-bold text-xl text-[#0b223d] mb-2">
                Procedure:
              </h4>
            </div>
            Duration depends on patient’s condition. Usually begins with 2–3 day
            short fasts and gradually increases.
          </div>

          <div className="flex flex-col text-gray-700 text-justify font-semibold">
            <div className="flex items-center">
              <img src={Leaf} alt="Leaf" className="w-5 h-5 mb-1 me-1" />
              <h4 className="font-bold text-xl text-[#0b223d] mb-2">
                Supportive Treatments:
              </h4>
            </div>
            Enhances results when combined with **enema**, **hydrotherapy**,
            **mud therapy**, and **yoga**.
          </div>

          <div className="flex flex-col text-gray-700 text-justify font-semibold">
            <div className="flex items-center">
              <img src={Leaf} alt="Leaf" className="w-5 h-5 mb-1 me-1" />
              <h4 className="font-bold text-xl text-[#0b223d] mb-2">
                Benefits:
              </h4>
            </div>
            Helps in weight loss, reducing inflammation, controlling blood
            sugar, improving heart health, and enhancing mental clarity.
          </div>
        </div>
      </div>
    </>
  )
}

export default FastingTips
