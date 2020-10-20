import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import FlipMove from 'react-flip-move'
import bg from '../assets/images/jetpack.jpg'

const RepoList = () => {
  const { username } = useParams()
  const repos = useSelector((s) => s.repository.repositories)
  const search = useSelector((s) => s.repository.search)
  const filteredRepos = repos.filter((el) => el.name.includes(search))
  return (
    <div>
      <div className="w-full h-full bg-opacity-25 bg-green fixed z-1"> </div>
      <img src={bg} alt="" className="fixed z-0" />
      <div className=" container px-4 pl-32 md:px-32 pl-0 pt-24">
        <div className="flex">
          <div className="w-1/2 text-center px-16 py-2 bg-black opacity-75 text-white m-2 rounded uppercase">
            NAME
          </div>
          <div className="w-1/2 text-center py-2  bg-black opacity-75 text-white m-2 rounded uppercase">
            LANGUAGE
          </div>
          <div className="w-1/2 text-center py-2 bg-black opacity-75 text-white m-2 rounded uppercase">
            VIEW
          </div>
          <div className="w-1/2 text-center py-2 bg-black opacity-75 text-white m-2 rounded uppercase">
            GITHUB
          </div>
        </div>
        <FlipMove
          staggerDelayBy={150}
          appearAnimation="accordionVertical"
          enterAnimation="fade"
          leaveAnimation="fade"
        >
          {filteredRepos.map((el) => (
            <div className="flex " key={el.name}>
              <div className="w-1/2 text-center py-2 bg-black opacity-75 text-white m-2 rounded uppercase">
                {el.name}
              </div>

              <div className="hidden md:block w-1/2  text-center  py-2  py-2 bg-black opacity-75 text-white m-2 rounded">
                {el.language}
              </div>
              <div className="w-50 text-center px-4 border-b-2  py-2 bg-black opacity-75 text-white m-2 rounded">
                <Link to={`/${username}/${el.name}`}>readme</Link>
              </div>
              <div className="hidden md:block w-1/2  text-center  py-2 py-2 bg-black opacity-75 text-white m-2 rounded">
                <a href={`https://github.com/${username}`}>view</a>
              </div>
            </div>
          ))}
        </FlipMove>
      </div>
    </div>
  )
}

export default RepoList
