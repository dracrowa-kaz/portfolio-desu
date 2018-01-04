import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Favicon from 'react-favicon'
import Login from './Login'
import Register from './Register'
import Home from './Home'

const App = () => (
  <div>
    <Router>
      <div>
        <Favicon url="https://raw.githubusercontent.com/dracrowa-kaz/portfolio-desu/master/app/assets/images/favicon.ico" />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  </div>
)

export default App
