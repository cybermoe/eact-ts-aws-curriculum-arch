import { render, screen } from '@testing-library/react'
import React from 'react'
import App from './App'

it('renders greeting', () => {
  render(<App />)
  expect(screen.getByText(/Vite \+ React \+ TypeScript/i)).toBeInTheDocument()
})
