import React from 'react'
import { connect } from 'react-redux'
import Header from '../Component/Header'

const Home = () => (
  <div>
    <Header />
    <div>HOME</div>
  </div>
)

export default connect()(Home)
