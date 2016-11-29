const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const ENV = process.env.ENV = process.env.NODE_ENV = 'test';

module.exports = function (options) {
    return webpackMerge(commonConfig({env: ENV}), {


        devtool: 'inline-source-map',


       /* ng2ModuleRef: {
            enforce: 'post',
            test: /\.(js|ts)$/,
            loader: 'istanbul-instrumenter-loader',
            include: './src',
            exclude: [
                /\.(e2e|spec)\.ts$/,
                /node_modules/
            ]
        }*/

    });
};
