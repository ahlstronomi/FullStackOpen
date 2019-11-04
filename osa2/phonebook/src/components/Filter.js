import React from 'react'

const Filter = ({ action, value }) => {
  return (
    <div>
      Filter:
      <input
        value={value}
        onChange={action} />
    </div>
  )
}

export default Filter
