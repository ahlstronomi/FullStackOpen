import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Search from './components/Search'

const App = () => {

  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
    if (searchTerm === '') {
      //
    } else {
      //
    }
  }

  return (
    <>
        <Search value={searchTerm} action={handleSearchTermChange} />
    </>
  )
}

export default App;
