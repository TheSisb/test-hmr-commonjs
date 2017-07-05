import React from 'react'
import Hello from 'components/Hello'
import logo from './assets/logo.svg'
import styles from './App.css'

import Inner from './Inner';

const App = () => (
  <div className={`theme-light ${styles.app}`}>
    <div className={styles.header}>
      HEADER
    </div>
    <Inner />
  </div>
)

export default App
