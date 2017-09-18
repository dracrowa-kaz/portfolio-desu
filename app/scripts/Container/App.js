import React, { Component, PropTypes } from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Header from './Header'

const App = () => (
  <div>
    <Router>
      <div>
        <Route path="/" component={Header}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </div>
    </Router>
  </div>
)

export default App
