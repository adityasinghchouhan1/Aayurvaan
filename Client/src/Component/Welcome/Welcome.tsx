import React from 'react'
import Heading from '../../Reuse/Heading'
import Img from '../../../public/GG3.jpg'
const Welcome = () => {
  return (
    <div>
      <Heading
        title={'WELCOME TO AAYURVAAN'}
        discrption={
          'A change in your life from Ayurvan, where you get a healthy body, happy life, good thoughts and a chance to know nature closely.'
        }
      />
      <div className="flex flex-row justify-center items-center space-x-4 mt-10">
        <div>
          <img src={Img} />
        </div>
        <div className="max-w-lg text-gray-700 font-serif  px-4">
          <p className="mb-3">
            Life feels easy when we have all the facilities we need, but none of
            them matter if our body is sick.
          </p>
          <p className="mb-3">
            AAYURVAAN’s main purpose is to help us create healthy families and a
            healthy society by living closer to nature
          </p>
          <p className="mb-3">
            This is possible only when we eat and live in a natural way, in
            harmony with nature.
          </p>
          <p>
            Health is wealth” is not just a saying—it is true in real life. We
            understand its meaning when we enjoy good health, stay fit, and live
            a balanced life. Our body is closely connected to the problems we
            face. No one can avoid sickness, stress, or headaches completely,
            but today more and more people are struggling with these health
            issues.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Welcome
