import sendRequest from './send-request';

const BASE_URL = "/api/booking";

export async function createBooking(data) {
    console.log('createBooking: ', data);
    return sendRequest(`${BASE_URL}`, 'POST', data);
}
export async function getBookings(data) {
    console.log('getBookings: ', data);
    return sendRequest(`${BASE_URL}/find`, 'POST', data);
}
