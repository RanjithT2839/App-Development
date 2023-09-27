import React, { useState } from 'react';
import './AdminLogin.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './Redux/UserSlice';

const AdminLogin = () => {
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    setFormdata({ ...formdata, username: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormdata({ ...formdata, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formdata.username.length === 0) {
      alert("Enter Username!");
    } else if (formdata.password.length === 0) {
      alert("Enter Password!");
    } else {
      navigate("/dash");
    }

    dispatch(
      login({
        username: formdata.username,
      })
    );
  };

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            required
            value={formdata.username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            required
            value={formdata.password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <Link to={"/addash"}>
            <button type="submit">Login</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;