const API_URL = 'http://localhost:4000';
function getValue(id) {
    const value = document.getElementById(id).value;
    return value;
}

async function login() {
    const email = getValue('email');
    const password = getValue('pwd');
    const response = await fetch(API_URL + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    console.log(data);
    if (response.status == 200) {
        localStorage.setItem('token', data.token);
        window.location.href = 'index.html';
    } else {
        alert('Email or password is incorrect');
    }
}