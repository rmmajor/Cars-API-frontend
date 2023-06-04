import React from 'react';

function BrandInstance({ instance }) {
    return (
        <div className="instance-details" id={`brand-details-${instance.id}`}>
            <p>Brand Name: {instance.brand_name}</p>
            <p>Headquarters Country: {instance.headquarters_country}</p>
        </div>
    );
}

export default BrandInstance;