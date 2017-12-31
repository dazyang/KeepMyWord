import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
      <div id='app-title'>
        Keep My (Words)
        <Link to="/booklists"><button>Booklist</button></Link>
        <Link to="/wordlists"><button>Browse vocabulary</button></Link>
      </div>
  )
}

export default Header
