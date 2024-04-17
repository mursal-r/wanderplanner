import React, { useState, useEffect } from 'react';
import { getActivityData } from '../../utilities/activity-service';
import ActivityCard from '../../components/ActivityCard/ActivityCard';
import './MyBookings.css'
import SearchBar from '../../components/SearchBar/SearchBar';

export default function MyBookings
() {
  const [activities, setActivities] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getActivityData();
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
      <SearchBar/>
      <h2>Search Results for "{query}"</h2>
      <div className="activity-list">
        {activities ? (
          activities.map(activity => (
            <>
            <ActivityCard key={activity._id} activity={activity} />
            <Button>Cancel reservation</Button>
            </>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
