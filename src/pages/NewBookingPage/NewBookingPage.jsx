import { useParams } from "react-router-dom"

export default function NewBookingPage() {
    const {id} = useParams();
    
    return (
        <h1> New Booking Page </h1>
    )
}