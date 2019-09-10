import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Courses = ({ courses }) => {

  const countTotal = (course) => course.parts.reduce((accumulator, total) => {
    return accumulator + total.exercises
  }, 0)

  const renderCourses = courses.map((course, index) => {
    return (
      <div key={index}>
        <Header course={course.name} />
        <Content parts={course.parts} courseIndex={index}/>
        <Total exercises={countTotal(course)} />
      </div>
    )

  })


  return (
    <>
      {renderCourses}
    </>
  )
}

export default Courses
