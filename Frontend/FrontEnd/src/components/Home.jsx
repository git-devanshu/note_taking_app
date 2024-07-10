import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogOut'  

const Home = () => {
    let token = localStorage.getItem('token') ;
    let [tokenState , settokenState] = useState(token) ;
    return (
        <div>
            <h1>Welcome to Our Website</h1>
            {
                tokenState ? <LogoutButton tokenState = {tokenState} settokenState = {settokenState}></LogoutButton>
                : 
                <div>
                <Link to="/signup">
                    <button>Sign Up</button>
                </Link>
                <Link to="/signin">
                    <button>Login</button>
                </Link>
            </div>

            }
            
        </div>
    );
};

export default Home;
