
import React, { useState } from 'react';
import './AdminLogin.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './Redux/UserSlice';

const AdminLogin = () => {
  
const nav=useNavigate();     
const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
    console.log(formdata);
  };
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();   
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform admin authentication here
    if (formdata.username !== 'admin' && formdata.password !== 'password') {
        alert('Login failed. Please check your credentials.');
      
      // Redirect or perform necessary actions for admin access
    } 
    else {
        alert('Login successful');
        nav("/addash")
    }
    dispatch(
        login({
          username: formdata.username,
        })
      );
  };

  return (
    <div className='adminbody'>
    <div className="admin-login">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name='username'
            value={formdata.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name='password'
            value={formdata.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
         <button type="submit" onClick={handleSubmit}>Login</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AdminLogin;
