import React from 'react'
import logo from '../assets/images/github (1).png'

const Footer = () => {
  return (
    <div className="p-4 bg-black opacity-75 w-full relative px-16 flex justify-center items-center z-10">
      <img src={logo} alt="" width="70" />
    </div>
  )
}

export default Footer
