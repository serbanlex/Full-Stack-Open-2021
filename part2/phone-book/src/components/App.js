import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PersonList from './PersonList'
import InputEntry from './InputEntry'

const App = () => {
  // person list which updates whenever we update (add/delete) on persons. This one will always be complete and unaltered.
  const [ persons, setPersons ] = useState([])

  // meant to update the searched persons in the phone book, this one will modify on the searching preferences
  const [ filteredPersons, setFilteredPersons ] = useState([])

  useEffect(() => {
    console.log('Fetching persons api data')

    const eventHandler = response => {
      console.log('Successfully fetched persons data.')
      setFilteredPersons(response.data)
      setPersons(response.data)
    }

    axios.get('http://localhost:3001/persons').then(eventHandler)
  }, [])


  // meant to control the form input elements
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  // handling the event of pressing button "add person", by adding it to the person list
  const addPersonHandler = (event) => {
    event.preventDefault()
    
    // see if the person we want to add, already exists in the list
    if(persons.find(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return;
    }

    // using the actual state of the newname (that has been collected throughoutly before pressing add)
    const personObject = {
      name: newName,
      number: newNumber
    }

    setFilteredPersons(persons.concat(personObject))
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  // handling each change of the input elements (what the user writes in the box) - using that to change the state
  // of the element which will be added (kind of a temporary thing)
  const typingNameHandler = (event) => {
    setNewName(event.target.value)
  }

  const typingNumberHandler = (event) => {
    setNewNumber(event.target.value)
  }

  const typingSearchHandler = (event) => {
    // case unsensitive search
    
    let newSearchValue = event.target.value.toLowerCase()

    const filteredPersons = persons.filter(person => person.name.toLowerCase().startsWith(newSearchValue))
    
    setFilteredPersons(filteredPersons)
  }


  return (
    <div>
      <h1>Phonebook App</h1>
      <h2> --- Add someone --- </h2>

      <form>
        <InputEntry name="Name" onChangeHandler={typingNameHandler}/>

        <InputEntry name="Number" onChangeHandler={typingNumberHandler}/>

        <div>
          <button type="submit" onClick={addPersonHandler}>add</button>
        </div>
      </form>

      <h2>--- Search by name --- </h2>
      <InputEntry name="Name to search by" onChangeHandler={typingSearchHandler}/>

      <h2>--- Persons added ---</h2>
      <PersonList personList={filteredPersons}/>
    </div>
  )
}

export default App