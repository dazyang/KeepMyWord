import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import BookList from './BookList'
import WordBank from './WordBank'
import { Link } from 'react-router-dom'


const App = (props) => {
      return (
        <Router>
        <div className='app'>
          <Header />
          <Route path="/booklists" component={BookList} />
          <Route path="/wordlists" component={WordBank} />
          <Link to='/'><button>Return</button></Link>
        </div>
      </Router>
    )
  }
  
export default App

