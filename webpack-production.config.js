/**
 * Created by Truepor on 16/10/17.
 * 编译生成生产环境文件的配置
 */

const webpack = require('webpack'); // webpack
const path = require('path'); // 路径操作
const buildPath = path.resolve(__dirname, 'build'); // 打包之后文件存放的目录
const nodeModulesPath = path.resolve(__dirname, 'node_modules'); // node 的包存放的目录
const TransferWebpackPlugin = require('transfer-webpack-plugin'); // 引入插件管理

const config = {
    entry: [path.join(__dirname, '/src/app/app.js')],
    // Render source-map file for final build
    devtool: 'source-map',

    // 输出编译文件的配置
    output: {
        path: buildPath, // 输出路径
        filename: 'app.js' // 输出文件的名称
    },

    plugins: [
        // Define production build to allow React to strip out unnecessary checks
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        // Minify the bundle
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // suppresses warnings, usually from module minification
                warnings: false
            }
        }),

        // Transfer Files
        new TransferWebpackPlugin([
            {from: 'www'}
        ], path.resolve(__dirname, 'src'))
    ],


    module: {
        loaders: [
            {
                test: /\.js$/, // All .js files
                loaders: ['babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
                exclude: [nodeModulesPath]
            }
        ]
    }
};

module.exports = config;