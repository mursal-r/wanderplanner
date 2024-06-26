import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getActivityData } from '../../utilities/searchBar-service';
import ActivityCard from '../../components/ActivityCard/ActivityCard';
import './SearchResults.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import NavBar from '../../components/NavBar/NavBar';

export default function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const [activities, setActivities] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const destination = { destination: query };
        const data = await getActivityData(destination);
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
    <div>
      <NavBar />
      <SearchBar className="search-bar" />
      <h2 className="search-results-heading">Search Results for "{query}"</h2>
      <div className="activity-list">
        {activities ? (
          activities.map(activity => (
            <ActivityCard key={activity._id} activity={activity} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
