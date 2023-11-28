import React from 'react'

export default function Four() {
    const Items = ['item1','items2','items3'];
  return (
    <ul>
      {Items.map((data, index)=>(
        <li key={index}>{data}</li>
      ))}
    </ul>
  )
}
