# cw_react_seed
学习react框架,搭建react框架的种子工程. 
# cygwin 软件安装
强烈建议在windows环境中安装[cygwin](http://www.cygwin.cn/)软件
# Webpack配置react的开发环境
[Webpack](http://webpack.github.io/) 是一个前端资源加载,打包工具，只需要相对简单的配置就可以提供前端工程化需要的各种功能，并且如果有需要它还可以被整合到其他比如 Grunt或Gulp 的工作流。

* __安装WebPack :__ `npm install -g webpack`

    ```console
    TRUEPORWU-MC0:~ Truepor$ sudo npm install -g webpack
    Password:
    /usr/local/bin/webpack -> /usr/local/lib/node_modules/webpack/bin/webpack.js
    /usr/local/lib
    └─┬ webpack@1.13.2 
      ├─┬ loader-utils@0.2.16
      │ └── emojis-list@2.1.0 
      ├─┬ node-libs-browser@0.6.0
      │ └─┬ buffer@4.9.1
      │   └── ieee754@1.1.8 
      └─┬ watchpack@0.2.9
        └─┬ chokidar@1.6.1 
          └─┬ is-binary-path@1.0.1
            └── binary-extensions@1.7.0 
    
    ```

    Webpack 使用一个名为 `webpack.config.js` 的配置文件，要编译 JSX，先在项目目录安装对应的 loader: `npm install babel-loader --save-dev`
    
    ```
    
    ```