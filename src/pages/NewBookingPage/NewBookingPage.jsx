import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";
import {getActivityData} from '../../utilities/activity-service'
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import BookingForm from "../../components/BookingForm/BookingForm";
import BookingConfirmed from "../../components/BookingConfirmed/BookingConfirmed";

export default function NewBookingPage() {
    const {id} = useParams();
    const [activity, setActivity] = useState(null);
    const [bookingData, setBookingData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getActivityData(id);
            setActivity(data);
            //console.log('activiri: ', activity);
          } catch (error) {
            console.error('Error fetching activity data:', error);
          }
        };
    
        if (id) {
          fetchData();
        }
      }, [id]);

    
    return (
        <>
            {bookingData ? (
                <BookingConfirmed key={activity._id} activity={activity}/>
            ) : (
                activity ? (
                    <>
                    <h1>Book Activity</h1>
                    <ActivityCard key={activity._id} activity={activity} />
                    <BookingForm setBookingData={setBookingData} />
                </>
                 ) : (
                    <h1>roast beef</h1>
                 )
                )}
        </>
    )
}