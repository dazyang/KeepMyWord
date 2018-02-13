//This component shows list of words from an individual book. 

import React from 'react'
import { connect } from 'react-redux'

// import { singleBookReq } from '../actions/bookActions.js'
import { getVocabsReq, getDefinition } from '../actions/wordActions.js'

// import WordlistByBook from './WordlistByBook'

class SeeVocabs extends React.Component {
  componentDidMount() {
    // this.props.dispatch(singleBookReq())
    this.props.dispatch(getVocabsReq(this.props.book.id))
  }
  render() {
    return (
      <div className='container'>
        <form>
          Add a word{' '}
          <input name="vocab" className="insert-title" type='text' placeholder='Insert new word here' />
          <input type="submit" value="Add" />
        </form>
        
       {/* <WordlistByBook bookId={id}/> */}
      </div>
    )
  }
}

SeeVocabs.defaultProps = {
  book: {
    id: 1,
    word: ''
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.books.find(book => id === book.id),
    words: state.words
  }
}

export default connect(mapStateToProps)(SeeVocabs)