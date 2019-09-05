import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  const action = props.action
  const text = props.text
  return(
      <>
        <button onClick={action}>{text}</button>
      </>
  )
}

const Statistics = (props) => {
  const goods = props.goods
  const neutrals = props.neutrals
  const bads = props.bads

  return(
    <>
      <p>good {goods}</p>
      <p>neutral {neutrals}</p>
      <p>bad {bads}</p>
    </>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button action={handleGoodClick} text="good"/>
      <Button action={handleNeutralClick} text="neutral"/>
      <Button action={handleBadClick} text="bad"/>
      <h1>Statistics</h1>
      <Statistics goods={good} neutrals={neutral} bads={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
