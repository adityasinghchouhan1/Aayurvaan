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
    <>
      <Slide />
      <Welcome />
      <ServicesHome />
      <VisionMission />
    </>
  )
}

export default Home
