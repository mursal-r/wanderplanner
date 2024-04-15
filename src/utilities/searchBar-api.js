const BASE_URL = "/api/search";

export async function getActivityData(query) {
    const destination = {destination: query}
    const res = await fetch(BASE_URL, {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(destination)
    });
    console.log("Request sent:", JSON.stringify(destination));
    if(res.ok) {
        const activities = await res.json();
        return activities;
    } else {
        throw new Error("couldnt get data");
    }
}