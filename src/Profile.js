import React from 'react'
import './Profile.css';
import {useSelector } from 'react-redux/es/hooks/useSelector'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout, selectUser } from './redux/UserSlice';

export default function Profile() {
  const user=useSelector(selectUser)
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleLogout=()=>
  {
    dispatch(logout());
 
    navigate("/sign-in");
  }
  if(!user)
  {
    navigate('/')
    return null;
  }
  return (
    <>
  
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<center><h1>Your Profile</h1></center>
  <div class="profile-card">
    <h1>{user.Username}</h1>
    <ul>
      <li><strong>Email: </strong>karthikmpk@gmail.com{user.Password}</li>
      <li><strong>Phone:</strong> 9876543210</li>
      <li><strong>Location:</strong> Coimbatore, TamilNadu</li>
    </ul>
    <button onClick={handleLogout}>Logout</button>
   
  </div>

    </>
  )
}