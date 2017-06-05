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
    case 'ADD_ANGLE':
      newState.triangle.angle.a = payload
      return newState
    case 'ADD_TRIANGLE':
      console.log("payload: ", payload)
      newState.triangle.hypotenuse = payload.sides[0]
      newState.triangle.adjacent = payload.sides[1]
      newState.triangle.opposite = payload.sides[2]
      newState.triangle.a = payload.angles[0]
      newState.triangle.b = payload.angles[1]
      newState.triangle.c = payload.angles[2]
      return newState
    default:
      return newState
  }
}
