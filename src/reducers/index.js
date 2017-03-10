import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import items from './items'

export default combineReducers({
  routeReducer,
  items
})
