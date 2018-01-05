import React from 'react'
import { connect } from 'react-redux'

import { getBooks, postBookRequest } from '../actions/bookActions.js'
//problem was forgot to destructuring getBooks, that's why it didn't recognize the function
import BookDatabase from './BookDatabase.jsx'

class BookList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        book_title: '',
        author: '',
        country: ''
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
    const {book_title, author, country} = this.state
    const newBook = {book_title, author, country}
    this.props.dispatch(postBookRequest(newBook))
    alert('Your book has been submitted')
  }

  render() {
    return (
        <div className='container'>
          <form onSubmit={this.sumbitBook}>
            <label>Add a book{' '} 
            <input name="booktitle" className="insert-title" type='text' placeholder='I am currently reading...' onChange={this.handleChange}/>
            by
            <input name="author" className="insert-name" type='text' placeholder='Author' onChange={this.handleChange}/>
            <input name="country" className="insert-name" type='text' placeholder='Country' onChange={this.handleChange} />
            </label>
            <input type="submit" value="Add" />
          </form>

        {this.props.books.map((book, id) => {
          return (
            <BookDatabase key={id} book={book}/>
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