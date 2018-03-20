import { combineReducers } from 'redux'
import auth from './auth'
import project from './project'

const rootReducer = combineReducers({
  auth,
  project
})

export default rootReducer
