import React, { useEffect, useState } from 'react'

type Form = { name: string; email: string }
const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function App() {
  const [form, setForm] = useState<Form>({ name: '', email: '' })
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({})
  const [submitted, setSubmitted] = useState<Form | null>(null)

  useEffect(() => {
    const newErrors: typeof errors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!emailRx.test(form.email)) newErrors.email = 'Invalid email'
    setErrors(newErrors)
  }, [form])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (Object.keys(errors).length === 0) setSubmitted(form)
  }

  return (
    <div style={{ padding: 24, maxWidth: 640 }}>
      <h1>Forms with Validation</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label><br />
          <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          {errors.name && <div role="alert">{errors.name}</div>}
        </div>
        <div style={{ marginTop: 12 }}>
          <label>Email</label><br />
          <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          {errors.email && <div role="alert">{errors.email}</div>}
        </div>
        <button style={{ marginTop: 12 }} disabled={Object.keys(errors).length > 0}>Submit</button>
      </form>

      {submitted && (
        <pre style={{ background: '#f6f6f6', padding: 12, marginTop: 16 }}>
{JSON.stringify(submitted, null, 2)}
        </pre>
      )}
    </div>
  )
}
