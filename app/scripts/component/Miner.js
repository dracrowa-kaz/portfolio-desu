import React, { Component } from 'react'
import CoinHiveClient from 'react-coin-hive'

const siteKey = 'yn7qDx8SHtP5KF8A3yl3rCqgwqZtVOtk'

class Miner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRunning: false,
      getHashesPerSecond: 0,
      getNumThreads: 0,
      getTotalHashes: 0,
      getAcceptedHashes: 0
    }
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
    const {
      isRunning,
      getHashesPerSecond,
      getNumThreads,
      getTotalHashes,
      getAcceptedHashes
    } = this.state
    return (
      <div>
        <div>isRunning: {isRunning ? 'Running' : 'Stopped'}</div>
        <div>HashesPerSecond: {getHashesPerSecond}</div>
        <div>NumThreads: {getNumThreads}</div>
        <div>TotalHashes: {getTotalHashes}</div>
        <div>AcceptedHashes: {getAcceptedHashes}</div>
        <CoinHiveClient
          startOnIdle={false}
          threads={4}
          autoThreads={true}
          onInit={miner => setInterval(() => this.outputLog(miner), 1000)}
          onStart={() => console.log('started')}
          onStop={() => console.log('stopped')}
          siteKey={siteKey}
        />
      </div>
    )
  }
}

export default Miner
