import axios from 'axios';
import {withRouter} from 'react-router-dom';
import React from 'react';
import logo from '../../assets/houser_logo.png';
import './Header.css';

function Header(props) {
  const handleLogout = () => {
    axios.get('/api/logout')
    .then(() => {
      //clear user info
      
      //re-route user to auth page
      props.history.push('/');
    })
    .catch(err => console.log(err));
  }

  return (
    <div className='Header'>
      <img src={logo} alt='logo' />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default withRouter(Header);