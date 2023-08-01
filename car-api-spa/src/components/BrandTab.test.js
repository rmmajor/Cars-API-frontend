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
            expect(screen.getByText(/Brand 1/)).toBeInTheDocument();
        });
    });

    test('filters brand instances based on input values', async () => {
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

        fireEvent.change(brandNameInput, { target: { value: 'Brand 1' } });
        fireEvent.change(countryInput, { target: { value: 'Country 1' } });

        fireEvent.click(filterButton);

        await waitFor(() => {
            expect(screen.getByText(/Brand 1/)).toBeInTheDocument();
        });
    });

    test('resets brand filters', async () => {
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

        fireEvent.change(brandNameInput, { target: { value: 'Brand 1' } });
        fireEvent.change(countryInput, { target: { value: 'Country 1' } });

        fireEvent.click(resetButton);

        await waitFor(() => {
            expect(brandNameInput.value).toBe('');
        });
    });
});
