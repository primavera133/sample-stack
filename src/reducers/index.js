import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import buttons from './buttons'
import records from './records'
import links from './links'

export default combineReducers({
  routeReducer,
  buttons,
	records,
	links
})
