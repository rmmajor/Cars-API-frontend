import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './index.css'; // styles for the whole app

import Header from './components/Header';
import SignOptions from './components/SignOptions';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import UserProfile from "./components/UserProfile";
import BrandTab from "./components/BrandTab";
import ModelTab from "./components/ModelTab";
import CarTab from "./components/CarTab";
import AreYouSureLogout from "./components/AreYouSureLogout";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Routes>
                {/*protected routes*/}
                <Route path="/brands" element={<BrandTab />} />
                <Route path="/models" element={<ModelTab />} />
                <Route path="/cars" element={<CarTab />} />
                <Route path={"/profile"} element={<UserProfile />} />

                {/*open routes*/}
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/logout" element={<AreYouSureLogout />} />
                <Route path="/" element={<SignOptions />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
