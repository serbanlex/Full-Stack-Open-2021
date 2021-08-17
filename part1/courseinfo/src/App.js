import React from 'react'


const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) =>{
  return (
    <p>
      {props.part}: {props.exercises}
    </p>
  )
}

const Content = (props) =>{
  // we assume that we receive a parts list as a prop, made out of 3 elements.
  const parts = props.parts
  const part1 = parts[0]
  const part2 = parts[1]
  const part3 = parts[2]
  return (
    <div>
      <Part part={part1.name} exercises={part1.exercises}></Part>
      <Part part={part2.name} exercises={part2.exercises}></Part>
      <Part part={part3.name} exercises={part3.exercises}></Part>

    </div>
  )
}

const Total = (props)=>{
  console.log(props)
  const parts = props.parts
  return (
    <p>
      Number of exercises =  {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  )
}

const App = () => {
  console.clear()
  // const-definitions
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}


export default App
