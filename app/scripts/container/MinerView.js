import React from 'react'
import { connect } from 'react-redux'
import Header from '../component/Header'
import Miner from '../component/Miner'

const MinerView = () => (
  <div>
    <Header />
    <Miner />
  </div>
)

export default connect()(MinerView)
