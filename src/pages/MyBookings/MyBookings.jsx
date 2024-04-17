import React, { useState, useEffect } from 'react';
import { getBookings } from '../../utilities/booking-service';
import ActivityCard from '../../components/ActivityCard/ActivityCard';
import './MyBookings.css'
import SearchBar from '../../components/SearchBar/SearchBar';

export default function MyBookings({user}) {
  const [bookings, setBookings] = useState(null);
  const bookingIDs = user.bookings;

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetchdata: ', user);
      try {
        const data = await getBookings(bookingIDs);
        setBookings(data);
      } catch (error) {
        console.error('Error fetching activity data:', error);
      }
    };

    if (bookingIDs) {
      fetchData();
    }
  }, [bookingIDs]);

  return (
    <>
      <SearchBar/>
      <h2>Search Results for ""</h2>
    </>
  );
}
