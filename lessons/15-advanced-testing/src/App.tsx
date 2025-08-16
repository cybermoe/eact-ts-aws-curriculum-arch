import React, { useEffect, useState } from 'react'

export default function App() {
  const [msg, setMsg] = useState<string>('')
  useEffect(() => { fetch('/api/greet').then(r => r.json()).then(d => setMsg(d.message)) }, [])
  return <p role="status">{msg || 'Loading…'}</p>
}
