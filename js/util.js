const DEFAULT_PAGE_SIZE = 6

/**
 * Fisher-Yates shuffle for array randomizing.
 * @param {*} array 
 */
export const shuffle = function (array) {
    var i = 0,
        j = 0,
        temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    
}

/**
 * For Google analytics.
 * @param {*} linkText 
 */
export const trackClick = function (linkText) {
    window.trackOutboundLink(linkText)
}

/**
 * Adds pagination to flickr URL
 * 
 * @param url the URL
 * @param pageNumber the page 
 * @param pageSize the number per page
 */
export const appendPaginationToURL = function (url, pageNumber = 1, pageSize = DEFAULT_PAGE_SIZE) {
    url += '&page=#START_INDEX#&per_page=#PAGE_SIZE#'
    url = url.replace('#START_INDEX#', pageNumber)
    url = url.replace('#PAGE_SIZE#', pageSize || 10)
    return url
}

export function getSortOrder(prop) {
    return function (a, b) {
        if (a[prop] > b[prop]) {
            return 1
        } else if (a[prop] < b[prop]) {
            return -1
        }
        return 0
    }
}

