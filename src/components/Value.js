import React from 'react'
import InlineEdit from 'react-edit-inline'

module.exports = ({ state, dispatch, sideType }) => {
  function handleChange(data) {
    console.log("HandlingChange")
    dispatch({
      type: 'ADD_LENGTH',
      payload: {side: sideType, length: data.value}
    })
  }
  const myValue = `${state.triangle[sideType]}`
  return (
    <InlineEdit
      change={handleChange}
      text={myValue}
      className={`circle input ${sideType}`}
      activeClassName={`circle input ${sideType}`}
      paramName="value"
      maxLength={3}
    />
  )
}
