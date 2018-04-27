'use strict'

const path = require('path');
const webpack = require('webpack');

const combineLoaders = require('webpack-combine-loaders');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.traceDeprecation = true;

module.exports = {
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            // activate HMR for React
            // bundle the client for hot reloading
            // only- means to only hot reload for successful updates
            path.resolve(__dirname, '../js/index.js')
        ]
    },
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname, '../dist/'),
        publicPath: "/",
        sourceMapFilename: "[name].map"
    },
    module: {
        loaders: [
            {
                test: [/\.jsx$/, /\.js$/],
                exclude: /(local_modules|node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    "presets": [["es2015", { "modules": false }], "stage-2", "react"]
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!less-loader'
                })
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            // Copy directory contents to {output}/to/directory/
            { from: 'public/music', to: 'music' },
            { from: 'public/img', to: 'img' },
            { from: 'public/data', to: 'data' },
            { from: 'public/andrew', to: 'andrew' },
            { from: 'public/favicon.ico', to: 'favicon.ico' },
            { from: 'php', to: 'api' }
        ]), // build optimization plugins
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            disable: false,
            allChunks: true
        })
    ]
};
