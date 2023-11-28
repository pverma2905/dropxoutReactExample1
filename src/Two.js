import React from 'react'
import { useState } from 'react'

export default function Two() {
    const [counter, setCounter] =useState(0)
  return (
    <div>
      <button onClick={()=>setCounter(counter+1)}>Increment</button>
      {counter}
      <button onClick={()=>setCounter(counter-1)}>Decrement</button>
    </div>
  )
}
