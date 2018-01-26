import React from 'react'
import { connect } from 'react-redux'

import { getSingleList, getDefinition } from '../actions/wordActions.js'

class SingleList extends React.Component {
  // componentDidMount() {
  //   this.props.dispatch(getSingleList())
  // }
  render() {
    return (
      <div className='container'>
        {this.props.words.map((word) => {
          return (
            
            <div className='book-titles'>
              <span>{word.word}</span>{' '}
              <span id='country'>{word.book_id}</span>
      SingleBook>
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

export default connect(mapStateToProps)(SingleList)