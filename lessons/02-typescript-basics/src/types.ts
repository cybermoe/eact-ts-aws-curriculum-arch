export interface User {
  id: string
  name: string
  email?: string
}

export type Result<T> = { ok: true; value: T } | { ok: false; error: string }

export function ok<T>(value: T): Result<T> {
  return { ok: true, value }
}
export function err<T = never>(error: string): Result<T> {
  return { ok: false, error }
}

export function safeParseInt(input: string | number): Result<number> {
  const n = typeof input === 'number' ? input : Number.parseInt(input, 10)
  return Number.isNaN(n) ? err('NaN') : ok(n)
}
