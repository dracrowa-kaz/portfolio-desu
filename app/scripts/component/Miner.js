import React, { Component } from 'react'
import CoinHiveClient from 'react-coin-hive'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const siteKey = 'yn7qDx8SHtP5KF8A3yl3rCqgwqZtVOtk'

class Miner extends Component {
  constructor(props) {
    super(props)
    const miningHistory = []
    this.state = {
      miningHistory,
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
    const { miningHistory } = this.state
    const newData = {
      name: miningHistory.length,
      hashes: Math.round(miner.getHashesPerSecond()),
      //TotalHashes: miner.getThrottle(),
      //AcceptedHashes: miner.getAcceptedHashes(),
    }
    miningHistory.push(newData)
    this.setState({
      miningHistory,
      isRunning: miner.isRunning(),
      getHashesPerSecond: miner.getHashesPerSecond(),
      getNumThreads: miner.getNumThreads(),
      getTotalHashes: miner.getThrottle(),
      getAcceptedHashes: miner.getAcceptedHashes()
    })
  }
  render() {
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
        { miningHistory.length % 5 === 0 && (
          <div>Loading.....</div>
        )}
        { miningHistory.length % 5 !== 0 && (<LineChart
          width={600}
          height={300}
          data={miningHistory}
          margin={{
            top: 5, right: 50, left: 50, bottom: 5
          }}
        >
          <XAxis dataKey="name" />
          <YAxis type="category" padding={{ top: 5, bottom: 5 }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line dataKey="3" stroke="#ffffff" style={{ display: "none" }} />
          <Line dataKey="2" stroke="#ffffff" style={{ display: "none" }} />
          <Line dataKey="1" stroke="#ffffff" style={{ display: "none" }} />
          <Line dataKey="hashes" stroke="#88ee88" />
          <Line dataKey="TotalHashes" stroke="#ee8888" />
          <Line dataKey="AcceptedHashes" stroke="#118888" />
        </LineChart>) }
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
