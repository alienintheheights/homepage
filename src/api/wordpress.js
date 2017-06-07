var WPAPI = require('wpapi');
var wp = new WPAPI({ endpoint: 'http://www.andrewlienhard.com/zamzam/wp-json' });
var ABOUT_PAGE_ID = 4;

export const requestProfile = (payload) => {
    return wp.pages().id(ABOUT_PAGE_ID).then(function (data) {
        return  {__html: data.content.rendered}
    }).catch(function (error) {
        return error.toString();
    });
}

