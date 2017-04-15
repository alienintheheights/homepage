# Source for my ReactJS/Redux homepage
This is the source for my personal home page (andrewlienhard.com), so it's more of a way to keep my code safe than function as a useful open source project. It runs on reactJS, redux and saga using the free bootstrap theme, Freelance.

# yarn upgrade
to build your node_modules and lock the yarn

# yarn start 
To kick off webpack in dev mode. Includes hot deploy and less compilation. It will try to grab port 8080. Make sure that's available on your config.

# yarn build 
To kick off a production build. It writes to ./dist. ZIP this up and unpack it on your production server.

# About the XWord
I've been keeping a list of words that stumped me while working the NYT crossword puzzle. I decided to put it to use and build this little app. I will probably break it off into a separate project soon.

# About the Photos
I'm using the Flickr API to fetch my photostream. The Gallery is based on one from Joel @ egghead for his saga demo, but I added my own features too. It's also using a server-side PHP to deal with the actual REST request for security reasons.


