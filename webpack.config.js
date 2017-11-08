

var path = require("path");

var DIST_DIR   = path.join(__dirname, "dist"),
    CLIENT_DIR = path.join(__dirname, "src");

var HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    context: CLIENT_DIR,

    entry: "./main",

    output: {
        path:     DIST_DIR,
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'index.html'})
    ],
    resolve: {
        extensions: ['.js', '.ts']
    }
};