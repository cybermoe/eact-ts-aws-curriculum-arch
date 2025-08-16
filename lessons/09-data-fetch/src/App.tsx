import React, { useEffect, useState } from 'react'

type Post = { id: number; title: string }

export default function App() {
  const [posts, setPosts] = useState<Post[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        if (!res.ok) throw new Error('Network error')
        const data = await res.json() as Post[]
        setPosts(data)
      } catch (e: any) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  if (loading) return <p>Loading…</p>
  if (error) return <p role="alert">Error: {error}</p>

  return (
    <div style={{ padding: 24 }}>
      <h1>Posts</h1>
      <ul>
        {posts?.map(p => <li key={p.id}>{p.title}</li>)}
      </ul>
    </div>
  )
}
