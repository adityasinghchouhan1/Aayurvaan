import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import axiosInstance from '../../common/axiosInstance'
import { useNavigate } from 'react-router-dom'
import Heading from '../../Reuse/Heading'
import { loginSuccess } from '../../redux/authSlice'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    username: '',
    password: '',
  })

  // const handleSubmit = async () => {
  //   try {
  //     const res = await axiosInstance.post('login/', form)

  //     localStorage.setItem('access', res.data.access)

  //     dispatch(
  //       loginSuccess({
  //         user: { username: form.username }, // temporary user info
  //         token: res.data.access, // FIXED
  //       }),
  //     )

  //     alert('Login Successful 🎉')
  //     navigate('/')
  //   } catch (err) {
  //     alert(err.response?.data?.error || 'Invalid credentials')
  //   }
  // }

  const handleSubmit = async () => {
    try {
      const res = await axiosInstance.post('login/', form)

      localStorage.setItem('access', res.data.access)

      const userRes = await axiosInstance.get('me/')

      dispatch(
        loginSuccess({
          user: userRes.data,
          token: res.data.access,
        }),
      )
      alert('Login Successful 🎉')

      navigate('/')
    } catch (err) {
      alert(err.response?.data?.error || 'Invalid credentials')
    }
  }

  return (
    <div className="min-h-screen flex-col flex items-center justify-center bg-emerald-50">
      <Heading title={'Welcome'} title_l={' Back'} discrption={''} />
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <input
          type="text"
          placeholder="Username"
          className="w-full border rounded-lg p-3 mb-4"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3 mb-6"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-emerald-600 text-white py-3 rounded-full hover:bg-emerald-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
