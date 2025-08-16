import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import App from './App'

it('greets the user', () => {
  render(<App />)
  const input = screen.getByLabelText(/name/i)
  fireEvent.change(input, { target: { value: 'Moe' } })
  fireEvent.click(screen.getByRole('button', { name: /greet/i }))
  expect(screen.getByRole('status')).toHaveTextContent('Hello, Moe!')
})
