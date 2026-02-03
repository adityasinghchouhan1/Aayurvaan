// import React, { useEffect, useRef, useState } from 'react'
// import axios from 'axios'
// import SummaryApi from '../../common/SummaryApi'
// import { gsap } from 'gsap'

// const TherapyCards = () => {
//   const [data, setData] = useState([])
//   const cardsRef = useRef([])

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get(SummaryApi.Therapydataget.url)
//       setData(res.data)
//     }
//     fetchData()
//   }, [])

//   // GSAP entrance animation
//   useEffect(() => {
//     if (data.length > 0) {
//       gsap.fromTo(
//         cardsRef.current,
//         { opacity: 0, y: 50, scale: 0.95 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 0.9,
//           stagger: 0.2,
//           ease: 'power3.out',
//         },
//       )
//     }
//   }, [data])

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-100 to-emerald-200 px-6 py-20">
//       {/* Heading */}
//       <h2 className="mb-14 text-center text-5xl font-bold text-emerald-900">
//         Healing <span className="text-emerald-600">Therapies</span>
//       </h2>

//       {/* Cards */}
//       <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
//         {data.map((item, index) => (
//           <div
//             key={item.id}
//             ref={(el) => (cardsRef.current[index] = el)}
//             className="group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
//           >
//             {/* Image */}
//             <div className="relative h-60 overflow-hidden">
//               <img
//                 src={item.file}
//                 alt={item.Title}
//                 className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
//             </div>

//             {/* Content */}
//             <div className="p-6">
//               <h3 className="mb-3 text-2xl font-semibold text-emerald-900">
//                 {item.Title}
//               </h3>

//               <p className="mb-5 line-clamp-3 text-sm text-emerald-800/80">
//                 {item.description}
//               </p>

//               <button className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-emerald-700 hover:shadow-lg">
//                 View Therapy
//                 <span className="transition-transform group-hover:translate-x-1">
//                   →
//                 </span>
//               </button>
//             </div>

//             {/* Soft green glow */}
//             <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
//               <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-400/30 via-green-300/30 to-emerald-400/30 blur-xl" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default TherapyCards

// ==============================stactic page

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Heading from '../../Reuse/Heading'

const therapyData = [
  {
    id: 1,
    Title: 'Mindfulness Therapy',
    file: 'http://127.0.0.1:8000/media/therapy/mindfulness.avif',
    description:
      'Mindfulness Therapy helps you stay present and aware of your thoughts without judgment. It reduces stress, anxiety, and improves emotional balance.',
  },
  {
    id: 2,
    Title: 'Cognitive Behavioral Therapy',
    file: 'http://127.0.0.1:8000/media/therapy/cbt.avif',
    description:
      'CBT focuses on identifying negative thought patterns and replacing them with healthier thinking to improve mood and behavior.',
  },
  {
    id: 3,
    Title: 'Stress Management Therapy',
    file: 'http://127.0.0.1:8000/media/therapy/stress.avif',
    description:
      'This therapy teaches relaxation techniques, breathing exercises, and lifestyle strategies to manage daily stress effectively.',
  },
  {
    id: 4,
    Title: 'Emotional Healing Therapy',
    file: 'http://127.0.0.1:8000/media/therapy/emotional.avif',
    description:
      'Emotional Healing Therapy helps release emotional pain, heal past trauma, and restore inner peace through guided support.',
  },
  {
    id: 5,
    Title: 'Yoga & Relaxation Therapy',
    file: 'http://127.0.0.1:8000/media/therapy/yoga.avif',
    description:
      'Yoga & Relaxation Therapy combines gentle yoga, breathing, and meditation techniques to calm the mind and body.',
  },
  {
    id: 6,
    Title: 'Sleep Improvement Therapy',
    file: 'http://127.0.0.1:8000/media/therapy/sleep.avif',
    description:
      'Sleep Improvement Therapy focuses on better sleep routines and relaxation methods for deep, restful sleep.',
  },
]

const TherapyCards = () => {
  const cardsRef = useRef([])

  // GSAP animation
  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power3.out',
      },
    )
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-200 px-6 py-20">
      {/* Heading */}
      <Heading
        title={'Healing '}
        title_l={'Therapies'}
        discrption={
          'Therapies that make life easy to live or treat client carefully'
        }
      />

      {/* Cards Grid */}
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {therapyData.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative h-60 overflow-hidden">
              <img
                src={item.file}
                alt={item.Title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-semibold text-emerald-900">
                {item.Title}
              </h3>

              <p className="mb-5 line-clamp-3 text-sm text-emerald-800/80">
                {item.description}
              </p>

              <button className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-emerald-700 hover:shadow-lg">
                View Therapy →
              </button>
            </div>

            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-400/30 via-green-300/30 to-emerald-400/30 blur-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TherapyCards
