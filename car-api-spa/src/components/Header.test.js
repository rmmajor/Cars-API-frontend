import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import BrandTab from "./BrandTab";
import SignOptions from "./SignOptions";
import UserProfile from "./UserProfile";

test('renders the header with sign-in link when not authenticated', () => {
    render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    );

    expect(screen.getByText('CarAPI')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
});

test('renders the header with username and logout button when authenticated', () => {
    // Set the username in local storage to simulate authentication
    localStorage.setItem('username', 'JohnDoe');

    render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    );

    expect(screen.getByText('CarAPI')).toBeInTheDocument();
    expect(screen.getByText('JohnDoe')).toBeInTheDocument();
    expect(screen.getByText('Log out')).toBeInTheDocument();
});


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

test('triggers the logout function when logout button is clicked', () => {
    render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    );

    const logoutButton = screen.getByText('Log out');
    fireEvent.click(logoutButton);

    // Assert that the click event triggers the logout function with the expected argument
    expect(mockNavigate).toHaveBeenCalledWith('/logout');

});

test('renders the profile page when authorized user clicks on profile link', () => {
    // Simulate an authorized user by setting the username in localStorage
    localStorage.setItem('username', 'JohnDoe');

    render(
        <MemoryRouter>
            <Header />
            <Routes>
                <Route path={"/profile"} element={<UserProfile />} />
            </Routes>
        </MemoryRouter>
    );

    const profileLink = screen.getByText('JohnDoe');
    fireEvent.click(profileLink);

    // Assert that the click event triggers the navigate function with the expected argument
    expect(mockNavigate).toHaveBeenCalledWith('/profile');
});

test('redirects to sign options when unauthorized user clicks on profile link', () => {
    render(
        <MemoryRouter>
            <Header />
            <Routes>
                <Route path={"/profile"} element={<UserProfile />} />
            </Routes>
        </MemoryRouter>
    );

    const profileLink = screen.getByText('Sign In');
    fireEvent.click(profileLink);

    // Assert that the click event triggers the navigate function with the expected argument
    expect(mockNavigate).toHaveBeenCalledWith('/');
    // expect(screen.getByText('Please select one of the following options:')).toBeInTheDocument();
});