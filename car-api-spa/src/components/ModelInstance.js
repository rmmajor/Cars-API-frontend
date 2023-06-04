import React from 'react';

function ModelInstance({ instance }) {
    return (
        <div className="instance-details" id={`model-details-${instance.id}`}>
            <p>Model Name: {instance.model_name}</p>
            <p>Issue Year: {instance.issue_year}</p>
            <p>Body Style: {instance.body_style}</p>
        </div>
    );
}

export default ModelInstance;
