import React, { lazy, Suspense } from 'react'

const Slide = lazy(() => import('../Component/Slider'))
const Welcome = lazy(() => import('./Welcome/Welcome'))
const ServicesHome = lazy(() => import('./Services/ServicesHome'))
const VisionMission = lazy(() => import('./VisionMission/VisionMission'))

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-white via-emerald-50 to-emerald-100">
      <Suspense fallback={<div className="p-10">Loading...</div>}>
        <Slide />
        <Welcome />
        <ServicesHome />
        <VisionMission />
      </Suspense>
    </div>
  )
}

export default Home
