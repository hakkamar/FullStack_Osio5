import React from 'react';
import AnecdoteList from './components/anecdoteList'
import AnecdoteForm from './components/anecdoteForm'

class App extends React.Component {
  render() {  
    return (
      <div>
        <h2>Anecdotes</h2>
        <AnecdoteList store={this.props.store} />
        <h2>create new</h2>
        <AnecdoteForm store={this.props.store} />
      </div>
    )
  }
}

export default App