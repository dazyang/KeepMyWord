export const ADD_TO_LIST = 'ADD_TO_LIST'

export const addToList = (id) => {
  return {
    type: 'ADD_TO_LIST',
    id
  }
}