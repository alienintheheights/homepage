# Source for my ReactJS/Redux homepage
This is the source for my personal home page [andrewlienhard.com](http://andrewlienhard.com), so it's more to keep my code safe than function as a useful open source project. It runs on [reactJS](https://facebook.github.io/react/), [redux](http://redux.js.org/) and [saga](https://redux-saga.github.io/redux-saga/docs/introduction/BeginnerTutorial.html) and uses the free bootstrap theme, [Freelance](https://startbootstrap.com/). The dev tooling is courtesy of [Webpack](https://webpack.github.io/).

# Yarn Bits
Clone the git repository and make sure you have [yarn](https://yarnpkg.com/en/) installed. From there you can do things like...

## yarn upgrade
to build the node_modules and freeze the yarn file

## yarn start 
To kick off webpack in dev mode. This includes hot deploy and css/less compilation. It will try to grab port 8080. Make sure that's available on your config, or change it in the webpack config (see the [makeConfig.js](https://github.com/alienintheheights/homepage/blob/master/webpack/makeConfig.js) devServer section).

## yarn build 
To kick off a production build. Per the webpack config, the build directory is ./dist, which I then zip up and unpack on the web server (there's got to be a better way!). The only difference between dev and production currently is a param used by the flickr REST api URL, which is set in the webpack directory (dev.js vs prod.js). 

## yarn test
To kick off the [Jest](https://facebook.github.io/jest/) tests. See package.json for details. More tests coming.

# About the XWord
I've been keeping a list of words that stumped me while working the NYT crossword puzzle. I decided to put it to use and build this little app. I will probably break it off into a separate project soon. See [src/Components/Words](https://github.com/alienintheheights/homepage/tree/master/src/Components/Words).

# About the Photos
I'm using the Flickr API to fetch my photostream. The Gallery is based on one from Joel @ egghead for his saga demo, but I added my own features too. It's also using a server-side PHP to deal with the actual REST request for security reasons. See [src/Components/Photos](https://github.com/alienintheheights/homepage/tree/master/src/Components/Photos).


