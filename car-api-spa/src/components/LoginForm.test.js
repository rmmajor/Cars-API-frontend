import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
    const mockNavigate = jest.fn();
    const mockLocalStorage = {};


    beforeEach(() => {
        mockNavigate.mockClear();
        mockSetItem.mockClear();
        window.localStorage.__proto__.getItem = jest.fn((key) => mockLocalStorage[key]);
    });

    test('successful login redirects to /cars', async () => {
        const { getByPlaceholderText, getByText } = render(<LoginForm navigate={mockNavigate} />);

        fireEvent.change(getByPlaceholderText('Username'), { target: { value: 'testuser' } });
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'testpassword' } });
        fireEvent.click(getByText('Login'));

        await waitFor(() => {
            expect(mockSetItem).toHaveBeenCalledWith('accessToken', 'accessToken');
            expect(mockSetItem).toHaveBeenCalledWith('refreshToken', 'refreshToken');
            expect(mockSetItem).toHaveBeenCalledWith('username', 'testuser');
            expect(mockNavigate).toHaveBeenCalledWith('/cars');
        });
    });

    test('failed login displays alert', async () => {
        const { getByPlaceholderText, getByText, getByRole } = render(<LoginForm />);

        fireEvent.change(getByPlaceholderText('Username'), { target: { value: 'testuser' } });
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'testpassword' } });
        fireEvent.click(getByText('Login'));

        await waitFor(() => {
            expect(mockSetItem).not.toHaveBeenCalled();
            expect(getByRole('alert')).toBeInTheDocument();
        });
    });
});
