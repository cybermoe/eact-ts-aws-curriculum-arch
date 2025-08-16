import React from 'react'
import { createBrowserRouter, RouterProvider, Link, Outlet, useParams } from 'react-router-dom'

function Layout() {
  return (
    <div style={{ padding: 24 }}>
      <nav style={{ marginBottom: 16 }}>
        <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Outlet />
    </div>
  )
}

function Home() { return <h1>Home</h1> }
function Dashboard() {
  const items = ['alpha', 'beta', 'gamma']
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>{items.map(i => <li key={i}><Link to={`/detail/${i}`}>{i}</Link></li>)}</ul>
    </div>
  )
}
function Detail() {
  const { id } = useParams()
  return <h1>Detail: {id}</h1>
}

const router = createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    { index: true, element: <Home /> },
    { path: 'dashboard', element: <Dashboard /> },
    { path: 'detail/:id', element: <Detail /> }
  ]}
])

export default function App() {
  return <RouterProvider router={router} />
}
