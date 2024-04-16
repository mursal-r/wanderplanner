import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getActivityData } from '../../utilities/searchBar-service';
import ActivityCard from '../../components/ActivityCard/ActivityCard';
import './SearchResults.css'
import SearchBar from '../../components/SearchBar/SearchBar';

export default function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const [activities, setActivities] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getActivityData(query);
        setActivities(data);
      } catch (error) {
        console.error('Error fetching activity data:', error);
      }
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  console.log('activities:', activities); // This will log the fetched activities
  return (
    <div>
      <SearchBar/>
      <h2>Search Results for "{query}"</h2>
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
