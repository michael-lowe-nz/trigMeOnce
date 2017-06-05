import React from 'react'
import { trigCalculator } from 'trigonometry-calculator'

let unsolved = {
  sides: {0: 10, 1: 24, 2: 11},
  angles: {0: 90}
}

console.log('Calctriangle',trigCalculator(unsolved))

module.exports = ( {state, dispatch} ) => {
  function calculate () {
    const { hypotenuse, adjacent, opposite, a, b } = state.triangle
    let unsolvedTriangle = {
      sides: {
        0: hypotenuse,
        1: adjacent,
        2: opposite
      },
      angles: {
        0: a,
        1: 90
      }
    }
    console.log('unsolvedTriangle:', unsolvedTriangle)
    let solvedTriangle = trigCalculator(unsolvedTriangle)
    dispatch({
      type: 'ADD_TRIANGLE',
      payload: solvedTriangle
    })
  }
  return (
    <button onClick={calculate}>Calculate</button>
  )
}
