import React from 'react'

const PersonForm = ({ person }) => {
  return (
    <li>{person.name} {person.number}</li>
  )
}

export default PersonForm
