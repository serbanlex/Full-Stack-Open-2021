import React from 'react';

const Header = ({ course }) => {
  return (
    <h2>{course.name}</h2>
  )
}

const Total = ({ course }) => {
  const courseParts = course.parts
  const sum = courseParts.reduce((accumulator, part) => accumulator + part.exercises, 0)

  return(
    <p> <b>Total of exercises:</b> {sum}</p>
  ) 
}

const Part = (props) => {
  return (
    <p>
      {props.part.name}: {props.part.exercises} exercises
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part, partIndex) => <Part key={partIndex} part={part} />)}
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

const CoursesContent = ({courses}) => {
    return (
        <div>
            {courses.map((currentCourse, index) => <Course key={index} course={currentCourse}></Course>)}
        </div>
    )
}

export default CoursesContent