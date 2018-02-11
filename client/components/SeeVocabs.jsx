//This component shows list of words from an individual book. 

import React from 'react'
import { connect } from 'react-redux'

import { getVocabsReq, getDefinition } from '../actions/wordActions.js'

class SeeVocabs extends React.Component {
  componentDidMount() {
    this.props.dispatch(getVocabsReq())
  }
  render() {
    return (
      <div className='container'>
        <form>
          Add a word{' '}
          <input name="vocab" className="insert-title" type='text' placeholder='Insert word here' />
          <input type="submit" value="Add" />
        </form>

        {this.props.wordlist.map((wordlist) => {
          return (
            <div className='book-titles'>
              <span>{word.word}</span>{' '}
              <span id='country'>{word.book_id}</span>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
          wordlist: state.wordlist
  }
}

export default connect(mapStateToProps)(SeeVocabs)