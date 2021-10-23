import React from 'react'
import Person from './Person'
const PersonList = ({personList}) => {
    return (
        personList.map(person => 
        <Person person={person} key={person.name}/>
        )
    )
}

export default PersonList