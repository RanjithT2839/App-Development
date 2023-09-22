import React, { useEffect, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import "./login.css"

function Login() {
  const nav=useNavigate()
  const[username,setUsername]=useState('');
  const[password,setpassword]=useState('');
  
  
  const authenticate=(e)=>{
    e.preventDefault()
  
 if(username.length===0){
  alert("Enter Username")
 }
 else if(password.length===0){
  alert("Enter password")
 }
  else {
    nav("/")
  }
}
  return (
    <div id="body">
    <div className="signup-form">
    <div className="container">
      <div id="header">
      <h1>The Story Seeds</h1>
        <h>Login</h>
      </div>
   
      <form>
        <div className="input">
          <i className="fa-solid fa-user"></i>
          <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
        </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Password" />
        </div>
        <input onClick={authenticate} className="signup-btn" type="submit" value="LOGIN" />
      </form>
    <Link to="/signup">  <p>No Account? Signup Now!</p></Link>
      
    </div>
  </div>
  </div>
  )
}

export default Login;