import React from 'react';
import './Top.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './Redux/UserSlice';
function Top() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // Check if user is not null before accessing its properties
  const username = user ? user.username : "Guest";
    return (
      <div className="taskbar">
        <div className='logo'>
          <img
            src='https://cdn-icons-png.flaticon.com/128/880/880441.png'
            alt='Logo' // Don't forget to add alt text for accessibility
            className='logo-image' // Add a class name for styling
          />
        </div>
        <div className='user-logo'>
          <img
            src='https://cdn-icons-png.flaticon.com/128/3135/3135715.png' // Replace with the URL of the user's avatar
            alt='User Avatar' // Add alt text for the user's avatar
            className='user-avatar' // Add a class name for styling
          />
          <span className='user-name'>{username}</span> {/* Replace with the user's name */}
        </div>
      </div>
    );
  }
  

export default Top;