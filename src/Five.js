import React,{useState} from 'react'

export default function Five() {
    const [isToggled,setToggled] = useState(false);
    const handleClick = ()=>{
        setToggled(!isToggled);
    }
  return (
    <div>
      <input type="checkbox" onChange={handleClick} />
      {isToggled?<span>On</span>:<span>Off</span>}    
    </div>
  )
}
