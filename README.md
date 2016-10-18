# cw_react_seed
学习react框架,搭建react框架的种子工程. 
# cygwin 软件安装
强烈建议在windows环境中安装[cygwin](http://www.cygwin.cn/)软件
# Webpack配置react的开发环境
[Webpack](http://webpack.github.io/) 是一个前端资源加载,打包工具，只需要相对简单的配置就可以提供前端工程化需要的各种功能，并且如果有需要它还可以被整合到其他比如 Grunt或Gulp 的工作流。

# 生成node_modules目录  
    ```console
    TRUEPORWU-MC0:cw_react_seed Truepor$ pwd
    /Users/Truepor/git/cw_react_seed
    TRUEPORWU-MC0:test-pro Truepor$ npm install
    TRUEPORWU-MC0:test-pro Truepor$ ll
    total 8
    drwxr-xr-x  476 Truepor  staff  16184 10 18 15:35 node_modules
    -rw-r--r--    1 Truepor  staff    995 10 18 15:34 package.json
    ```
  
# dev环境,自带server  
    ```console
    npm start
    ```
# prd环境,编译生成生产环境的代码
    ```console
    npm run build
    ```