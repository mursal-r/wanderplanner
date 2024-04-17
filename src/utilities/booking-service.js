

import MyBookings from '../pages/MyBookings/MyBookings';
import * as bookingAPI from './booking-api';

export async function createBooking(data) {
    const booking = await bookingAPI.createBooking(data);
    return booking
}

export async function getBookings(data) {
    const bookings = await bookingAPI.getBookings(data);
    return bookings;
}
export async function deleteBooking(id) {
    const deletion = await bookingAPI.deleteBooking(id);
    return deletion;
}