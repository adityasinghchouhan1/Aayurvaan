// import React from 'react'
// import c from '../../../public/pngwing.com.png'
// import S1 from '../../../public/tre.jpg'
// import S2 from '../../../public/Tre.png'
// import S3 from '../../../public/S.jpeg'
// import S4 from '../../../public/S.webp'
// import Heading from '../../Reuse/Heading'

// const ServicesHome = () => {
//   const services = [
//     {
//       img: S1,
//       title: 'Naturopathy Treatment',
//       description:
//         'Naturopathy teaches that the cure for every disease lies hidden in the earth, water, air, sun, and food around us. From mud packs to sunlight, everything is a remedy. When the body obeys the laws of nature, illness goes away on its own.',
//       listTitle: 'Naturopathy Techniques',
//       list: [
//         'Steam Bath',
//         'Massages',
//         'Mud Therapy',
//         'Face Pack',
//         'Hip Bath',
//         'Hot Foot-Arm Bath',
//         'Spinal Bath',
//         'Hot & Cold Compress',
//         'Wet–Sheet Lapait',
//         'Sun Bath',
//         'Local Steam',
//         'Shatkarma',
//         'Physiotherapy',
//         'Upvas Therapy',
//         'Diet Therapy',
//         'Raga Therapy',
//       ],
//     },
//     {
//       img: S2,
//       title: 'Ayurveda Treatment',
//       description:
//         'Ayurveda focuses on balancing the body through therapies, oils, massages, and traditional medical systems that restore harmony and promote natural healing.',
//       listTitle: 'Ayurvedic Therapies',
//       list: [
//         'Abhyangam',
//         'Udvartnam',
//         'Leech Therapy',
//         'Potli Massage',
//         'Kativasti',
//         'Nasyam',
//         'Shirodhara',
//         'Grivavasti',
//         'Januvasti',
//         'Spinal Vasti',
//         'Nabhi Vasti',
//         'Netra Tarpan',
//         'Pizhichil',
//         'Pichu-Karm',
//         'Karn Puran',
//         'Dry Massage',
//         'Patr Potli',
//         'Upnaha Swedan',
//         'Rakt Mokshan',
//       ],
//     },
//     {
//       img: S3,
//       title: 'Yoga & Meditation',
//       description:
//         'Yoga therapy and meditation strengthen the mind-body connection, improve flexibility, reduce stress, and support holistic well-being.',
//       listTitle: 'Yoga & Wellness',
//       list: [
//         'Yoga Therapy',
//         'Meditation',
//         'Breathing Practices',
//         'Relaxation Techniques',
//       ],
//     },
//     {
//       img: S4,
//       title: 'Wellness Activities',
//       description:
//         'Additional rejuvenating activities that support complete health and happiness for mind, body, and soul.',
//       listTitle: 'Activities',
//       list: [
//         'Health Counseling',
//         'Lifestyle Correction',
//         'Natural Diet Plans',
//         'Healing Rituals',
//       ],
//     },
//   ]

//   return (
//     <div className="w-full flex flex-col justify-center items-center my-14">
//       <Heading
//         title={'Services that You Want'}
//         discrption={
//           'Servises Lorem ipsum dolor sit amet consectetur adipisicing elit.Aperiam repellendus sequi maiores odio dicta voluptatum atque'
//         }
//       />
//       <div className="flex flex-col gap-20 max-w-7xl">
//         {services.map((srv, i) => (
//           <div
//             key={i}
//             className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center"
//           >
//             {/* LEFT SIDE — LIST TITLE + PARAGRAPH */}
//             <div className="text-left px-3">
//               <h3 className="font-semibold text-lg mb-2">{srv.listTitle}</h3>
//               <p className="text-gray-700">{srv.list.join(', ')}</p>
//             </div>

//             {/* CENTER — IMAGE WITH GREEN RING */}
//             <div className="flex justify-center items-center">
//               <div className="relative w-64 h-64 flex justify-center items-center">
//                 <img src={c} className="w-full h-full object-contain z-10" />
//                 <img
//                   src={srv.img}
//                   className="w-36 h-36 rounded-full absolute
//                              top-1/2 left-1/2
//                              -translate-x-[52%] -translate-y-[45%]"
//                 />
//               </div>
//             </div>

//             {/* RIGHT SIDE — TITLE + DESCRIPTION */}
//             <div className="text-left px-3">
//               <h2 className="text-2xl font-bold mb-2">{srv.title}</h2>
//               <p className="text-gray-700">{srv.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ServicesHome

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Heading from '../../Reuse/Heading'

import c from '../../../public/pngwing.com.png'
import S1 from '../../../public/tre.jpg'
import S2 from '../../../public/Tre.png'
import S3 from '../../../public/S.jpeg'
import S4 from '../../../public/S.webp'

