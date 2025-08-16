import React, { useEffect, useState } from 'react'

const API = import.meta.env.VITE_API_URL as string

export default function App() {
  const [msg, setMsg] = useState<string>('')
  useEffect(() => {
    fetch(API).then(r => r.json()).then(d => setMsg(d.message)).catch(() => setMsg('error'))
  }, [])
  return (
    <div style={{ padding: 24 }}>
      <h1>Lambda says:</h1>
      <p role="status">{msg || 'Loading…'}</p>
    </div>
  )
}
