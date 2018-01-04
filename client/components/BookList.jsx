import React from 'react'
import { connect } from 'react-redux'

import { getBooks, postBooks } from '../actions/bookActions.js'
//problem was forgot to destructuring getBooks, that's why it didn't recognize the function
import SavedBooks from './SavedBooks.jsx'

class BookList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newBook : { }
    }
    this.submitBook = this.submitBook.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  componentDidMount() {
    this.props.dispatch(getBooks())
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  submitBook(evt) {
    evt.preventDefault()
    const {newBook} = this.state
    this.props.dispatch(postBooks(newBook))
    alert('Your book has been submitted')
  }
  
  render() {
    return (
        <div className='container'>
        <form onSubmit={this.submitBook}>
            <label>Add a book{' '} 
            <input name="bookTitle" className="insert-title" type='text' placeholder='I am currently reading...' onChange={this.handleChange}/>
            by
            <input name="author" className="insert-name" type='text' placeholder='Author' onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Add" />
          </form>

        {this.props.books.map((book) => {
          return (
            <SavedBooks key={book.id} book={book}/>
          )
        })}

        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }  
}

export default connect(mapStateToProps)(BookList)