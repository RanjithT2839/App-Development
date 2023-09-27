import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import "./login.css"
import { useDispatch } from "react-redux";
import { login } from './Redux/UserSlice';

function Login(){

const handleChange = (e) => {
  setFormdata({ ...formdata, [e.target.name]: e.target.value });
  console.log(formdata);
};
const [formdata, setFormdata] = useState({
  username: "",
  password: "",
});
const dispatch = useDispatch();
    const navigate=useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      if(formdata.username.length===0){
        alert("Enter Username!")
      }
      else if(formdata.password.length===0){
        alert("Enter Password!")
      }
   else{
      navigate("/dash");
   }
      dispatch(
        login({
          username: formdata.username,
        })
      );
    };
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
          <input type="text" name='username' required value={formdata.username}
          onChange={handleChange} placeholder="Username" />
        </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password" name='password' required value={formdata.password}
          onChange={handleChange} placeholder="Password" />
        </div>
       <input onClick={handleSubmit}  className="signup-btn" type="submit" value="LOGIN" />
      <Link to={"/admin"}> <input className="signup-btn" type="submit" value="ADMIN LOGIN" /></Link>
      </form>
      <Link to="/signup">  <p>No Account? Signup Now!</p></Link>
      
      </div>
      </div>
      </div>
      )
    }
    
    export default Login;