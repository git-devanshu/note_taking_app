
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({tokenState , settokenState}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    settokenState(!tokenState) ;
    navigate('/');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
