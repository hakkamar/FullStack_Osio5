import React from 'react';
import actionFor from './actionCreators'

class App extends React.Component {

  addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    
    this.props.store.dispatch(
      actionFor.anecdoteCreation(content)
    )
    event.target.anecdote.value = ''
  }

  aanesta = (id) => () => {
    this.props.store.dispatch(
      actionFor.lisaaAani(id)
    )
  }

  render() {
    var anecdotes = this.props.store.getState()
    anecdotes = anecdotes.sort(function(a, b){return b.votes - a.votes})    

    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes}
              <button key={anecdote.id} onClick={this.aanesta(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form onSubmit={this.addAnecdote}>
          <div><input name="anecdote" /></div>
          <button type="submit">create</button> 
        </form>
      </div>
    )
  }
}

export default App