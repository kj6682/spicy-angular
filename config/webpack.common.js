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
                    exclude: /mock-recipes\.ts/,
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
                    loader: ["style-loader", "css-loader"]
                },
                {
                    test: /\.css$/,
                    include: appDir,
                    loader: "raw-loader"
                },
                {
                    test: /\.scss$/,
                    exclude: appDir,
                    loader: [
                        { loader: 'css-loader', options: {sourceMap: true}},
                        { loader: "postcss-loader", options: {sourceMap: true}},
                        { loader: "sass-loader", options: {sourceMap: true}},
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: "./src/styles/bootstrap/sass-resources.scss"
                            }
                        }]
                },
                {
                    test: /\.scss$/,
                    include: appDir,
                    loader: [
                        "raw-loader",
                        {
                            loader: "postcss-loader",
                            options: {sourceMap: false}
                        },
                        {
                            loader: "sass-loader",
                            options: {sourceMap: false}
                        },
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: "./src/styles/bootstrap/sass-resources.scss"
                            }
                        }]
                },
                {
                    test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/,
                    loader: "imports-loader?jQuery=jquery"
                },
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
                // for bootstrap
                jQuery: "jquery",
                "window.jQuery": "jquery",
                Tether: "tether",
                "window.Tether": "tether",
                Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
                Button: "exports-loader?Button!bootstrap/js/dist/button",
                Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
                Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
                Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
                Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
                Popper: ['popper.js', 'default'],
                Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
                Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
                Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
                Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
                Util: "exports-loader?Util!bootstrap/js/dist/util",
            }),
            new CopyWebpackPlugin([
                {
                    "from": "./src/images/recipes",
                    "to": "images/recipes"
                }
            ]),
            new webpack.ContextReplacementPlugin(
                /angular(\\|\/)core(\\|\/)@angular/,
                path.resolve(__dirname, '../src')
            ) // see https://github.com/angular/angular/issues/11580
        ]


    };
};
