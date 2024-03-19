import React , {useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'
const Login = () => {
    const navigate=useNavigate()
    const[username,setUserName]=useState('')
    const[password,setPassword]=useState('')
    const[userlist,setUserlist]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/user')
        .then(res=>setUserlist(res.data))
        .catch(err=>console.log(err))
    },[])

    const handleLogin=()=>{
        const userExist=userlist.some(u=>u.username===username && u.password===password)
        if(userExist){
          
            navigate('/')
        }
        else{
            alert("Invalid username or password")           
        }
    }
  return (
         <div className="connection">
        <div className="login-page">
    <div className="form" onSubmit={handleLogin}>
    <form className="login-form">
      <h1>Login</h1>
      <input type="text"placeholder="username" value={username} onChange={(e)=>{setUserName(e.target.value)}}/>
      <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <button>login</button>
    </form>
    <Link to="/signup">Don't have an account?Signup</Link>
  </div>
</div>
</div>
  )
}

export default Login;

