import React from 'react';

const BrandsFilterForm = () => {
    const filterCars = () => {
        // Add your logic to filter cars here
    };

    return (
        <div className="brands-filter-form">
            <h1>Filter by Brand</h1>
            <form>
                <label htmlFor="brand-filter">Brand Name:</label>
                <input type="text" id="brand-filter" name="brand-filter" placeholder="Enter brand name" /><br />

                <label htmlFor="country-filter">Headquarters Country:</label>
                <input type="text" id="country-filter" name="country-filter" placeholder="Enter country name" /><br />

                <div className="button-container">
                    <button type="button" className="cancel">Reset</button>
                    <button type="button" className="ok" onClick={filterCars}>Apply Filter</button>
                </div>
            </form>
        </div>
    );
};

export default BrandsFilterForm;
