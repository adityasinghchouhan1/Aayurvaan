import React, { useState } from 'react'
import Button from '../Reuse/Button'
import Heading from '../Reuse/Heading'
import axios from 'axios'
import SummaryApi from '../common/SummaryApi'
import Logo from '../../public/meditating.png'

import Wrapper from '../UI/Wrapper'
const ContectUs = () => {
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handledata = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    console.log('submit')
    try {
      const res = await axios.post(SummaryApi.Contect.url, formdata)
      console.log('POST request successful')
      if (res.status === 200) {
        setSuccess('Message sent successfully!')
        setFormdata({ name: '', email: '', contact: '', message: '' })
      } else {
        setError(data.message || 'Something went wrong')
      }
    } catch (err) {
      setError('Failed to send message. Try again later.')
      console.log('error', err)
    }
  }

  return (
    <div className="flex justify-center flex-col pb-3 bg-gradient-to-br from-white via-green-50 to-emerald-200 ">
      <Wrapper title={'Contect Us'} description={'Fasting'} image={Logo} />
      <Heading
        title={'Contact '}
        title_l={'Us'}
        discrption={'Fill out your query here and connect with us'}
        textcolor={'white'}
      />
      <div className="flex justify-center sm:items-start  sm:mx-80 mx-10 flex-col text-white p-5 gap-5">
        <label className="text-[#0b223d] font-serif text-lg font-semibold">
          Name
        </label>
        <input
          type="text"
          name="name"
          onChange={handledata}
          placeholder="Enter your name"
          value={formdata.name}
          className="text-[#0b223d] px-3 py-3 border-[#0b223d] border-b-2 rounded w-full shadow-[0_0_20px_2px_rgba(255,255,255,0.5)]"
        />

        <label className="text-[#0b223d] font-serif text-lg font-semibold">
          Email
        </label>
        <input
          type="email"
          name="email"
          onChange={handledata}
          placeholder="Enter your email"
          value={formdata.email}
          className="text-[#0b223d] px-3 py-3 border-[#0b223d] border-b-2 rounded w-full shadow-[0_0_20px_2px_rgba(255,255,255,0.5)]"
        />

        <label className="text-[#0b223d] font-serif text-lg font-semibold">
          Contact Number
        </label>
        <input
          type="tel"
          name="contact"
          onChange={handledata}
          placeholder="Enter your contact number"
          value={formdata.contact}
          className="text-[#0b223d] px-3 py-3 rounded border-[#0b223d] border-b-2 w-full shadow-[0_0_20px_2px_rgba(255,255,255,0.5)]"
        />

        <label className="text-[#0b223d] font-serif text-lg font-semibold">
          Message
        </label>
        <textarea
          name="message"
          onChange={handledata}
          placeholder="Enter your message"
          value={formdata.message}
          className="text-black px-3 py-5 mb-5 border-[#0b223d] border-b-4  rounded w-full shadow-[0_0_20px_4px_rgba(255,255,255,0.5)]"
        />

        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}

        <Button title="Contact Us" Onclick={handleSubmit} />
      </div>
    </div>
  )
}

export default ContectUs
