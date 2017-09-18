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
import App from './Container/App'

const history = createHistory()
const store = createFinalStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
