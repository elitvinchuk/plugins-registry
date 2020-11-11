/*
const HTMLPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

const commonConfig = require('../webpack.common')

const containerConfig = merge(commonConfig, {
    plugins: [
        new HTMLPlugin({
            template: './src/index.html'
        })
    ]
})

console.log(containerConfig)

module.exports = containerConfig
*/
const path = require("path");

module.exports = {
    entry: "./index",
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"],
                    },
                },
            },
        ],
    },
    devtool: "inline-source-map"
};
