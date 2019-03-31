const CleanWebPackPlugin = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        main: './src/index.jsx'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve('./public')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: [{ loader: 'babel-loader' }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'index.html'
        }),
        new CleanWebPackPlugin()
    ]
}