import React, { useState, useEffect } from "react";
import { getActivityData } from "../../utilities/activity-service";

export default function BookingCard({ booking, activityId }) {
  const [activity, setActivity] = useState(null);
  const { date, tickets, price } = booking;

  useEffect(() => {
    const fetchData = async () => {
        console.log('fetchData');
      try {
          console.log('dataaa: ', activityId);
        const activityData = await getActivityData(activityId);
        setActivity(activityData);
      } catch (error) {
        console.error("Error fetching activity data:", error);
      }
    };

    fetchData();
  }, [booking.activity]);

  function handleDelete(evt) {
    evt.preventDefault();
    // Implement delete logic
  }

  // Render the booking card only when activity data is available
  return activity ? (
    <div className="booking-card">
      <div className="booking-details">
        <h3>{activity.name}</h3>
        <p>Date: {date}</p>
        <p>Tickets: {tickets}</p>
        <p>Price: ${price}</p>
        <button onClick={handleDelete}>Cancel Booking</button>
      </div>
    </div>
  ) : (
    <p>Loading activity...</p>
  );
}
