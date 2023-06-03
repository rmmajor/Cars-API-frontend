import React from 'react';
import './index.css';
import Header from './components/header';
import SignOptions from './components/SignOptions';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import BrandsFilterForm from './components/BrandsFilterForm';
import ModelsFilterForm from './components/ModelsFilterForm';
import CarsFilterForm from './components/CarsFilterForm';
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="App">
        <Header/>


        <div>
            <UserProfile
                username='JohnDoe'
                password='********'
                email='johndoe@example.com'
            />
        </div>
    </div>
  );
}

export default App;
