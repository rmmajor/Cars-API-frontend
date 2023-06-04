import React from 'react';
import { Link } from 'react-router-dom';

import UserProfile from './UserProfile';
import BrandTab from './BrandTab';
import ModelTab from './ModelTab';
import CarTab from './CarTab';

const Header = () => {

    return (
        <header>
            <div className="header-top">
                <a href="#" className="header-logo" onClick={() => (window.location.href = 'cars.html')}>
                    CarAPI
                </a>
                <div className="header-right">
                    <Link to="/profile" className="profile-link">
                        John Doe
                    </Link>
                    <button className="logout-button" onClick={() => (window.location.href = 'register_or_login.html')}>
                        Log out
                    </button>
                    <button className="menu-toggle-button">&#9776;</button>
                </div>
            </div>
            <div className="header-bottom">
                <span>Search by: </span>
                <div className="tabs">
                        <Link to="/brands" className="tab-button">
                            Brand
                        </Link>
                        <Link to="/models" className="tab-button">
                            Model
                        </Link>
                        <Link to="/cars" className="tab-button">
                            Car
                        </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
