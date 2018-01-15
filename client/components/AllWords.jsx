import React from 'react'
import { connect } from 'react-redux'

import { getWords } from '../actions/getWords.js'
import SeeVocabs from './SeeVocabs.jsx'

class AllWords extends React.Component {
  componentDidMount() {
    this.props.dispatch(getWords())
  }
  render() {
    return (
      <div className='container'>
        {this.props.words.map((word) => {
          return (
            //words should display in alphabetical order
            <div className='book-titles'>
              <span>{word.word}</span>{' '}
              <span id='country'>{word.book_id}</span>
            </div>
            // SeeVocabs links to individual word list page, that only display the vocabs from the book.
          // <SeeVocabs key={word.id} words={word} />
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

export default connect(mapStateToProps)(AllWords)