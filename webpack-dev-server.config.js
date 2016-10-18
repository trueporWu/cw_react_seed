/**
 * Created by Truepor on 16/10/17.
 * 开发环境下的打包配置
 */

const webpack = require('webpack'); // webpack
const path = require('path'); // 路径操作
const buildPath = path.resolve(__dirname, 'build'); // 打包之后文件存放的目录
const nodeModulesPath = path.resolve(__dirname, 'node_modules'); // node 的包存放的目录
const TransferWebpackPlugin = require('transfer-webpack-plugin'); // 引入插件管理

/**
 * 配置
 * @type {{}}
 */
const config = {
    // 项目入口配置
    entry: [
        'webpack/hot/dev-server',
        'webpack/hot/only-dev-server',
        path.join(__dirname, '/src/app/app.js')
    ],

    // 开发环境服务器配置
    devServer: {
        contentBase: 'src/www', // 服务器的相对根目录
        devtool: 'eval',
        hot: true, // Live-reload
        inline: true,
        port: 3000,
        host: 'localhost'
    },
    devtool: 'eval',
    output: {
        path: buildPath,
        filename: 'app.js'
    },

    plugins: [
        // Enables Hot Modules Replacement
        new webpack.HotModuleReplacementPlugin(),
        // 允许有错误告警,但是不停止编译
        new webpack.NoErrorsPlugin(),
        // 移动文件
        new TransferWebpackPlugin([
            {from: 'www'}
        ], path.resolve(__dirname, 'src'))
    ],

    module: {
        loaders: [
            {
                // React-hot loader and
                test: /\.js$/, // All .js files
                loaders: ['react-hot', 'babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
                exclude: [nodeModulesPath]
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
};

module.exports = config;






