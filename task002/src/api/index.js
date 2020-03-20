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

export function getAllPosts() {
    return request({
        url: API_URL + '/posts',
        method: 'GET'
    })
}

export function getCommentsByPostId(id) {
    return request({
        url: API_URL + '/posts/' + id + '/comments',
        method: 'GET'
    })
}

export function getAuthorById(id) {
    return request({
        url: API_URL + '/users/' + id
    })
}

export function getAlbumsByUserId(id) {
    return request({
        url: API_URL + '/users/' + id + '/albums'
    })
}
