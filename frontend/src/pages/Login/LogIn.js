import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './LogIn.css';  // Import CSS file for additional styling
import axios from 'axios';

const Login = ({ setMessage }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password })
      });
      if (response.ok) {
        const data = await response.json();
        setMessage(`Login successful: ${data.userName}`);
        navigate('/');  // Redirect to home on successful login
      } else {
        setMessage('Login failed');
      }
    } catch (error) {
      setMessage('Login failed');
    }
  };

  return (
    <div className="login">
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form onSubmit={handleLogin} className="login-form">
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">Login</Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate('/')}
          style={{ marginTop: '10px' }}
        >
          Go to Home
        </Button>
        <Typography variant="body2" style={{ marginTop: '10px' }}>
          Don't have an account? <Link to="/Signup">Sign up here</Link>
        </Typography>
      </form>
    </div>
  );
};

export default Login;
