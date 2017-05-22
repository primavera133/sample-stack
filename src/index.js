import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { syncHistory } from 'redux-simple-router'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'
import Basic from './components/Basic'
import Buttons from './components/Buttons'
import Records from './components/Records'

const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware, thunkMiddleware)(createStore)
const store = createStoreWithMiddleware(reducers)

render((
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRedirect to='/basic'/>
				<Route path="/basic" component={Basic}/>
				<Route path="/buttons" component={Buttons}/>
				<Route path="/records" component={Records}/>
			</Route>
		</Router>
	</Provider>
), document.getElementById('root'))
