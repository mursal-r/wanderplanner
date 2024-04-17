import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getActivityData } from '../../utilities/activity-api';
import PopularDestinations from '../../components/PopularDestinations/PopularDestinations';
import SearchBar from '../../components/SearchBar/SearchBar';
import './HomePage.css'; // Import CSS file for styling
import backgroundVideo from '../../assets/backgroundVideo.mp4';

export default function HomePage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const [searchQuery, setSearchQuery] = useState('');
  const [activities, setActivities] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getActivityData('', 4);
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
          <video
            autoPlay
            loop
            muted
            playsInline
            className="background-video"
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src="/images/mainImage.jpg" alt="Fun activities" />
        </div>
      </div>
      <SearchBar />
      <PopularDestinations />
    </div>
  );
}
