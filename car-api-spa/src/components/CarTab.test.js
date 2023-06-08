import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CarTab from './CarTab';
import { MemoryRouter } from 'react-router-dom';

describe('CarTab', () => {

    test('renders without any issues', () => {
        render(
            <MemoryRouter>
                <CarTab />
            </MemoryRouter>
        );
    });

    test('displays car instances', async () => {
        // Mock the fetch function and return sample car instances
        global.fetch = jest.fn().mockResolvedValue({
            json: () =>
                Promise.resolve([
                    { id: 1, brand_name: 'Brand 1', model_name: 'Model 1' },
                    { id: 2, brand_name: 'Brand 2', model_name: 'Model 2' },
                ]),
        });

        render(
            <MemoryRouter>
                <CarTab />
            </MemoryRouter>
        );

        await waitFor(() => {
            // Assert that the car instances are displayed
            expect(screen.getByText(/Brand 1/)).toBeInTheDocument();
            expect(screen.getByText(/Model 1/)).toBeInTheDocument();
            expect(screen.getByText(/Brand 2/)).toBeInTheDocument();
            expect(screen.getByText(/Model 2/)).toBeInTheDocument();
        });
    });

    test('filters car instances based on input values', async () => {
        // Mock the fetch function and return filtered car instances
        global.fetch = jest.fn().mockResolvedValue({
            json: () =>
                Promise.resolve([
                    { id: 1, brand_name: 'Brand 1', model_name: 'Model 1' },
                ]),
        });

        render(
            <MemoryRouter>
                <CarTab />
            </MemoryRouter>
        );

        const brandFilterInput = screen.getByLabelText('Brand Name:');
        const modelFilterInput = screen.getByLabelText('Model Name:');
        const filterButton = screen.getByText('Apply Filter');

        // Fill in the filter values
        fireEvent.change(brandFilterInput, { target: { value: 'Brand 1' } });
        fireEvent.change(modelFilterInput, { target: { value: 'Model 1' } });

        // Click the filter button
        fireEvent.click(filterButton);

        await waitFor(() => {
            // Assert that the filtered car instances are displayed
            expect(screen.getByText(/Brand 1/)).toBeInTheDocument();
            expect(screen.getByText(/Model 1/)).toBeInTheDocument();
        });
    });

    test('resets car filters', async () => {
        // Mock the fetch function and return sample car instances
        global.fetch = jest.fn().mockResolvedValue({
            json: () =>
                Promise.resolve([
                    { id: 1, brand_name: 'Brand 1', model_name: 'Model 1' },
                    { id: 2, brand_name: 'Brand 2', model_name: 'Model 2' },
                ]),
        });

        render(
            <MemoryRouter>
                <CarTab />
            </MemoryRouter>
        );

        const brandFilterInput = screen.getByLabelText('Brand Name:');
        const modelFilterInput = screen.getByLabelText('Model Name:');
        const resetButton = screen.getByText('Reset');

        // Fill in the filter values
        fireEvent.change(brandFilterInput, { target: { value: 'Brand 1' } });
        fireEvent.change(modelFilterInput, { target: { value: 'Model 1' } });

        // Click the reset button
        fireEvent.click(resetButton);

        await waitFor(() => {
            // Assert that the filter inputs are cleared and all car instances are displayed
            expect(brandFilterInput.value).toBe('');
            expect(modelFilterInput.value).toBe('');
            expect(screen.getByText(/Brand 1/)).toBeInTheDocument();
            expect(screen.getByText(/Model 1/)).toBeInTheDocument();
            expect(screen.getByText(/Brand 2/)).toBeInTheDocument();
            expect(screen.getByText(/Model 2/)).toBeInTheDocument();
        });
    });
});
