import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
      <div id='app-title'>
        <Link to="/">Keep My (Words)</Link>
        <Link to="/booklist"><button>Add Book</button></Link>
        <Link to="/booklist"><button>Browse Books</button></Link>
      </div>
  )
}

export default Header
