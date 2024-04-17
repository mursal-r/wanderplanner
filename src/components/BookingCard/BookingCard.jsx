import { getActivityData } from "../../utilities/activity-service";

export default function BookingCard() {

    
    return(
        <div className="booking-card">
            <div className="booking-details">
                
                <h3>{name}</h3>
                <p>date: {date}</p>
                <p>tickets: {tickets}</p>
                <p>Price: ${price}</p>
            </div>
    </div>
    );
}