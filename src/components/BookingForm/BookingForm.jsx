import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "./BookingForm.css";

const BookingForm = () => {
  const [booking, setBooking] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: null, // Change dateOfBirth initial state to null
    tickets: 1,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Booking submitted:", booking);
    navigate("/thank-you");
  };

  return (
    <div className="booking-form">
      <h5>Traveler Details</h5>
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
            selected={booking.dateOfBirth} // Use selected prop for DatePicker
            onChange={(date) =>
              setBooking((prev) => ({ ...prev, dateOfBirth: date }))
            }
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/mm/yyyy"
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
    </div>
  );
};

export default BookingForm;
