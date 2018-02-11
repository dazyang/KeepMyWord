import React from 'react'
import { Link } from 'react-router-dom'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import BookList from './BookList'
import AllWords from './AllWords'
import SeeVocabs from './SeeVocabs'


const App = (props) => {
      return (
        <Router>
        <div className='app'>
          <Header />
          <Route exact path ="/" component ={BookList} />
          <Route exact path="/allwords" component={AllWords} />
          <Route exact path="/books/:bookId/vocabs" component={SeeVocabs} />
        </div>
      </Router>
    )
  }
  
export default App

