var WPAPI = require('wpapi');
var wp = new WPAPI({ endpoint: 'WP_REST_URL/wp-json' });
var ABOUT_PAGE_ID = 4;

export const requestProfile = (payload) => {
    return wp.pages().id(ABOUT_PAGE_ID).then(function (data) {
        return  {__html: data.content.rendered}
    }).catch(function (error) {
        return error.toString();
    });
}

