import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Navbar from '../src/Component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer/Footer'
import ScrollToTop from './Component/ScrollToTop' // 👈 import it
import axiosInstance from './common/axiosInstance'
import { loginSuccess, logout } from './redux/authSlice'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('access')

    if (token) {
      axiosInstance
        .get('me/')
        .then((res) => {
          dispatch(
            loginSuccess({
              user: res.data,
              token: token,
            }),
          )
        })
        .catch(() => {
          dispatch(logout())
        })
    }
  })
  return (
    <div className="relative min-h-screen">
      <ScrollToTop /> {/* 👈 add this before rendering routes */}
      <Navbar />
      <div className="mt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
