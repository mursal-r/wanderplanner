import React from 'react';
import './TouristAttractionCard.css'; 
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { checkToken } from '../../utilities/users-service';
import { Link } from 'react-router-dom';

export function TouristAttractionCard({ name, image, price, id }) {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    
    const handleBook = async () => {
        const expDate = await checkToken();
        console.log(expDate);
    };
    const handleView = async () => {
        const expDate = await checkToken();
        console.log(expDate);
    };


    return (
        <div className="tourist-attraction-card">
            <Link to={`/activity/${id}`}>
                <img src={`/images/${image}`} alt={name} className="attraction-image" />
                <p>{name}</p>
                <p>Price: ${price}</p>
                <button onClick={handleView}>details</button>
            </Link>
        </div>
    );
}
