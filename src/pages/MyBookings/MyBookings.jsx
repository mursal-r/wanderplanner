import React, { useState, useEffect } from 'react';
import { getBookings } from '../../utilities/booking-service';
import BookingCard from '../../components/BookingCard/BookingCard';
import './MyBookings.css'

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
    <div className="activity-list">
        {bookings ? (
          bookings.map(booking => (
            
            <BookingCard booking={booking} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
