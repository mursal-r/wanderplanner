import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingForm.css";
import backgroundVideo from "../../assets/backgroundVideo.mp4"; // Adjust the import path
import { createBooking } from "../../utilities/booking-service";


const BookingForm = ({ setBookingData, user, activity }) => {
  const [booking, setBooking] = useState({
    user: user._id,
    activity: activity._id,
    firstName: "",
    lastName: "",
    date: null,
    tickets: 1,
    price: 0
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setBooking((prev) => ({ ...prev, date: date }));
  };

  // const calculatePrice = () => {
  //   // Assuming each ticket costs $100
  //   return booking.tickets * 10; // Adjust the price calculation as needed
  // };

  const calculatePrice = () => {
    if (activity) {
      return booking.tickets * activity.price;
    }
    return 0;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, date, tickets, price, user, activity } = booking;

    const formData = { firstName, lastName, date, tickets, price, user, activity };

    createBooking(formData);
    setBookingData(formData);
    //console.log("Booking submitted:", booking);
    //navigate("/thank-you");
  };

  //function below is what creates booking in databse. 
  //Problem is that there is a field in user model called bookings that is an array. 
  //When he creates function for booking it doesn't update. 
  //IN MODELS, I HAVE A USER MODEL AND A BOOKING MODEL. 
  //THE FUNCTION CREATES BOOKING FORM BOOKING MODEL. 
  //BUT USER MODEL HAS A FIELD CALLED BOOKINGS.THE ID OF THE BOOKING MODEL 
  //THAT WAS JUST CREATED NEEDS TO BE PUT IN HERE. 
  //IF I GO TO CONTROLLERS - 
  return (
    <div className="booking-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={booking.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={booking.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <DatePicker
            name="date"
            selected={booking.date}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
            placeholderText="Activity Booking Date"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="tickets"
            placeholder="Number of Tickets"
            value={booking.tickets}
            onChange={handleChange}
            required
          />
        </div>
        <div className="price-card">
          <h5>Total Price</h5>
          <p>${calculatePrice()}</p>
          <input type="hidden" name="price" value={calculatePrice()} />
        </div>
        <button type="submit" className="btn primary__btn w-100 mt-4">
          Book Now
        </button>
      </form>
      {/* <video autoPlay loop muted playsInline className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  );
};

export default BookingForm;
