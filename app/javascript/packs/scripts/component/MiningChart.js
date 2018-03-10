import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const MiningChart = miningHistory => (
  <LineChart
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
    <Line dataKey="3" stroke="#ffffff" style={{ display: 'anone' }} />
    <Line dataKey="2" stroke="#ffffff" style={{ display: 'anone' }} />
    <Line dataKey="1" stroke="#ffffff" style={{ display: 'anone' }} />
    <Line dataKey="hashes" stroke="#88ee88" />
    <Line dataKey="TotalHashes" stroke="#ee8888" />
    <Line dataKey="AcceptedHashes" stroke="#118888" />
  </LineChart>
)

export default MiningChart
