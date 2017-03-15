const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const ProvidePlugin = require("webpack/lib/ProvidePlugin");
const autoprefixer = require("autoprefixer");
var CopyWebpackPlugin = require('copy-webpack-plugin');


const appDir = path.resolve(__dirname, "../src/app");
const dataDir = path.resolve(__dirname, "../src/app/data");


module.exports = function (options) {
    return {



        resolve: {
            extensions: [".js", ".ts", ".css"]
        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: "ts-loader"
                },
                {
                    test: /\.ts$/,
                    enforce: "pre",
                    loader: "tslint-loader"
                },
                {
                    // component templates
                    test: /\.html$/,
                    loader: "html-loader"
                },
                {
                    test: /\.css$/,
                    exclude: appDir,
                    loader: ["style-loader","css-loader"]
                },
                {
                    test: /\.css$/,
                    include: appDir,
                    loader: "raw-loader"
                },
                {
                    test: /\.scss$/,
                    exclude: appDir,
                    loader: ["style-loader",
                        "css-loader?sourceMap",
                        "postcss-loader",
                        "sass-loader?sourceMap",
                        "sass-loader", {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: "./src/styles/bootstrap/sass-resources.scss"
                            }
                        }]
                },
                {
                    test: /\.scss$/,
                    include: appDir,
                    loader: ["raw-loader",
                        "postcss-loader",
                        "sass-loader?sourceMap",
                        "sass-loader", {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: "./src/styles/bootstrap/sass-resources.scss"
                            }
                        }]
                },
                {
                    test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/,
                    loader: "imports-loader?jQuery=jquery"},
                {
                    test: /\.(woff2?|ttf|eot|svg)(\?[\s\S]+)?$/,
                    loader: "file-loader"
                },
                {
                    test: /\.(png|jpg)$/,
                    loader: "url-loader?limit=25000"
                }

            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                favicon: "./src/images/pepper.ico",
                inject: "body"
            }),

            new ProvidePlugin({
                jQuery: "jquery",
                $: "jquery",
                jquery: "jquery",
                "Tether": "tether",
                "window.Tether": "tether",
                Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
            }),
            new CopyWebpackPlugin([
                {
                    "from" : "./src/images/recipes",
                    "to" : "images/recipes"
                }
            ])
        ]


    };
};