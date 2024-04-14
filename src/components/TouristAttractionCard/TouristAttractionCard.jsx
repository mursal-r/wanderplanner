import React from 'react';
import './TouristAttractionCard.css'; 

export function TouristAttractionCard({ name, image, price }) {
    const handleBookNow = () => {
        // Implement logic for adding the attraction to the cart
    };

    return (
        <div className="tourist-attraction-card">
            <img src={`/images/${image}`} alt={name} className="attraction-image" />
            <p>{name}</p>
            <p>Price: ${price}</p>
            <button onClick={handleBookNow}>Book Now</button>
        </div>
    );
}