gsap.registerPlugin(ScrollTrigger)

const ServicesHome = () => {
  const sectionsRef = useRef([])

  const services = [
    {
      img: S1,
      title: 'Naturopathy Treatment',
      description:
        'Naturopathy teaches that the cure for every disease lies hidden in the earth, water, air, sun, and food around us. From mud packs to sunlight, everything is a remedy. When the body obeys the laws of nature, illness goes away on its own.',
      listTitle: 'Naturopathy Techniques',
      list: [
        'Steam Bath',
        'Massages',
        'Mud Therapy',
        'Face Pack',
        'Hip Bath',
        'Hot Foot-Arm Bath',
        'Spinal Bath',
        'Hot & Cold Compress',
        'Wet–Sheet Lapait',
        'Sun Bath',
        'Local Steam',
        'Shatkarma',
        'Physiotherapy',
        'Upvas Therapy',
        'Diet Therapy',
        'Raga Therapy',
      ],
    },
    {
      img: S2,
      title: 'Ayurveda Treatment',
      description:
        'Ayurveda focuses on balancing the body through therapies, oils, massages, and traditional medical systems that restore harmony and promote natural healing.',
      listTitle: 'Ayurvedic Therapies',
      list: [
        'Abhyangam',
        'Udvartnam',
        'Leech Therapy',
        'Potli Massage',
        'Kativasti',
        'Nasyam',
        'Shirodhara',
        'Grivavasti',
        'Januvasti',
        'Spinal Vasti',
        'Nabhi Vasti',
        'Netra Tarpan',
        'Pizhichil',
        'Pichu-Karm',
        'Karn Puran',
        'Dry Massage',
        'Patr Potli',
        'Upnaha Swedan',
        'Rakt Mokshan',
      ],
    },
    {
      img: S3,
      title: 'Yoga & Meditation',
      description:
        'Yoga therapy and meditation strengthen the mind-body connection, improve flexibility, reduce stress, and support holistic well-being.',
      listTitle: 'Yoga & Wellness',
      list: [
        'Yoga Therapy',
        'Meditation',
        'Breathing Practices',
        'Relaxation Techniques',
      ],
    },
    {
      img: S4,
      title: 'Wellness Activities',
      description:
        'Additional rejuvenating activities that support complete health and happiness for mind, body, and soul.',
      listTitle: 'Activities',
      list: [
        'Health Counseling',
        'Lifestyle Correction',
        'Natural Diet Plans',
        'Healing Rituals',
      ],
    },
  ]

  // ---- GSAP ANIMATION ----
  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((sec) => {
        const left = sec.querySelector('.left')
        const center = sec.querySelector('.center')
        const right = sec.querySelector('.right')

        gsap
          .timeline({
            scrollTrigger: {
              trigger: sec,
              start: 'top 85%',
              once: true,
            },
          })
          .from(left, { x: -80, opacity: 0, duration: 0.8, ease: 'power3.out' })
          .from(
            center,
            {
              scale: 0.5,
              opacity: 0,
              rotate: -15,
              duration: 0.4,
              ease: 'back.out(1.7)',
            },
            '-=0.5'
          )
          .from(
            right,
            { x: 80, opacity: 0, duration: 0.8, ease: 'power3.out' },
            '-=0.5'
          )
      })

      ScrollTrigger.refresh()
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="w-full flex flex-col justify-center items-center my-14 overflow-hidden">
      <Heading
        title={'Services that You Want'}
        discrption={
          'A service is an intangible activity or benefit provided by one party to another that does not result in the transfer of ownership'
        }
      />
      <div className="flex flex-col gap-20 max-w-7xl">
        {services.map((srv, i) => (
          <div
            key={i}
            ref={(el) => (sectionsRef.current[i] = el)}
            className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center"
          >
            {/* LEFT */}
            <div className="right sm:text-left text-center px-3">
              <h2 className="text-2xl font-bold mb-2">{srv.title}</h2>
              <p className="text-gray-700 text-justify">{srv.description}</p>
            </div>

            {/* CENTER IMAGE */}
            <div className="center flex justify-center items-center">
              <div className="relative w-64 h-64 flex justify-center items-center">
                <img src={c} className="w-full h-full object-contain z-10" />
                <img
                  src={srv.img}
                  className="w-36 h-36 rounded-full absolute
                             top-1/2 left-1/2
                             -translate-x-[52%] -translate-y-[45%]"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="left sm:text-left text-center px-3">
              <h3 className="font-semibold text-lg mb-2">{srv.listTitle}</h3>
              <p className="text-gray-700">{srv.list.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesHome
