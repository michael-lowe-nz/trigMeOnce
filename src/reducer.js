module.exports = (state, action) => {
  const newState = require('clone')(state)
  const { type, payload }  = action
  switch (type) {
    case 'ADD_LENGTH':
      switch (payload.side) {
        case 'hypotenuse':
          newState.triangle.hypotenuse = payload.length
          return newState
        case 'adjacent':
          newState.triangle.adjacent = payload.length
          return newState
        case 'opposite':
          newState.triangle.opposite = payload.length
          return newState
        default:
          return newState
      }
      newState.triangle.adjacent = payload
      newState.triangle.opposite = payload
      console.log('New state', newState.triangle)
      return newState
    default:
      return newState
  }
}
