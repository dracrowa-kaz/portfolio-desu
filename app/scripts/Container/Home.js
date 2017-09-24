import React, { Component, PropTypes } from "react"
import { connect } from 'react-redux'
import Header from './Header'

const Home = () => (
  <div>
    <Header />
    <div>HOME</div>
  </div>
)

export default connect()(Home)
