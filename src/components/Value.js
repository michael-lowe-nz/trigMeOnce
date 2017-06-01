import React from 'react'
import InlineEdit from 'react-edit-inline'

module.exports = ({ state, dispatch, sideType }) => {
  function handleChange(data) {
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
      className={`circle grow ${sideType}`}
      activeClassName={`circle grow ${sideType}`}
      paramName="value"
      maxlength="3"
    />
  )
}
