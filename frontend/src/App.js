import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Chatbot from './pages/Chatbot';
import MonitoringStatus from './pages/MonitoringStatus';
import AlarmHistory from './pages/AlarmHistory';
import Statistics from './pages/Statistics';
import SignUp from './pages/Signup/SignUp'; // Import SignUp component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="/monitoring-status" element={<MonitoringStatus />} />
              <Route path="/alarm-history" element={<AlarmHistory />} />
              <Route path="/statistics" element={<Statistics />} />
			  <Route path="/signup" element={<SignUp />} /> {/* Add this route */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
