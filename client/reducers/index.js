import {combineReducers} from 'redux'

import greetings from './greetings' 
import books from './books' 
import words from './words' 

export default combineReducers({
  books,
  words,
  greetings
})
