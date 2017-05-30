const test = require('tape')
const freeze = require('deep-freeze')
const reducer = require('../reducer')

test('passing test', t => {
  t.pass()
  t.end()
})

test('Test that reducer can receive triangle lengths', t => {
  //ARRANGE
  const initialState = {
    triangle: {
      1: null,
      2: null,
      3: null,
    }
  }
  freeze(initialState)
  const expected = {
    triangle: {
      1: 25,
      2: null,
      3: null
    }
  }
  //ACT
  const actual = reducer(initialState, {type: 'ADD_ANGLE', payload: [1, 25]})
  //ASSERT
  t.deepEquals(actual, expected, 'The reducer can add angles into the state')
  t.end()
})
