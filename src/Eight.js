import React,{useState} from 'react'

export default function Eight() {
    const [input,setInput] = useState(''); 
    const [todos,setTodos] = useState([]); 

    const AddUser = ()=>{
        if(input.trim()!==''){
            setTodos([...todos, input])
            setInput('')
            console.log(input)
        }
       
    }

    const removeTodo = (id)=>{
       let updateTodos = todos.filter((data,i)=>i!==id);
       setTodos(updateTodos)
    }
  return (
    <div>
      <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} />
      <button onClick={AddUser}>Add</button>
      <ul>
        {todos.map((data,index)=>(
            <li key={index}>{data} <button onClick={()=>removeTodo(index)}>Remove</button></li>
        ))}
        
      </ul>
    </div>
  )
}
