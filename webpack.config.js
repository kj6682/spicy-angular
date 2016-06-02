var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
var path = require('path');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
var appDir = path.resolve(__dirname, 'src/app');
const autoprefixer = require('autoprefixer');

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
    postcss: [autoprefixer],
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
                loader: "style!css!postcss|sass"
            },
            {
                test: /\.scss$/,
                include: appDir,
                loader: "raw!sass"
            },
            {
                test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/,
                loader: 'imports?jQuery=jquery'},
            {
                test: /\.(woff2?|ttf|eot|svg)(\?[\s\S]+)?$/,
                loader: 'file'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
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
            favicon: "./src/images/pepper.ico",
            inject: "body"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            "Tether": 'tether',
            "window.Tether": "tether"
        })
    ]
};