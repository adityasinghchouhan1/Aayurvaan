import Slide from '../Component/Slider'
import React from 'react'
import HomeAbout from './HomeAbout'
import Servises from './Servises'
import WorkImg from './WorkImg'
import VisionMission from './VisionMission/VisionMission'
import Welcome from './Welcome/Welcome'

const Home = () => {
  return (
    <>
      <Slide />
      <Welcome />
      <VisionMission />
      <Servises />
      <WorkImg />
    </>
  )
}

export default Home
