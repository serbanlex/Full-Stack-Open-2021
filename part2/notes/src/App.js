import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  
  /*The Effect Hook lets you perform side effects in function components. 
  Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.
  By default, effects run after every completed render, but you can choose to fire it only when certain values have changed.
  Daca pui [] atunci iti ruleaza doar la primu render.
  */
  const hook = () => {
    console.log('effect')
  
    const eventHandler = response => {
      console.log('promise fulfilled')
      setNotes(response.data)
    }
  
    const promise = axios.get('http://localhost:3001/notes')
    promise.then(eventHandler)
  }
  
  useEffect(hook, [])

  console.log('render', notes.length, 'notes')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>   
      <ul>
        {notesToShow.map(note => 
            <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>  
    </div>
  )
}

export default App