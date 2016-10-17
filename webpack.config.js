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
                warnings: false
            }
        }),

        //在最新的React(V15)里，应该会出现如下的警告：
        // Warning: It looks like you're using a minified copy of the development build of React. When deploying React apps to production, make sure to use the production build which skips development warnings and is faster. See https://fb.me/react-minification for more details.
        // 增加如下的配置,去掉这个警告
        // 详情参考:https://github.com/facebook/react/issues/6479
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
};
