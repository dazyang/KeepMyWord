import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import BookList from './BookList'
import AllWords from './AllWords'
import { Link } from 'react-router-dom'


const App = (props) => {
      return (
        <Router>
        <div className='app'>
          <Header />
          <Route exact path ="/" component ={BookList} />
          <Route exact path="/allwords" component={AllWords} />
        </div>
      </Router>
    )
  }
  
export default App

