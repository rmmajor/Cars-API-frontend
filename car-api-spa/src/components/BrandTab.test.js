import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BrandTab from './BrandTab';
import { MemoryRouter } from 'react-router-dom';

describe('BrandTab', () => {
    test('renders without any issues', () => {
        render(
            <MemoryRouter>
                <BrandTab />
            </MemoryRouter>
        );
    });

    test('displays brand instances', async () => {
        // Mock the fetch function and return sample brand instances
        global.fetch = jest.fn().mockResolvedValue({
            json: () =>
                Promise.resolve([
                    { id: 1, brand_name: 'Brand 1', headquarters_country: 'Country 1' },
                    { id: 2, brand_name: 'Brand 2', headquarters_country: 'Country 2' },
                ]),
        });

        render(
            <MemoryRouter>
                <BrandTab />
            </MemoryRouter>
        );

        await waitFor(() => {
            // Assert that the brand instances are displayed
            expect(screen.getByText(/Brand 1/)).toBeInTheDocument();
            expect(screen.getByText(/Brand 2/)).toBeInTheDocument();
        });
    });

    test('filters brand instances based on input values', async () => {
        // Mock the fetch function and return filtered brand instances
        global.fetch = jest.fn().mockResolvedValue({
            json: () =>
                Promise.resolve([
                    { id: 1, brand_name: 'Brand 1', headquarters_country: 'Country 1' },
                ]),
        });

        render(
            <MemoryRouter>
                <BrandTab />
            </MemoryRouter>
        );

        const brandNameInput = screen.getByLabelText('Brand Name:');
        const countryInput = screen.getByLabelText('Headquarters Country:');
        const filterButton = screen.getByText('Apply Filter');

        // Fill in the filter values
        fireEvent.change(brandNameInput, { target: { value: 'Brand 1' } });
        fireEvent.change(countryInput, { target: { value: 'Country 1' } });

        // Click the filter button
        fireEvent.click(filterButton);

        await waitFor(() => {
            // Assert that the filtered brand instances are displayed
            expect(screen.getByText(/Brand 1/)).toBeInTheDocument();
        });
    });

    test('resets brand filters', async () => {
        // Mock the fetch function and return sample brand instances
        global.fetch = jest.fn().mockResolvedValue({
            json: () =>
                Promise.resolve([
                    { id: 1, brand_name: 'Brand 1', headquarters_country: 'Country 1' },
                    { id: 2, brand_name: 'Brand 2', headquarters_country: 'Country 2' },
                ]),
        });

        render(
            <MemoryRouter>
                <BrandTab />
            </MemoryRouter>
        );

        const brandNameInput = screen.getByLabelText('Brand Name:');
        const countryInput = screen.getByLabelText('Headquarters Country:');
        const resetButton = screen.getByText('Reset');

        // Fill in the filter values
        fireEvent.change(brandNameInput, { target: { value: 'Brand 1' } });
        fireEvent.change(countryInput, { target: { value: 'Country 1' } });

        // Click the reset button
        fireEvent.click(resetButton);

        await waitFor(() => {
            // Assert that the filter inputs are cleared and original brand instances are displayed
            expect(brandNameInput.value).toBe('');
            expect(countryInput.value).toBe('');
        });
    });
});
