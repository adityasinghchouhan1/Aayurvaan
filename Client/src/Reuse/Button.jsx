import React, { useState } from 'react'

const Button = ({ Onclick, color, title }) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    Onclick() // run the original click handler
    setTimeout(() => setIsClicked(false), 300) // remove pulse after animation
  }

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleClick}
        className={`  px-6 py-3 rounded-full shadow-md  duration-300 ease-in-out hover:scale-105  relative overflow-hidden bg-emerald-600  text-sm font-medium text-white transition-all hover:bg-emerald-700 hover:shadow-lg ${
          isClicked ? 'animate-pingOnce' : ''
        }`}
      >
        {title}
      </button>
    </div>
  )
}

export default Button
