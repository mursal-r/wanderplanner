import React from 'react';
import PopularDestinations from '../../components/PopularDestinations/PopularDestinations';
import './HomePage.css'; // Import CSS file for styling

export default function HomePage() {
    return (
        <div className="container">
            <div className="header">
                <div className="header-content">
                    <img src="/images/mainImage.png" alt="Fun activities" />
                    <h1>Explore fun activities for your next destination with ease.</h1>
                </div>
            </div>
            <div className="search-container">
                <input type="text" placeholder="destination lookup📍" />
                <button className="search-button">Search</button>
            </div>
            <PopularDestinations />
        </div>
    );
}
