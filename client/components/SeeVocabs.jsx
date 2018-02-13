//This component shows list of words from an individual book. 

import React from 'react'
import { connect } from 'react-redux'

import { getAllBooks } from '../actions/bookActions.js'
import { getVocabsReq, getDefinition } from '../actions/wordActions.js'

class SeeVocabs extends React.Component {
  componentDidMount() {
    this.props.dispatch(getAllBooks())
    this.props.dispatch(getVocabsReq(this.props.books.id))
  }
  render() {
    console.log(this.props.books)
    console.log(this.props.words)
    return (
      <div className='container'>
        <form>
          Add a word{' '}
          <input name="vocab" className="insert-title" type='text' placeholder='Insert new word here' />
          <input type="submit" value="Add" />
        </form>

        {this.props.words.map((word) => {
          return (
            <div className='book-titles'>
              <span>{word}</span>{' '}
              {/* <span id='country'>{wordlist.book_id}</span> */}
            </div>
          )
        })}
      </div>
    )
  }
}

// SeeVocabs.defaultProps = {
//   words: {
//     id: '',
//     word: ''
//   }
// }

const mapStateToProps = (state) => {
  return {
    books: state.books,
    words: state.words
  }
}

export default connect(mapStateToProps)(SeeVocabs)