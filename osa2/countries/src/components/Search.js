import React from "react"

const Search = ({ action, value }) => {
  return (
    <>
      Find countries: <input value={value} onChange={action} />
    </>
  )
}

export default Search
