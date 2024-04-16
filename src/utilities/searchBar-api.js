import sendRequest from './send-request';

const BASE_URL = "/api/search";

export async function getActivityData(query, limit=null) {
    const destination = {destination: query}
    return sendRequest(BASE_URL, 'POST', destination);
}