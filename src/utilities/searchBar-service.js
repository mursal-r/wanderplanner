
import * as searchBarAPI from './searchBar-api';

export async function getActivityData(query) {
    const activities = await searchBarAPI.getActivityData(query);
    return activities
} 