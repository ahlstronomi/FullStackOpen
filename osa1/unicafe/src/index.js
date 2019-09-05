import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  const action = props.action
  const text = props.text
  return (
    <>
      <button onClick={action}>{text}</button>
    </>
  )
}

const Statistics = (props) => {
  const goods = props.goods
  const neutrals = props.neutrals
  const bads = props.bads

  const calculateAvg = () => {
    const result = (goods + -bads) / (goods + neutrals + bads)
    return result
  }

  if (goods > 0 || neutrals > 0 || bads > 0) {
    return (
      <>
        <table>
          <tbody>
            <tr>
              <td>good</td>
              <td>{goods}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>{neutrals}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td>{bads}</td>
            </tr>
            <tr>
              <td>All</td>
              <td>{goods + neutrals + bads}</td>
            </tr>
            <tr>
              <td>Avg</td>
              <td>{calculateAvg()}</td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }

  return (
    <>
      <p>No feedback given</p>
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
      <Button action={handleGoodClick} text="good" />
      <Button action={handleNeutralClick} text="neutral" />
      <Button action={handleBadClick} text="bad" />
      <h1>Statistics</h1>
      <Statistics goods={good} neutrals={neutral} bads={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
