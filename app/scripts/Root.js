import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createFinalStore from './modules/store'
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import Login from './Container/Login'
import Register from './Container/Register'
import Header from './Container/Header'
import { Link } from 'react-router-dom'

const history = createHistory()
const store = createFinalStore()

const notFound = () => (
  <div>not found
  </div>
)


ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router>
        <div>
          <Route path="/" component={Header}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </div>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)
