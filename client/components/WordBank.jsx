import React from 'react'
import { connect } from 'react-redux'

import { getWords } from '../actions/getWords.js'
import SavedWords from './SavedWords.jsx'

//When people clicked on Browse Vocabs from home page, this is the page it links to. The's page will show all the saved vocads in the database, regardless of which book its from. The words should show in alphabetic order. 

class WordBank extends React.Component {
  componentDidMount() {
    this.props.dispatch(getWords())
  }
  render() {
    return (
      <div className='container'>
        {this.props.words.map((word) => {
          return (
          <SavedWords key={word.id} words={word} />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    words: state.words
  }
}

export default connect(mapStateToProps)(WordBank)