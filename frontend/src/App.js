import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [activeComponent, setActiveComponent] = useState('login'); // Track which component is active
  const [message, setMessage] = useState('');

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <div className="button-container">
        <button onClick={() => handleComponentChange('login')}>Login</button>
        <button onClick={() => handleComponentChange('signup')}>Signup</button>
      </div>
      <div className="form-container">
        {activeComponent === 'login' && <Login setMessage={setMessage} />}
        {activeComponent === 'signup' && <Signup setMessage={setMessage} />}
      </div>
      <div className="message">{message}</div>
    </div>
  );
}

export default App;
