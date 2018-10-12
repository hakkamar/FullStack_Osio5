import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counterReducer from './reducer'

const store = createStore(counterReducer)

store.subscribe(() => {
    const storeNow = store.getState()
    console.log(storeNow)
})

const Statistiikka = () => {

  let palautteitaYht = store.getState().good + store.getState().ok + store.getState().bad

  if (palautteitaYht === 0) {
    return (
      <div>
        <h2>stataistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  let hyvia = store.getState().good / palautteitaYht * 100    
  hyvia = hyvia.toFixed(1)

  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td> {store.getState().good} </td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td> {store.getState().ok} </td>
          </tr>
          <tr>
            <td>huono</td>
            <td> {store.getState().bad} </td>
          </tr>
          <tr>
            <td>hyviä</td>
            <td> { hyvia } % </td>
          </tr>
        </tbody>
      </table>

      <button  onClick={e => store.dispatch({ type: 'ZERO' })} >nollaa tilasto</button>
    </div >
  )
}

class App extends React.Component {

  klik = (nappi) => () => {
    store.dispatch({ type: nappi })
  }

  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={this.klik('GOOD')}>hyvä</button>
        <button onClick={this.klik('OK')}>neutraali</button>
        <button onClick={this.klik('BAD')}>huono</button>
        <Statistiikka />
      </div>
    )
  }
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
