import { getActivityData } from "../../utilities/activity-service";

export default function BookingCard({booking}) {
    const activity = getActivityData(booking.activity);
    const {date, tickets, price} = booking;
    const {name} = activity;

    function handleDelete(evt) {
        evt.preventDefault();
    }

    return(
        <div className="booking-card">
            <div className="booking-details">
                
                <h3>{name}</h3>
                <p>date: {date}</p>
                <p>tickets: {tickets}</p>
                <p>Price: ${price}</p>
                <button onClick={handleDelete}>cancel booking</button>
            </div>
    </div>
    );
}