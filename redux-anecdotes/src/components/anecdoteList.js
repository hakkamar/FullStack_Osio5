import React from 'react'
import actionFor from './actionCreators'

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
        <div key={anecdote.id}>
          <div> {anecdote.content} </div>
          <div>
            has {anecdote.votes}
            <button key={anecdote.id} onClick={this.aanesta(anecdote.id)}>vote</button>
          </div>
      </div>
      )}
      </ul>
    )
  }
}

export default AnecdoteList