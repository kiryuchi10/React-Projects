import React, { useState } from 'react';
import Login from './Login/LogIn';  // Import the Login component

const Home = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="home-container">
      <Login setMessage={setMessage} />
      {message && <div className="message">{message}</div>}  {/* Display login message */}
    </div>
  );
};

export default Home;
