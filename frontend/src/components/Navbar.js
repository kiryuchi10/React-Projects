import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  // Simulating a logged-in user
  const user = { name: 'John Doe' };
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout functionality here
    console.log('Logout clicked');
    navigate('/pages/Login/LogIn'); // Navigate to the sign-in page after logout
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My App
        </Typography>
        {user && (
          <>
            <Typography variant="h6" style={{ marginRight: '20px' }}>
              Welcome, {user.name}
            </Typography>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
