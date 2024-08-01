import React, { useState } from 'react';
<<<<<<< Updated upstream
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
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Signup from './Signup';
import Login from './Login';

const App = () => {
    const [message, setMessage] = useState('');

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login setMessage={setMessage} />} />
                </Routes>
                {message && <div className="message">{message}</div>}
            </div>
        </Router>
    );
};
>>>>>>> Stashed changes

export default App;
