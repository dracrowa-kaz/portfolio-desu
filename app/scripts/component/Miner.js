import React, { Component } from 'react'
import CoinHiveClient from 'react-coin-hive'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const siteKey = 'yn7qDx8SHtP5KF8A3yl3rCqgwqZtVOtk'

class Miner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      miningHistory: [],
      isRunning: false,
      getHashesPerSecond: 0,
      getNumThreads: 0,
      getTotalHashes: 0,
      getAcceptedHashes: 0
    }
    this.onInitMiner = this.onInitMiner.bind(this)
  }
  onInitMiner(miner) {
    setInterval(() => this.outputLog(miner), 1000)
  }
  outputLog(miner) {
    this.setState({
      isRunning: miner.isRunning(),
      getHashesPerSecond: miner.getHashesPerSecond(),
      getNumThreads: miner.getNumThreads(),
      getTotalHashes: miner.getThrottle(),
      getAcceptedHashes: miner.getAcceptedHashes()
    })
  }
  render() {
    const data = [
      {name: '', 1: 1, 2:2, 3:3},
      {name: '2014', Ruby: 1, JavaScript: 2, Python: 3},
      {name: '2015', Ruby: 2, JavaScript: 1, Python: 3},
      {name: '2016', Ruby: 3, JavaScript: 1, Python: 2},
      {name: '2017', Ruby: 3, JavaScript: 2, Python: 1},
    ]
    const {
      miningHistory,
      isRunning,
      getHashesPerSecond,
      getNumThreads,
      getTotalHashes,
      getAcceptedHashes
    } = this.state
    return (
      <div>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5
          }}
        >
          <XAxis dataKey="name"/>
          <YAxis type="category" padding={{top: 5, bottom: 5}}/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line dataKey="3" stroke="#ffffff" style={{display: "none"}}/>
          <Line dataKey="2" stroke="#ffffff" style={{display: "none"}}/>
          <Line dataKey="1" stroke="#ffffff" style={{display: "none"}}/>
          <Line dataKey="JavaScript" stroke="#88ee88" />
          <Line dataKey="Ruby" stroke="#ee8888"/>
          <Line dataKey="Python" stroke="#8888ee" />
        </LineChart>
        <div>isRunning: {isRunning ? 'Running' : 'Stopped'}</div>
        <div>HashesPerSecond: {getHashesPerSecond}</div>
        <div>NumThreads: {getNumThreads}</div>
        <div>TotalHashes: {getTotalHashes}</div>
        <div>AcceptedHashes: {getAcceptedHashes}</div>
        <CoinHiveClient
          startOnIdle={false}
          threads={4}
          autoThreads
          onInit={this.onInitMiner}
          onStart={() => console.log('started')}
          onStop={() => console.log('stopped')}
          siteKey={siteKey}
          />
      </div>
    )
  }
}

export default Miner
