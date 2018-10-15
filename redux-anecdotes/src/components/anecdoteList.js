import React from 'react'
import actionFor from './actionCreators'
import Anecdote from './anecdote'

class AnecdoteList extends React.Component {
  aanesta = (id) => () => {
    this.props.store.dispatch(
      actionFor.lisaaAani(id)
    )
  }    
  
  render() {
    var anecdotes = this.props.store.getState()
    anecdotes = anecdotes.sort(function(a, b){return b.votes - a.votes})     
    return( 
      <ul>
        {anecdotes.map( anecdote =>
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={this.aanesta(anecdote.id)}
          />
        )}
      </ul>
    )
  }
}

export default AnecdoteList