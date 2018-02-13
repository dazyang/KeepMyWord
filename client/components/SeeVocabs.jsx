//This component shows list of words from an individual book. 

import React from 'react'
import { connect } from 'react-redux'

import { getAllBooks} from '../actions/bookActions.js'
import { getVocabsReq, getDefinition } from '../actions/wordActions.js'

// import WordlistByBook from './WordlistByBook'

class SeeVocabs extends React.Component {
  componentDidMount() {
    this.props.dispatch(getAllBooks())
    this.props.dispatch(getVocabsReq(this.props.books.id))
  }
  render() {
    console.log(this.props.books)
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

// SeeVocabs.defaultProps = {
//   book: {
//     id: 1,
//     word: ''
//   }
// }

const mapStateToProps = (state) => {
  // const id = Number(ownProps.match.params.id)
  // console.log(id)
  return {
    // book: state.books.filter(book => id === book.id),
    books: state.books,
    words: state.words
  }
}

export default connect(mapStateToProps)(SeeVocabs)