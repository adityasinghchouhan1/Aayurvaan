import React from 'react'
import Heading from '../Reuse/Heading'
import Wrapper from '../UI/Wrapper'
import Logo from '../../public/meditating.png'

import img1 from '../../public/young-beautiful-woman-practicing-yoga-outdoors-in-2025-01-08-10-18-e1759207061202.jpg'
import img2 from '../../public/young-girls-are-sitting-in-the-lotus-position-in-a-2024-09-18-17-44-09.jpg'
import img3 from '../../public/woman-practicing-yoga-outdoors-in-park-2025-03-07-14-12-57-utc.jpg'
import img4 from '../../public/vertical-shot-of-young-asian-woman-doing-yoga-pra-2025-03-08-04-27-07-utc-683x1024.jpg'
import img5 from '../../public/SS.jpg'

const About = () => {
  return (
    <div className="bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero */}
      <Wrapper
        title={'About'}
        description={
          'AAyurvaan is a premier holistic health sanctuary designed to restore the natural harmony of your mind.'
        }
        image={Logo}
      />

      {/* Content Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Heading
          title={'Know More About'}
          title_l={'AAyurvaan'}
          discrption={
            'Homeopathy, Naturopathy, Yoga and therapies to make life healthier and balanced.'
          }
          textcolor={'emerald'}
        />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={img1}
              className="rounded-2xl object-cover shadow-md transition-transform hover:scale-105"
            />
            <img
              src={img2}
              className="rounded-2xl object-cover shadow-md transition-transform hover:scale-105"
            />
            <img
              src={img3}
              className="rounded-2xl object-cover shadow-md transition-transform hover:scale-105"
            />
            <img
              src={img4}
              className="rounded-2xl object-cover shadow-md transition-transform hover:scale-105"
            />
          </div>

          {/* Text */}
          <div className="text-justify font-serif text-[20px] leading-7 text-gray-700">
            <p className="mb-4">
              <span className="font-semibold text-emerald-700">AAyurvaan</span>{' '}
              is a premier holistic health sanctuary designed to restore the
              natural harmony of your mind, body, and spirit. It offers a truly
              personalized and transformative healing experience.
            </p>

            <p className="mb-4">
              By blending the ancient wisdom of{' '}
              <span className="font-semibold">Ayurveda</span>, the precision of{' '}
              <span className="font-semibold">Homeopathy</span>, the balance of{' '}
              <span className="font-semibold">Yoga</span>, and the therapeutic
              strength of <span className="font-semibold">Naturopathy</span>,
              AAyurvaan delivers a complete pathway to wellness.
            </p>

            <p>
              Whether you seek rejuvenation, recovery, or inner balance,
              AAyurvaan nurtures every aspect of your being—helping you achieve
              sustainable health, vitality, and peace naturally.
            </p>
            <p className="mt-5">
              our expert team specializes in detoxification, pain management,
              weight loss, stress relief, and lifestyle counseling, ensuring
              comprehensive care for your body, mind, and soul.
            </p>

            <button className="mt-8 rounded-full bg-emerald-600 px-8 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 hover:shadow-lg">
              Explore Our Therapies →
            </button>
            <img
              src={img5}
              className="col-span-2 rounded-2xl object-cover shadow-lg transition-transform hover:scale-105 mt-5"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
