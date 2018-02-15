//This component shows list of words from an individual book. 

import React from 'react'
import { connect } from 'react-redux'

import { getAllBooks} from '../actions/bookActions.js'
import { getVocabsReq, getDefinition } from '../actions/wordActions.js'

// import WordlistByBook from './WordlistByBook'

class SeeVocabs extends React.Component {
  componentDidMount() {
    this.props.dispatch(getAllBooks())
    this.props.dispatch(getVocabsReq(this.props.book.id))
  }
  render() {
    // console.log(this.props.book.id)
    return (
      <div className='container'>
        <form>
          Add a word{' '}
          <input name="vocab" className="insert-title" type='text' placeholder='Insert new word here' />
          <input type="submit" value="Add" />
        </form>
        
      {/* <WordlistByBook bookId={id}/> */} 
       {this.props.words.map((word, id) => {
         return (
           <div key={id} className='book-titles'>
              <span>{word.word}</span>{' '}
            </div>
          )
       })}
      </div>
    )
  }
}

SeeVocabs.defaultProps = {
  book: {
  author: " ",
  book_title: " ",
  country: " ",
  id: 1
  }
}

const mapStateToProps = (state, props) => {
  return {
    book: state.books.find(book => book.id == props.match.params.id),
    // books: state.books,
    words: state.words
  }
}

export default connect(mapStateToProps)(SeeVocabs)