import React, { useEffect } from 'react'
import { Route, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import RepoList from './repo-list'
import Readme from './readme'
import { getReadme, getRepos } from '../redux/reducers/repos'
import Header from './header'

const Home = () => {
  const { username, repo } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRepos(username))
    if (repo !== undefined) {
      dispatch(getReadme(username, repo))
    }
  }, [])
  return (
    <div>
      <Header username={username} />
      <Route exact path="/:username" component={() => <RepoList />} />
      <Route exact path="/:username/:repos" component={() => <Readme />} />
    </div>
  )
}

Home.propTypes = {}

export default Home
