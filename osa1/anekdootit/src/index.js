import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  const onClick = props.onClick
  const text = props.text

  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )

}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(6).fill(0))

  const changeTheAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * (anecdotes.length))
    setSelected(randomNumber)
  }

  const voteAnecdote = () => {
    console.log("selected", selected)
    const newVote = [...votes]
    newVote[selected] += 1
    setVotes(newVote)
  }

  const anecdoteWithMostVotes = votes.indexOf(Math.max.apply(null, votes))
  console.log("votes", votes)
  console.log("Winning amount", Math.max.apply(null, votes))
  console.log("Index", anecdoteWithMostVotes)

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick={changeTheAnecdote} text="New anecdote" />
      <Button onClick={voteAnecdote} text="Vote" />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[anecdoteWithMostVotes]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]




ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
