import React from 'react';
import {useState} from 'react';
import PopularDestinations from '../../components/PopularDestinations/PopularDestinations';
import SearchBar from '../../components/SearchBar/SearchBar';
import './HomePage.css'; // Import CSS file for styling

export default function HomePage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    return (
        <div className="container">
            <div className="header">
                <div className="header-content">
                    <img src="/images/mainImage.png" alt="Fun activities" />
                    <h1>Explore fun activities for your next destination with ease.</h1>
                </div>
            </div>
            <SearchBar/>
            <PopularDestinations />
        </div>
    );
}
