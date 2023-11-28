import React, { useEffect, useState } from 'react'

export default function Seven() {
    const [time,setTime] = useState(60);
    useEffect(()=>{
        if(time>0){
         const timer =   setInterval(()=>{
                setTime(time-1)
            },1000)
            return(()=>{
                clearInterval(timer)
            })
        }
    },[time])
  return (

    <div>
      {time}
    </div>
  )
}
