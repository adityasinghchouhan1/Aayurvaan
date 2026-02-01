// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Pagination, Autoplay } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import gokuimg from '../../public/S0.webp'
// import gokuimg2 from '../../public/S00.jpeg'
// import gokuimg3 from '../../public/S.jpeg'

// import gokuimg4 from '../../public/S000.jpg'

// // Slides with image, main text, and two lines of description
// const slides = [
//   {
//     img: gokuimg2,
//     text: 'Train Beyond Limits',
//     line1:
//       'Embrace the grind and level up your skills Every drop of sweat builds greatness.',
//   },
//   {
//     img: gokuimg,
//     text: 'Unleash Your Inner Power',
//     line1:
//       'Discover the strength that lies within Push past your limits every single day.',
//   },

//   {
//     img: gokuimg4,
//     text: 'Never Give Up, Never Surrender',
//     line1:
//       'Even in darkness, a true warrior shines. Stay focused. Stay powerful',
//   },
//   {
//     img: gokuimg3,
//     text: 'The Saiyan Spirit Lives On',
//     line1:
//       'Stand tall, fight hard, and never surrender.Victory favors the fearless.',
//   },
// ]

// export default function ImageSlider() {
//   return (
//     <div className="w-full overflow-hidden h-[50vh] sm:h-[100vh] mt-10">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         slidesPerView={1}
//         spaceBetween={0}
//         autoplay={{ delay: 3000 }}
//         loop={true}
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="w-full h-[50vh] sm:h-[90vh] bg-center bg-cover flex flex-col items-center justify-center text-white text-center px-4"
//               style={{ backgroundImage: `url(${slide.img})` }}
//             >
//               <div className=" absolute bottom-32 sm:left-8 left-0  flex flex-col justify-start items-start p-5">
//                 <h1 className="text-4xl sm:text-6xl font-bold bg-transparent text-white uppercase">
//                   {slide.text}
//                 </h1>
//                 <p className="mt-4 text-sm  font-medium bg-transparent text-gray-100">
//                   {slide.line1}
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import axios from 'axios'
import SummaryApi from '../common/SummaryApi'
import Img from '../../public/MMM.avif'
// const BASE_URL = import.meta.env.VITE_SERVER_URL
export default function ImageSlider() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(SummaryApi.Sliderdataget.url)
        setData(res.data)
        console.log(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchdata()
  }, [])

  return (
    <div className="w-full overflow-hidden h-[100vh] mt-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {data?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[90vh]  bg-center bg-cover flex flex-col items-center justify-center text-white text-center px-4"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className=" absolute bottom-10 sm:left-8 left-0  flex flex-col justify-start items-start p-5">
                <h1 className="text-4xl sm:text-6xl font-bold bg-transparent text-[#0b223d]">
                  {slide.Title}
                </h1>
                <p className="mt-4 text-sm  font-medium bg-transparent text-gray-700">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
