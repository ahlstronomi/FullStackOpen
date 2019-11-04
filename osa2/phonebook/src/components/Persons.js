import React from 'react'

const Persons = ({ listElementCreator }) => {
  return (
    <ul>
    {listElementCreator}
  </ul>
  )
}

export default Persons
