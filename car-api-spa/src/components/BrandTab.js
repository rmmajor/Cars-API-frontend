import React, { useState, useEffect } from 'react';
import BrandInstance from './BrandInstance';


function BrandTab() {
    const [brandName, setBrandName] = useState('');
    const [headquartersCountry, setHeadquartersCountry] = useState('');
    const [brandInstances, setBrandInstances] = useState([]);

    useEffect(() => {
        fetchAndGenerateBrandInstances('http://127.0.0.1:8000/brands/');
    }, []);

    function filterBrands() {
        let url = 'http://127.0.0.1:8000/brands/?';

        if (brandName) {
            url += `brand_name=${encodeURIComponent(brandName)}&`;
        }
        console.log(brandName);

        if (headquartersCountry) {
            url += `headquarters_country=${encodeURIComponent(headquartersCountry)}&`;
        }

        url = url.slice(0, -1);

        fetchAndGenerateBrandInstances(url);
    }

    function fetchAndGenerateBrandInstances(url) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setBrandInstances(data);
            })
            .catch((error) => {
                alert('Error fetching data brand instances');
            });
    }

    function resetBrandFilters() {
        setBrandName('');
        setHeadquartersCountry('');
        fetchAndGenerateBrandInstances('http://127.0.0.1:8000/brands/');
    }

    return (
        <div>
            <div className="brands-filter-form">
                <h1>Filter by Brand</h1>
                <form>
                    <label htmlFor="brand-filter">Brand Name:</label>
                    <input
                        type="text"
                        id="brand-filter"
                        name="brand-filter"
                        placeholder="Enter brand name"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                    /><br />

                    <label htmlFor="country-filter">Headquarters Country:</label>
                    <input
                        type="text"
                        id="country-filter"
                        name="country-filter"
                        placeholder="Enter country name"
                        value={headquartersCountry}
                        onChange={(e) => setHeadquartersCountry(e.target.value)}
                    /><br />

                    <div className="button-container">
                        <button type="button" className="cancel" onClick={resetBrandFilters}>Reset</button>
                        <button type="button" className="ok" onClick={filterBrands}>Apply Filter</button>
                    </div>
                </form>
            </div>

            <div id="instances-container">
                {brandInstances.map((instance) => (
                    <BrandInstance key={instance.id} instance={instance} />
                ))}
            </div>
        </div>
    );
}

export default BrandTab;
