import React from 'react'
import { connent } from 'react-redux'

import SavedWords from './SavedWords.jsx'

//When people clicked on Browse Vocabs from home page, this is the page it links to. The's page will show all the saved vocads in the database, regardless of which book its from. The words should show in alphabetic order. 

class WordBank extends React.Component {
  // componentDidMount() {

  // }
  render() {
    return (
      <div className='container'>

      </div>
    )
  }
}

// const mapStateToProps = (state) => {
  
// }

export default connect(mapStateToProps)(WordBank)