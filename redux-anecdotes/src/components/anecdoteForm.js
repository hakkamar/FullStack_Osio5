import React from 'react'
import actionFor from './actionCreators'

class AnecdoteForm extends React.Component {
  addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
        
    this.props.store.dispatch(
      actionFor.anecdoteCreation(content)
    )
    event.target.anecdote.value = ''
  }
      
  render() {
    return(
      <form onSubmit={this.addAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button> 
      </form>
    )
  }
}

export default AnecdoteForm