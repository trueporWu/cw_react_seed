/**
 * Created by Truepor on 16/10/15.
 * webpack 的配置文件
 */

var webpack = require('webpack');

module.exports = {
    entry: './js/app.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            query: {
                presets: ['react','es2015']
            }
        },{
            test: /\.css$/,
            loader: 'style!css'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warning: false
            }
        })
    ]
};
