import React from 'react'
import YogaGirl from '../../../public/woman-practicing-yoga-outdoors-in-park-2025-03-08-04-32-56-utc-683x1024.jpg'
import Heading from '../../Reuse/Heading'
import ld from '../../../public/Ld3-removebg-preview.png'
const VisionMission = () => {
  return (
    <div className="flex flex-col md:flex-row sm:px-10  justify-center items-center pb-10 sm:pb-0">
      <div className="flex flex-col items-center justify-center my-6 sm:my-20 px-5">
        <Heading
          title={'Our Vision And '}
          title_l={'Mission'}
          textcolor={'[#0b223d]'}
          discrption={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. In dicta eos fugit vitae voluptatem quisquam asperiores tenetur ad beatae '
          }
        />
        <div className="flex gap-10 flex-col md:flex-row">
          <div className="p-4 border-b-2 border-green-500">
            <div className="flex items-center justify-center">
              <h2 className="font-bold text-2xl text-[#0b223d] mb-4">
                Our Vision
              </h2>
              <img src={ld} className="h-12 w-12 mb-5" />
            </div>
            <p className="text-gray-700 font-serif text-justify">
              To promote drug-free healing through nature cure and yoga,
              empowering individuals to embrace holistic health and well-being
              for a balanced, natural lifestyle.
            </p>
          </div>
          <div className="p-4 border-b-2 border-green-500">
            <div className="flex items-center justify-center">
              <h2 className="font-bold text-2xl text-[#0b223d] mb-4">
                Our Mission
              </h2>
              <img src={ld} className="h-12 w-12 mb-5" />
            </div>
            <p className="text-gray-700 font-serif sm:pe-10 pe-2 text-justify">
              At Aayurvaan, we strive to create a healthy, disease-free society
              by promoting drug-free therapies. Through awareness and holistic
              approaches to wellness, we empower individuals to embrace natural
              healing and preventative care for a balanced life.
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center my-0 sm:my-10 px-5">
        <img
          src={YogaGirl}
          alt="Yoga/>"
          className="w-full h-auto rounded-2xl"
        />
      </div>
    </div>
  )
}

export default VisionMission
