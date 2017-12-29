import React from 'react'
// import { connect } from 'react-redux'


class BookList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dataLists:[ ]
    }
  }

  render () {
    return (
      <div className='container'>
        <form>
          <label>I am currently reading 
          <input name="bookTitle" className="insert-title" type='text' placeholder='Book title' />
          by
          <input name="author" className="insert-name" type='text' placeholder='Author'  />
          </label>
          <input type="submit" value="Add to my booklist" />
        </form>
      </div>
    )
  }
}

export default BookList
// export default connenct()(BookList)