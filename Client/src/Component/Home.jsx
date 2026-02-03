import Slide from '../Component/Slider'
import React from 'react'
import HomeAbout from './HomeAbout'
import Servises from './Servises'
import WorkImg from './WorkImg'
import VisionMission from './VisionMission/VisionMission'
import Welcome from './Welcome/Welcome'
import ServicesHome from './Services/ServicesHome'

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-50 via-green-100 to-emerald-200">
      <Slide />
      <Welcome />
      <ServicesHome />
      <VisionMission />
    </div>
  )
}

export default Home
