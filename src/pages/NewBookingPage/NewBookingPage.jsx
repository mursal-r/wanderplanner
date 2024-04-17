import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getActivityData } from "../../utilities/activity-service";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import BookingForm from "../../components/BookingForm/BookingForm";
import BookingConfirmed from "../../components/BookingConfirmed/BookingConfirmed";
import "./NewBookingPage.css";

export default function NewBookingPage() {
    const { id } = useParams();
    const [activity, setActivity] = useState(null);
    const [bookingData, setBookingData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getActivityData(id);
                setActivity(data);
            } catch (error) {
                console.error('Error fetching activity data:', error);
            }
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    return (
        <div className="page-container">
            {bookingData ? (
                <BookingConfirmed key={activity._id} activity={activity}/>
            ) : (
                activity ? (
                    <>
                        <div className="activity-card-container">
                            <ActivityCard
                                key={activity._id}
                                activity={activity}
                                className="custom-activity-card"
                            />
                        </div>
                        <div className="booking-form-container">
                            <BookingForm setBookingData={setBookingData} />
                        </div>
                    </>
                ) : null
            )}
        </div>
    );
}
