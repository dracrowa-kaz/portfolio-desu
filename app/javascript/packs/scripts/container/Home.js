import React from 'react'
import { connect } from 'react-redux'
import Header from '../component/Header'

const Home = () => (
  <div>
    <Header />
  </div>
)

export default connect()(Home)
