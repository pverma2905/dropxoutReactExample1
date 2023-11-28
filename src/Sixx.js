import React, {useEffect, useState} from 'react'

export default function Sixx() {
    const [todos,setTodos] = useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json =>{
        console.log(json)
        setTodos(json)
      } )
    },[])
  return (
    <div>
      {todos?(todos.title):(<p>Laoding....</p>)}
    </div>
  )
}
