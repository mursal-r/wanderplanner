import sendRequest from './send-request';

const BASE_URL = "/api/booking";

export async function createBooking(data) {
    console.log('createBooking: ', data);
    return sendRequest(`${BASE_URL}`, 'POST', data);
}
export async function getBookings () { //remove data parameter from function 
    console.log(getBookings);
    return sendRequest(`${BASE_URL}`, 'GET'); //update endpoint URL to '/api/booking', and take away /find to fetch all bookings
}
