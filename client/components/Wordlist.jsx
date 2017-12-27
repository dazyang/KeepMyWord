import React from 'react'
import FlipCard from 'react-flipcard'
// import { getDefinition } from '../client-api'

class Wordlist extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isFlipped: false
    }
    this.showBack = this.showBack.bind(this)
    this.showFront = this.showFront.bind(this)
    this.handleOnFlip = this.handleOnFlip.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  showBack () {
    this.setState({
      isFlipped: true
    })
  }

  showFront () {
    this.setState({
      isFlipped: false
    })
  }

  handleOnFlip (flipped) {
    if (flipped) {
      this.refs.backButton.focus()
      // this.refs.backButton.getDOMNode().focus();
    }
  }

  handleKeyDown (e) {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront()
    }
  }

  // handleDefinition(e) {
  //   getDefinition(this.state.definition, (userVocab) => {
  //     this.setState(userVocab);
  //   })
  // }

  render () {
    // console.log(this.props.definitions.results)
    return (
      <div className='holder'>
        <FlipCard disabled={true} flipped={this.state.isFlipped} onFlip={this.handleOnFlip}
          onKeyDown={this.handleKeyDown}>
          <div>
            {this.props.words.map((word, i) =>
              <button key={i} className="flashcard" onClick={this.showBack}>{word}</button>
            )}
          </div>
          <div>
            <button type="button" className="flashcard" ref="backButton" onClick={this.showFront}><b>Word definition:</b>{' '}{this.props.definitions}
            </button>
          </div>
        </FlipCard>
      </div>

    )
  }
}

export default Wordlist

// <div className="holder">
//   <FlipCard>
//     <div>
//       {this.props.words.map((word, i) =>
//         <button key={i} className="flashcard" onClick={this.showBack}>{word}</button>
//       )}
//     </div>
//     <div>
//       <button className="flashcard">Back</button>
//     </div>
//   </FlipCard>

// ==========STATELESS=============//

// const WordList = (props) => {
// return (
//   <div className="holder">
//     {props.words.map((word, i) =>
//       <button key={i} className="flashcard">{word}</button>
//     )}
//   </div>

//   )
// }
