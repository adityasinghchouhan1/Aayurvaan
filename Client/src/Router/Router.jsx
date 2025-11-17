import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Component/Home'
import ContectUs from '../Component/ContectUs'
import About from '../Component/About'
import Therapy from '../Component/Therapy/Therapy'
import Fastingtherapy from '../Component/Fastingtherapy/Fastingtherapy'

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'contect',
        element: <ContectUs />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'Therapy',
        element: <Therapy />,
      },
      {
        path: 'FastingTherapy',
        element: <Fastingtherapy />,
      },
      {
        path: 'Contact',
        element: <ContectUs />,
      },
    ],
  },
])

export default router
