import React from 'react'

import Wordlist from './Wordlist'
import { getDefinition } from '../client-api'

class HandleAdd extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userVocab: '',
      words: [ ],
      definition: ''
    }
    this.addToWordList = this.addToWordList.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.updateWordDetails = this.updateWordDetails.bind(this)
  }

  addToWordList (e) {
    e.preventDefault()
    getDefinition(this.state.userVocab, (def) => {
      const apiData = def.results[0].definition
      // console.log(apiData)
      this.setState({definition: apiData})
    })
    this.handleAdd(this.state.userVocab)
  }

  handleAdd (word) {
    const {words} = this.state
    words.push(word)
    this.setState({words, userVocab: ''})
  }

  updateWordDetails (e) {
    this.setState({userVocab: e.target.value})
  }

  render () {
    return (
      <div>
        <div className='book-name'>
          The Remains of the Day
          {/* <!-- by Kazuo Ishiguro --> */}
        </div>

        <div className='add-words'>
          <form onSubmit={this.addToWordList}>

            <input type='text' placeholder='Learning a new word?' onChange={this.updateWordDetails} name='userVocab' value={this.state.userVocab} />

            <input type='submit' value='Keep My Word'/>
          </form>
        </div>
        
        <Wordlist words={this.state.words} definitions={this.state.definition} />
      </div>
    )
  }
}

export default HandleAdd
