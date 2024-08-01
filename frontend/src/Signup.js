import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [userNo, setUserNo] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        axios.post('http://localhost:8080/api/signup', {
            no: userNo,
            name: userName,
            password: password
        })
        .then(response => {
            alert(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    };

    return (
        <div className="signup">
            <h2>Sign Up</h2>
            <input
                type="number"
                placeholder="User Number"
                onChange={(e) => setUserNo(e.target.value)}
                value={userNo}
            />
            <input
                type="text"
                placeholder="User Name"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
};

export default Signup;
