import React, { useEffect, useState } from "react";
import CarInstance from "./CarInstance";
import BrandInstance from "./BrandInstance";

const CarTab = () => {
    const [carInstances, setCarInstances] = useState([]);
    const [brandFilter, setBrandFilter] = useState("");
    const [brandOptions, setBrandOptions] = useState([]);
    const [modelFilter, setModelFilter] = useState("");
    const [modelOptions, setModelOptions] = useState([]);
    const [priceFilter, setPriceFilter] = useState("");
    const [mileageFilter, setMileageFilter] = useState("");
    const [exteriorColorFilter, setExteriorColorFilter] = useState("");
    const [interiorColorFilter, setInteriorColorFilter] = useState("");
    const [fuelTypeFilter, setFuelTypeFilter] = useState("");
    const [transmissionFilter, setTransmissionFilter] = useState("");
    const [engineFilter, setEngineFilter] = useState("");
    const [isOnSaleFilter, setIsOnSaleFilter] = useState(true);

    useEffect(() => {
        fetchBrandOptions();
        fetchModelOptions();
        filterCars();
    }, []);

    const fetchBrandOptions = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/brands/");
            const data = await response.json();
            const options = Array.from(new Set(data.map((brand) => brand.brand_name)));
            setBrandOptions(options);
        } catch (error) {
            console.log("Error fetching brand options:", error);
        }
    };

    const fetchModelOptions = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/models/");
            const data = await response.json();
            const options = Array.from(new Set(data.map((model) => model.model_name)));
            setModelOptions(options);
        } catch (error) {
            console.log("Error fetching model options:", error);
        }
    };

    const filterCars = () => {
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

        filterCars();
    };

    return (
        <div>
            <h1>Cars Found</h1>
            <div className="cars-filter-form">
                <form>
                    <label htmlFor="brand-filter">Brand Name:</label>
                    <select
                        id="brand-filter"
                        name="brand-filter"
                        value={brandFilter}
                        onChange={(e) => setBrandFilter(e.target.value)}
                    >
                        <option value="">All Brands</option>
                        {brandOptions.map((brand) => (
                            <option key={brand} value={brand}>
                                {brand}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="model-filter">Model Name:</label>
                    <select
                        id="model-filter"
                        name="model-filter"
                        value={modelFilter}
                        onChange={(e) => setModelFilter(e.target.value)}
                    >
                        <option value="">All Models</option>
                        {modelOptions.map((model) => (
                            <option key={model} value={model}>
                                {model}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="price-filter">Price:</label>
                    <input
                        type="number"
                        id="price-filter"
                        name="price-filter"
                        placeholder="Enter price"
                        value={priceFilter}
                        onChange={(e) => setPriceFilter(e.target.value)}
                    />
                    <label htmlFor="mileage-filter">Mileage:</label>
                    <input
                        type="number"
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
                    <label htmlFor="transmission-filter">Transmission:</label>
                    <select
                        id="transmission-filter"
                        name="transmission-filter"
                        value={transmissionFilter}
                        onChange={(e) => setTransmissionFilter(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="Automatic">Automatic</option>
                        <option value="Manual">Manual</option>
                        <option value="Semi-automatic">Semi-automatic</option>
                    </select>
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
                        <button type="button" className="ok" onClick={filterCars}>Apply Filter</button>
                    </div>
                </form>
            </div>
            <div id="instances-container">

                {carInstances.map((instance) => (
                    <CarInstance key={instance.id} instance={instance} />
                ))}
            </div>
        </div>
    );
};

export default CarTab;
