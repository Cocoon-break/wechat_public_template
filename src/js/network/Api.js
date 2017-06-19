'use strict'
/**
 * Created by wushengping on 2017/6/12.
 */
let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
}

function parseFetch(promise, url, options) {
    return new Promise((resolve, reject) => {
        const result = promise.then(checkStatus)
            .then(response => response.json())
            .catch(e => {
                console.log('------------err-start-------')
                console.log(url)
                console.log(options)
                console.log('------------err-end-------')
                reject(e)
            })
        resolve(result)
    })
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}


export function GET(url, options) {
    const promise = fetch(url, {
        headers: headers,
        method: 'GET',
        body: JSON.stringify(options)
    })
    return parseFetch(promise, url, options)
}

export function POST(url, options) {
    const promise = fetch(url, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify(options)
    })
    return parseFetch(promise, url, options)
}

export function PUT(url, options) {
    const promise = fetch(url, {
        headers: headers,
        method: 'PUT',
        body: JSON.stringify(options)
    })
    return parseFetch(promise, url, options)
}

export function DELETE(url, options) {
    const promise = fetch(url, {
        headers: headers,
        method: 'DELETE',
        body: JSON.stringify(options)
    })
    return parseFetch(promise, url, options)
}

export function buildUrl(url, params = {}) {
    const arr = []
    for (const key in params) {
        const value = params[key]
        if (typeof(value) !== 'undefined' && value !== null) {
            arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
        }
    }
    const queryString = arr.join('&')
    if (queryString !== '') {
        return url + '?' + queryString
    } else {
        return url
    }
}