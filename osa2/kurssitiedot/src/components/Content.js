import React from 'react'

const Content = ({ parts, courseIndex }) => {

  const renderCourses = parts.map((part) =>
    <li key={`${courseIndex}${part.id}`}>
      {part.name} {part.exercises}
    </li>
  )

  return (
    <>
      <ul>
        {renderCourses}
      </ul>
    </>
  )
}

export default Content
