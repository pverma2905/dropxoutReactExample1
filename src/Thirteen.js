import React, {useState} from 'react'

export default function Thirteen() {

    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [isRegistered, setIsRegistered] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [users, setUsers] = useState([]);
    const handleAuthentication =(e)=>{
        if(isRegistered){
          e.preventDefault()
            console.log("ssssss",users )
            const user = users.find(user=>user.email===email && user.password===password)
            if(user){
                setIsLoggedIn(true)
                setEmail('');
                setPassword('');
            }
            else{
                alert('Login Failed please check your credentials')
            }
        }else{
          e.preventDefault()
            console.log("ssssss1111")
            const newUser = {email, password}
            setUsers([...users, newUser])
            // if(users.length>0){
            localStorage.setItem('users', JSON.stringify(newUser))
            
            setIsRegistered(!isRegistered)
            setEmail('');
            setPassword('');
            // setIsLoggedIn(true)
        }
    }

    const handleLogout = ()=>{
        setIsLoggedIn(false)
        setEmail('');
        setPassword('')
    }

   
  return (
    <div>
        {isLoggedIn?
        (
        <div>
        <h2>Welcome {email}</h2>
        <button onClick={handleLogout}>Logout</button>
        </div>
        )
        :
        <>
        {isRegistered?(
          <div >
        <h2>Login</h2>
      <form>
        <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={(e)=>handleAuthentication(e)}>
        Login
    </button> 
      </form>
      <p><button onClick={()=>setIsRegistered(!isRegistered)}>Don't have an account? Register Now</button></p>
      
        </div>
        ):
        (
          <div >
        <h2>Register</h2>
      <form>
        <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={(e)=>handleAuthentication(e)}>
        Register
    </button> 
      </form>
      <p><button onClick={()=>setIsRegistered(!isRegistered)}>Already have an account? please Log in</button></p>
      
        </div>
        )}
        </>
       
        
         } 
        
    </div>
  )
}
