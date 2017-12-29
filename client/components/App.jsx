import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import BookList from './BookList'
import { Link } from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   dataLists: [ ]
    // }
  }
  render() {
    return (
      <Router>
      <div className='app'>
        <Header />
        <Route path="/booklist" component={BookList} />
        <Link to='/'><button>Return</button></Link>
      </div>
    </Router>
  )
}

}
export default App

