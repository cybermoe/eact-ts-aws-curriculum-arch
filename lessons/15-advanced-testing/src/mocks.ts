import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/greet', () => HttpResponse.json({ message: 'Hello from MSW' }))
]
