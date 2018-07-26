const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');

// 判断运行环境
const isDev = process.env.NODE_ENV === 'development';

const config = {
    //编译目标是web
    target: 'web',
    // 入口
    entry: path.join(__dirname, "../src/main.js"),
    // 输出
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.join(__dirname, "../dist")
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: "vue-loader"
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        }, {
            test: /\.less$/,
            use: [
                "style-loader",
                "css-loader",
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                    }
                },
                "less-loader"
            ]
        }, {
            test: /\.(gif|jpg|jpeg|png|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: '[name]-aaa.[ext]'
                }

            }]
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HTMLPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        })
    ]
};

if (isDev) { //如果是开发环境
    config.devtool = '#cheap-module-eval-source-map'; //添加source-map映射工具，方便浏览器调试
    config.devServer = {
        port: 8800,
        //0.0.0.0可以通过localhost或者本机的内网id进行访问
        host: '0.0.0.0',
        //overlay：在编译过程如果有错误，可以将错误直接显示在浏览器中
        overlay: {
            errors: true
        },
        // 热加载，当修改组件代码时，只重新渲染当前组件，不会让整个页面重新加载
        hot: true
        //open: true //每次启动都打开浏览器
    };
    config.plugins.push( //启动添加Webpack的热加载插件
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    );
}

module.exports = config;
