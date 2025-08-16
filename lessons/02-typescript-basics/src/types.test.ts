import { describe, it, expect } from 'vitest'
import { safeParseInt, ok, err } from './types'

describe('safeParseInt', () => {
  it('parses a valid integer', () => {
    const r = safeParseInt('42')
    expect(r.ok).toBe(true)
    if (r.ok) expect(r.value).toBe(42)
  })
  it('returns error for NaN', () => {
    const r = safeParseInt('nope')
    expect(r.ok).toBe(false)
    if (!r.ok) expect(r.error).toBe('NaN')
  })
})
