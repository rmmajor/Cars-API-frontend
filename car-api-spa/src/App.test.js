import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import App from './App';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import SignOptions from './components/SignOptions';
import BrandTab from "./components/BrandTab";
import CarTab from "./components/CarTab";
import ModelTab from "./components/ModelTab";

test('renders the app without crashing', () => {
  render(<App />);
});

test('renders the login form', () => {
  render(
      <MemoryRouter initialEntries={['/login']}>
        <LoginForm />
      </MemoryRouter>
  );

  expect(screen.getByText('Login Form')).toBeInTheDocument();
});

test('renders the registration form', () => {
  render(
      <MemoryRouter initialEntries={['/register']}>
        <RegistrationForm />
      </MemoryRouter>
  );

  expect(screen.getByText('Registration Form')).toBeInTheDocument();
});

test('renders the sign options', () => {
  render(
      <MemoryRouter initialEntries={['/']}>
        <SignOptions />
      </MemoryRouter>
  );
  expect(screen.getByText('Please select one of the following options:')).toBeInTheDocument();
});

test('renders the brand tab when authenticated', async () => {
    render(
        <MemoryRouter initialEntries={['/brands']}>
            <BrandTab />
        </MemoryRouter>
    );

    // Wait for the fetch call and state update to complete
    await waitFor(() => {
        expect(screen.getByText('Filter by Brand')).toBeInTheDocument();
    });
});

test('renders the car tab when authenticated', async () => {
    render(
        <MemoryRouter initialEntries={['/cars']}>
            <CarTab />
        </MemoryRouter>
    );

    // Wait for the fetch call and state update to complete
    await waitFor(() => {
        expect(screen.getByText('Cars Found')).toBeInTheDocument();
    });
});

test('renders the model tab when authenticated', async () => {
    render(
        <MemoryRouter initialEntries={['/models']}>
            <ModelTab />
        </MemoryRouter>
    );

    // Wait for the fetch call and state update to complete
    await waitFor(() => {
        expect(screen.getByText('Filter by Model')).toBeInTheDocument();
    });
});

test('redirects to the sign-in page when not authenticated', () => {
    render(
        <MemoryRouter initialEntries={['/brands']}>
            <Routes>
                <Route path="/brands" element={<BrandTab />} />
                <Route path="/" element={<SignOptions />} />
            </Routes>
        </MemoryRouter>
    );

    expect(screen.getByText('Please select one of the following options:')).toBeInTheDocument();
});

// TODO: make same tests for the other tabs
// test('redirects to the sign-in page when not authenticated', () => {
//     render(
//         <MemoryRouter initialEntries={['/brands']}>
//             <Routes>
//                 <Route path="/brands" element={<BrandTab />} />
//                 <Route path="/" element={<SignOptions />} />
//             </Routes>
//         </MemoryRouter>
//     );
//
//     expect(screen.getByText('Please select one of the following options:')).toBeInTheDocument();
// });