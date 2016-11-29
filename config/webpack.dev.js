const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

module.exports = function (options) {
    return webpackMerge(commonConfig({env: ENV}), {

        entry: {
            polyfills: "./src/polyfills.ts",
            app: "./src/main.ts",
            vendor: "./src/vendor.ts"
        },
        output: {
            path: "./dist",
            filename: "[name].js",
            sourceMapFilename: '[name].map',
            publicPath: '/'
        },


        devServer: {
            historyApiFallback: true
        },

        devtool: 'cheap-module-source-map'
    });
};
