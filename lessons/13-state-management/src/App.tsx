import React from 'react'
import { Provider } from 'react-redux'
import { store, useAppDispatch, useAppSelector, inc, add } from './store'

function Counter() {
  const v = useAppSelector(s => s.counter.value)
  const d = useAppDispatch()
  return (
    <div>
      <p>Value: {v}</p>
      <button onClick={() => d(inc())}>+1</button>
      <button onClick={() => d(add(5))} style={{ marginLeft: 8 }}>+5</button>
    </div>
  )
}

export default function App() {
  return <Provider store={store}><Counter /></Provider>
}
