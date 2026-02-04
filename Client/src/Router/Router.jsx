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
  <div className="flex flex-col justify-center items-center h-[60vh]">
    <div className="relative">
      <div className="w-16 h-16 rounded-full border-4 border-green-200"></div>
      <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-t-green-600 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
    </div>

    <p className="mt-4 text-green-700 text-sm tracking-widest uppercase">
      Please wait
    </p>
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
        path: 'FastingTherapy',
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
