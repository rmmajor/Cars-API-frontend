import React from 'react';

const ModelsFilterForm = () => {
    const filterCars = () => {
        // Add your logic to filter cars here
    };

    return (
        <div className="models-filter-form">
            <h1>Filter by Model</h1>
            <form>
                <label htmlFor="model-filter">Model Name:</label>
                <input type="text" id="model-filter" name="model-filter" placeholder="Enter model name" /><br />

                <label htmlFor="year-filter">Issue Year:</label>
                <input type="number" id="year-filter" name="year-filter" placeholder="Enter issue year" /><br />

                <label htmlFor="body-filter">Body Style:</label>
                <input type="text" id="body-filter" name="body-filter" placeholder="Enter body style" /><br />

                <div className="button-container">
                    <button type="button" className="cancel">Reset</button>
                    <button type="button" className="ok" onClick={filterCars}>Apply Filter</button>
                </div>
            </form>
        </div>
    );
};

export default ModelsFilterForm;
