import React, { useState } from 'react'

const Button = ({onClick, text}) => (
  <button onClick = {onClick}>
    {text}
  </button>
)

const StatisticLine = (props) => (
  <p>{props.category}: {props.math}</p>
)

const Statistics = ({good, bad, neutral, all}) => {
  if(all === 0){
    return(
      <div>
        <p>No feedback given yet. Please vote for something.</p>
      </div>
    )
  }

  return(
    <div>
      <StatisticLine category="Good" math={good}/>
      <StatisticLine category="Neutral" math={neutral}/>
      <StatisticLine category="Bad" math={bad}/>
      <StatisticLine category="All" math={all}/>
      <StatisticLine category="Average" math={(good - bad) / all}/>
      <StatisticLine category="Positive" math={(good * 100 / all) + " %"}/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  const all = good + bad + neutral

  return (
    <div>
      <h1>Give feedback:</h1>
      <Button text="Good" onClick={increaseGood}/>
      <Button text="Neutral" onClick={increaseNeutral}/>
      <Button text="Bad" onClick={increaseBad}/>

      <h1>Stats:</h1>
      <Statistics good={good} bad={bad} neutral={neutral} all={all}/>
    </div>
  )
}

export default App