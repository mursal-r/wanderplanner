import React from 'react';
import './TouristAttractionCard.css'; 
import { checkToken } from '../../utilities/users-service';

export function TouristAttractionCard({ name, image, price }) {
    const handleBookNow = () => {
        // Implement logic for adding the attraction to the cart
    };
    const handleCheckToken = async () => {
        const expDate = await checkToken();
        console.log(expDate);
    };

    return (
        <div className="tourist-attraction-card">
            <img src={`/images/${image}`} alt={name} className="attraction-image" />
            <p>{name}</p>
            <p>Price: ${price}</p>
            <button onClick={handleCheckToken}>Book Now</button>
        </div>
    );
}
