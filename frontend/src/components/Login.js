import React, { useState } from 'react';

const Login = ({ setMessage }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',  // Use POST for sending sensitive information like passwords
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, password })  // Send both name and password in the request body
            });
            if (response.ok) {
                const data = await response.text();
                setMessage(`Login successful! Username: ${name}, Password: ${password}`);  // Show username and password
            } else {
                setMessage(`Login failed. Status: ${response.status}`);
            }
        } catch (error) {
            setMessage('Login failed due to an error.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
