import { render, screen } from '@testing-library/react'
import React from 'react'
import App from './App'

it('shows mocked greeting', async () => {
  render(<App />)
  expect(await screen.findByRole('status')).toHaveTextContent(/hello from msw/i)
})
