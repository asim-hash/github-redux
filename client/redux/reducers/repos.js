import axios from 'axios'

const initialState = {
  repositories: [],
  readme: '',
  search:''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REPOS':
      return { ...state, repositories: action.repos }
    case 'SET_README':
      return { ...state, readme: action.readme }
    case 'SET_SEARCH':
      return { ...state, search: action.search }
    default:
      return state
  }
}

export function getRepos(username) {
  return (dispatch)=>{
    axios(`https://api.github.com/users/${username}/repos`).then(({ data }) => {
      return dispatch({ type: 'SET_REPOS', repos: data })
    })
  }
}

export function getReadme(username,repo){
   return (dispatch)=>{
     axios(`https://api.github.com/repos/${username}/${repo}/readme`, {
       headers: { Accept: 'application/vnd.github.VERSION.raw' }
     }).then(({ data }) =>{
       return dispatch({ type: 'SET_README', readme: data })
     })
   }
}

export function setSearch(search){
  return {type:'SET_SEARCH',search}
}
