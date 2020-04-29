const API_URL = 'https://jsonplaceholder.typicode.com'

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    options = Object.assign({}, headers, options)

    return fetch(options.url, options)
        .then(response => 
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json)
                }
                return json
        })
    )
}

export function getTasks() {
    return request({
        url: API_URL + '/todos',
        method: 'GET'
    })
}
