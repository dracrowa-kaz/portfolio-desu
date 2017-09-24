import { combineReducers } from 'redux'
import todo from './todo'
import auth from './auth'

const rootReducer = combineReducers({
  todo,
  auth
})

export default rootReducer
