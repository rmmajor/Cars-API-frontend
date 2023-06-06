import React, {useEffect, useState} from "react";

const CarInstance = ({instance}) => {
    const [brandName, setBrandName] = useState("");
    const [modelName, setModelName] = useState("");

    useEffect(() => {
        // Fetch the brand details using the brand_id from the instance object
        const fetchBrandDetails = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/brands/${instance.brand}`);
                const brandDetails = await response.json();
                setBrandName(brandDetails.brand_name);
            } catch (error) {
                console.error("Error fetching brand details:", error);
            }
        };

        const fetchModelDetails = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/models/${instance.model}`);
                const modelDetails = await response.json();
                setModelName(modelDetails.model_name);

                // Update the instance object with the model name
                const updatedInstance = { ...instance, model: modelDetails.model_name };
                // console.log(updatedInstance);
            } catch (error) {
                console.error("Error fetching model details:", error);
            }
        };

        fetchBrandDetails();
        fetchModelDetails();
    }, [instance.brand, instance.model]);

    return (
        <div className="instance-details" key={instance.id}>
            <p>Brand: {brandName}</p>
            <p>Model: {modelName}</p>
            <p>Price: {instance.price}</p>
            <p>Mileage: {instance.milage}</p>
            <p>Exterior Color: {instance.exterior_color}</p>
            <p>Interior Color: {instance.interior_color}</p>
            <p>Fuel Type: {instance.fuel_type}</p>
            <p>Transmission: {instance.transmission}</p>
            <p>Engine: {instance.engine}</p>
            <p>On Sale: {instance.is_on_sale ? "Yes" : "No"}</p>
        </div>
    );
};

export default CarInstance;
