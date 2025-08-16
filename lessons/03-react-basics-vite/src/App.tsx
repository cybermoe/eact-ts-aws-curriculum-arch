import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const [todo, setTodo] = useState('')
  const [items, setItems] = useState<string[]>([])

  return (
    <div style={{ padding: 24, maxWidth: 640 }}>
      <h1>React Basics – Counter + Todos</h1>

      <section>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
        <button onClick={() => setCount(c => c - 1)} style={{ marginLeft: 8 }}>Decrement</button>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Todos</h2>
        <form onSubmit={e => { e.preventDefault(); if (todo.trim()) { setItems([todo.trim(), ...items]); setTodo('') } }}>
          <input
            placeholder="Add todo…"
            value={todo}
            onChange={e => setTodo(e.target.value)}
          />
          <button type="submit" style={{ marginLeft: 8 }}>Add</button>
        </form>
        <ul>
          {items.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
