import React, { useState } from 'react';

function Login({ setMessage }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        params: { name },
      });
      if (response.ok) {
        const data = await response.text();
        setMessage(data);
      } else {
        setMessage('Login failed');
      }
    } catch (error) {
      setMessage('Login failed');
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
}

export default Login;
