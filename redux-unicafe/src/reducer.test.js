import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  it('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  it('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })

  it('Other increments works too', () => {
    const state = initialState

    const action = {
      type: 'OK'
    }
    const action2 = {
      type: 'BAD'
    }

    deepFreeze(state)

    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 1,
      bad: 0
    })
    const newState2 = counterReducer(state, action2)
    expect(newState2).toEqual({
      good: 1,
      ok: 1,
      bad: 1
    })
  })  

  it('Zero works', () => {
    const state = {
      good: 1,
      ok: 2,
      bad: 3
    }
    const action = {
      type: 'ZERO'
    }    

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 0
    })
  })  
})