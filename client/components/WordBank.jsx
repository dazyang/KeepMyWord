import React from 'react'
import { connect } from 'react-redux'

import { getWords } from '../actions/getWords.js'
import SavedWords from './SavedWords.jsx'

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