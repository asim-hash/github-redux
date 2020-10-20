import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/reducers/repos'

const Header = ({ username }) => {
  const dispatch = useDispatch()
  return (
    <div className="p-8 bg-black opacity-75 w-full absolute px-16 flex row justify-between z-10 ">
      <div className="text-white uppercase">{username}</div>
      <div>
        {' '}
        <input
          placeholder="search"
          className="bg-black bg-opacity-0 border-solid border-2 border-white rounded text-white "
          type="text"
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>
    </div>
  )
}

export default Header
