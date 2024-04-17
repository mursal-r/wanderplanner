import sendRequest from './send-request';

const BASE_URL = "/api/booking";

export async function createBooking(data) {
    return sendRequest(`${BASE_URL}`, 'POST', data);
}
export async function getBookings (data) { //remove data parameter from function 
    const payload = {_id: data}
    return sendRequest(`${BASE_URL}/get`, 'POST', payload); //update endpoint URL to '/api/booking', and take away /find to fetch all bookings
}
