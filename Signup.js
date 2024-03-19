import React,{useState} from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom'
import './Signup.css'
const Signup = () => {
    const[username,setUserName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleSignup=()=>{
        axios.post('http://localhost:3001/user',
        {"username":username,"email":email,"password":password})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <br></br>
        <br></br>
          <div class="math">
          <div class="card_title">
            <h1>Create Account</h1>
          </div>
          <div class="form">
          <form onSubmit={handleSignup} action="/">
            <input type="text" placeholder="username"value={username} onChange={(e)=>{setUserName(e.target.value)}}/>
            <input type="email"  placeholder="email"value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <button>Sign Up</button>
            <center><Link to="/login">Already have an account?Log in</Link></center>
            </form>
          </div>
    </div>
    </div>
  )
}

export default Signup

