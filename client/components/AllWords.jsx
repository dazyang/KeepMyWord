import React from 'react'
import { connect } from 'react-redux'

import { getWords, getDefinition } from '../actions/wordActions.js'
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
//=== SeeVocabs links to individual word list page, that only display the vocabs from the book. ===//
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


// '/author/id/title' The content data showing on this page, will be returned from two tables. Both populateBooks and populateWords, the two table needs to join by their matched id number, to return the data. One book ---> many words. When adding, however, it's only going to be inserted into the 'populateWords' table. (The book exist in the populateBooks table first.)