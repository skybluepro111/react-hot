const path = require('path');

const config = {
    entry: './app/main.jsx',
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'main.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "app"),
        compress: true,
        port: 9000
    },
    module: {

        loaders: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(eot|ttf|svg|gif|png|jpg|woff)$/,
                loader: 'file-loader!url-loader'
            }

        ]
    }
};

module.exports = config;