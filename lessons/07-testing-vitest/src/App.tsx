import React, { useState } from 'react'

export default function App() {
  const [name, setName] = useState('')
  const [greet, setGreet] = useState('')

  return (
    <div style={{ padding: 24 }}>
      <label htmlFor="name">Name</label>
      <input id="name" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setGreet(`Hello, ${name || 'friend'}!`)}>Greet</button>
      {greet && <p role="status">{greet}</p>}
    </div>
  )
}
