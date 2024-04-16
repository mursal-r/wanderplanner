

import * as activityAPI from './activity-api';

export async function getActivityData(query) {
    const activity = await activityAPI.getActivityDataById(query);
    return activity;
}