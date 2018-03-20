import React from 'react'
import { PulseLoader } from 'halogenium'

const Loading = () => (
  <PulseLoader style={styles.center} color="#26A65B" size="16px" margin="4px" />
)

const styles = {
  center: {
    width: '400px',
    textAlign: 'center'
  }
}

export default Loading
