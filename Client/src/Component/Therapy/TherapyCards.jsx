import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import SummaryApi from '../../common/SummaryApi'
import { gsap } from 'gsap'

const TherapyCards = () => {
  const [data, setData] = useState([])
  const cardsRef = useRef([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(SummaryApi.Therapydataget.url)
      setData(res.data)
    }
    fetchData()
  }, [])

  // GSAP entrance animation
  useEffect(() => {
    if (data.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: 'power3.out',
        },
      )
    }
  }, [data])

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-100 to-emerald-200 px-6 py-20">
      {/* Heading */}
      <h2 className="mb-14 text-center text-5xl font-bold text-emerald-900">
        Healing <span className="text-emerald-600">Therapies</span>
      </h2>

      {/* Cards */}
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
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
                View Therapy
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            {/* Soft green glow */}
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
