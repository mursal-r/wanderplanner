const BASE_URL = "/api/users";

export async function signUp(userData) {
    const res = await fetch(BASE_URL, {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userData)
    });
    if(res.ok) {
        return res.json();
    } else {
        throw new Error("Invalid SignUp");
    }
}
export async function login(credentials) {
    try {
        const res = await fetch(BASE_URL + '/login',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(credentials),
        }
    );
    if(res.ok) {
            console.log('ayyy bob esponja');
            return res.json();
        } else {
            throw new Error('Invalid Login');
        }
    } catch (err) {
        console.log('fail:', err);
        throw new Error('Login failed: ', err);
    }
}
