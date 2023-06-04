import React, { useEffect, useState } from "react";
import CarInstance from "./CarInstance";
import BrandInstance from "./BrandInstance";

const CarTab = () => {
    const [carInstances, setCarInstances] = useState([]);
    const [brandFilter, setBrandFilter] = useState("");
    const [modelFilter, setModelFilter] = useState("");
    const [priceFilter, setPriceFilter] = useState("");
    const [mileageFilter, setMileageFilter] = useState("");
    const [exteriorColorFilter, setExteriorColorFilter] = useState("");
    const [interiorColorFilter, setInteriorColorFilter] = useState("");
    const [fuelTypeFilter, setFuelTypeFilter] = useState("");
    const [transmissionFilter, setTransmissionFilter] = useState("");
    const [engineFilter, setEngineFilter] = useState("");
    const [isOnSaleFilter, setIsOnSaleFilter] = useState(true);

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = () => {
        let url = "http://127.0.0.1:8000/cars/";
        if (!isOnSaleFilter) {
            url += "all/";
        }
        url += "?";

        // Add filters to URL
        if (brandFilter) {
            url += "brand_name=" + encodeURIComponent(brandFilter) + "&";
        }
        if (modelFilter) {
            url += "model_name=" + encodeURIComponent(modelFilter) + "&";
        }
        if (priceFilter) {
            url += "price=" + encodeURIComponent(priceFilter) + "&";
        }
        if (mileageFilter) {
            url += "mileage=" + encodeURIComponent(mileageFilter) + "&";
        }
        if (exteriorColorFilter) {
            url += "exterior_color=" + encodeURIComponent(exteriorColorFilter) + "&";
        }
        if (interiorColorFilter) {
            url += "interior_color=" + encodeURIComponent(interiorColorFilter) + "&";
        }
        if (fuelTypeFilter) {
            url += "fuel_type=" + encodeURIComponent(fuelTypeFilter) + "&";
        }
        if (transmissionFilter) {
            url += "transmission=" + encodeURIComponent(transmissionFilter) + "&";
        }
        if (engineFilter) {
            url += "engine=" + encodeURIComponent(engineFilter) + "&";
        }

        // Remove the trailing '&' character
        url = url.slice(0, -1);

        fetchAndGenerateCarInstances(url);
    };

    const fetchAndGenerateCarInstances = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setCarInstances(data);
            })
            .catch((error) => {
                alert("Error fetching car instances");
            });
    };

    const resetCarFilters = () => {
        setBrandFilter("");
        setModelFilter("");
        setPriceFilter("");
        setMileageFilter("");
        setExteriorColorFilter("");
        setInteriorColorFilter("");
        setFuelTypeFilter("");
        setTransmissionFilter("");
        setEngineFilter("");
        setIsOnSaleFilter(true);

        fetchCars();
    };

    return (
        <div>
            <h1>Cars Found</h1>
            <div className="cars-filter-form">
                <form>
                    <label htmlFor="brand-filter">Brand Name:</label>
                    <input
                        type="text"
                        id="brand-filter"
                        name="brand-filter"
                        placeholder="Enter brand name"
                        value={brandFilter}
                        onChange={(e) => setBrandFilter(e.target.value)}
                    />
                    <label htmlFor="model-filter">Model Name:</label>
                    <input
                        type="text"
                        id="model-filter"
                        name="model-filter"
                        placeholder="Enter model name"
                        value={modelFilter}
                        onChange={(e) => setModelFilter(e.target.value)}
                    />
                    <label htmlFor="price-filter">Price:</label>
                    <input
                        type="text"
                        id="price-filter"
                        name="price-filter"
                        placeholder="Enter price"
                        value={priceFilter}
                        onChange={(e) => setPriceFilter(e.target.value)}
                    />
                    <label htmlFor="mileage-filter">Mileage:</label>
                    <input
                        type="text"
                        id="mileage-filter"
                        name="mileage-filter"
                        placeholder="Enter mileage"
                        value={mileageFilter}
                        onChange={(e) => setMileageFilter(e.target.value)}
                    />
                    <label htmlFor="exterior-color-filter">Exterior Color:</label>
                    <input
                        type="text"
                        id="exterior-color-filter"
                        name="exterior-color-filter"
                        placeholder="Enter exterior color"
                        value={exteriorColorFilter}
                        onChange={(e) => setExteriorColorFilter(e.target.value)}
                    />
                    <label htmlFor="interior-color-filter">Interior Color:</label>
                    <input
                        type="text"
                        id="interior-color-filter"
                        name="interior-color-filter"
                        placeholder="Enter interior color"
                        value={interiorColorFilter}
                        onChange={(e) => setInteriorColorFilter(e.target.value)}
                    />
                    <label htmlFor="fuel-type-filter">Fuel Type:</label>
                    <input
                        type="text"
                        id="fuel-type-filter"
                        name="fuel-type-filter"
                        placeholder="Enter fuel type"
                        value={fuelTypeFilter}
                        onChange={(e) => setFuelTypeFilter(e.target.value)}
                    />
                    <label htmlFor={"transmission-filter"}>Transmission:</label>
                    <input
                        type="text"
                        id="transmission-filter"
                        name="transmission-filter"
                        placeholder="Enter transmission"
                        value={transmissionFilter}
                        onChange={(e) => setTransmissionFilter(e.target.value)}
                    />
                    <label htmlFor="engine-filter">Engine:</label>
                    <input
                        type="text"
                        id="engine-filter"
                        name="engine-filter"
                        placeholder="Enter engine"
                        value={engineFilter}
                        onChange={(e) => setEngineFilter(e.target.value)}
                    />
                    <label htmlFor="is-on-sale-filter">On Sale:</label>
                    <input
                        type="checkbox"
                        id="is-on-sale-filter"
                        name="is-on-sale-filter"
                        checked={isOnSaleFilter}
                        onChange={(e) => setIsOnSaleFilter(e.target.checked)}
                    />
                    <div className="button-container">
                        <button type="button" className="cancel" onClick={resetCarFilters}>Reset</button>
                        {/*<button type="button" className="ok" onClick={}>Apply Filter</button>*/}
                    </div>
                </form>
            </div>
            {/*<div id="instances-container">*/}
            {/*    {carInstances.map((instance) => (*/}
            {/*        <CarInstance key={instance.id} instance={instance} />*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    );
};

export default CarTab;
