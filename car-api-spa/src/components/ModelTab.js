import React, { useState, useEffect } from 'react';
import ModelInstance from './ModelInstance';
import {useNavigate} from "react-router-dom";

function ModelTab() {
    const [modelName, setModelName] = useState('');
    const [issueYear, setIssueYear] = useState('');
    const [bodyStyle, setBodyStyle] = useState('');
    const [modelInstances, setModelInstances] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        // if (sessionStorage.getItem('accessToken') == null) {
        //     navigate('/');
        // }

        fetchAndGenerateModelInstances('http://127.0.0.1:8000/models/');
    }, []);

    function filterModels() {
        let url = 'http://127.0.0.1:8000/models/?';

        if (modelName) {
            url += `model_name=${encodeURIComponent(modelName)}&`;
        }

        if (issueYear) {
            url += `issue_year=${encodeURIComponent(issueYear)}&`;
        }

        if (bodyStyle) {
            url += `body_style=${encodeURIComponent(bodyStyle)}&`;
        }

        url = url.slice(0, -1);

        fetchAndGenerateModelInstances(url);
    }

    function fetchAndGenerateModelInstances(url) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setModelInstances(data);
            })
            .catch((error) => {
                alert('Error fetching data');
            });
    }

    function resetModelFilters() {
        setModelName('');
        setIssueYear('');
        setBodyStyle('');
        fetchAndGenerateModelInstances('http://127.0.0.1:8000/models/');
    }

    return (
        <div>
            <div className="models-filter-form">
                <h1>Filter by Model</h1>
                <form>
                    <label htmlFor="model-filter">Model Name:</label>
                    <input
                        type="text"
                        id="model-filter"
                        name="model-filter"
                        placeholder="Enter model name"
                        value={modelName}
                        onChange={(e) => setModelName(e.target.value)}
                    /><br />

                    <label htmlFor="year-filter">Issue Year:</label>
                    <input
                        type="number"
                        id="year-filter"
                        name="year-filter"
                        placeholder="Enter issue year"
                        value={issueYear}
                        onChange={(e) => setIssueYear(e.target.value)}
                    /><br />

                    <label htmlFor="body-filter">Body Style:</label>
                    <input
                        type="text"
                        id="body-filter"
                        name="body-filter"
                        placeholder="Enter body style"
                        value={bodyStyle}
                        onChange={(e) => setBodyStyle(e.target.value)}
                    /><br />

                    <div className="button-container">
                        <button type="button" className="cancel" onClick={resetModelFilters}>Reset</button>
                        <button type="button" className="ok" onClick={filterModels}>Apply Filter</button>
                    </div>
                </form>
            </div>

            <h1>Models Found</h1>
            <div id="instances-container">
                {modelInstances.map((instance) => (
                    <ModelInstance key={instance.id} instance={instance} />
                ))}
            </div>
        </div>
    );
}

export default ModelTab;
