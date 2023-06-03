import React from 'react';

const CarsFilterForm = () => {
    const filterCars = () => {
        // Add your logic to filter cars here
    };

    return (
        <div className="cars-filter-form">
            <h1>Cars Filter</h1>
            <form>
                <label htmlFor="brand-filter">Brand:</label>
                <select id="brand-filter">
                    <option value="">All</option>
                    <option value="1">Brand 1</option>
                    <option value="2">Brand 2</option>
                    <option value="3">Brand 3</option>
                    {/* Add more brand options here */}
                </select><br />

                <label htmlFor="model-filter">Model:</label>
                <select id="model-filter">
                    <option value="">All</option>
                    <option value="1">Model 1</option>
                    <option value="2">Model 2</option>
                    <option value="3">Model 3</option>
                    {/* Add more model options here */}
                </select><br />

                <label htmlFor="price-filter">Price:</label>
                <input type="number" id="price-filter" name="price-filter" placeholder="Enter maximum price" /><br />

                <label htmlFor="mileage-filter">Mileage:</label>
                <input type="number" id="mileage-filter" name="mileage-filter" placeholder="Enter maximum mileage" /><br />

                <label htmlFor="exterior-color-filter">Exterior Color:</label>
                <input type="text" id="exterior-color-filter" name="exterior-color-filter" placeholder="Enter exterior color" /><br />

                <label htmlFor="interior-color-filter">Interior Color:</label>
                <input type="text" id="interior-color-filter" name="interior-color-filter" placeholder="Enter interior color" /><br />

                <label htmlFor="fuel-type-filter">Fuel Type:</label>
                <input type="text" id="fuel-type-filter" name="fuel-type-filter" placeholder="Enter fuel type" /><br />

                <label htmlFor="transmission-filter">Transmission:</label>
                <select id="transmission-filter">
                    <option value="">All</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                    <option value="CVT">CVT</option>
                </select><br />

                <label htmlFor="engine-filter">Engine:</label>
                <input type="text" id="engine-filter" name="engine-filter" placeholder="Enter engine" /><br />

                <label htmlFor="is-on-sale-filter">On Sale:</label>
                <input type="checkbox" id="is-on-sale-filter" name="is-on-sale-filter" /><br />

                <div className="button-container">
                    <button type="button" className="cancel">Reset</button>
                    <button type="button" className="ok" onClick={filterCars}>Apply Filter</button>
                </div>
            </form>
        </div>
    );
};

export default CarsFilterForm;
