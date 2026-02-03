import Slide from '../Component/Slider'
import React from 'react'

import VisionMission from './VisionMission/VisionMission'
import Welcome from './Welcome/Welcome'
import ServicesHome from './Services/ServicesHome'

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-white via-green-50 to-emerald-200">
      <Slide />
      <Welcome />
      <ServicesHome />
      <VisionMission />
    </div>
  )
}

export default Home
