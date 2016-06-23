const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const ProvidePlugin = require("webpack/lib/ProvidePlugin");
const autoprefixer = require("autoprefixer");
var CopyWebpackPlugin = require('copy-webpack-plugin');

const appDir = path.resolve(__dirname, "src/app");
const dataDir = path.resolve(__dirname, "src/app/data");




module.exports = {

    entry: {
        polyfills: "./src/polyfills.ts",
        app: "./src/main.ts",
        vendor: "./src/vendor.ts"
    },
    resolve: {
        extensions: ["", ".js", ".ts", ".css"]
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
                loader: "html"
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
                loader: "style!css?sourceMap!postcss!sass?sourceMap!sass-resources"
            },
            {
                test: /\.scss$/,
                include: appDir,
                loader: "raw!postcss!sass?sourceMap!sass-resources"
            },
            {
                test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/,
                loader: "imports?jQuery=jquery"},
            {
                test: /\.(woff2?|ttf|eot|svg)(\?[\s\S]+)?$/,
                loader: "file"
            },
            {
                test: /\.(png|jpg)$/,
                loader: "url?limit=25000"
            }

        ],
        preLoaders: [
            {
                test: /\.ts$/,
                exclude : dataDir,
                loader: "tslint"
            }
        ]
    },
    sassResources: "./src/styles/bootstrap/sass-resources.scss",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: "./src/images/pepper.ico",
            inject: "body"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["app", "vendor", "polyfills"]
        }),
        new ProvidePlugin({
            jQuery: "jquery",
            $: "jquery",
            jquery: "jquery",
            "Tether": "tether",
            "window.Tether": "tether"
        }),
        new CopyWebpackPlugin([
            {
                "from" : "./src/images/recipes",
                "to" : "images/recipes"
            }
        ])
    ],
    devServer: {

        historyApiFallback: true
    },
    devtool: "source-map"
};