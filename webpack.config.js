var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
var path = require('path');

var appDir= path.resolve(__dirname, 'src/app');

module.exports = {

    entry: {
        polyfills: './src/polyfills.ts',
        app: "./src/main.ts",
        vendor: "./src/vendor.ts"
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.css']
    },
    output: {
        path: "./dist",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "ts"
            },
            {
                // component templates
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.css$/,
                exclude: appDir,
                loader: "style!css"
            },
            {
                test: /\.css$/,
                include: appDir,
                loader: "raw"
            },
            {
                test: /\.scss$/,
                exclude: appDir,
                loader: "style!css?sourceMap!sass?sourceMap"
            },
            {
                test: /\.scss$/,
                include: appDir,
                loader: "raw!sass"
            }
        ],
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        })
    ]
};