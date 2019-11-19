import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [filterTerm, setFilterTerm] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }
  useEffect(hook, [])
  console.log('render', persons.length, 'persons')


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
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterTermChange = (event) => {
    setFilterTerm(event.target.value)
    if (filterTerm === '') {
      setShowAll(true)
    } else {
      setShowAll(false)
    }
  }

  const rows = () =>
    personsToShow.map(person =>
      <Person
        person={person}
        key={person.id} />
    )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        value={filterTerm}
        action={handleFilterTermChange} />
      <h2>Add Contact</h2>
      <PersonForm onSubmit={addPerson}
        nameValue={newName}
        nameOnChange={handleNameChange}
        numberValue={newNumber}
        numberOnChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons listElementCreator={rows()}/>
    </div>
  )
}

export default App
