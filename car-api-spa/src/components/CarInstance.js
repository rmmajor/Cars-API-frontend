import React from "react";

const CarInstance = ({car}) => {

    return (
        <div className="instance-details" key={car.id}>
            <p>Brand: {car.brand}</p>
            <p>Model: {car.model}</p>
            <p>Price: {car.price}</p>
            <p>Mileage: {car.mileage}</p>
            <p>Exterior Color: {car.exterior_color}</p>
            <p>Interior Color: {car.interior_color}</p>
            <p>Fuel Type: {car.fuel_type}</p>
            <p>Transmission: {car.transmission}</p>
            <p>Engine: {car.engine}</p>
            <p>On Sale: {car.is_on_sale ? "Yes" : "No"}</p>
        </div>
    );
};

export default CarInstance;
