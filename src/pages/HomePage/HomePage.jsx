import React from 'react';
import {useState} from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getActivityData } from '../../utilities/searchBar-api';
import PopularDestinations from '../../components/PopularDestinations/PopularDestinations';
import SearchBar from '../../components/SearchBar/SearchBar';
import './HomePage.css'; // Import CSS file for styling

export default function HomePage() {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');
    const [searchQuery, setSearchQuery] = useState('');
    const [activities, setActivities] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getActivityData("", 4);
            setActivities(data);
          } catch (error) {
            console.error('Error fetching activity data:', error);
          }
        };
    
        if (query) {
          fetchData();
        }
      }, [query]);

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
