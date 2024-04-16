

import * as activityAPI from './activity-api';

export async function getActivityData(query) {
    const activities = await activityAPI.getActivityData(query);
    return activities
} 