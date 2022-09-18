import {BASE_URL_API, getHeaders} from "../../../core/api/mainAPI";

const COLLECTION_URL_API = `${BASE_URL_API}/collections`

export async function getCollectionProfile(){
    const res = await fetch(`${COLLECTION_URL_API}/all/${sessionStorage.getItem('path')}`, {
        method: 'GET',
        credentials: 'include',
        headers: getHeaders(),
    })
    if (res.ok) {
        return await res.json();
    }
    return Promise.reject();
}

export async function createCollection(){
    const res = await fetch(`${COLLECTION_URL_API}/create/`, {
        method: 'POST',
        credentials: 'include',
        headers: getHeaders(),
    })
    if (res.ok) {
        return await res.json();
    }
    return Promise.reject();
}