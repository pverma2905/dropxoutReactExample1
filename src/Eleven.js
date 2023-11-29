import React from 'react'

export default function Eleven() {
    let names=['amit','abhishk','pranav','shalaj','chetan','ravi','priyanka'];
    const randomIndex = Math.floor(Math.random()*names.length);
    const name = names[randomIndex];
  return (
    <div>
      {name}
    </div>
  )
}
