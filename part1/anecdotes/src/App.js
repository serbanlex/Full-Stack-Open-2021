import React, { useState } from 'react'

const Button = ({onClick, text}) => (
  <button onClick = {onClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  const [selected, setSelected] = useState(0)

  let initialLikeState = []
  for(let i = 0; i < anecdotes.length; i++)
    initialLikeState[i] = 0;

  const [likes, setLikes] = useState(initialLikeState)

  const selectRandom = () => {
    let random
    do
      random = Math.floor(Math.random() * 10);
    while (random > 6 || random === selected)

    console.log("Have set selected to ", random)
    return setSelected(random)
  }

  const updateLikes = (target) => {
    const likesCopy = [ ...likes ]
    likesCopy[target]+= 1
    console.log("Updated likes on element number" + target + " to " + likesCopy[target])
    return () => setLikes(likesCopy)
  }

  return (
    <div>
      {anecdotes[selected]}
      <br/>
      <p>---{likes[selected]} likes on this anecdote.---</p>
      <Button text="Like" onClick={updateLikes(selected)}/>
      <br/>
      <Button text="Give me another" onClick={selectRandom}/>
      <br/>
    </div>
  )
}

export default App
