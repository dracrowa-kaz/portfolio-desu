import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createFinalStore from './modules/store'
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import Login from './Container/Login'
import Register from './Container/Register'
import { Link } from 'react-router-dom'

const history = createHistory()
const store = createFinalStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Login}/>
            <Route path="login" component={Login}/>
            <Route path="register" component={Register}/>
          </Switch>
        </BrowserRouter>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
