import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Leaf, HeartPulse, UserCheck, Sparkles } from 'lucide-react'
import Heading from '../../Reuse/Heading'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Leaf,
    title: '100% Natural Healing',
    desc: 'We focus on natural therapies that activate your body’s own healing power without side effects.',
  },
  {
    icon: HeartPulse,
    title: 'Mind–Body Balance',
    desc: 'Our therapies align mental peace and physical wellness for complete inner harmony.',
  },
  {
    icon: UserCheck,
    title: 'Personalized Care',
    desc: 'Every treatment plan is customized based on your body type, lifestyle, and health goals.',
  },
  {
    icon: Sparkles,
    title: 'Experienced Experts',
    desc: 'Our certified therapists and doctors guide you with years of experience and compassion.',
  },
]

const AboutInfo = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      },
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-emerald-50 to-green-100 py-24 h-screen"
    >
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Heading */}
        <Heading
          title={' Why Choose'}
          title_l={'AAyurvaan'}
          discrption={
            'A wellness destination where ancient wisdom meets modern healing for complete transformation.'
          }
        />

        {/* Feature Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group rounded-3xl bg-white p-8 shadow-lg transition-all hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition group-hover:scale-110">
                  <Icon size={28} />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-emerald-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AboutInfo
