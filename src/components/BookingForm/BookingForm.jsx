import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingForm.css";
import backgroundVideo from "../../assets/backgroundVideo.mp4"; // Adjust the import path

const BookingForm = ({ setBookingData }) => {
  const [booking, setBooking] = useState({
    firstName: "",
    lastName: "",
    dateOfActivity: null, // Initialize with null
    tickets: 1,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setBooking((prev) => ({ ...prev, dateOfActivity: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here

    const { firstName, lastName, dateOfActivity, tickets } = booking;

    const formData = { firstName, lastName, dateOfActivity, tickets };

    setBookingData(formData);
    console.log("Booking submitted:", booking);
    //navigate("/thank-you");
  };

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
            selected={booking.dateOfActivity}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy" // Set the date format to MM/dd/yyyy
            placeholderText="Activity Booking Date" // Change placeholder text
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
        <button type="submit" className="btn primary__btn w-100 mt-4">
          Book Now
        </button>
      </form>
      {/* Video Display */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BookingForm;
