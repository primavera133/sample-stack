import React from 'react'
import { render } from 'react-dom'
import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { syncHistory } from 'redux-simple-router'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'
import List from './components/List'
import Create from './components/Create'
import Authenticate from './components/Authenticate'

const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware, thunkMiddleware)(createStore)
const store = createStoreWithMiddleware(reducers)

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to='/list'/>

        <Route path="/list" component={List}/>
        <Route path="/create" component={Create}/>
        <Route path='/authenticate' component={Authenticate}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
