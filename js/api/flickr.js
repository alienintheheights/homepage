import { appendPaginationToURL } from '../util'
import 'whatwg-fetch'

const nodeEnv = process.env.NODE_ENV
// URL for the REST call 
const API_ENDPOINT = (nodeEnv === 'production') ? '/api/photos?' : 'http://localhost/api/photos?'

export const fetchImages = (payload) => {
    const url = appendPaginationToURL(API_ENDPOINT, payload.page, payload.size)
    return fetch(url).then((response) => {
        return response.json().then((json) => {
            return json.photos.photo.map(
                ({ farm, server, id, secret, title }) => [`${title}`, `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`]
            )
        })
    })
}

