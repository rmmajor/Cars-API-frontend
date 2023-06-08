import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import {MemoryRouter, Route, Routes, useNavigate} from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginForm from "./LoginForm";
import SignOptions from "./SignOptions";



describe('RegistrationForm', () => {

    test('submits the form and navigates to the login page on successful registration', async () => {
        const TestComponent = () => {
            const navigate = useNavigate();

            const handleRegisterClick = () => {
                // Simulate successful registration
                navigate('/login');
            };

            return <RegistrationForm handleRegisterClick={handleRegisterClick} />;
        };

        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<TestComponent />} />
                    <Route path="/login" element={<LoginForm />} />
                </Routes>
            </MemoryRouter>
        );

        // Assert that the registration form is rendered
        const usernameInput = screen.getByLabelText('Username:');
        const emailInput = screen.getByLabelText('Email:');
        const passwordInput = screen.getByLabelText('Password:');
        const confirmPasswordInput = screen.getByLabelText('Confirm Password:');
        const registerButton = screen.getByText('Register');

        // Fill out the form
        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(emailInput, { target: { value: 'testuser@gmail.com' } });
        fireEvent.change(passwordInput, { target: { value: 'testuser' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'testuser' } });

        // Submit the form
        fireEvent.click(registerButton);

        // Wait for the registration to complete and navigate to the login page
        await waitFor(() => {
            expect(screen.getByTestId('login-form')).toBeInTheDocument();
        });
    });

    test('cancel click navigation', async () => {
        render(
            <MemoryRouter initialEntries={['/register']}>
                <Routes>
                    <Route path="/" element={<SignOptions />} />
                    <Route path="/register" element={<RegistrationForm />} />
                    <Route path="/login" element={<LoginForm />} />
                </Routes>
            </MemoryRouter>
        );

        const cancelButton = screen.getByText('Cancel');

        fireEvent.click(cancelButton);

        await waitFor(() => {
            expect(window.location.pathname).toBe('/');
        });
    });

    test('displays an error message on failed registration', async () => {
        // Mock the `window.alert()` method
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

        render(
            <MemoryRouter>
                <RegistrationForm />
            </MemoryRouter>
        );

        const registerButton = screen.getByText('Register');

        // Submit the form without filling in the inputs
        fireEvent.click(registerButton);

        // Wait for the registration to fail and the alert to be called
        await waitFor(() => {
            expect(alertMock).toHaveBeenCalledTimes(1);
        });

        // Check the content of the alert message
        expect(alertMock).toHaveBeenCalledWith(
            // eslint-disable-next-line no-multi-str
        "username: This field may not be blank.\nemail: This field may not be blank.\npassword: This field may not be blank.\nconfirmed_password: This field may not be blank.");

        // Restore the original `window.alert()` method
        alertMock.mockRestore();
    });

});
