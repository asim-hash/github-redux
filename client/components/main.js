import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FlipMove from 'react-flip-move'
import bg from '../assets/images/jetpack.jpg'

const Main = () => {
  const [login, setLogin] = useState()
  return (
    <div>
      <img src={bg} alt="" className="absolute z-0 w-full h-full" />
      <div className="w-full h-full bg-opacity-25 bg-black absolute z-1"> </div>
      <div className="h-screen flex justify-center items-center relative z-2">
        <FlipMove
          staggerDelayBy={150}
          appearAnimation="accordionVertical"
          enterAnimation="fade"
          leaveAnimation="fade"
        >
          <div className="border-solid border-2 border-black p-4">
            <input
              type="text"
              onChange={(e) => setLogin(e.target.value)}
              className="mr-3 bg-black bg-opacity-50 text-white"
            />
            <Link to={`/${login}`}>View</Link>
          </div>
        </FlipMove>
      </div>
    </div>
  )
}

export default Main
