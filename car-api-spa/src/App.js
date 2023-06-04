import React from 'react';
import './index.css';
import Header from './components/Header';
import SignOptions from './components/SignOptions';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import ModelsFilterForm from './components/ModelsFilterForm';
import CarsFilterForm from './components/CarsFilterForm';
import UserProfile from "./components/UserProfile";
import BrandTab from "./components/BrandTab";
import ModelTab from "./components/ModelTab";
import CarTab from "./components/CarTab";

function App() {
  return (
    <div className="App">
        <Header/>
        <CarTab/>

        {/*<div>*/}
        {/*    <UserProfile*/}
        {/*        username='JohnDoe'*/}
        {/*        password='********'*/}
        {/*        email='johndoe@example.com'*/}
        {/*    />*/}
        {/*</div>*/}
    </div>
  );
}

export default App;
