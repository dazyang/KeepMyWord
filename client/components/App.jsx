import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import { Link } from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Link to='/'><button>Return</button></Link>
      </div>
    </Router>
  )
}

export default App

