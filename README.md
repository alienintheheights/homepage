# Simple React Home Site

This is the source for my personal home page (andrewlienhard.com), so it's more of a way to keep my code safe than be a useful open source project. It runs on react and redux backed by the bootstrap theme, Freelance.

# npm start 
will kick off react-scripts and will try to grab port 3000. Make sure that's available on your config.

https://github.com/facebookincubator/create-react-app

# About the Photos

The PhotoRoller I created looks for photos in an AWS S3 bucket named numerically, resized-1.jpg, resized-2.jpg... up to ${constants.NUMBER_OF_IMAGES}.jpg, so set accordingly. It will randomly sort them, then periodically cycle the displayed photos with new ones.


