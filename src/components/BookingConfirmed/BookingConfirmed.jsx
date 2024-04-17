import ActivityCard from "../ActivityCard/ActivityCard"

export default function BookingConfirmed({activity}) {

    return(

        <>
        <h1>Booking confirmed!✅</h1>
        <ActivityCard key={activity._id} activity={activity}/>
        </>
    );
}