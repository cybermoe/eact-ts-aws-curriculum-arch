import React from 'react'
export default function Heavy(){
  const items = Array.from({ length: 2000 }, (_, i) => i)
  return <ul>{items.map(i => <li key={i}>Row {i}</li>)}</ul>
}
