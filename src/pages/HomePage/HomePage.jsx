import React from 'react';
import {useState} from 'react';
import PopularDestinations from '../../components/PopularDestinations/PopularDestinations';
import './HomePage.css'; // Import CSS file for styling

export default function HomePage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    handleSearch = async (evt) => {
        evt.preventDefault();
        const {name, description, imageURL, price, destination}
        = 
    }
    return (
        <div className="container">
            <div className="header">
                <div className="header-content">
                    <img src="/images/mainImage.png" alt="Fun activities" />
                    <h1>Explore fun activities for your next destination with ease.</h1>
                </div>
            </div>
            <div className="search-container">
                <input type="text" placeholder="Destination lookup" onChange={(e) => setSearchQuery(e.target.value)}/>
                <button className="search-button" onClick={handleSearch}>Search</button>
            </div>
            <PopularDestinations />
        </div>
    );
}
