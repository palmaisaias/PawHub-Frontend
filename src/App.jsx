import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import OwnerForm from './components/OwnerForm';
import DogProfile from './components/DogProfile';
import OwnerProfile from './components/ownerProfile';
import DogAppLogin from './components/DogAppLogin';
import LandingPage from './components/LandingPage';
import NewUserProfile from './components/NewUserProfile';
import Calendar from './components/Calendar';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/owner-form" element={<OwnerForm />} />
          <Route path="/dog-profile" element={<DogProfile />} />
          <Route path="/owner-profile" element={<OwnerProfile />} />
          <Route path="/login" element={<DogAppLogin />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/new-user" element={<NewUserProfile />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>Welcome to Dog App!</h1>
    <p>
      <Link to="/owner-form">Go to Owner Form</Link>
    </p>
    <p>
      <Link to="/dog-profile">Go to Dog Profile</Link>
    </p>
    <p>
      <Link to="/owner-profile">Go to Owner Profile</Link>
    </p>
    <p>
      <Link to="/login">Go to Login</Link>
    </p>
    <p>
      <Link to="/landing">Go to Landing</Link>
    </p>
    <p>
      <Link to="/new-user">Go to New User</Link>
    </p>
    <p>
      <Link to="/calendar">Go to Calendar</Link>
    </p>
  </div>
);

export default App;
