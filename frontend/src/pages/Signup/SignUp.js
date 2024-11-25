import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';  // Import CSS file for additional styling
import axios from 'axios';

const SignUp = () => {
    const [userNo, setUserNo] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [branchId, setBranchId] = useState('');
    const [authCode, setAuthCode] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // Add state to manage submitting status
    const navigate = useNavigate();

    const isFormValid = () => {
        return userNo && userName && password && branchId && authCode;
    };

    const handleSignUp = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (!isFormValid()) {
            alert('Please fill in all fields');
            return;
        }
        
        setIsSubmitting(true); // Set submitting state to true

        try {
            const response = await axios.post('http://localhost:8080/api/signup', {
                userNo: userNo,
                userName: userName,
                password: password,
                branchId: branchId,
                authCode: authCode
            });
            alert(response.data);
            navigate('/'); // Navigate to home on successful sign-up
        } catch (error) {
            console.error(error);
            alert('Sign-up failed. Please try again.');
        } finally {
            setIsSubmitting(false); // Reset submitting state
        }
    };

    return (
        <div className="signUp">
            <Typography variant="h4" gutterBottom>Sign Up</Typography>
            <form onSubmit={handleSignUp}>
                <TextField
                    label="User Number"
                    type="number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={userNo}
                    onChange={(e) => setUserNo(e.target.value)}
                    required
                />
                <TextField
                    label="User Name"
                    type="text"
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
                <TextField
                    label="Branch ID"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={branchId}
                    onChange={(e) => setBranchId(e.target.value)}
                    required
                />
                <TextField
                    label="Auth Code"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={authCode}
                    onChange={(e) => setAuthCode(e.target.value)}
                    required
                />
                <Button 
                    type="submit" // Ensure this button submits the form
                    variant="contained" 
                    color="primary"
                    disabled={isSubmitting || !isFormValid()} // Disable button if form is invalid or submitting
                    style={{ marginTop: '20px' }}
                >
                    {isSubmitting ? 'Submitting...' : 'Sign Up'}
                </Button>
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={() => navigate('/')}
                    style={{ marginTop: '10px' }}
                >
                    Go to Home
                </Button>
            </form>
        </div>
    );
};

export default SignUp;
