import React, { Suspense, lazy } from 'react'

const Heavy = lazy(() => import('./Heavy'))

export default function App() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Performance & Security</h1>
      <Suspense fallback={<p>Loading heavy chunk…</p>}>
        <Heavy />
      </Suspense>
      <p>Prevent XSS: never dangerouslySetInnerHTML with untrusted content.</p>
    </div>
  )
}
