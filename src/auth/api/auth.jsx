import {BASE_URL_API, getHeaders, save} from "../../core/api/main";

const LOGIN_URL = 'token/';
const REGISTER_URL = 'register/';
const USER_URL = 'profile/';
// export const BASE_URL = 'http://dmakger.beget.tech';
// const LOGIN_URL = 'api/token/';

function saveToken(tokenData) {
    sessionStorage.setItem('access', tokenData['access']);
    sessionStorage.setItem('refresh', tokenData['refresh']);
    setUser().then()
}

async function setUser() {
    await fetch(`${BASE_URL_API}/${USER_URL}`, {
        method: 'GET',
        credentials: 'include',
        headers: getHeaders(),
    })
        .then(async (res) => {
            if (res.status === 200) {
                const user = await res.json();
                save('user', user);
                return Promise.resolve()
            }
            return Promise.reject();
        });
}

export async function getTokenData(email, password){
    await fetch(`${BASE_URL_API}/${LOGIN_URL}`, {
        method: 'POST',
        credentials: 'include',
        headers: getHeaders(),
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(async (res) => {
            if (res.status === 200) {
                const tokenData = await res.json();
                saveToken(tokenData); // сохраняем полученный токен в sessionStorage, с помощью функции, заданной ранее
                return Promise.resolve()
            } else if (res.status === 401) {
                await logout()
                await getTokenData(email, password)
            }
            return Promise.reject();
        })
}


export async function register(username, email, password){
    await fetch(`${BASE_URL_API}/${REGISTER_URL}`, {
        method: 'POST',
        credentials: 'include',
        headers: getHeaders(),
        body: JSON.stringify({
            username,
            email,
            password
        })
    })
        .then(async (res) => {
            if (res.status === 200) {
                return Promise.resolve()
            } else if (res.status === 401) {
                await logout()
                await register(username, email, password)
            }
            return Promise.reject(await res.json())
        })
}


export async function logout(){
    sessionStorage.removeItem('access')
    sessionStorage.removeItem('refresh')
    sessionStorage.removeItem('user')
}