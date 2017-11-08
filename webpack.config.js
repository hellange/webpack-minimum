

const path = require("path");

const DIST_DIR   = path.join(__dirname, "dist"),
      CLIENT_DIR = path.join(__dirname, "src");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // To clean up the dist/target directory

module.exports = {
    context: CLIENT_DIR,

    entry: "./main",

    output: {
        path: DIST_DIR,
        filename: "bundle.js"
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({template: 'index.html'})
    ],
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    }

};