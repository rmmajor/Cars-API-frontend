import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css'; // styles for the whole app

import Header from './components/Header';
import SignOptions from './components/SignOptions';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import UserProfile from "./components/UserProfile";
import BrandTab from "./components/BrandTab";
import ModelTab from "./components/ModelTab";
import CarTab from "./components/CarTab";

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route path="/brands" element={<BrandTab />} />
                <Route path="/models" element={<ModelTab />} />
                <Route path="/cars" element={<CarTab />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/" element={<SignOptions />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
