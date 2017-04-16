'use strict'


const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const combineLoaders = require('webpack-combine-loaders');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function makeWebpackConfig(options) {
    return {
        entry: {
            app: [
                'babel-polyfill',
                'react-hot-loader/patch',
                // activate HMR for React

                // bundle the client for hot reloading
                // only- means to only hot reload for successful updates
                path.resolve(__dirname, '../src/index.js')
            ],
            vendor: [
                'react',
                'moment',
                'moment-timezone'
            ]
        },
        devtool: 'eval-source-map',
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname, '../dist/'),
            publicPath: "/",
            sourceMapFilename: "[name].map"
        },
        module: {
            loaders: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
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
                { from: 'public/data', to: 'data' },
                { from: 'public/img', to: 'img' },
                { from: 'public/favicon.ico', to: 'favicon.ico' },
                { from: 'public/flickr.php', to: 'flickr.php' }
            ]),
            // build optimization plugins
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
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    screw_ie8: true,
                    conditionals: true,
                    unused: true,
                    comparisons: true,
                    sequences: true,
                    dead_code: true,
                    evaluate: true,
                    if_return: true,
                    join_vars: true
                },
                output: {
                    comments: false
                },
                sourceMap: true
            }),
           // compile time plugins
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': options.env,
            }),
            // webpack-dev-server enhancement plugins
            new DashboardPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
            // do not emit compiled assets that include errors
        ],
        devServer: {
            host: 'localhost',
            port: 8080,
            compress: true,
            historyApiFallback: true,
            // respond to 404s with index.html
            watchOptions: {
                ignored: /node_modules/
            },
            hot: true,
            open: true
        }
    };
}


module.exports = makeWebpackConfig