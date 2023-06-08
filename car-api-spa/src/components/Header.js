import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem('username');

    const handleLogoutClick = () => {
        navigate('/logout');
    };

    return (
        <header>
            <div className="header-top">
                <a href="#" className="header-logo" onClick={() => (window.location.href = 'cars.html')}>
                    CarAPI
                </a>
                <div className="header-right">
                    <Link to="/profile" className="profile-link">
                        {username ? username : 'Sign In'}
                    </Link>
                    <button className="logout-button" onClick={handleLogoutClick}>
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
