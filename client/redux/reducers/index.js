import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import repos from './repos'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    repository: repos
  })

export default createRootReducer
