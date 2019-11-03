import React, { useState } from 'react'
import { notStrictEqual } from 'assert'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '0440000000'
    }
  ])
  const [newName, setNewName] = useState('')
  const [filterTerm, setFilterTerm] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)

  const personsToShow = showAll
  ? persons
  : persons.filter(person => person.name.includes(filterTerm))


  const resetForm = () => {
    setNewName('')
    setNewNumber('')
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString(),
      id: persons.length + 1
    }
    persons.forEach(person => {
      if (person.name !== personObject.name) {
        setPersons(persons.concat(personObject))
        resetForm()
      } else {
        window.alert(`${person.name} is already added to phonebook.`)
        resetForm()
      }
    })

  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterTermChange = (event) => {
    setFilterTerm(event.target.value)
    if(filterTerm === '') {
      setShowAll(true)
    } else {
      setShowAll(false)
    }
  }

  const rows = () => 
    personsToShow.map(person =>
      <Person
        key={person.id}
        person={person} />
    )

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          Filter: <input
            value={filterTerm}
            onChange={handleFilterTermChange} />
        </div>

        <h2>Add Contact</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange} />
        </div>
        <div>number: <input
          value={newNumber}
          onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {rows()}
      </ul>

    </div>
  )

}

export default App
