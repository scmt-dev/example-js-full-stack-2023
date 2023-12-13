const API = 'http://localhost:4000'

function getValue(id) {
    return document.getElementById(id).value
}

async function handleLogin() {
    try {
        const email = getValue('email')
        const password = getValue('pwd')
        const respone = await  fetch(`${API}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },
            body: JSON.stringify({ email, password })
        })
        const result = await respone.json()
        if(respone.status !== 200) {
            return alert('Email or password is incorrect')
        }
        localStorage.setItem('token', result.token)
        window.location.href = 'index.html'
    } catch (error) {
        console.error(error)
    }
}

async function handleRegister() {
    try {
        const email = getValue('remail')
        const password = getValue('rpwd')
        const fname = getValue('fname')
        const lname = getValue('lname')
        const respone = await  fetch(`${API}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },
            body: JSON.stringify({ email, password,fname,lname })
        })
        const result = await respone.json()
        if(respone.status === 200) {
             alert('Register success')
             window.location.href = 'login.html'
             return
        }
        alert('Register fail')
    } catch (error) {
        console.error(error)
    }
}
