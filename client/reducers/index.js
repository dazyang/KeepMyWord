import {combineReducers} from 'redux'

import greetings from './greetings' 
import books from './books' 

export default combineReducers({
  books,
  greetings
})
