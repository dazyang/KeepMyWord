import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
// import Container from './Container'
import HandleAdd from './HandleAdd'
import Booklist from './Booklist'
import { Link } from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <div className='app'>
      test counts
        <Route path="/" component={Header} />
        <Route path="/booklist" component={Booklist} />
        <Route path="/wordlist" component={HandleAdd} />
        <Link to='/'><button>Return</button></Link>
      </div>
    </Router>
  )
}

export default App

