import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ModelTab from './ModelTab';
import {MemoryRouter} from "react-router-dom";
import {act} from "react-dom/test-utils";

describe('ModelTab', () => {
    test('renders without any issues', () => {
        render(
            <MemoryRouter>
                <ModelTab />
            </MemoryRouter>
        );
    });

    test('displays model instances', async () => {
        // Mock the fetch function and return sample model instances
        global.fetch = jest.fn().mockResolvedValue({
            json: () =>
                Promise.resolve([
                    {id: 1, model_name: "Octavia", issue_year: 2017, body_style: "Sedan"},
                    {id: 2, model_name: "911", issue_year: 2023, body_style: "2-door coupé"},
                ]),
        });

        render(
            <MemoryRouter>
                <ModelTab />
            </MemoryRouter>
        );

        await waitFor(() => {
            // Assert that the model instances are displayed
            expect(screen.getByText(/Octavia/)).toBeInTheDocument();
        });
    });

    test('filters model instances based on input values', async () => {
        // Mock the fetch function and return filtered model instances
        global.fetch = jest.fn().mockResolvedValue({
            json: () =>
                Promise.resolve([
                    {id: 1, model_name: "Octavia", issue_year: 2017, body_style: "Sedan"},
                    {id: 2, model_name: "911", issue_year: 2023, body_style: "2-door coupé"},
                ]),
        });

        render(
            <MemoryRouter>
                <ModelTab />
            </MemoryRouter>
        );
        const modelNameInput = screen.getByLabelText('Model Name:');
        const yearInput = screen.getByLabelText('Issue Year:');
        const bodyStyleInput = screen.getByLabelText('Body Style:');
        const filterButton = screen.getByText('Apply Filter');

        // Fill in the filter values
        fireEvent.change(modelNameInput, { target: { value: 'Octavia' } });
        fireEvent.change(yearInput, { target: { value: '2017' } });
        fireEvent.change(bodyStyleInput, { target: { value: 'Sedan' } });

        // Click the filter button
        fireEvent.click(filterButton);

        await waitFor(() => {
            // Assert that the filtered model instances are displayed
            // expect(screen.getByText('Model 3')).toBeInTheDocument();
            expect(screen.getByText(/Octavia/)).toBeInTheDocument();

        });
    });

    test('resets model filters', async () => {
        // Mock the fetch function and return sample model instances
        global.fetch = jest.fn().mockResolvedValue({
            json: () =>
                Promise.resolve([
                    {id: 1, model_name: "Octavia", issue_year: 2017, body_style: "Sedan"},
                    {id: 2, model_name: "911", issue_year: 2023, body_style: "2-door coupé"},
                ]),
        });

        render(
            <MemoryRouter>
                <ModelTab />
            </MemoryRouter>
        );

        const modelNameInput = screen.getByLabelText('Model Name:');
        const yearInput = screen.getByLabelText('Issue Year:');
        const bodyStyleInput = screen.getByLabelText('Body Style:');
        const resetButton = screen.getByText('Reset');

        // Fill in the filter values
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            /* fire events that update state */
            fireEvent.change(modelNameInput, { target: { value: 'Octavia' } });
            fireEvent.change(yearInput, { target: { value: '2022' } });
            fireEvent.change(bodyStyleInput, { target: { value: 'Sedan' } });
            // Click the reset button

            fireEvent.click(resetButton);

        });

        await waitFor(() => {
            // Assert that the filter inputs are cleared and original model instances are displayed
            expect(modelNameInput.value).toBe('');
            expect(yearInput.value).toBe('');
            expect(bodyStyleInput.value).toBe('');
        });
    });
});
