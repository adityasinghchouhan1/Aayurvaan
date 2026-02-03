import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import App from '../App'

// 🔥 Lazy imports
const Home = lazy(() => import('../Component/Home'))
const ContectUs = lazy(() => import('../Component/ContectUs'))
const About = lazy(() => import('../Component/About'))
const Therapy = lazy(() => import('../Component/Therapy/Therapy'))
const Fastingtherapy = lazy(
  () => import('../Component/Fastingtherapy/Fastingtherapy'),
)

// Loader UI
const Loader = () => (
  <div className="flex justify-center items-center h-[60vh] text-green-600 text-xl">
    Loading...
  </div>
)

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<Loader />}>
            <ContectUs />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: 'therapy',
        element: (
          <Suspense fallback={<Loader />}>
            <Therapy />
          </Suspense>
        ),
      },
      {
        path: 'fasting-therapy',
        element: (
          <Suspense fallback={<Loader />}>
            <Fastingtherapy />
          </Suspense>
        ),
      },
    ],
  },
])

export default router
