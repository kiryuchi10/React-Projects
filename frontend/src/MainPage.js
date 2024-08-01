// src/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className="main-page">
            <h1>Welcome to the Main Page</h1>
            <nav>
                <ul>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default MainPage;
