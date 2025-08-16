import React from 'react'
import { createBrowserRouter, RouterProvider, Link, Outlet, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './auth'

function Protected({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  return user ? <>{children}</> : <Navigate to="/login" replace />
}
function Login() {
  const { signIn } = useAuth()
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => signIn('demo','demo')}>Sign In (mock)</button>
    </div>
  )
}
function Home() { return <h1>Home (Public)</h1> }
function Secret() { return <h1>Top Secret</h1> }

function Layout() {
  return (
    <div style={{ padding: 24 }}>
      <nav><Link to="/">Home</Link> | <Link to="/secret">Secret</Link></nav>
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    { index: true, element: <Home /> },
    { path: 'login', element: <Login /> },
    { path: 'secret', element: <Protected><Secret /></Protected> }
  ]}
])

export default function App() {
  return <AuthProvider><RouterProvider router={router} /></AuthProvider>
}
