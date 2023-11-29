import React, { useState } from 'react'

export default function Nine() {
    const [backgroundColor,setBackGroundColor]=useState('white');
    const handleClick =()=>{
        const newColor = backgroundColor==='white'?'red':'white'
        setBackGroundColor(newColor)
    }
  return (
    <div onClick={handleClick} style={{backgroundColor, width:'200px',height:'200px',cursor:'pointer'}}>
      Click me to change color
    </div>
  )
}
