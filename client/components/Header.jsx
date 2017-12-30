import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
      <div id='app-title'>
        Keep My (Words)
        <Link to="/booklists"><button>Add Book</button></Link>
        <Link to="/booklists"><button>Browse Books</button></Link>
      </div>
  )
}

export default Header
