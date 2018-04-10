const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const IconFontPlugin = require('icon-font-loader').Plugin;

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'app/'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                query: {
                    presets: ['latest', 'react']
                }
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader', use: [{
                        loader: 'css-loader',
                        options: {
                            url: false,
                            //minimize: true
                        }
                    }, {
                        loader: 'icon-font-loader'
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer]
                        }
                    }, {
                        loader: 'sass-loader'
                    }]
                })
            }, {
                test: /\.html$/,
                loader: 'html-loader',
            }, {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                use: [{
                    loader: "file-loader"
                }]
            }
        ]
    },
    optimization: {
        minimize: false
    },
    plugins: [
        new ExtractTextPlugin("style.bundle.css"),
        new IconFontPlugin({
            output: './fonts'
        })
    ]
};
