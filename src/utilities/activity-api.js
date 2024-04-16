import sendRequest from './send-request';

const BASE_URL = "/api/search";

export async function getActivityData(query, limit=null) {
    return sendRequest(BASE_URL, 'POST', query);
}

export async function getActivityDataById(query, limit=null) {
    const id = {id: query}
    return sendRequest(`${BASE_URL}/byid`, 'POST', id);
}
