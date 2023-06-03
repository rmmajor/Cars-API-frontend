import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="header-top">
                <a href="#" className="header-logo" onClick={() => window.location.href='cars.html'}>
                    CarAPI
                </a>
                <div className="header-right">
                    <a href="user_profile.html" className="profile-link">John Doe</a>
                    <button className="logout-button" onClick={() => window.location.href='register_or_login.html'}>
                        Log out
                    </button>
                    <button className="menu-toggle-button">&#9776;</button>
                </div>
            </div>
            <div className="header-bottom">
                <span>Search by: </span>
                <div className="tabs">
                    <button className="tab-button active" onClick={() => window.location.href='brands.html'}>Brand</button>
                    <button className="tab-button" onClick={() => window.location.href='models.html'}>Model</button>
                    <button className="tab-button" onClick={() => window.location.href='cars.html'}>Car</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
