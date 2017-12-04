import React from 'react'

import Addbook from './Addbook'
import {Link} from 'react-router-dom'

class Booklist extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bookTitle: '',
      books: [''],
      author: ['']
    }
    this.addToBookList = this.addToBookList.bind(this)
    this.updateBookLists = this.updateBookLists.bind(this)
    this.handleNewBook = this.handleNewBook.bind(this)
    this.updateAuthor = this.updateAuthor.bind(this)
  }

  addToBookList (book) {
    book.preventDefault()
    this.handleNewBook(this.state.bookTitle)
  }

  handleNewBook (book) {
    const {books} = this.state
    books.push(book)
    this.setState({books, bookTitle: ''})
  }

  updateBookLists (e) {
    this.setState({bookTitle: e.target.value})
  }

  updateAuthor (e) {
    this.setState({author: e.target.value})
  }

  render () {
    return (
      <div className='container'>
          <div className='user-options'>
            <form onSubmit={this.addToBookList}>
              <input name="bookTitle" className="insert-title" type='text' onChange={this.updateBookLists} placeholder='Book title' value={this.state.bookTitle} />
              by
              <input name="author" className="insert-name" type='text' onChange={this.updateAuthor} placeholder='Author' value={this.state.author} />
              
              <input type="submit" value="Add to my booklist" />
            </form>
          </div>
          <Addbook books={this.state.books} author={this.state.author}/>
      </div>
    )
  }
}

export default Booklist

{ /* <div className='container'>
  <div className='navTitles'>
    New Book
  </div>
  <div className='user-options'>
    <form onSubmit={this.addToBookList}>
      <input name="bookTitle" type='text' onChange={this.updateBookLists} placeholder='What are you reading?' value={this.state.bookTitle} />
      <br />
      Add Author
      <input type="submit" value="Add to my booklist" />
    </form>
  </div>
    <Addbook books={this.state.books} />
</div> */ }
