import { appendPaginationToURL } from '../util'
import 'whatwg-fetch'

const nodeEnv = process.env.NODE_ENV;
// URL for the REST call 
const API_ENDPOINT = (nodeEnv === "production") ? `/flickr.php?` : `http://localhost/flickr.php?`;

export const fetchImages = (payload) => {
  const url = appendPaginationToURL(API_ENDPOINT, payload.page, payload.size)
  return fetch(url).then(function (response) {
    return response.json().then(function (json) {
      return json.photos.photo.map(
        ({farm, server, id, secret, title}) => [`${title}`, `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`]
      )
    })
  })
}

