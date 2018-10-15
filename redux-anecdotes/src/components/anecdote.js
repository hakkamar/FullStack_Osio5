import React from 'react'

const Anecdote = ({anecdote, handleClick}) => {
  return(
    <div>
      <div> {anecdote.content} </div>
      <div>
        has {anecdote.votes}
        <button key={anecdote.id} onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

export default Anecdote