var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: {
        js: ['./app.js'],
        vendor: ['react', 'classnames', 'react-router', 'react-dom', 'react-addons-css-transition-group']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },
    devServer:{
        proxy:{
            '/api':{
                target:'http://localhost:5000',
                secure: false,
                changeOrigin: true,
                pathRewrite: {'^/api': ''}
            }
        },
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.less$/,
                loader: 'style!css!postcss!less'
            }, {
                test: /\.css/,
                loader: ExtractTextPlugin.extract('style', 'css', 'postcss')
            }, {
                test: /\.(png|jpg|svg)$/,
                loader: 'url?limit=25000'
            }
        ]
    },
    postcss: [autoprefixer],
    plugins: [
        new webpack.DefinePlugin({
            DEBUG: process.env.NODE_ENV !== 'production'
        }),
        new ExtractTextPlugin('weui.min.css'),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: false,
        //     mangle: false
        // }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './index.html')
        }),
        //new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]
};
