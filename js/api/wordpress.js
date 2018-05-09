const nodeEnv = process.env.NODE_ENV
const fullURL = (nodeEnv === 'production') ? '/api/about' : 'http://localhost/api/about'

export const requestProfile = (payload) => {
    const returnState = Object.assign({}, payload) // copy
    // builds using promises
    return fetch(fullURL)
        .then((response) => {
            return response.json()
        }).then((response) => {
            if (response.length === 1) {
                return { __html: response[0].post_content }
            } else {
                return { __html: 'failed to fetch profile :(' }
            }
        }).catch((error) => {
            console.log('Request error: ' + error)
            returnState.error = error.toString()
            return returnState
        })
}